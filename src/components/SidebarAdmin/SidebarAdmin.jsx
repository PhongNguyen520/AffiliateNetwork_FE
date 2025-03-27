import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./SidebarAdmin.module.scss";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {
  FaGem,
  FaChartLine,
  FaRocket,
  FaUsers,
  FaCog,
  FaTools,
  FaPhoneAlt,
  FaLink,
} from "react-icons/fa";
import images from "../../assets/images";
import config from "../../config";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function SidebarAdmin() {
  const [collapsed, setCollapsed] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    if (collapsed) {
      setIsHovered(true);
      setCollapsed(false);
    }
  };

  const handleMouseLeave = () => {
    if (isHovered) {
      setIsHovered(false);
      setCollapsed(true);
    }
  };
  return (
    <div className={cx("sidebar-container")}>
      <Sidebar
        collapsed={collapsed}
        breakPoint="md"
        className={cx("pro-sidebar")}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {collapsed ? (
          <div className={cx("sidebar-header")}>
            <img src={images.logo3} alt="Logo" />
          </div>
        ) : (
          <div className={cx("logo-collapsed")}>
            <img src={images.logo} alt="Logo" />
          </div>
        )}

        <Menu iconShape="circle">
          <Link
            to={config.routes.overviewAdmin}
            style={{ textDecoration: "none", color: "#333333" }}
          >
            <MenuItem icon={<FaGem />}>Overview</MenuItem>
          </Link>
          <Link
            to={config.routes.listCampaignsAdmin}
            style={{ textDecoration: "none", color: "#333333" }}
          >
            <MenuItem icon={<FaRocket />}>Campaigns</MenuItem>
          </Link>

          <Link
            to={config.routes.listAccount}
            style={{ textDecoration: "none", color: "#333333" }}
          >
            <MenuItem icon={<FaUsers />}>Account</MenuItem>
          </Link>
          <MenuItem icon={<FaLink />}>Links</MenuItem>
          <SubMenu
            title="Reports"
            icon={<FaChartLine />}
            prefix={<span className={cx("submenu-title")}>Reports</span>}
          >
            <MenuItem>Sales</MenuItem>
            <MenuItem>Traffic</MenuItem>
            <MenuItem>Conversion</MenuItem>
            <MenuItem>Affiliate Performance</MenuItem>
          </SubMenu>
          <MenuItem icon={<FaTools />}>Tracking Tools</MenuItem>
          <MenuItem icon={<FaCog />}>Settings</MenuItem>
          <MenuItem icon={<FaPhoneAlt />}>Support</MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default SidebarAdmin;
