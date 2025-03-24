import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./ManageLink.module.scss";
import { requestsPrivate } from "../../../utils/requests";
import { useNavigate } from "react-router-dom";
import { Link, Link2, Link2Off, LinkIcon } from "lucide-react";
import config from "../../../config";

const cx = classNames.bind(styles);

const LIST_JOINED_CAMPAIGN_URL = "campaign/list_join_campaign";

function ManageLink() {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const navigate = useNavigate();

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const fetchCampaigns = async () => {
    try {
      setLoading(true);
      const response = await requestsPrivate.get(LIST_JOINED_CAMPAIGN_URL);
      setCampaigns(response.data.data || []);
      setError(null);
    } catch (err) {
      setError("Failed to load campaigns. Please try again later.");
      console.error("Error fetching campaigns:", err);
    } finally {
      setLoading(false);
    }
  };

  const filteredCampaigns = campaigns.filter((campaign) => {
    const matchesSearch = campaign.campaignName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus =
      selectedStatus === "All" || campaign.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const handleImageError = (e) => {
    e.target.src = "/fallback-image.png";
  };

  return (
    <div className={cx("manage-link-container")}>
      <div className={cx("header")}>
        <h1 className={cx("title")}>Manage Your Campaigns</h1>
        <p className={cx("subtitle")}>
          View and manage all campaigns you've joined
        </p>
      </div>

      <div className={cx("controls")}>
        <div className={cx("search-box")}>
          <input
            type="text"
            placeholder="Search campaigns..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={cx("search-input")}
          />
          <div className={cx("search-icon")}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className={cx("filter-container")}>
          <select
            className={cx("status-filter")}
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="All">All Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Completed</option>
          </select>
        </div>

        <button className={cx("refresh-button")} onClick={fetchCampaigns}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 4V10H7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23 20V14H17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.49 9C19.9828 7.56678 19.1209 6.2854 17.9845 5.27542C16.8482 4.26543 15.4745 3.55976 13.9917 3.22426C12.5089 2.88875 10.9652 2.93464 9.50481 3.35677C8.04437 3.77891 6.71475 4.56235 5.64 5.64L1 10M23 14L18.36 18.36C17.2853 19.4377 15.9556 20.2211 14.4952 20.6432C13.0348 21.0654 11.4911 21.1113 10.0083 20.7757C8.52547 20.4402 7.1518 19.7346 6.01547 18.7246C4.87913 17.7146 4.01717 16.4332 3.51 15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Refresh
        </button>
      </div>

      {loading ? (
        <div className={cx("loading-container")}>
          <div className={cx("spinner")}></div>
          <p>Loading campaigns...</p>
        </div>
      ) : error ? (
        <div className={cx("error-container")}>
          <div className={cx("error-icon")}>
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className={cx("error-message")}>{error}</p>
          <button className={cx("retry-button")} onClick={fetchCampaigns}>
            Try Again
          </button>
        </div>
      ) : filteredCampaigns.length === 0 ? (
        <div className={cx("empty-state")}>
          <div className={cx("empty-icon")}>
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 6C3 4.34315 4.34315 3 6 3H14C15.6569 3 17 4.34315 17 6V18C17 19.6569 15.6569 21 14 21H6C4.34315 21 3 19.6569 3 18V6Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 3V7C8 7.55228 7.55228 8 7 8H6C5.44772 8 5 7.55228 5 7V3"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 3V7C14 7.55228 13.5523 8 13 8H12C11.4477 8 11 7.55228 11 7V3"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17 8H21V16C21 17.6569 19.6569 19 18 19H17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 12H13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 16H13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className={cx("empty-message")}>No campaigns found</p>
          <p className={cx("empty-description")}>
            {searchTerm || selectedStatus !== "All"
              ? "Try changing your search criteria"
              : "Join some campaigns to see them here"}
          </p>
        </div>
      ) : (
        <div className={cx("campaign-grid")}>
          {filteredCampaigns.map((campaign) => (
            <div key={campaign.id} className={cx("campaign-card")}>
              <div className={cx("campaign-image-container")}>
                <img
                  src={campaign.url}
                  alt={campaign.campaignName}
                  className={cx("campaign-image")}
                  onError={handleImageError}
                />
                <div
                  className={cx(
                    "campaign-status",
                    campaign.status.toLowerCase()
                  )}
                >
                  {campaign.status}
                </div>
              </div>
              <div className={cx("campaign-info")}>
                <h3 className={cx("campaign-name")}>{campaign.campaignName}</h3>
                <div className={cx("campaign-actions")}>
                  <button
                    className={cx("action-button", "view")}
                    onClick={() => navigate(`/campaign/${campaign.id}`)}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2.45825 12C3.73253 7.94288 7.52281 5 12.0004 5C16.4781 5 20.2684 7.94291 21.5426 12C20.2684 16.0571 16.4781 19 12.0005 19C7.52281 19 3.73251 16.0571 2.45825 12Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    View
                  </button>
                  <button
                    className={cx("action-button", "create")}
                    onClick={() =>
                      navigate(config.routes.linkOfCampaign, {
                        state: { campaign },
                      })
                    }
                  >
                    <Link2 />
                    List Link
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ManageLink;
