import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { requestsPrivate } from "../../../../utils/requests";
import config from "../../../../config";
import Cookies from "js-cookie";
import classNames from "classnames/bind";
import styles from './CampaignsDetails.module.scss';
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { Calendar, Users, Globe, Tag, Wallet } from "lucide-react";

const cx = classNames.bind(styles);

const CAMPAIGN_DETAIL_URL = "campaign";
const JOIN_CAMPAIGN_URL = "campaignmember";
const CampaignDetailsPage = () => {
  const { campaignId } = useParams();
  const [campaign, setCampaign] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasJoined, setHasJoined] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    if (!Cookies.get('access_token')) {
      navigate(config.routes.login); 
    }
  }, [navigate]);

  useEffect(() => {
    const fetchCampaign = async () => {
      try {
        const response = await requestsPrivate.get(
          `${CAMPAIGN_DETAIL_URL}/${campaignId}`
        );
        if (!response.data) {
          throw new Error("Failed to fetch campaign data");
        }
        console.log(response);
        
        const data = response.data.data;
        setHasJoined(data.isJoin);
        setCampaign(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCampaign();
  }, [campaignId]);

  const handleJoinCampaign = async () => {
    try {
      const response = await requestsPrivate.post(
        `${JOIN_CAMPAIGN_URL}/${campaignId}/join`
      );
      if (response.data && response.data.code === 200) {
        setHasJoined(true);
      } else {
        throw new Error(response.data.message || "Failed to join the campaign");
      }
    } catch (err) {
      alert(err.message);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };


  const antIcon = <LoadingOutlined style={{ fontSize: 48, color: "#FF6B1E" }} spin />;

  if (loading) return (
    <div className={cx("loading-container")}>
      <Spin indicator={antIcon} />
    </div>
  );

  if (error) return <div className={cx("error-message")}>Error: {error}</div>;
  if (!campaign) return <div className={cx("no-data")}>No campaign data available</div>;

  return (
    <Container className={cx("campaign-container")}>
      <Row className={cx("campaign-header")}>
        <Col md={5} className={cx("image-col")}>
          <div className={cx("image-wrapper")}>
            <img
              src={campaign.image}
              alt={campaign.campaignName}
              className={cx("campaign-image")}
            />
            <Badge bg="success" className={cx("status-badge")}>
              {campaign.status}
            </Badge>
          </div>
        </Col>
        
        <Col md={7} className={cx("info-col")}>
          <div className={cx("campaign-meta")}>
            <span className={cx("category")}>
              <Tag size={16} /> {campaign.categoryName}
            </span>
          </div>
          
          <h1 className={cx("campaign-title")}>{campaign.campaignName}</h1>
          
          <p className={cx("campaign-intro")}>{campaign.introduction}</p>
          <p className={cx("campaign-desc")}>{campaign.description}</p>
          
          <div className={cx("stats-grid")}>
            <div className={cx("stat-item")}>
              <div className={cx("stat-icon")}>
                <Wallet size={20} />
              </div>
              <div>
                <div className={cx("stat-label")}>Budget</div>
                <div className={cx("stat-value")}>{campaign.budget.toLocaleString()} VND</div>
              </div>
            </div>
            
            <div className={cx("stat-item")}>
              <div className={cx("stat-icon")}>
                <Tag size={20} />
              </div>
              <div>
                <div className={cx("stat-label")}>Conversion</div>
                <div className={cx("stat-value")}>{(campaign.conversionRate * 100).toFixed(1)}%</div>
              </div>
            </div>
            
            <div className={cx("stat-item")}>
              <div className={cx("stat-icon")}>
                <Users size={20} />
              </div>
              <div>
                <div className={cx("stat-label")}>Participants</div>
                <div className={cx("stat-value")}>{campaign.enrollCount}</div>
              </div>
            </div>
            
            <div className={cx("stat-item")}>
              <div className={cx("stat-icon")}>
                <Calendar size={20} />
              </div>
              <div>
                <div className={cx("stat-label")}>Duration</div>
                <div className={cx("stat-value")}>
                  {formatDate(campaign.startDate)} - {formatDate(campaign.endDate)}
                </div>
              </div>
            </div>
          </div>
          
          {hasJoined ? (
            <Button
              className={cx("action-button", "create-btn")}
              onClick={() => navigate(config.routes.createLinkStep1, { state: { campaign } })}
            >
              CREATE LINK
            </Button>
          ) : (
            <Button
              className={cx("action-button", "join-btn")}
              onClick={handleJoinCampaign}
              disabled={hasJoined}
            >
              JOIN CAMPAIGN
            </Button>
          )}
        </Col>
      </Row>

      <Row className={cx("campaign-details")}>
        <Col md={8}>
          <section className={cx("detail-section")}>
            <h3 className={cx("section-title")}>
              <Globe size={20} className="me-2" />
              Campaign Details
            </h3>
            <div className={cx("section-content")}>
              <h4 className={cx("subsection-title")}>Policy</h4>
              <p className={cx("subsection-text")}>{campaign.policy}</p>
              
              <h4 className={cx("subsection-title")}>Target Audience</h4>
              <p className={cx("subsection-text")}>{campaign.targetCustomer}</p>
              
              <h4 className={cx("subsection-title")}>Coverage Zone</h4>
              <p className={cx("subsection-text")}>{campaign.zone}</p>
            </div>
          </section>
        </Col>
        
        <Col md={4} className={cx("website-col")}>
          {campaign.websiteLink && (
            <div className={cx("website-card")}>
              <h4 className={cx("website-title")}>Official Website</h4>
              <a 
                href={campaign.websiteLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className={cx("website-link")}
              >
                {campaign.websiteLink.replace(/(^\w+:|^)\/\//, '')}
              </a>
            </div>
          )}
          
          {campaign.payoutModelName && campaign.payoutModelName.length > 0 && (
            <div className={cx("payout-card")}>
              <h4 className={cx("payout-title")}>Payout Models</h4>
              <ul className={cx("payout-list")}>
                {campaign.payoutModelName.map((model, index) => (
                  <li key={index} className={cx("payout-item")}>
                    {model}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CampaignDetailsPage;