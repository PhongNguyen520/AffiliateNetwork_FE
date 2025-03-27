import React, { useState, useEffect } from 'react'
import classNames from 'classnames/bind'
import styles from './ConversionDetail.module.scss'
import { useParams, useNavigate } from 'react-router-dom'
import { requestsPrivate } from '../../../utils/requests'
import { Pagination, Empty, Button, Dropdown, Menu } from 'antd'
import { LoadingOutlined, ArrowLeftOutlined, DownOutlined } from '@ant-design/icons'

const cx = classNames.bind(styles)

const CONVERSION_DETAIL_URL = "conversion/fillter"
const EXPORT_CLICK_INFO_EXCEL_URL = "export-traffic/export-excel/clickinfo"
const EXPORT_CONVERSION_EXCEL_URL = "export-traffic/export-excel/conversion"

function ConversionDetail() {
  const { linkId } = useParams()
  const navigate = useNavigate()
  const [conversions, setConversions] = useState([])
  const [linkInfo, setLinkInfo] = useState(null)
  const [filter, setFilter] = useState({
    status: '',
    isPayment: '',
    beginDate: '',
    endDate: ''
  })
  const [pagination, setPagination] = useState({
    pageIndex: 1,
    pageSize: 10
  })
  const [totalItems, setTotalItems] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleExportExcel = async (exportType) => {
    try {
      setLoading(true)
      
      // Determine which endpoint to use based on export type
      const endpoint = exportType === 'clickInfo' 
        ? EXPORT_CLICK_INFO_EXCEL_URL 
        : EXPORT_CONVERSION_EXCEL_URL
      
      const response = await requestsPrivate.get(endpoint, {
        params: {
          AffiliateId: linkId,
          ...filter
        },
        responseType: 'blob'
      })

      const filename = exportType === 'clickInfo'
        ? `click_info_${linkId}_${new Date().toISOString().slice(0,10)}.xlsx`
        : `conversions_${linkId}_${new Date().toISOString().slice(0,10)}.xlsx`

      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', filename)
      document.body.appendChild(link)
      link.click()
      link.remove()
      
    } catch (error) {
      setError(`Error exporting ${exportType === 'clickInfo' ? 'click information' : 'conversion data'}`)
      console.error('Export error:', error)
    } finally {
      setLoading(false)
    }
  }


  const fetchConversions = async () => {
    setLoading(true)
    try {
      const response = await requestsPrivate.get(
        `${CONVERSION_DETAIL_URL}?AffiLinkId=${linkId}`, 
        {
          params: {
            ...filter,
            pageIndex: pagination.pageIndex,
            pageSize: pagination.pageSize
          }
        }
      )

      if (response.data) {
        setConversions(response.data.data.items)
        setTotalItems(response.data.data.totalCount)
      }
    } catch (error) {
      setError('Error fetching conversions')
      console.error('Error fetching conversions:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchConversions()
  }, [linkId, filter, pagination])

  const handleFilterChange = (e) => {
    const { name, value } = e.target
    setFilter(prev => ({
      ...prev,
      [name]: value
    }))
    setPagination(prev => ({ ...prev, pageIndex: 1 }))
  }

  const handlePageChange = (page, pageSize) => {
    setPagination({
      pageIndex: page,
      pageSize: pageSize
    })
  }

  const getStatusClass = (status) => {
    switch (status) {
      case 'Pending':
        return cx('status-pending')
      case 'Approved':
        return cx('status-completed')
      case 'Provisionally':
        return cx('status-provisional')
      default:
        return ''
    }
  }

  const getPaymentClass = (isPayment) => {
    return isPayment ? cx('payment-paid') : cx('payment-unpaid')
  }

  const exportMenu = (
    <Menu onClick={({ key }) => handleExportExcel(key)}>
      <Menu.Item key="conversion" disabled={loading || conversions.length === 0}>
        Export Conversion Data
      </Menu.Item>
      <Menu.Item key="clickInfo" disabled={loading || conversions.length === 0}>
        Export Click Information
      </Menu.Item>
    </Menu>
  )

  return (
    <div className={cx('container')}>
      <div className={cx('page-header')}>
        <Button 
          type="text" 
          icon={<ArrowLeftOutlined />} 
          onClick={() => navigate(-1)}
          className={cx('back-button')}
        >
          Back to Links
        </Button>
        <h1>Conversion Details</h1>
        <p className={cx('page-description')}>
          View and manage conversions for your affiliate link
        </p>

        <Dropdown overlay={exportMenu} trigger={['click']}>
          <Button type="primary" className={cx('export-button')}>
            Export Data <DownOutlined />
          </Button>
        </Dropdown>

        {linkInfo && (
          <div className={cx('link-info')}>
            <div className={cx('info-item')}>
              <span className={cx('info-label')}>Link ID:</span>
              <span className={cx('info-value')}>{linkInfo.id}</span>
            </div>
            <div className={cx('info-item')}>
              <span className={cx('info-label')}>Product:</span>
              <span className={cx('info-value')}>{linkInfo.productName}</span>
            </div>
            <div className={cx('info-item')}>
              <span className={cx('info-label')}>Created:</span>
              <span className={cx('info-value')}>
                {new Date(linkInfo.createdTime).toLocaleDateString()}
              </span>
            </div>
          </div>
        )}
      </div>

      <div className={cx('filter-section')}>
        <div className={cx('filter-header')}>
          <h3>Filter Conversions</h3>
          <p>Refine your conversion results using the filters below</p>
        </div>
        <div className={cx('filter-grid')}>
          <div className={cx('filter-item')}>
            <label>Status</label>
            <select 
              name="status" 
              value={filter.status}
              onChange={handleFilterChange}
              className={filter.status ? cx('status-highlight') : ''}
            >
              <option value="">All Status</option>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Provisionally">Provisionally Approved</option>
            </select>
          </div>
          <div className={cx('filter-item')}>
            <label>Payment Status</label>
            <select 
              name="isPayment" 
              value={filter.isPayment}
              onChange={handleFilterChange}
              className={filter.isPayment ? cx('payment-highlight') : ''}
            >
              <option value="">All</option>
              <option value="true">Paid</option>
              <option value="false">Unpaid</option>
            </select>
          </div>
          <div className={cx('filter-item')}>
            <label>Date Range</label>
            <div className={cx('date-range')}>
              <input 
                type="date" 
                name="beginDate" 
                value={filter.beginDate}
                onChange={handleFilterChange}
                placeholder="Start date"
              />
              <span>to</span>
              <input 
                type="date" 
                name="endDate" 
                value={filter.endDate}
                onChange={handleFilterChange}
                placeholder="End date"
              />
            </div>
          </div>
        </div>
      </div>

      {loading && (
        <div className={cx('loading')}>
          <LoadingOutlined style={{ fontSize: 24 }} spin />
          <span>Loading conversion data...</span>
        </div>
      )}
      {error && <div className={cx('error')}>{error}</div>}

      {conversions.length > 0 ? (
        <>
          <div className={cx('results-summary')}>
            Showing {conversions.length} of {totalItems} conversions
          </div>
          
          <div className={cx('table-wrapper')}>
            <table className={cx('table')}>
              <thead>
                <tr>
                  <th>Buying Time</th>
                  <th>Order ID</th>
                  <th>Product ID</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th>Commission</th>
                  <th>Status</th>
                  <th>Payment</th>
                </tr>
              </thead>
              <tbody>
                {conversions.map(conversion => (
                  <tr key={conversion.id}>
                    <td>{new Date(conversion.createdTime).toLocaleString()}</td>
                    <td>{conversion.orderId}</td>
                    <td>{conversion.productId}</td>
                    <td>{conversion.quantity}</td>
                    <td>{conversion.subtotal.toLocaleString()} VND</td>
                    <td>{conversion.commission.toLocaleString()} VND</td>
                    <td>
                      <span className={getStatusClass(conversion.status)}>
                        {conversion.status}
                      </span>
                    </td>
                    <td>
                      <span className={getPaymentClass(conversion.isPayment)}>
                        {conversion.isPayment ? 'Paid' : 'Unpaid'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={cx('pagination')}>
            <Pagination
              current={pagination.pageIndex}
              pageSize={pagination.pageSize}
              total={totalItems}
              onChange={handlePageChange}
              showSizeChanger
              pageSizeOptions={['10', '20', '50']}
            />
          </div>
        </>
      ) : (
        <div className={cx('no-data')}>
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description={
              <span>
                No conversion data found<br />
              </span>
            }
          />
        </div>
      )}
    </div>
  )
}

export default ConversionDetail