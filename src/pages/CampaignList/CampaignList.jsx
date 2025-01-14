import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./CampaignList.module.scss";
import Header from "../../components/Header";
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
  DollarSignIcon,
} from "lucide-react";

const cx = classNames.bind(styles);

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

const campaigns = [
  {
    id: 1,
    name: "SAMSUNG SHOP APP",
    category: "Easy monetization campaigns",
    status: "Active",
    image:
      "https://www.tierra.vn/wp-content/uploads/2024/11/black-friday-sieu-sale-trang-suc-tai-tierra.webp",
    rate: 4.8,
    feedbacks: 118,
    member: 285,
    commission: 17,
    createdate: "21/03/2024",
    progress: 75,
    badge: "Limited",
  },
  {
    id: 2,
    name: "MASTERCARD",
    category: "Easy monetization campaigns",
    status: "Active",
    image: "https://metfit.org/wp-content/uploads/2023/06/IMG_7413.jpg",
    rate: 4.8,
    feedbacks: 118,
    member: 285,
    commission: 17,
    createdate: "21/03/2024",
    progress: 75,
    badge: "Hot",
  },
  {
    id: 3,
    name: "FECREDIT ONLINE",
    category: "Easy monetization campaigns",
    status: "Active",
    image:
      "https://img.freepik.com/premium-vector/back-school-campaign-vector-design-welcome-back-school-stay-safe-text_572288-1946.jpg",
    rate: 4.8,
    feedbacks: 118,
    member: 285,
    commission: 17,
    createdate: "21/03/2024",
    progress: 75,
    badge: "New",
  },
  {
    id: 4,
    name: "FECREDIT ONLINE",
    category: "Easy monetization campaigns",
    status: "Active",
    image:
      "https://www.tierra.vn/wp-content/uploads/2024/11/black-friday-sieu-sale-trang-suc-tai-tierra.webp",
    rate: 4.8,
    feedbacks: 118,
    member: 285,
    commission: 17,
    createdate: "21/03/2024",
    progress: 75,
    badge: "Hot",
  },
  {
    id: 5,
    name: "SAMSUNG SHOP APP",
    category: "Easy monetization campaigns",
    status: "Active",
    image:
      "https://www.tierra.vn/wp-content/uploads/2024/11/black-friday-sieu-sale-trang-suc-tai-tierra.webp",
    rate: 4.8,
    feedbacks: 118,
    member: 285,
    commission: 17,
    createdate: "21/03/2024",
    progress: 75,
    badge: "Limited",
  },
  {
    id: 6,
    name: "MASTERCARD",
    category: "Easy monetization campaigns",
    status: "Active",
    image: "https://metfit.org/wp-content/uploads/2023/06/IMG_7413.jpg",
    rate: 4.8,
    feedbacks: 118,
    member: 285,
    commission: 17,
    createdate: "21/03/2024",
    progress: 75,
    badge: "Hot",
  },
  {
    id: 7,
    name: "FECREDIT ONLINE",
    category: "Easy monetization campaigns",
    status: "Active",
    image:
      "https://img.freepik.com/premium-vector/back-school-campaign-vector-design-welcome-back-school-stay-safe-text_572288-1946.jpg",
    rate: 4.8,
    feedbacks: 118,
    member: 285,
    commission: 17,
    createdate: "21/03/2024",
    progress: 75,
    badge: "New",
  },
  {
    id: 8,
    name: "FECREDIT ONLINE",
    category: "Easy monetization campaigns",
    status: "Active",
    image:
      "https://www.tierra.vn/wp-content/uploads/2024/11/black-friday-sieu-sale-trang-suc-tai-tierra.webp",
    rate: 4.8,
    feedbacks: 118,
    member: 285,
    commission: 17,
    createdate: "21/03/2024",
    progress: 75,
    badge: "Hot",
  },
];

const categories = [
  { id: 1, name: "Category 1", image: "https://placehold.co/200" },
  { id: 2, name: "Category 2", image: "https://via.placeholder.com/200" },
  { id: 3, name: "Category 3", image: "https://via.placeholder.com/200" },
];

