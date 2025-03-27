import React, { useState, useEffect } from 'react';
import styles from './CampaignList.module.scss';
import classNames from 'classnames/bind';
import { requestsPrivate } from '../../../utils/requests';
import { Eye} from 'lucide-react';
import { Table,  Spin, Modal, Row, Col, Image, Divider, Tag, Descriptions, Button, message } from 'antd';

const cx = classNames.bind(styles);

const LIST_WAIT_CAMPAIGN_URL = "campaign/get_wait_list";
const BROWSE_CAMPAIGN_URL = "campaign/status";

const CampaignModal = ({ campaign, visible, onClose, onApprove, onReject }) => {
  if (!campaign) {
    return null;
  }

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric'
      });
    } catch (error) {
      return 'Invalid date';
    }
  };

  return (
    <Modal
    className={cx('modal-override')}
    title={<span style={{ fontSize: '20px', fontWeight: 'bold' }}>Campaign Review</span>}
    width={1000}
    visible={visible}
    onCancel={onClose}
    footer={[
      <Button key="reject" danger onClick={() => {
        onClose();
        onReject(campaign.id);
      }}>
        Reject
      </Button>,
      <Button 
        key="approve" 
        type="primary"
        onClick={() => {
          onClose();
          onApprove(campaign.id);
        }}
      >
        Approve
      </Button>,
    ]}
    centered
  >
     <Row gutter={[24, 16]}>
        <Col span={12}>
          <div style={{ marginBottom: 24 }}>
            <Image
              src={campaign?.image || '/placeholder-image.svg'}
              alt={campaign?.campaignName || 'Campaign Image'}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '8px',
              }}
              fallback="/placeholder-image.svg"
              placeholder={
                <div style={{ 
                  width: '100%', 
                  height: '200px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  backgroundColor: '#f0f2f5',
                  borderRadius: '8px'
                }}>
                  <span>No Image Available</span>
                </div>
              }
            />
          </div>

          <Descriptions bordered column={1}>
            <Descriptions.Item label="Campaign Name">
              <strong>{campaign?.campaignName || 'N/A'}</strong>
            </Descriptions.Item>
            <Descriptions.Item label="Status">
              <Tag color="orange">Pending Approval</Tag>
            </Descriptions.Item>
            <Descriptions.Item label="Website">
              <a 
                href={campaign?.websiteLink || '#'} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {campaign?.websiteLink || 'N/A'}
              </a>
            </Descriptions.Item>
            <Descriptions.Item label="Conversion Rate">
              <Tag color="blue">{campaign?.conversionRate ? (campaign.conversionRate * 100) + '%' : 'N/A'}</Tag>
            </Descriptions.Item>
          </Descriptions>
        </Col>

        <Col span={12}>
          <div style={{ marginBottom: 16 }}>
            <h3 style={{ marginBottom: 8 }}>Campaign Period</h3>
            <Row gutter={16}>
              <Col span={12}>
                <div style={{ marginBottom: 8 }}>
                  <div style={{ color: 'rgba(0, 0, 0, 0.45)' }}>Start Date</div>
                  <div>{campaign?.startDate ? formatDate(campaign.startDate) : 'N/A'}</div>
                </div>
              </Col>
              <Col span={12}>
                <div style={{ marginBottom: 8 }}>
                  <div style={{ color: 'rgba(0, 0, 0, 0.45)' }}>End Date</div>
                  <div>{campaign?.endDate ? formatDate(campaign.endDate) : 'N/A'}</div>
                </div>
              </Col>
            </Row>
          </div>

          <Divider />

          <div style={{ marginBottom: 16 }}>
            <h3 style={{ marginBottom: 8 }}>Target Information</h3>
            <Row gutter={16}>
              <Col span={12}>
                <div style={{ marginBottom: 8 }}>
                  <div style={{ color: 'rgba(0, 0, 0, 0.45)' }}>Target Customer</div>
                  <div>{campaign?.targetCustomer || '-'}</div>
                </div>
              </Col>
              <Col span={12}>
                <div style={{ marginBottom: 8 }}>
                  <div style={{ color: 'rgba(0, 0, 0, 0.45)' }}>Zone</div>
                  <div>{campaign?.zone || '-'}</div>
                </div>
              </Col>
            </Row>
          </div>

          <Divider />

          <div>
            <h3 style={{ marginBottom: 8 }}>Performance</h3>
            <Row gutter={16}>
              <Col span={12}>
                <div style={{ marginBottom: 8 }}>
                  <div style={{ color: 'rgba(0, 0, 0, 0.45)' }}>Enroll Count</div>
                  <div>{campaign?.enrollCount || 0}</div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      <Divider />

      <div style={{ marginBottom: 16 }}>
        <h3>Introduction</h3>
        <div style={{ 
          backgroundColor: '#fafafa', 
          padding: '16px', 
          borderRadius: '4px',
          border: '1px solid #f0f0f0'
        }}>
          {campaign?.introduction || 'No introduction provided'}
        </div>
      </div>

      <div style={{ marginBottom: 16 }}>
        <h3>Description</h3>
        <div style={{ 
          backgroundColor: '#fafafa', 
          padding: '16px', 
          borderRadius: '4px',
          border: '1px solid #f0f0f0'
        }}>
          {campaign?.description || 'No description provided'}
        </div>
      </div>

      <div>
        <h3>Policy</h3>
        <div style={{ 
          backgroundColor: '#fafafa', 
          padding: '16px', 
          borderRadius: '4px',
          border: '1px solid #f0f0f0'
        }}>
          {campaign?.policy || 'No policy provided'}
        </div>
      </div>
  </Modal>
  );
};

