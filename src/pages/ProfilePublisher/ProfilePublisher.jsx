import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Camera,
  Edit2,
  Award,
  Users,
  Book,
  Star,
  Mail,
  Phone,
  MapPin,
  Calendar,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";
import classNames from "classnames/bind";
import styles from "./ProfilePublisher.module.scss";
import images from "../../assets/images";
import ReactLoading from "react-loading";


const cx = classNames.bind(styles);

const mockPublisher = {
  userName: "johnsmith",
  fullName: "Nguyen Thanh Phong",
  avatar: "https://media-cdn-v2.laodong.vn/storage/newsportal/2024/8/6/1376839/Shin3.jpg",
  email: "nguyenphong23042001@gmail.com",
  phoneNumber: "0378977634",
  address: "New York, USA",
  createdDate: "2022-01-15",
  campaigns: [
    {
      id: 1,
      title: "Summer Sale 2024",
      clicks: 1234,
      conversions: 156,
      revenue: 5000,
      img: "https://img.freepik.com/free-psd/summer-sale-banner-discount-poster-with-3d-summer-element-composition_47987-14224.jpg",
    },
    {
      id: 2,
      title: "Back to School Promotion",
      clicks: 892,
      conversions: 98,
      revenue: 3000,
      img: "https://img.freepik.com/premium-vector/back-school-campaign-vector-design-welcome-back-school-stay-safe-text_572288-1946.jpg",
    },
    {
      id: 3,
      title: "Black Friday Deals",
      clicks: 2156,
      conversions: 245,
      revenue: 10000,
      img: "https://www.tierra.vn/wp-content/uploads/2024/11/black-friday-sieu-sale-trang-suc-tai-tierra.webp",
    },
    {
        id: 4, 
        title: "Winter Holiday Special", 
        clicks: 1500,
        conversions: 200,
        revenue: 7500,
        img: "https://metfit.org/wp-content/uploads/2023/06/IMG_7413.jpg", 
      },
  ],
  stats: {
    totalClicks: 4282,
    totalConversions: 499,
    totalRevenue: 18000,
    activeCampaigns: 3,
  },
};

function ProfilePublisher() {
  const [profile, setProfile] = useState(mockPublisher);
  const [loading, setLoading] = useState(false);

  return (
    <div className={cx("wrapper")}>
      {loading && (
        <div className={cx("loading-overlay")}>
          <ReactLoading type="spin" color="#fff" height={60} width={60} />
        </div>
      )}

      <>
        <button className={cx("back-button")} aria-label="Go back">
          <ArrowLeft size={24} />
        </button>

        <div className={cx("profile-body")}>
          <div className={cx("profile-header")}>
            <div className={cx("avatar-section")}>
              <div className={cx("avatar-container")}>
                <img
                  src={profile.avatar}
                  alt="Profile"
                  className={cx("avatar")}
                />
                <button className={cx("camera-button")}>
                  <Camera size={20} />
                </button>
              </div>
            </div>

            <div className={cx("header-info")}>
              <div className={cx("name-section")}>
                <h1>{profile.fullName}</h1>
                <button className={cx("edit-button")}>
                  <Edit2 size={16} />
                  Edit Profile
                </button>
              </div>

              <div className={cx("contact-info")}>
                <div className={cx("info-item")}>
                  <Mail size={16} />
                  <span>{profile.email}</span>
                </div>
                <div className={cx("info-item")}>
                  <Phone size={16} />
                  <span>{profile.phoneNumber}</span>
                </div>
                <div className={cx("info-item")}>
                  <MapPin size={16} />
                  <span>{profile.address}</span>
                </div>
                <div className={cx("info-item")}>
                  <Calendar size={16} />
                  <span>Member since {new Date(profile.createdDate).toDateString()}</span>
                </div>
              </div>
            </div>
          </div>

          <div className={cx("stats-grid")}>
            <div className={cx("stat-card")}>
              <Users size={24} />
              <div className={cx("stat-content")}>
                <h3>Total Clicks</h3>
                <p>{profile.stats.totalClicks}</p>
              </div>
            </div>
            <div className={cx("stat-card")}>
              <CheckCircle size={24} />
              <div className={cx("stat-content")}>
                <h3>Total Conversions</h3>
                <p>{profile.stats.totalConversions}</p>
              </div>
            </div>
            <div className={cx("stat-card")}>
              <Book size={24} />
              <div className={cx("stat-content")}>
                <h3>Active Campaigns</h3>
                <p>{profile.stats.activeCampaigns}</p>
              </div>
            </div>
            <div className={cx("stat-card")}>
              <Star size={24} />
              <div className={cx("stat-content")}>
                <h3>Total Revenue</h3>
                <p>${profile.stats.totalRevenue}</p>
              </div>
            </div>
          </div>

          <div className={cx("content-grid")}>
            <div className={cx("campaigns-section")}>
              <h2>Campaigns</h2>
              <div className={cx("campaigns-list")}>
                {profile.campaigns.map((campaign) => (
                  <div key={campaign.id} className={cx("campaign-card")}>
                    <img
                      src={campaign.img}
                      alt={campaign.title}
                      className={cx("campaign-image")}
                    />
                    <div className={cx("campaign-info")}>
                      <h3>{campaign.title}</h3>
                      <div className={cx("campaign-stats")}>
                        <span>
                          <Users size={16} />
                          {campaign.clicks} clicks
                        </span>
                        <span>
                          <CheckCircle size={16} />
                          {campaign.conversions} conversions
                        </span>
                        <span>
                          <Star size={16} />
                          ${campaign.revenue}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default ProfilePublisher;