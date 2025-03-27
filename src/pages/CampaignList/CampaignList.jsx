import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./CampaignList.module.scss";
import Header from "../../components/HeaderPublisher/Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Star,
  Users,
  MessageSquare,
  DollarSign,
  Calendar,
} from "lucide-react";
import { Link } from "react-router-dom";
import { requestsPrivate } from "../../utils/requests";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const cx = classNames.bind(styles);

const CAMPAIGN_LIST_URL = "campaign/filter";
const CATEGORY_LIST_URL = "category";
const PAYOUTMETHOD_LIST_URL = "payoutmodel";

const CustomPrevArrow = (props) => (
  <button onClick={props.onClick} className={cx("custom-arrow", "prev-arrow")}>
    <ChevronLeft size={24} />
  </button>
);

const CustomNextArrow = (props) => (
  <button onClick={props.onClick} className={cx("custom-arrow", "next-arrow")}>
    <ChevronRight size={24} />
  </button>
);

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
};

function CampaignList() {
  const [allCampaigns, setAllCampaigns] = useState([]); 
  const [filteredCampaigns, setFilteredCampaigns] = useState([]); 
  const [payoutMethods, setPayoutMethods] = useState([]);
  const [categories, setCategories] = useState([]); 
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    pageSize: 12,
    hasNextPage: false,
    hasPreviousPage: false,
  });

  const antIcon = <LoadingOutlined style={{ fontSize: 48, color: "#1890ff" }} spin />;
