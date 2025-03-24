import React, { useState } from 'react';
import classNames from "classnames/bind";
import styles from "./CreateLinkStep1.module.scss";
import CreateLinkStep2 from '../Step2/CreateLinkStep2';
import { Link } from 'react-router-dom';
import config from '../../../../config';
import { useLocation } from "react-router-dom";
import { requestsPrivate } from '../../../../utils/requests';

const cx = classNames.bind(styles);
const CREATE_LINK_URL = "affiliatelink/createlink";

const CreateLinkStep1 = () => {
  const [utmExpanded, setUtmExpanded] = useState(false);
  const [shortenLink, setShortenLink] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [originalLink, setOriginalLink] = useState("");
  const [domain, setDomain] = useState("");
  const [utmSource, setUtmSource] = useState("");
  const [utmMedium, setUtmMedium] = useState("");
  const [utmCampaign, setUtmCampaign] = useState("");
  const [utmContent, setUtmContent] = useState("");
  const [optimizedLink, setOptimizedLink] = useState("");
  const [response, setResponse] = useState({});
  const location = useLocation();
  const { campaign } = location.state || {};

  const openModal = () => {
    setIsModalOpen(true);
  };
  

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCreateLink = async () => {
    const requestData = {
      url: originalLink,
      utmSource,
      utmMedium,
      utmCampaign,
      utmContent,
      optimizeUrl: optimizedLink,
      status: "Active",
      campaignId: campaign?.id || "", 
    };

    try {
      const response = await requestsPrivate.post(CREATE_LINK_URL, requestData);
      // console.log(response.data.data);
      
      if (response?.data) {
      setResponse(response.data.data);
        openModal();
      } else {
        console.error("Error creating link:", response?.message);
      }
    } catch (error) {
      console.error("API request failed:", error);
    }
  };

  return (
    <div className={cx('create-link-container')}>
      <div className={cx('steps-container')}>
        <div className={cx('step', 'active')}>
          <div className={cx('step-number')}>01</div>
          <div className={cx('step-title')}>Choose product</div>
        </div>
        <div className={cx('step')}>
          <div className={cx('step-number')}>02</div>
          <div className={cx('step-title')}>Get Link</div>
        </div>
        <div className={cx('step')}>
          <div className={cx('step-number')}>03</div>
          <div className={cx('step-title')}>Create Content</div>
        </div>
      </div>

      <div className={cx('link-form')}>
        <div className={cx('form-row')}>
          <div className={cx('form-group')}>
            <label>Original Link</label>
            <div className={cx('input-with-icon')}>
              <input 
                type="text" 
                placeholder="https://app.visily.ai/" 
                value={originalLink}
                onChange={(e) => setOriginalLink(e.target.value)} 
              />
              <button className={cx('copy-btn')}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4V2C4 1.44772 4.44772 1 5 1H13C13.5523 1 14 1.44772 14 2V10C14 10.5523 13.5523 11 13 11H11V13C11 13.5523 10.5523 14 10 14H2C1.44772 14 1 13.5523 1 13V5C1 4.44772 1.44772 4 2 4H4ZM4 5H2V13H10V11H5C4.44772 11 4 10.5523 4 10V5ZM5 2V10H13V2H5Z" fill="#666"/>
                </svg>
              </button>
            </div>
          </div>
          <div className={cx('form-group')}>
            <label>Domain</label>
            <input 
              type="text" 
              placeholder="https://www.facebook.com/" 
              value={domain}
              onChange={(e) => setDomain(e.target.value)} 
            />
          </div>
        </div>

        <div className={cx('utm-section')}>
          <div className={cx('utm-header')} onClick={() => setUtmExpanded(!utmExpanded)}>
            <h3>Add UTM</h3>
            <button className={cx('dropdown-btn', { 'expanded': utmExpanded })}>
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          <div className={cx('utm-content', { 'hidden': !utmExpanded })}>
            <div className={cx('form-row')}>
              <div className={cx('form-group')}>
                <label>Utm Source</label>
                <input 
                  type="text" 
                  placeholder="facebook, google..." 
                  value={utmSource}
                  onChange={(e) => setUtmSource(e.target.value)} 
                />
              </div>
              <div className={cx('form-group')}>
                <label>Utm Medium</label>
                <input 
                  type="text" 
                  placeholder="email, cpc, banner..." 
                  value={utmMedium}
                  onChange={(e) => setUtmMedium(e.target.value)} 
                />
              </div>
            </div>

            <div className={cx('form-row')}>
              <div className={cx('form-group')}>
                <label>Utm Campaign</label>
                <input 
                  type="text" 
                  placeholder="productname, event..." 
                  value={utmCampaign}
                  onChange={(e) => setUtmCampaign(e.target.value)} 
                />
              </div>
              <div className={cx('form-group')}>
                <label>Utm Content</label>
                <input 
                  type="text" 
                  placeholder="content campaign" 
                  value={utmContent}
                  onChange={(e) => setUtmContent(e.target.value)} 
                />
              </div>
            </div>
          </div>
        </div>

        <div className={cx('shorten-link')}>
          <label className={cx('checkbox-container')}>
            <input 
              type="checkbox" 
              checked={shortenLink}
              onChange={() => setShortenLink(!shortenLink)}
            />
            <span className={cx('checkbox-text')}>Shorten Link</span>
          </label>
          {shortenLink && (
            <div className={cx('shorten-input')}>
              <input 
                type="text" 
                placeholder="Link Short" 
                value={optimizedLink}
                onChange={(e) => setOptimizedLink(e.target.value)} 
              />
            </div>
          )}
        </div>

        <div className={cx('link-history')}>
          <h3>Link creation history</h3>
          <div className={cx('search-bar')}>
            <input type="text" placeholder="Search by name" />
            <button className={cx('search-btn')}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.2939 12.5786H13.3905L13.0703 12.2699C14.191 10.9663 14.8656 9.27387 14.8656 7.43282C14.8656 3.32762 11.538 0 7.43282 0C3.32762 0 0 3.32762 0 7.43282C0 11.538 3.32762 14.8656 7.43282 14.8656C9.27387 14.8656 10.9663 14.191 12.2699 13.0703L12.5786 13.3905V14.2939L18.2962 20L20 18.2962L14.2939 12.5786ZM7.43282 12.5786C4.58548 12.5786 2.28702 10.2802 2.28702 7.43282C2.28702 4.58548 4.58548 2.28702 7.43282 2.28702C10.2802 2.28702 12.5786 4.58548 12.5786 7.43282C12.5786 10.2802 10.2802 12.5786 7.43282 12.5786Z" fill="#666"/>
              </svg>
            </button>
          </div>
          
          <div className={cx('empty-history')}>
            <p>You have no history of creating links in this job.</p>
            <div className={cx('empty-illustration')}>
              <img src="/empty-state.svg" alt="No history" />
            </div>
          </div>
        </div>

        <div className={cx('action-buttons')}>
          <Link to={config.routes.listCampaigns}>
            <button className={cx('btn', 'btn-secondary')}>Back</button>
          </Link>
          <button className={cx('btn', 'btn-primary')} onClick={handleCreateLink}>Continue</button>
        </div>
      </div>
      <CreateLinkStep2 isOpen={isModalOpen} onRequestClose={closeModal} responseData={response}/>
    </div>
  );
};

export default CreateLinkStep1;