function CampaignList() {
  const [filter, setFilter] = useState({
    status: "Active",
    category: "All",
    sortBy: "Views",
  });
  const [activeFilters, setActiveFilters] = useState({});

  const handleFilterChange = (key, value) => {
    setFilter({ ...filter, [key]: value });

    if (value === "All") {
      const updatedFilters = { ...activeFilters };
      delete updatedFilters[key];
      setActiveFilters(updatedFilters);
    } else {
      setActiveFilters({ ...activeFilters, [key]: value });
    }
  };

  const removeFilter = (key) => {
    const updatedFilters = { ...activeFilters };
    delete updatedFilters[key];
    setActiveFilters(updatedFilters);

    setFilter({ ...filter, [key]: "All" });
  };
  const handleResetFilters = () => {
    console.log("Filters reset");
  };

  const featuredEvents = campaigns.slice(0, 3).map((campaign) => ({
    ...campaign,
    subtitle: "Limited Time Offer",
    description: "Join now and get special rewards!",
  }));

  const filteredCampaigns = campaigns.filter(
    (campaign) =>
      (filter.status === "All" || campaign.status === filter.status) &&
      (filter.category === "All" || campaign.category === filter.category)
  );

  return (
    <div className={cx("page-wrapper")}>
      <Header />
      <div className={cx("container-campaign")}>
        <div className={cx("container-section")}>
          <section className={cx("events-section")}>
            <Slider {...sliderSettings} className={cx("events-slider")}>
              {featuredEvents.map((event, index) => (
                <div key={index} className={cx("event-slide")}>
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
                <i class="bi bi-funnel-fill"></i>
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
                <label>Status</label>
                <select
                  onChange={(e) => handleFilterChange("status", e.target.value)}
                >
                  <option value="All">All</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Pending">Pending</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>

              <div className={cx("filter-group")}>
                <label>Category</label>
                <select
                  onChange={(e) =>
                    handleFilterChange("category", e.target.value)
                  }
                >
                  <option value="All">All</option>
                  <option value="Easy monetization campaigns">
                    Easy monetization campaigns
                  </option>
                  <option value="Gaming">Gaming</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="Education">Education</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className={cx("filter-group")}>
                <label>Payout Type</label>
                <select
                  onChange={(e) =>
                    handleFilterChange("payoutType", e.target.value)
                  }
                >
                  <option value="All">All</option>
                  <option value="CPI">CPI (Cost Per Install)</option>
                  <option value="CPS">CPS (Cost Per Sale)</option>
                  <option value="CPC">CPC (Cost Per Click)</option>
                  <option value="CPM">CPM (Cost Per Mille)</option>
                </select>
              </div>

              <div className={cx("filter-group")}>
                <label>Date Range</label>
                <div className={cx("date-range")}>
                  <input
                    type="date"
                    onChange={(e) =>
                      handleFilterChange("startDate", e.target.value)
                    }
                  />
                  <span>to</span>
                  <input
                    type="date"
                    onChange={(e) =>
                      handleFilterChange("endDate", e.target.value)
                    }
                  />
                </div>
              </div>

              <div className={cx("filter-group")}>
                <label>Sort By</label>
                <select
                  onChange={(e) => handleFilterChange("sortBy", e.target.value)}
                >
                  <option value="Views">Views</option>
                  <option value="Clicks">Clicks</option>
                  <option value="Conversions">Conversions</option>
                  <option value="Revenue">Revenue</option>
                  <option value="Date">Date</option>
                </select>
              </div>

              <div className={cx("filter-group")}>
                <div className={cx("button-group")}>
                  <button
                    className={cx("reset-button", "button")}
                    onClick={() => handleResetFilters()}
                  >
                    Reset
                  </button>

                  <button className={cx("apply-button", "button")}>
                    Apply
                  </button>
                </div>
              </div>
            </div>
            <div className={cx("filter-tags")}>
              {Object.entries(activeFilters).map(([key, value]) => (
                <div key={key} className={cx("filter-tag")}>
                  <span>
                    {key}: {value}
                  </span>
                  <button onClick={() => removeFilter(key)}>×</button>
                </div>
              ))}
            </div>
          </div>

          <div className={cx("campaign-list")}>
            {campaigns.map((campaign) => (
              <div key={campaign.id} className={cx("campaign-item")}>
                <div className={cx("campaign-image")}>
                  <img src={campaign.image} alt={campaign.name} />
                  <div className={cx("campaign-badge")}>{campaign.status}</div>
                  {campaign.badge && (
                    <div
                      className={cx(
                        "campaign-badge-label",
                        "badge-" + campaign.badge.toLowerCase()
                      )}
                    >
                      {campaign.badge}
                    </div>
                  )}
                  <div className={cx("stat-member")}>
                    <Users className={cx("stat-icon")} />
                    <span className={cx("stat-value")}>{campaign.member}</span>
                  </div>
                </div>
                <div className={cx("campaign-details")}>
                  <h3>{campaign.name}</h3>
                  <div className={cx("campaign-stats")}>
                    <div className={cx("stat")}>
                      <span className={cx("stat-value")}>{campaign.rate}</span>
                      <Star className={cx("stat-icon")} />
                    </div>

                    <div className={cx("stat")}>
                      <MessageSquare className={cx("stat-icon")} />
                      <span className={cx("stat-value")}>
                        {campaign.feedbacks}
                      </span>
                    </div>
                    <div className={cx("stat")}>
                      <DollarSignIcon className={cx("stat-icon")} />
                      <span className={cx("stat-value")}>
                        {campaign.commission}%
                      </span>
                    </div>
                  </div>
                  <div className={cx("progress-bar")}>
                    <div
                      className={cx("progress-bar-fill")}
                      style={{ width: `${campaign.progress}%` }}
                    ></div>
                  </div>
                  <div className={cx("create-date")}>
                    Created: {campaign.createdate}
                  </div>
                  <button className={cx("join-button")}>Join Campaign</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default CampaignList;