const CampaignList = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 6,
    total: 0,
  });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchCampaigns();
  }, [pagination.current, pagination.pageSize]);

  const fetchCampaigns = async () => {
    try {
      setLoading(true);
      const response = await requestsPrivate.get(
        `${LIST_WAIT_CAMPAIGN_URL}?pageNumber=${pagination.current}&pageSize=${pagination.pageSize}`
      );
      setCampaigns(response.data.data.items);
      setPagination({
        ...pagination,
        total: response.data.data.totalItems,
      });
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch campaigns');
      setLoading(false);
      console.error('Error fetching campaigns:', err);
    }
  };

  const handleTableChange = (pagination) => {
    setPagination(pagination);
  };

  const handleViewCampaign = (campaign) => {
    setSelectedCampaign(campaign);
    setViewModalOpen(true);
  };

  const handleApproveCampaign = async (campaignId) => {
    try {
      setLoading(true);
      await requestsPrivate.patch(`${BROWSE_CAMPAIGN_URL}?id=${campaignId}&request=UnPaid`);
      message.success('Campaign approved successfully');
      fetchCampaigns();
    } catch (err) {
      message.error('Failed to approve campaign');
      console.error('Error approving campaign:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleRejectCampaign = async (campaignId) => {
    try {
      setLoading(true);
      await requestsPrivate.patch(`${BROWSE_CAMPAIGN_URL}?id=${campaignId}&request=Reject`);
      message.success('Campaign rejected successfully');
      fetchCampaigns();
    } catch (err) {
      message.error('Failed to reject campaign');
      console.error('Error rejecting campaign:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric'
      });
    } catch (error) {
      return 'Invalid date';
    }
  };

  const filteredCampaigns = campaigns.filter(campaign => {
    return campaign.campaignName.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <span>{text.substring(0, 8)}...</span>,
    },
    {
      title: 'Campaign Name',
      dataIndex: 'campaignName',
      key: 'campaignName',
    },
    {
      title: 'Website',
      dataIndex: 'websiteLink',
      key: 'websiteLink',
      render: (text) => (
        <a href={text} target="_blank" rel="noopener noreferrer">
          {new URL(text).hostname}
        </a>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: () => <Tag color="orange">Await</Tag>,
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate',
      render: (date) => formatDate(date),
    },
    {
      title: 'End Date',
      dataIndex: 'endDate',
      key: 'endDate',
      render: (date) => date ? formatDate(date) : 'No End Date',
    },
    {
      title: 'ConversionRate',
      dataIndex: 'conversionRate',
      key: 'conversionRate',
      render: (number) => number ? number : 0,
    },
    {
      key: 'actions',
      render: (_, record) => (
        <div className={cx('actions-cell')}>
          <button 
            className={cx('action-button', 'view-button')}
            onClick={() => handleViewCampaign(record)}
            aria-label="View campaign"
          >
            <Eye size={16} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className={cx('campaign-management')}>
      <div className={cx('top-section')}>
        <h1>Pending Campaign Approvals</h1>
        <div className={cx('actions')}>
          <div className={cx('search-filter')}>
            <input
              type="text"
              placeholder="Search campaigns..."
              className={cx('search-input')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className={cx('campaigns-list')}>
        <h2>Pending Campaigns ({pagination.total})</h2>
        
        <Spin spinning={loading}>
          {error ? (
            <div className={cx('error')}>{error}</div>
          ) : (
            <Table
              columns={columns}
              dataSource={filteredCampaigns}
              rowKey="id"
              pagination={{
                ...pagination,
                showSizeChanger: true,
                pageSizeOptions: ['6', '10', '20', '50'],
                showTotal: (total) => `Total ${total} items`,
              }}
              onChange={handleTableChange}
              className={cx('campaigns-table')}
            />
          )}
        </Spin>
      </div>

      <CampaignModal
        campaign={selectedCampaign}
        visible={viewModalOpen}
        onClose={() => setViewModalOpen(false)}
        onApprove={handleApproveCampaign}
        onReject={handleRejectCampaign}
      />
    </div>
  );
};

export default CampaignList;