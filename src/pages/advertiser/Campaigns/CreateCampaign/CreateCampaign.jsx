import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./CreateCampaign.module.scss";
import { Plus, Upload } from "lucide-react";
import { requestsPrivate } from "../../../../utils/requests";
import { Link } from "react-router-dom";
import { Spin } from "antd";
import config from "../../../../config";

const cx = classNames.bind(styles);

const CREATE_CAMPAIGN_URL = "campaign/create";
const CATEGORY_LIST_URL = "category";
const PAYOUTMETHOD_LIST_URL = "payoutmodel";

const CreateCampaign = () => {
  const [payoutMethods, setPayoutMethods] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [dataResponse, setDataResponse] = useState();
  const [errors, setErrors] = useState({
    budget: "",
  });
  const [campaign, setCampaign] = useState({
    name: "",
    category: "",
    website: "",
    commissionValue: "",
    description: "",
    introduction: "",
    policy: "",
    targetCustomer: "",
    zone: "",
    startDate: "",
    endDate: "",
    image: null,
    payoutMethods: [],
    budget: "",
  });
  const [previewImage, setPreviewImage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "budget") {
      const numValue = parseFloat(value);

      if (isNaN(numValue) || numValue < 1000000) {
        setErrors((prev) => ({
          ...prev,
          budget: "Budget must be at least 1,000,000 VND",
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          budget: "",
        }));
      }
    }
    setCampaign((prev) => ({
      ...prev,
      [name]: value,
    }));
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
      const formatDate = (dateString) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        return date.toISOString();
      };

      const queryParams = new URLSearchParams();
      queryParams.append("CampaignName", campaign.name);
      queryParams.append("Description", campaign.description || "");
      queryParams.append("Introduction", campaign.introduction || "");
      queryParams.append("Policy", campaign.policy || "");
      queryParams.append("WebsiteLink", campaign.website || "");
      queryParams.append("TargetCustomer", campaign.targetCustomer || "");
      queryParams.append("Zone", campaign.zone || "");
      queryParams.append("ConversionRate", campaign.commissionValue);
      queryParams.append("StartDate", formatDate(campaign.startDate));
      queryParams.append("EndDate", formatDate(campaign.endDate));
      queryParams.append("CategoryId", campaign.category);
      queryParams.append("Budget", campaign.budget);

      campaign.payoutMethods.forEach((id) => {
        queryParams.append("PayoutModelsId", id);
      });

      const formData = new FormData();
      if (campaign.image) {
        formData.append("Image", campaign.image);
      }

      const response = await requestsPrivate.post(
        `${CREATE_CAMPAIGN_URL}?${queryParams.toString()}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setShowSuccessPopup(true);
      console.log("Campaign created successfully:", response.data.data);
      setDataResponse(response.data.data);
    } catch (error) {
      console.error("Error creating campaign:", error);
      if (error.response) {
        const errorMessage =
          error.response.data?.message ||
          error.response.data?.title ||
          "Failed to create campaign";

        console.error("Error details:", error.response.data);
        alert(`Error: ${errorMessage}`);
      } else {
        alert("Network error - Please check your connection");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCampaign((prev) => ({
        ...prev,
        image: file,
      }));

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
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
      <Spin
        spinning={isLoading}
        fullscreen
        size="large"
        delay={300}
        className="custom-spin"
      />

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
              <Link
                className={cx("campaign-card")}
                key={dataResponse.id}
                to={config.routes.overviewAdvertiser}
                state={{ key: dataResponse.id }}
              >
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
              </Link>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className={cx("form-grid")}>
          <div className={cx("form-column")}>
            <div className={cx("upload-section")}>
              <div className={cx("upload-box")}>
                <label htmlFor="campaign-image" className={cx("upload-label")}>
                  {previewImage ? (
                    <img
                      src={previewImage}
                      alt="Preview"
                      className={cx("preview-image")}
                    />
                  ) : (
                    <>
                      <div className={cx("upload-icon")}>
                        <Upload size={40} color="#1E88E5" />
                      </div>
                      <div className={cx("upload-text")}>Browse Files</div>
                    </>
                  )}
                </label>
                <input
                  id="campaign-image"
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  style={{ display: "none" }}
                />
              </div>
              {campaign.image && (
                <div className={cx("selected-file")}>
                  Selected: {campaign.image.name}
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
                  <span className={cx("required")}>*</span>Budget (VND)
                </label>
                <input
                  type="number"
                  name="budget"
                  value={campaign.budget}
                  onChange={handleChange}
                  className={cx("input-field", { error: errors.budget })}
                  placeholder="Minimum 1,000,000 VND"
                  required
                  min="1000000"
                  step="100000"
                />
                {errors.budget && (
                  <div className={cx("error-message")}>{errors.budget}</div>
                )}
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
            <>
              <Plus size={16} />
              Create Campaign
            </>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCampaign;
