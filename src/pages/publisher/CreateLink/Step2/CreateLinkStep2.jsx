import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./CreateLinkStep2.module.scss";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import config from "../../../../config";

const cx = classNames.bind(styles);

const CreateLinkStep2 = ({ isOpen, onRequestClose }) => {
  const [fullLink, setFullLink] = useState(
    "https://go.isclix.com/deep_link/v6/66246"
  );
  const [shortenLink, setShortenLink] = useState(
    "https://shorten.asia/aG1b3DtB"
  );

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={cx("modal")}
      overlayClassName={cx("overlay")}
    >
      <div className={cx("create-content-container")}>
        <div className={cx("steps-container")}>
          <div className={cx("step", "completed")}>
            <div className={cx("step-circle")}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 13.5L4 10L3 11L7.5 15.5L17.5 5.5L16.5 4.5L7.5 13.5Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className={cx("step-title")}>Choose product</div>
          </div>
          <div className={cx("step", "active")}>
            <div className={cx("step-circle")}>
              <div className={cx("step-circle")}>02</div>
            </div>
            <div className={cx("step-title")}>Get Link</div>
          </div>
          <div className={cx("step")}>
            <div className={cx("step-circle")}>03</div>
            <div className={cx("step-title")}>Create Content</div>
          </div>
          <div className={cx("step")}>
            <div className={cx("step-circle")}>04</div>
            <div className={cx("step-title")}>Post</div>
          </div>
        </div>

        <div className={cx("content-section")}>
          <div className={cx("link-container")}>
            <div className={cx("link-group")}>
              <label className={cx("link-label")}>Full Link</label>
              <div className={cx("link-value")}>{fullLink}</div>
            </div>
            <div className={cx("link-group")}>
              <label className={cx("link-label")}>Shorten Link</label>
              <div className={cx("link-value")}>{shortenLink}</div>
            </div>
          </div>
        </div>

        <div className={cx("action-buttons")}>
          <button
            className={cx("btn", "btn-secondary")}
            onClick={onRequestClose}
          >
            Back
          </button>
          <Link to={config.routes.createLinkStep3}>
            <button className={cx("btn", "btn-primary")}>Continue</button>
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default CreateLinkStep2;
