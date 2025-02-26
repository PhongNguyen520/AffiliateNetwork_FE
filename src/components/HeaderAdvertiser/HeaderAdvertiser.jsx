import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./HeaderAdvertiser.module.scss";
import images from "../../assets/images";

const cx = classNames.bind(styles);

function HeaderAdvertiser() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("container__login-user")}>
          <div className={cx("message")}>
            <i class="bi bi-envelope-fill"></i>
          </div>
          <div className={cx("notification")}>
            <i class="bi bi-bell-fill"></i>
          </div>
          <img
            src="https://media-cdn-v2.laodong.vn/storage/newsportal/2024/8/6/1376839/Shin3.jpg"
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
                  src="https://media-cdn-v2.laodong.vn/storage/newsportal/2024/8/6/1376839/Shin3.jpg"
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
    </>
  );
}

export default HeaderAdvertiser;
