import React, { useState, useEffect } from 'react'
import classNames from 'classnames/bind'
import styles from './Account.module.scss'
import { requestsPrivate } from '../../../utils/requests'
import images from '../../../assets/images'
import { Search, Filter, ChevronLeft, ChevronRight, RefreshCw, UserPlus, MoreHorizontal, Download, Trash2, Edit, Eye } from 'lucide-react'

const cx = classNames.bind(styles)

const LIST_ACCOUNT_URL = "account"

function Accounts() {
  const [accounts, setAccounts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchAccounts = async () => {
      setLoading(true);
      try {
        const response = await requestsPrivate.get(LIST_ACCOUNT_URL, {
          params: { page: currentPage }
        });
        
        setAccounts(response.data.data.items);
        setTotalPages(response.data.data.totalPages);
        setError(null);
      } catch (error) {
        console.error('Failed to fetch accounts:', error);
        setError('Failed to load accounts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchAccounts();
  }, [currentPage]);

  const renderStatusBadge = (status) => {
    const statusClasses = {
      'Active': cx('status-badge', 'active'),
      'Inactive': cx('status-badge', 'inactive'),
      'Pending': cx('status-badge', 'pending')
    };

    const statusIcons = {
      'Active': '●',
      'Inactive': '●',
      'Pending': '●'
    };

    return (
      <span className={statusClasses[status] || cx('status-badge', 'default')}>
        <span className={cx('status-icon')}>{statusIcons[status]}</span>
        {status}
      </span>
    );
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleRefresh = async () => {
    setLoading(true);
    try {
      const response = await requestsPrivate.get(LIST_ACCOUNT_URL, {
        params: { page: currentPage }
      });
      
      setAccounts(response.data.data.items);
      setTotalPages(response.data.data.totalPages);
      setError(null);
    } catch (error) {
      console.error('Failed to refresh accounts:', error);
      setError('Failed to refresh accounts. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={cx('accounts-container')}>
      <div className={cx('accounts-header')}>
        <h1 className={cx('accounts-title')}>Account Management</h1>
        <p className={cx('accounts-subtitle')}>Manage user accounts and permissions</p>
      </div>

      <div className={cx('accounts-actions')}>
        <div className={cx('search-filter')}>
          <div className={cx('search-wrapper')}>
            <Search className={cx('search-icon')} size={18} />
            <input 
              type="text" 
              placeholder="Search accounts..." 
              className={cx('search-input')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className={cx('filter-button')}>
            <Filter size={16} />
            <span>Filter</span>
          </button>
        </div>
        <div className={cx('action-buttons')}>
          <button className={cx('refresh-button')} onClick={handleRefresh} disabled={loading}>
            <RefreshCw size={16} className={loading ? cx('spinning') : ''} />
            <span>Refresh</span>
          </button>
          <button className={cx('add-button')}>
            <UserPlus size={16} />
            <span>Add Account</span>
          </button>
          <button className={cx('export-button')}>
            <Download size={16} />
            <span>Export</span>
          </button>
        </div>
      </div>

      <div className={cx('table-container')}>
        {loading && (
          <div className={cx('loading-overlay')}>
            <div className={cx('loading-spinner')}>
              <RefreshCw size={24} />
            </div>
            <p>Loading accounts...</p>
          </div>
        )}

        {error && (
          <div className={cx('error-container')}>
            <div className={cx('error-icon')}>!</div>
            <div className={cx('error-message')}>{error}</div>
            <button className={cx('retry-button')} onClick={handleRefresh}>
              Try Again
            </button>
          </div>
        )}

        {!loading && !error && accounts.length === 0 && (
          <div className={cx('empty-state')}>
            <div className={cx('empty-icon')}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>No Accounts Found</h3>
            <p>There are no accounts to display. Try adding a new account or adjusting your filters.</p>
            <button className={cx('add-button')}>
              <UserPlus size={16} />
              <span>Add Account</span>
            </button>
          </div>
        )}

        {!loading && !error && accounts.length > 0 && (
          <div className={cx('table-wrapper')}>
            <table className={cx('accounts-table')}>
              <thead>
                <tr>
                  <th className={cx('th-checkbox')}>
                    <input type="checkbox" className={cx('checkbox')} />
                  </th>
                  <th className={cx('th-id')}>ID</th>
                  <th className={cx('th-user')}>User</th>
                  <th className={cx('th-email')}>Email</th>
                  <th className={cx('th-phone')}>Phone</th>
                  <th className={cx('th-created')}>Created</th>
                  <th className={cx('th-status')}>Status</th>
                  <th className={cx('th-actions')}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {accounts.map((account) => (
                  <tr key={account.id} className={cx('account-row')}>
                    <td>
                      <input type="checkbox" className={cx('checkbox')} />
                    </td>
                    <td className={cx('account-id')}>{account.id.slice(0, 8)}...</td>
                    <td className={cx('account-user')}>
                      <div className={cx('user-info')}>
                        <div className={cx('avatar-container')}>
                          <img 
                            src={account.avatar ?? images.defaultAvatar} 
                            alt={account.userName} 
                            className={cx('avatar')}
                          />
                        </div>
                        <div className={cx('user-details')}>
                          <div className={cx('username')}>{account.userName}</div>
                          <div className={cx('fullname')}>{`${account.firstName} ${account.lastName}`}</div>
                        </div>
                      </div>
                    </td>
                    <td className={cx('account-email')}>{account.email}</td>
                    <td className={cx('account-phone')}>{account.phoneNumber}</td>
                    <td className={cx('account-created')}>
                      <div className={cx('created-date')}>
                        {new Date(account.createdTime).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </div>
                      <div className={cx('created-time')}>
                        {new Date(account.createdTime).toLocaleTimeString('en-US', {
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </div>
                    </td>
                    <td className={cx('account-status')}>
                      {renderStatusBadge(account.status)}
                    </td>
                    <td className={cx('account-actions')}>
                      <div className={cx('action-menu')}>
                        <button className={cx('action-button', 'view')} title="View Details">
                          <Eye size={16} />
                        </button>
                        <button className={cx('action-button', 'edit')} title="Edit Account">
                          <Edit size={16} />
                        </button>
                        <button className={cx('action-button', 'delete')} title="Delete Account">
                          <Trash2 size={16} />
                        </button>
                        <button className={cx('action-button', 'more')} title="More Options">
                          <MoreHorizontal size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {!loading && !error && accounts.length > 0 && (
          <div className={cx('pagination-container')}>
            <div className={cx('pagination-info')}>
              Showing <span>{accounts.length}</span> of <span>{accounts.length}</span> accounts
            </div>
            <div className={cx('pagination-controls')}>
              <button 
                className={cx('pagination-button', 'prev')} 
                onClick={handlePrevPage}
                disabled={currentPage === 1}
              >
                <ChevronLeft size={16} />
                <span>Previous</span>
              </button>
              
              <div className={cx('pagination-pages')}>
                {[...Array(totalPages)].map((_, index) => (
                  <button 
                    key={index} 
                    onClick={() => setCurrentPage(index + 1)}
                    className={cx(
                      'pagination-page',
                      { 'active': currentPage === index + 1 }
                    )}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              
              <button 
                className={cx('pagination-button', 'next')} 
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                <span>Next</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Accounts
