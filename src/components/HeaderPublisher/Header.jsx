import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "../../assets/images";
import { Link, Navigate } from "react-router-dom";
import config from "../../config";

const cx = classNames.bind(styles);

function Header() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("logo")}>
        <Link to={config.routes.home}>
          <img src={images.logo} alt="logo" />
          </Link>
        </div>
        <div className={cx("navbar")}>
          <nav>
            <ul>
              <li>
                <Link to={config.routes.overviewPublisher}>
                  <span href="#">Overview</span>
                </Link>
              </li>
              <li>
                <Link to={config.routes.listCampaigns}>
                  <span href="#">Campaigns</span>
                </Link>
              </li>
              <li>
                <Link to={config.routes.overviewPublisher}>
                  <span href="#">Performance</span>
                </Link>
              </li>
              <li>
                <Link to={config.routes.overviewPublisher}>
                  <span href="#">Reports</span>
                </Link>
              </li>

              <li>
                <Link to={config.routes.overviewPublisher}>
                  <span href="#">Links</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className={cx("container__login-user")}>
          <div className={cx("message")}>
            <i class="bi bi-envelope-fill"></i>
          </div>
          <div className={cx("notification")}>
            <i class="bi bi-bell-fill"></i>
          </div>
          <img
            src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/461184877_1080201167130354_934555959225370992_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF1OYvztxyUATf6-j1khSRlN4WJTXKIg_s3hYlNcoiD-1-BUvSvFlmcpDo5SPWbJmXWkiNpaIFZ26YJ567WS7HU&_nc_ohc=vGlYXRnZShsQ7kNvgGiZI4E&_nc_oc=AdjqmkJ0yd-uRwIz2-kR0NbnERDLkZeDWAU-n1djnj76gFX0vik2iamjrYvhRuzMIow&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=A0apfMar8y2tCAUxFDA3jQ0&oh=00_AYA7PU8FTxO4IfqEDVmFntAeZPwVuW5PqRbP9_QhP4-u9w&oe=67892570"
            alt="avatar"
            className={cx("container__login-user-img")}
            onClick={toggleDropdown}
          />
        </div>

        {isDropdownVisible && (
          <div className={cx("dropdown-menu")}>
            <div className={cx("user-info")}>
              <div className={cx("avatar-container")}>
                <img
                  src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/461184877_1080201167130354_934555959225370992_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF1OYvztxyUATf6-j1khSRlN4WJTXKIg_s3hYlNcoiD-1-BUvSvFlmcpDo5SPWbJmXWkiNpaIFZ26YJ567WS7HU&_nc_ohc=vGlYXRnZShsQ7kNvgGiZI4E&_nc_oc=AdjqmkJ0yd-uRwIz2-kR0NbnERDLkZeDWAU-n1djnj76gFX0vik2iamjrYvhRuzMIow&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=A0apfMar8y2tCAUxFDA3jQ0&oh=00_AYA7PU8FTxO4IfqEDVmFntAeZPwVuW5PqRbP9_QhP4-u9w&oe=67892570"
                  alt="avatar"
                  className={cx("dropdown-avatar")}
                />
                <span className={cx("active-status")}></span>
              </div>
              <div className={cx("user-details")}>
                <p className={cx("user-name")}>Nguyen Thanh Phong</p>
                <i className="bi bi-person"></i>
                See profile
              </div>
            </div>

            <ul className={cx("menu-list")}>
              <li>
                <i className="bi bi-book"></i> My Campaign
              </li>
              <li>
                <i className="bi bi-file-earmark-text"></i> Forms
              </li>
              <li>
                <i className="bi bi-pencil-square"></i> My Post
              </li>
              <li>
                <i className="bi bi-wallet2"></i> Wallet
              </li>
              <li>
                <i className="bi bi-box-arrow-right"></i> Log out
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className={cx("line")}>
        <hr className={cx("horizontal-line")} />
      </div>
    </>
  );
}

export default Header;