const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState({
    category: "All",
    payoutMethodId: "All",
    startDate: "",
    endDate: "",
    searchKeyword: "",
  });
  const [tempFilter, setTempFilter] = useState({
    category: "All",
    payoutMethodId: "All",
    startDate: "",
    endDate: "",
    searchKeyword: "",
  });
  const [activeFilters, setActiveFilters] = useState({});

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

  useEffect(() => {
    const fetchAllCampaigns = async () => {
      try {
        const params = {
          status: "Active",
          pageIndex: 1,
          pageSize: 10, 
        };
        setLoading(true); 
        const response = await requestsPrivate.get(CAMPAIGN_LIST_URL, { params });
        if (response.data && response.data.data) {
          setAllCampaigns(response.data.data.items);
        }
      } catch (error) {
        console.error("Error fetching all campaigns:", error);
       } finally {
        setLoading(false);
      }
    };

    fetchAllCampaigns();
  }, []);

  useEffect(() => {
    const fetchFilteredCampaigns = async () => {
      try {
        const params = {
          name: filter.searchKeyword || "",
          status: "Active",
          startDate: filter.startDate || "",
          endDate: filter.endDate || "",
          payoutMethodId: filter.payoutMethodId !== "All" ? filter.payoutMethodId : "",
          categoryId: filter.category !== "All" ? filter.category : "",
          pageIndex: pagination.currentPage,
          pageSize: pagination.pageSize,
        };

        const response = await requestsPrivate.get(CAMPAIGN_LIST_URL, { params });
        if (response.data && response.data.data) {
          setFilteredCampaigns(response.data.data.items);
          setPagination({
            currentPage: response.data.data.currentPage,
            totalPages: response.data.data.totalPages,
            pageSize: response.data.data.pageSize,
            hasNextPage: response.data.data.hasNextPage,
            hasPreviousPage: response.data.data.hasPreviousPage,
          });
        }
      } catch (error) {
        console.error("Error fetching filtered campaigns:", error);
      }
    };

    fetchFilteredCampaigns();
  }, [filter, pagination.currentPage]);

  const handleFilterChange = (key, value) => {
    setTempFilter({ ...tempFilter, [key]: value });

    if (value === "All") {
      const updatedFilters = { ...activeFilters };
      delete updatedFilters[key];
      setActiveFilters(updatedFilters);
    } else {
      setActiveFilters({ ...activeFilters, [key]: value });
    }
  };

  const handleResetFilters = () => {
    setFilter({
      category: "All",
      payoutMethodId: "All",
      startDate: "",
      endDate: "",
      searchKeyword: "",
    });
    setTempFilter({
      category: "All",
      payoutMethodId: "All",
      startDate: "",
      endDate: "",
      searchKeyword: "",
    });
    setActiveFilters({});
  };

  const handlePageChange = (newPage) => {
    setPagination({
      ...pagination,
      currentPage: newPage,
    });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const featuredEvents = allCampaigns.map((campaign) => ({
    id: campaign.id,
    name: campaign.campaignName,
    image: campaign.image,
    subtitle: "Limited Time Offer",
    description: `Valid from ${formatDate(campaign.startDate)} to ${formatDate(campaign.endDate)}`,
  }));

  const handleApplyFilters = () => {
    setFilter(tempFilter);
    setPagination({
      ...pagination,
      currentPage: 1,
    });
  };

  return (
    <div>
    <div className={cx("page-wrapper")}>
      <Header />
        {loading && (
        <div className={cx("loading-overlay")}>
          <Spin indicator={antIcon} className={cx("loading-spinner")} />
        </div>
      )}
      <div className={cx("container-campaign")}>
        <div className={cx("container-section")}>
          <section className={cx("events-section")}>
            <Slider {...sliderSettings} className={cx("events-slider")}>
              {featuredEvents.map((event) => (
                <div key={event.id} className={cx("event-slide")}>
                  <div className={cx("event-content")}>
                    <img src={event.image} alt={event.name} />
                    <div className={cx("event-overlay")}>
                      <div className={cx("event-text")}>
                        <h2>{event.name}</h2>
                        <p className={cx("event-subtitle")}>{event.subtitle}</p>
                        <p className={cx("event-description")}>
                          {event.description}
                        </p>
                        <button className={cx("event-cta")}>Learn More</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </section>
        </div>

        <section className={cx("main-content")}>
          <div className={cx("filter-section")}>
            <div className={cx("filter-header")}>
              <div className={cx("icon-filter")}>
                <i className="bi bi-funnel-fill"></i>
                <span>Filter</span>
              </div>
              <div className={cx("search-box")}>
                <Search size={20} />
                <input
                  type="text"
                  placeholder="Search campaigns..."
                  onChange={(e) =>
                    handleFilterChange("searchKeyword", e.target.value)
                  }
                />
              </div>
            </div>

            <div className={cx("filters")}>
              <div className={cx("filter-group")}>
                <label>Category</label>
                <select
                  value={tempFilter.category}
                  onChange={(e) => handleFilterChange("category", e.target.value)}
                >
                  <option value="All">All</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className={cx("filter-group")}>
                <label>Date Range</label>
                <div className={cx("date-range")}>
                  <input
                    type="date"
                    value={tempFilter.startDate}
                    onChange={(e) => handleFilterChange("startDate", e.target.value)}
                  />
                  <span>to</span>
                  <input
                    type="date"
                    value={tempFilter.endDate}
                    onChange={(e) => handleFilterChange("endDate", e.target.value)}
                  />
                </div>
              </div>

              <div className={cx("filter-group")}>
                <label>Payout Method</label>
                <select
                  value={tempFilter.payoutMethodId}
                  onChange={(e) => handleFilterChange("payoutMethodId", e.target.value)}
                >
                  <option value="All">All</option>
                  {payoutMethods.map((method) => (
                    <option key={method.id} value={method.id}>
                      {method.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className={cx("filter-group")}>
                <div className={cx("button-group")}>
                  <button
                    className={cx("reset-button", "button")}
                    onClick={handleResetFilters}
                  >
                    Reset
                  </button>

                  <button
                    className={cx("apply-button", "button")}
                    onClick={handleApplyFilters}
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className={cx("campaign-list")}>
            {filteredCampaigns.map((campaign) => {
              const today = new Date();
              const endDate = new Date(campaign.endDate);
              const startDate = new Date(campaign.startDate);
              const status = today > endDate ? "Completed" : 
                             today < startDate ? "Upcoming" : "Active";
              
              const totalDuration = endDate - startDate;
              const elapsed = today - startDate;
              const progress = Math.max(0, Math.min(100, (elapsed / totalDuration) * 100));
              
              return (
                <Link className={cx("campaign-card")} key={campaign.id} to={`/campaign/${campaign.id}`} state={{ key: campaign.id }}>
                  <div className={cx("campaign-item")}>
                    <div className={cx("campaign-image")}>
                      <img src={campaign.image} alt={campaign.campaignName} />
                      <div className={cx("campaign-badge")}>{status}</div>
                      <div className={cx("stat-member")}>
                        <Users className={cx("stat-icon")} />
                        <span className={cx("stat-value")}>{campaign.enrollCount}</span>
                      </div>
                    </div>
                    <div className={cx("campaign-details")}>
                      <h3>{campaign.campaignName}</h3>
                      <div className={cx("campaign-stats")}>
                        <div className={cx("stat")}>
                          <span className={cx("stat-value")}>{campaign.conversionRate}%</span>
                          <Star className={cx("stat-icon")} />
                        </div>
                        <div className={cx("stat")}>
                          <Calendar className={cx("stat-icon")} />
                          <span className={cx("stat-value")}>
                            {formatDate(campaign.startDate)}
                          </span>
                        </div>
                      </div>
                      <div className={cx("progress-bar")}>
                        <div
                          className={cx("progress-bar-fill")}
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                      <div className={cx("create-date")}>
                        Ends: {formatDate(campaign.endDate)}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {pagination.totalPages > 1 && (
            <div className={cx("pagination")}>
              <button 
                disabled={!pagination.hasPreviousPage}
                className={cx("pagination-button")}
                onClick={() => handlePageChange(pagination.currentPage - 1)}
              >
                <ChevronLeft size={16} />
                Previous
              </button>
              <span className={cx("page-info")}>
                Page {pagination.currentPage} of {pagination.totalPages}
              </span>
              <button 
                disabled={!pagination.hasNextPage}
                className={cx("pagination-button")} 
                onClick={() => handlePageChange(pagination.currentPage + 1)}
              >
                Next
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
    </div>
  );
}

export default CampaignList;