import React, { useState } from 'react';
import styles from './CampaignList.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const CampaignList = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  const handleAddNew = () => {
    setSelectedCampaign(null);
    setShowForm(true);
  };

  const handleEditCampaign = (campaign) => {
    setSelectedCampaign(campaign);
    setShowForm(true);
  };

  const dummyCampaigns = [
    { id: 'CAM001', campaignName: 'Summer Sale', category: 'Fashion', payoutModel: 'CPS', status: 'Active', createDate: '2025-01-15', endDate: '2025-07-15', enrollCount: 245, conversionRate: 12.5 },
    { id: 'CAM002', campaignName: 'Tech Gadgets', category: 'Technology', payoutModel: 'CPL', status: 'Active', createDate: '2025-02-10', endDate: '2025-08-10', enrollCount: 189, conversionRate: 8.7 },
    { id: 'CAM003', campaignName: 'Home Decor', category: 'Home & Garden', payoutModel: 'CPS', status: 'Inactive', createDate: '2024-12-05', endDate: '2025-06-05', enrollCount: 320, conversionRate: 15.2 },
  ];

  return (
    <div className={cx('campaign-management')}>
      <div className={cx('top-section')}>
        <h1>Campaign Management</h1>
        <div className={cx('actions')}>
          <div className={cx('search-filter')}>
            <input
              type="text"
              placeholder="Search campaigns..."
              className={cx('search-input')}
            />
            <select className={cx('status-filter')}>
              <option value="All">All Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Pending">Pending</option>
            </select>
          </div>
          <button 
            className={cx('add-button')} 
            onClick={handleAddNew}
          >
            Add New Campaign
          </button>
        </div>
      </div>

      {showForm && (
        <div className={cx('form-container')}>
          <h2>{selectedCampaign ? 'Edit Campaign' : 'Create New Campaign'}</h2>
          <form className={cx('campaign-form')}>
            <div className={cx('form-grid')}>
              <div className={cx('form-group')}>
                <label>Campaign Name</label>
                <input
                  type="text"
                  name="campaignName"
                  required
                />
              </div>
              <div className={cx('form-group')}>
                <label>Website Link</label>
                <input
                  type="url"
                  name="websiteLink"
                  required
                />
              </div>
              <div className={cx('form-group')}>
                <label>Introduction</label>
                <input
                  type="text"
                  name="introduction"
                />
              </div>
              <div className={cx('form-group')}>
                <label>Status</label>
                <select name="status">
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>
              <div className={cx('form-group')}>
                <label>End Date</label>
                <input
                  type="date"
                  name="endDate"
                />
              </div>
              <div className={cx('form-group')}>
                <label>Deposit</label>
                <input
                  type="number"
                  name="deposit"
                />
              </div>
              <div className={cx('form-group')}>
                <label>Target Customer</label>
                <input
                  type="text"
                  name="target_Customer"
                />
              </div>
              <div className={cx('form-group')}>
                <label>Zone</label>
                <input
                  type="text"
                  name="zone"
                />
              </div>
              <div className={cx('form-group')}>
                <label>Payout Model</label>
                <select
                  name="paymodel_Id"
                  required
                >
                  <option value="">Select Payout Model</option>
                  <option value="PAY001">Cost Per Sale (CPS)</option>
                  <option value="PAY002">Cost Per Lead (CPL)</option>
                  <option value="PAY003">Cost Per Click (CPC)</option>
                </select>
              </div>
              <div className={cx('form-group')}>
                <label>Category</label>
                <select
                  name="category_Id"
                  required
                >
                  <option value="">Select Category</option>
                  <option value="CAT001">Technology</option>
                  <option value="CAT002">Fashion</option>
                  <option value="CAT003">Home & Garden</option>
                </select>
              </div>
            </div>
            
            <div className={cx('form-group', 'full-width')}>
              <label>Description</label>
              <textarea
                name="description"
                rows="3"
              ></textarea>
            </div>
            <div className={cx('form-group', 'full-width')}>
              <label>Policy</label>
              <textarea
                name="policy"
                rows="3"
              ></textarea>
            </div>
            <div className={cx('form-group', 'full-width')}>
              <label>Image URL</label>
              <input
                type="text"
                name="image"
              />
            </div>
            
            <div className={cx('form-actions')}>
              <button type="button" onClick={() => setShowForm(false)} className={cx('cancel-button')}>
                Cancel
              </button>
              <button type="submit" className={cx('submit-button')}>
                {selectedCampaign ? 'Update Campaign' : 'Create Campaign'}
              </button>
            </div>
          </form>
        </div>
      )}

      <div className={cx('campaigns-list')}>
        <h2>All Campaigns ({dummyCampaigns.length})</h2>
        <table className={cx('campaigns-table')}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Campaign Name</th>
              <th>Category</th>
              <th>Payout Model</th>
              <th>Status</th>
              <th>Created Date</th>
              <th>End Date</th>
              <th>Enroll Count</th>
              <th>Conv. Rate</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {dummyCampaigns.map((campaign) => (
              <tr key={campaign.id} className={cx('campaign-row', {'inactive': campaign.status !== 'Active'})}>
                <td>{campaign.id}</td>
                <td>{campaign.campaignName}</td>
                <td>{campaign.category}</td>
                <td>{campaign.payoutModel}</td>
                <td>
                  <span className={cx('status-badge', campaign.status.toLowerCase())}>
                    {campaign.status}
                  </span>
                </td>
                <td>{campaign.createDate}</td>
                <td>{campaign.endDate || 'No End Date'}</td>
                <td>{campaign.enrollCount}</td>
                <td>{campaign.conversionRate}%</td>
                <td className={cx('actions-cell')}>
                  <button className={cx('edit-button')} onClick={() => handleEditCampaign(campaign)}>
                    Edit
                  </button>
                  <button className={cx('delete-button')}>
                    Delete
                  </button>
                  <button className={cx('view-button')}>
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CampaignList;