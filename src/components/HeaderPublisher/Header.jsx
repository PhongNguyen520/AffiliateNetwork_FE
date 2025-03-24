import React, { useContext, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "../../assets/images";
import { Link, Navigate, useNavigate } from "react-router-dom";
import config from "../../config";
import { AuthContext } from "../../providers/AuthProvider";
import Cookies from "js-cookie";

const cx = classNames.bind(styles);

function Header() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const signOut = () => {
    Cookies.remove("access_token");
    navigate(config.routes.login);
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
                <Link to={config.routes.statistic}>
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
                <Link to={config.routes.manageLink}>
                  <span href="#">Links</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {auth ? (
          <div className={cx("container__login-user")}>
            <div className={cx("message")}>
              <i className="bi bi-envelope-fill"></i>
            </div>
            <div className={cx("notification")}>
              <i className="bi bi-bell-fill"></i>
            </div>
            <img
              src={auth.avatar || images.defaultAvatar}
              alt="avatar"
              className={cx("container__login-user-img")}
              onClick={toggleDropdown}
            />
          </div>
        ) : (
          <div className={cx("login-container")}>
            <Link to={config.routes.login} className={cx("login-button")}>
              <i className="bi bi-box-arrow-in-right"></i>
              <span className={cx("login-text")}>Login</span>
            </Link>
            <Link to={config.routes.register} className={cx("register-button")}>
              <span className={cx("register-text")}>Sign Up</span>
            </Link>
          </div>
        )}

        {isDropdownVisible && (
          <div className={cx("dropdown-menu")}>
            <div className={cx("user-info")}>
              <div className={cx("avatar-container")}>
                <img
                  src={auth.avatar || images.defaultAvatar}
                  alt="avatar"
                  className={cx("dropdown-avatar")}
                />
                <span className={cx("active-status")}></span>
              </div>
              <div className={cx("user-details")}>
                <p className={cx("user-name")}>{auth.fullName}</p>
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
              <li onClick={signOut}>
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
