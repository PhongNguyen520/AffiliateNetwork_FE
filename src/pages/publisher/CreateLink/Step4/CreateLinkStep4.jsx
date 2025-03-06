import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./CreateLinkStep4.module.scss";
import { Link } from "react-router-dom";
import config from "../../../../config";

const cx = classNames.bind(styles);

const CreateLinkStep4 = () => {
  const [utmExpanded, setUtmExpanded] = useState(false);
  const [shortenLink, setShortenLink] = useState(false);

  return (
    <div className={cx("create-link-container")}>
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
          <div className={cx("step-title")}>Get Link</div>
        </div>
        <div className={cx("step", "active")}>
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
          <div className={cx("step-title")}>Create Content</div>
        </div>
        <div className={cx("step", "active")}>
          <div className={cx("step-circle")}>04</div>
          <div className={cx("step-title")}>Post</div>
        </div>
      </div>

      <div className={cx("content-container")}>
        <h1 className={cx("content-title")}>
          Black Friday Special Offers - Don't Miss Out!
        </h1>
        <p className={cx("content-description")}>
          The biggest shopping event of the year is finally here! Black Friday
          brings incredible discounts and opportunities to save on your favorite
          products. Check out these amazing deals before they're gone!
        </p>
        <h2 className={cx("content-subtitle")}>
          Top Black Friday Deals You Can't Miss
        </h2>
        <ul className={cx("content-list")}>
          <li>Save up to 70% on electronics and smart home devices</li>
          <li>Exclusive flash sales every 3 hours - set your reminders!</li>
          <li>Free shipping on orders over $50</li>
          <li>Buy-one-get-one offers on selected items</li>
          <li>Limited-time doorbusters available while supplies last</li>
        </ul>
        <p className={cx("content-description")}>
          Don't wait until these offers expire! Click the link below to browse
          all available deals:{" "}
          <a
            href="https://go.lsclix.com/deep_link"
            className={cx("content-link")}
          >
            https://go.lsclix.com/deep_link
          </a>
        </p>
        <p className={cx("content-description")}>
          Remember: These special prices are only available for a limited time
          during the Black Friday event. Shop now to avoid disappointment!
        </p>
      </div>

      <div className={cx("action-buttons")}>
      <Link to={config.routes.createLinkStep3}>
        <button className={cx("btn", "btn-secondary")}>Back</button>
        </Link>
        <button className={cx("btn", "btn-primary")}>Copy Content</button>
        <button className={cx("btn", "btn-primary")}>Share</button>
      </div>
    </div>
  );
};

export default CreateLinkStep4;
