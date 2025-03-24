import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./CreateCampaign.module.scss";
import { Plus, Upload } from "lucide-react";
import { requestsPrivate } from "../../../../utils/requests";

const cx = classNames.bind(styles);

const CREATE_CAMPAIGN_URL = "campaign/create";
const CATEGORY_LIST_URL = "category";
const PAYOUTMETHOD_LIST_URL = "payoutmodel";

const CreateCampaign = () => {
  const [payoutMethods, setPayoutMethods] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [campaign, setCampaign] = useState({
    name: "",
    type: "",
    category: "",
    website: "",
    commissionType: "FIX",
    commissionValue: "",
    maxCommissionRate: "",
    maxCommissionValue: "",
    description: "",
    introduction: "",
    policy: "",
    targetCustomer: "",
    zone: "",
    startDate: "",
    endDate: "",
    image: "",
    payoutMethods: [],
  });

  const handleChange = (e) => {
    const { name, value, options } = e.target;

    if (name === "payoutMethods") {
      const selectedOptions = Array.from(options)
        .filter((option) => option.selected)
        .map((option) => option.value);

      setCampaign((prev) => ({
        ...prev,
        [name]: selectedOptions,
      }));
    } else {
      setCampaign((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await requestsPrivate.get(CATEGORY_LIST_URL);
        if (response.data && response.data.data) {
          setCategories(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchPayoutMethods = async () => {
      try {
        const response = await requestsPrivate.get(PAYOUTMETHOD_LIST_URL);
        if (response.data && response.data.data) {
          setPayoutMethods(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching payout methods:", error);
      }
    };

    fetchPayoutMethods();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const campaignData = {
        campaignName: campaign.name,
        description: campaign.description,
        introduction: campaign.introduction,
        policy: campaign.policy,
        image: campaign.image,
        websiteLink: campaign.website,
        targetCustomer: campaign.targetCustomer,
        zone: campaign.zone,
        startDate: campaign.startDate || new Date().toISOString(),
        endDate:
          campaign.endDate ||
          new Date(
            new Date().setMonth(new Date().getMonth() + 3)
          ).toISOString(),
        categoryId: campaign.category,
        payoutModelsId: campaign.payoutMethods,
      };

      const response = await requestsPrivate.post(
        CREATE_CAMPAIGN_URL,
        campaignData
      );

      setShowSuccessPopup(true);

      console.log("Campaign created successfully:", response.data);
    } catch (error) {
      console.error("Error creating campaign:", error);
      alert("Failed to create campaign. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCampaign((prev) => ({
        ...prev,
        image: file.name,
      }));
    }
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    setCampaign((prev) => {
      let updatedPayoutMethods = [...prev.payoutMethods];

      if (checked) {
        updatedPayoutMethods.push(value);
      } else {
        updatedPayoutMethods = updatedPayoutMethods.filter(
          (id) => id !== value
        );
      }

      return {
        ...prev,
        payoutMethods: updatedPayoutMethods,
      };
    });
  };

  const closePopup = () => {
    setShowSuccessPopup(false);
  };

  return (
    <div className={cx("create-campaign")}>
      {showSuccessPopup && (
        <div className={cx("success-popup")}>
          <div className={cx("popup-content")}>
            <div className={cx("success-icon")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3>Campaign Created!</h3>
            <p className={cx("success-message")}>
              Your campaign has been created successfully and is pending
              approval from the admin.
            </p>

            <div className={cx("campaign-detail")}>
              <div className={cx("detail-label")}>Campaign Name</div>
              <div className={cx("detail-value")}>{campaign.name}</div>
            </div>

            <div className={cx("buttons-container")}>
              <button onClick={closePopup} className={cx("close-button")}>
                Close
              </button>
              <button className={cx("view-button")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                View
              </button>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className={cx("form-grid")}>
          <div className={cx("form-column")}>
            <div className={cx("upload-section")}>
              <div className={cx("upload-box")}>
                <label
                  htmlFor="campaign-image"
                  className={cx("upload-label")}
                  onChange={handleFileUpload}
                >
                  <div className={cx("upload-icon")}>
                    <Upload size={40} color="#1E88E5" />
                  </div>
                  <div className={cx("upload-text")}>Browse Files</div>
                </label>
              </div>
              {campaign.image && (
                <div className={cx("selected-file")}>
                  Selected: {campaign.image}
                </div>
              )}
            </div>

            <div className={cx("form-section")}>
              <label className={cx("section-label")}>Introduction</label>
              <textarea
                name="introduction"
                value={campaign.introduction}
                onChange={handleChange}
                className={cx("textarea-field")}
                rows="6"
              />
            </div>

            <div className={cx("form-row")}>
              <div className={cx("form-section")}>
                <label className={cx("section-label")}>Policy</label>
                <textarea
                  name="policy"
                  value={campaign.policy}
                  onChange={handleChange}
                  className={cx("textarea-field")}
                  rows="4"
                  placeholder="1. Value"
                />
              </div>
            </div>
          </div>

          <div className={cx("form-column")}>
            <div className={cx("form-row")}>
              <div className={cx("form-group")}>
                <label className={cx("input-label")}>
                  <span className={cx("required")}>*</span>Campaign Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={campaign.name}
                  onChange={handleChange}
                  className={cx("input-field")}
                  required
                />
              </div>
              <div className={cx("form-group")}>
                <label className={cx("input-label")}>
                  <span className={cx("required")}>*</span>Link Website
                </label>
                <input
                  type="text"
                  name="website"
                  value={campaign.website}
                  onChange={handleChange}
                  className={cx("input-field")}
                  required
                />
              </div>
            </div>

            <div className={cx("form-row")}>
              <div className={cx("form-group")}>
                <label className={cx("input-label")}>
                  <span className={cx("required")}>*</span>Payout Methods
                </label>
                <div className={cx("checkbox-list")}>
                  {payoutMethods.map((method) => (
                    <div key={method.id} className={cx("checkbox-item")}>
                      <input
                        type="checkbox"
                        id={`payout-method-${method.id}`}
                        name="payoutMethods"
                        value={method.id}
                        checked={campaign.payoutMethods.includes(method.id)}
                        onChange={handleCheckboxChange}
                      />
                      <label htmlFor={`payout-method-${method.id}`}>
                        {method.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className={cx("form-group")}>
                <label className={cx("input-label")}>
                  <span className={cx("required")}>*</span>Category
                </label>
                <div className={cx("select-wrapper")}>
                  <select
                    name="category"
                    value={campaign.category}
                    onChange={handleChange}
                    className={cx("select-field")}
                    required
                  >
                    <option value="" disabled>
                      Select Categories
                    </option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className={cx("form-row")}>
              <div className={cx("form-group")}>
                <label className={cx("input-label")}>
                  <span className={cx("required")}>*</span>Conversion Rate
                </label>
                <input
                  type="text"
                  name="commissionValue"
                  value={campaign.commissionValue}
                  onChange={handleChange}
                  className={cx("input-field")}
                  placeholder="0.00"
                  required
                />
              </div>
              <div className={cx("form-group")}>
                <label className={cx("input-label")}>Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  value={campaign.startDate}
                  onChange={handleChange}
                  className={cx("input-field")}
                />
              </div>
              <div className={cx("form-group")}>
                <label className={cx("input-label")}>End Date</label>
                <input
                  type="date"
                  name="endDate"
                  value={campaign.endDate}
                  onChange={handleChange}
                  className={cx("input-field")}
                />
              </div>
            </div>

            <div className={cx("form-section")}>
              <label className={cx("section-label")}>Description</label>
              <textarea
                name="description"
                value={campaign.description}
                onChange={handleChange}
                className={cx("textarea-field")}
                rows="6"
              />
            </div>

            <div className={cx("form-row")}>
              <div className={cx("form-section")}>
                <label className={cx("section-label")}>Target Customer</label>
                <textarea
                  name="targetCustomer"
                  value={campaign.targetCustomer}
                  onChange={handleChange}
                  className={cx("textarea-field")}
                  rows="4"
                  placeholder="1. Value"
                />
              </div>
              <div className={cx("form-section")}>
                <label className={cx("section-label")}>Zone</label>
                <textarea
                  name="zone"
                  value={campaign.zone}
                  onChange={handleChange}
                  className={cx("textarea-field")}
                  rows="4"
                  placeholder="1. Value"
                />
              </div>
            </div>
          </div>
        </div>

        <div className={cx("submit-section")}>
          <button
            type="submit"
            className={cx("submit-button")}
            disabled={isLoading}
          >
            {isLoading ? (
              "Creating..."
            ) : (
              <>
                <Plus size={16} />
                Create Campaign
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCampaign;
