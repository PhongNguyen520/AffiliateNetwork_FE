import React, { useState } from 'react';
import classNames from "classnames/bind";
import styles from "./CreateCampaign.module.scss";
import { Plus, Upload } from 'lucide-react';

const cx = classNames.bind(styles);

const CreateCampaign = () => {
  const [campaign, setCampaign] = useState({
    name: '',
    type: '',
    category: '',
    website: '',
    commissionType: 'FIX',
    commissionValue: '',
    maxCommissionRate: '',
    maxCommissionValue: '',
    description: '',
    introduction: '',
    policy: '',
    targetCustomer: '',
    zone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCampaign(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Campaign data:', campaign);
    // Further processing...
  };

  return (
    <div className={cx('create-campaign')}>
      <form onSubmit={handleSubmit}>
        <div className={cx('form-grid')}>
          <div className={cx('form-column')}>
            <div className={cx('upload-section')}>
              <div className={cx('upload-box')}>
                <div className={cx('upload-icon')}>
                  <Upload size={40} color="#1E88E5" />
                </div>
                <div className={cx('upload-text')}>Browse Files</div>
              </div>
            </div>

            <div className={cx('form-section')}>
              <label className={cx('section-label')}>Introduction</label>
              <textarea
                name="introduction"
                value={campaign.introduction}
                onChange={handleChange}
                className={cx('textarea-field')}
                rows="6"
              />
            </div>

            <div className={cx('form-row')}>
              <div className={cx('form-section')}>
                <label className={cx('section-label')}>Policy</label>
                <textarea
                  name="policy"
                  value={campaign.policy}
                  onChange={handleChange}
                  className={cx('textarea-field')}
                  rows="4"
                  placeholder="1. Value"
                />
              </div>
            </div>
          </div>

          <div className={cx('form-column')}>
            <div className={cx('form-row')}>
              <div className={cx('form-group')}>
                <label className={cx('input-label')}>
                  <span className={cx('required')}>*</span>Campaign Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={campaign.name}
                  onChange={handleChange}
                  className={cx('input-field')}
                  required
                />
              </div>
              <div className={cx('form-group')}>
                <label className={cx('input-label')}>
                  <span className={cx('required')}>*</span>Link Website
                </label>
                <input
                  type="text"
                  name="website"
                  value={campaign.website}
                  onChange={handleChange}
                  className={cx('input-field')}
                  required
                />
              </div>
            </div>

            <div className={cx('form-row')}>
              <div className={cx('form-group')}>
                <label className={cx('input-label')}>
                  <span className={cx('required')}>*</span>Campaign Type
                </label>
                <div className={cx('select-wrapper')}>
                  <select
                    name="type"
                    value={campaign.type}
                    onChange={handleChange}
                    className={cx('select-field')}
                    required
                  >
                    <option value="" disabled>Select Campaign Type</option>
                    <option value="product">Product</option>
                    <option value="service">Service</option>
                    <option value="event">Event</option>
                  </select>
                </div>
              </div>
              <div className={cx('form-group')}>
                <label className={cx('input-label')}>
                  <span className={cx('required')}>*</span>Category
                </label>
                <div className={cx('select-wrapper')}>
                  <select
                    name="category"
                    value={campaign.category}
                    onChange={handleChange}
                    className={cx('select-field')}
                    required
                  >
                    <option value="" disabled>Select Categories</option>
                    <option value="electronics">Electronics</option>
                    <option value="fashion">Fashion</option>
                    <option value="health">Health</option>
                  </select>
                </div>
              </div>
            </div>

            <div className={cx('form-row')}>
              <div className={cx('form-group')}>
                <label className={cx('input-label')}>
                  <span className={cx('required')}>*</span>Concept
                </label>
                <input
                  type="text"
                  name="concept"
                  value="Product Campaign"
                  className={cx('input-field')}
                  disabled
                />
              </div>
            </div>

            <div className={cx('form-row')}>
              <div className={cx('form-group', 'small')}>
                <label className={cx('input-label')}>
                  <span className={cx('required')}>*</span>Commission Type
                </label>
                <input
                  type="text"
                  value="FIX"
                  className={cx('input-field')}
                  disabled
                />
              </div>
              <div className={cx('form-group', 'small')}>
                <label className={cx('input-label')}>
                  <span className={cx('required')}>*</span>Commission Value
                </label>
                <div className={cx('input-with-addon')}>
                  <input
                    type="number"
                    name="commissionValue"
                    value={campaign.commissionValue}
                    onChange={handleChange}
                    className={cx('input-field')}
                    placeholder="0.00"
                    required
                  />
                  <span className={cx('input-addon')}>VND</span>
                </div>
              </div>
              <div className={cx('form-group', 'small')}>
                <label className={cx('input-label')}>Max Commission Rate</label>
                <div className={cx('select-wrapper')}>
                  <select
                    name="maxCommissionRate"
                    value={campaign.maxCommissionRate}
                    onChange={handleChange}
                    className={cx('select-field')}
                  >
                    <option value="0.00">0.00</option>
                    <option value="5.00">5.00</option>
                    <option value="10.00">10.00</option>
                  </select>
                </div>
              </div>
              <div className={cx('form-group', 'small')}>
                <label className={cx('input-label')}>Max Commission Value</label>
                <div className={cx('select-wrapper')}>
                  <select
                    name="maxCommissionValue"
                    value={campaign.maxCommissionValue}
                    onChange={handleChange}
                    className={cx('select-field')}
                  >
                    <option value="0.00">0.00</option>
                    <option value="100.00">100.00</option>
                    <option value="500.00">500.00</option>
                  </select>
                </div>
              </div>
            </div>

            <div className={cx('form-section')}>
              <label className={cx('section-label')}>Description</label>
              <textarea
                name="description"
                value={campaign.description}
                onChange={handleChange}
                className={cx('textarea-field')}
                rows="6"
              />
            </div>

            <div className={cx('form-row')}>
              <div className={cx('form-section')}>
                <label className={cx('section-label')}>Target Customer</label>
                <textarea
                  name="targetCustomer"
                  value={campaign.targetCustomer}
                  onChange={handleChange}
                  className={cx('textarea-field')}
                  rows="4"
                  placeholder="1. Value"
                />
              </div>
              <div className={cx('form-section')}>
                <label className={cx('section-label')}>Zone</label>
                <textarea
                  name="zone"
                  value={campaign.zone}
                  onChange={handleChange}
                  className={cx('textarea-field')}
                  rows="4"
                  placeholder="1. Value"
                />
              </div>
            </div>
          </div>
        </div>

        <div className={cx('submit-section')}>
          <button type="submit" className={cx('submit-button')}>
            <Plus size={16} />
            Create Campaign
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCampaign;