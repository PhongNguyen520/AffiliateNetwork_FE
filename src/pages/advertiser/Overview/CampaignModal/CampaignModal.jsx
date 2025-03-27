import React, { useState, useEffect } from "react";
import { 
  Modal, 
  Descriptions, 
  Divider, 
  Row, 
  Col, 
  Image, 
  Progress, 
  Button, 
  Tag,
  message,
  Popconfirm 
} from "antd";
import classNames from "classnames/bind";
import styles from "./CampaignModal.module.scss";
import { requestsPrivate } from "../../../../utils/requests";

const cx = classNames.bind(styles);
const DETAIL_CAMPAIGN_URL = "campaign/";
const PAY_CAMPAIGN_URL = "vnpay/pay-campaign";
const BROWSE_CAMPAIGN_URL = "campaign/status";

const CampaignModal = ({ campaignId, visible, onClose, refreshCampaigns }) => {
  const [campaign, setCampaign] = useState(null);
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);

  useEffect(() => {
    if (visible && campaignId) {
      fetchCampaignDetail();
    }
  }, [visible, campaignId]);

  const fetchCampaignDetail = async () => {
    try {
      setLoading(true);
      const response = await requestsPrivate.get(`${DETAIL_CAMPAIGN_URL}${campaignId}`);
      setCampaign(response.data.data);
    } catch (error) {
      console.error("Error fetching campaign details:", error);
      message.error("Failed to load campaign details");
    } finally {
      setLoading(false);
    }
  };

   const handleStopCampaign = async () => {
      try {
        setLoading(true);
        await requestsPrivate.patch(`${BROWSE_CAMPAIGN_URL}?id=${campaignId}&request=Stop`);
        onClose();
        refreshCampaigns();
      } catch (err) {
        message.error('Failed to stop campaign');
        console.error('Error stopping campaign:', err);
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

  const getStatusTag = (status) => {
    let color = "";
    switch (status) {
      case "Active": color = "green"; break;
      case "Wait": color = "orange"; break;
      case "Reject": color = "red"; break;
      case "UnPaid": color = "volcano"; break;
      case "Stop": color = "magenta"; break;
      case "End": color = "blue"; break;
      default: color = "default";
    }
    return <Tag color={color}>{status}</Tag>;
  };


  const handlePayCampaign = async () => {
    try {
      setActionLoading(true);
      const response = await requestsPrivate.post(`${PAY_CAMPAIGN_URL}`, {
        campaignId: campaignId
      });
  
      if (response.data) {
        window.open(response.data, '_blank');
      } else {
        message.error("No payment URL received");
      }
    } catch (error) {
      message.error("Failed to process payment");
    } finally {
      setActionLoading(false);
    }
  };

  const getModalActions = () => {
    const actions = [
      <Button key="close" onClick={onClose}>
        Close
      </Button>
    ];

    if (campaign?.status === "Active") {
      actions.unshift(
        <Popconfirm
          key="stop"
          title="Are you sure to stop this campaign?"
          onConfirm={handleStopCampaign}
          okText="Yes"
          cancelText="No"
        >
          <Button type="primary" danger loading={actionLoading}>
            Stop Campaign
          </Button>
        </Popconfirm>
      );
    }

    if (campaign?.status === "UnPaid") {
      actions.unshift(
        <Button 
          key="pay" 
          type="primary" 
          loading={actionLoading}
          onClick={handlePayCampaign}
        >
          Pay Campaign
        </Button>
      );
    }

    return actions;
  };

  if (!campaign) return null;

  return (
    <Modal
      className={cx('campaign-modal')}
      title={<span className={cx('modal-title')}>Campaign Details</span>}
      width={1000}
      visible={visible}
      onCancel={onClose}
      footer={getModalActions()}
      centered
      confirmLoading={loading}
    >
      <Row gutter={[24, 16]}>
        <Col span={12}>
          <div className={cx('image-container')}>
            <Image
              src={campaign?.image || '/placeholder-image.svg'}
              alt={campaign?.campaignName || 'Campaign Image'}
              className={cx('campaign-image')}
              fallback="/placeholder-image.svg"
              placeholder={
                <div className={cx('image-placeholder')}>
                  <span>No Image Available</span>
                </div>
              }
            />
          </div>

          <Descriptions bordered column={1} className={cx('descriptions')}>
            <Descriptions.Item label="Campaign Name">
              <strong>{campaign?.campaignName || 'N/A'}</strong>
            </Descriptions.Item>
            <Descriptions.Item label="Status">
              {getStatusTag(campaign.status)}
            </Descriptions.Item>
            <Descriptions.Item label="Category">
              {campaign?.categoryName || 'N/A'}
            </Descriptions.Item>
            <Descriptions.Item label="Budget">
              {campaign?.budget || 0} VND
            </Descriptions.Item>
            <Descriptions.Item label="Website">
              <a href={campaign?.websiteLink} target="_blank" rel="noopener noreferrer">
                {campaign?.websiteLink || 'N/A'}
              </a>
            </Descriptions.Item>
            <Descriptions.Item label="Enroll Count">
              {campaign?.enrollCount || 0}
            </Descriptions.Item>
            <Descriptions.Item label="Conversion Rate">
              <Progress
                percent={campaign?.conversionRate ? (campaign.conversionRate * 100) : 0}
                size="small"
                status={campaign?.conversionRate >= 0.5 ? "success" : "normal"}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>

        <Col span={12}>
        <div className={cx('introduction-section')}>
            <h3 className={cx('section-title')}>Introduction</h3>
            <div className={cx('introduction-content')}>
              {campaign?.introduction || 'No introduction provided'}
            </div>
          </div>

          <Divider className={cx('divider')} />

          <div className={cx('description-section')}>
            <h3 className={cx('section-title')}>Description</h3>
            <div className={cx('description-content')}>
              {campaign?.description || 'No description provided'}
            </div>
          </div>
          <Divider className={cx('divider')} />


          <div className={cx('date-section')}>
            <h3 className={cx('section-title')}>Campaign Period</h3>
            <Row gutter={16}>
              <Col span={12}>
                <div className={cx('date-field')}>
                  <div className={cx('date-label')}>Start Date</div>
                  <div className={cx('date-value')}>
                    {campaign?.startDate ? formatDate(campaign.startDate) : 'N/A'}
                  </div>
                </div>
              </Col>
              <Col span={12}>
                <div className={cx('date-field')}>
                  <div className={cx('date-label')}>End Date</div>
                  <div className={cx('date-value')}>
                    {campaign?.endDate ? formatDate(campaign.endDate) : 'N/A'}
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          <Divider className={cx('divider')} />

          <div className={cx('target-section')}>
            <h3 className={cx('section-title')}>Target Information</h3>
            <Row gutter={16}>
              <Col span={12}>
                <div className={cx('target-field')}>
                  <div className={cx('target-label')}>Target Customer</div>
                  <div className={cx('target-value')}>
                    {campaign?.targetCustomer || 'N/A'}
                  </div>
                </div>
              </Col>
              <Col span={12}>
                <div className={cx('target-field')}>
                  <div className={cx('target-label')}>Zone</div>
                  <div className={cx('target-value')}>
                    {campaign?.zone || 'N/A'}
                  </div>
                </div>
              </Col>
            </Row>
            <div className={cx('target-field')}>
              <div className={cx('target-label')}>Payout Model</div>
              <div className={cx('target-value')}>
                {campaign?.payoutModelName?.join(', ') || 'N/A'}
              </div>
            </div>
          </div>

        

         
       
        </Col>
      </Row>

      <Divider className={cx('divider')} />

      <div className={cx('policy-section')}>
        <h3 className={cx('section-title')}>Policy</h3>
        <div className={cx('policy-content')}>
          {campaign?.policy || 'No policy provided'}
        </div>
      </div>
    </Modal>
  );
};

export default CampaignModal;