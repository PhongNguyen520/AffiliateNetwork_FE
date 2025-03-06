import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./CreateLinkStep3.module.scss";
import { Link } from "react-router-dom";
import config from "../../../../config";

const cx = classNames.bind(styles);

const CreateLinkStep3 = () => {
  const [activeTab, setActiveTab] = useState("library");

  return (
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
          <div className={cx("step-circle")}>03</div>
          <div className={cx("step-title")}>Create Content</div>
        </div>
        <div className={cx("step")}>
          <div className={cx("step-circle")}>04</div>
          <div className={cx("step-title")}>Post</div>
        </div>
      </div>

      <div className={cx("content-section")}>
        <div className={cx("content-header")}>
          <div className={cx("title-container")}>
            <h2 className={cx("content-title")}>Content Library</h2>
            <p className={cx("content-subtitle")}>
              You can choose to use the library templates or write in your own
              style.
            </p>
          </div>
          <button className={cx("create-article-btn")}>
            <span>+</span> Create article
          </button>
        </div>

        <div className={cx("tabs-container")}>
          <div
            className={cx("tab", { active: activeTab === "library" })}
            onClick={() => setActiveTab("library")}
          >
            Library
          </div>
          <div
            className={cx("tab", { active: activeTab === "upload" })}
            onClick={() => setActiveTab("upload")}
          >
            Upload a file
          </div>
        </div>

        <div className={cx("tab-content")}>
          {activeTab === "library" && (
            <div className={cx("empty-state")}>
              <p className={cx("empty-text")}>No data</p>
              <div className={cx("empty-image")}>
                <img src="/empty-docs.svg" alt="No content in library" />
              </div>
            </div>
          )}

          {activeTab === "upload" && (
            <div className={cx("upload-area")}>
              <div className={cx("dropzone")}>
                <p>Drag and drop files here or click to browse</p>
                <input type="file" className={cx("file-input")} />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={cx("action-buttons")}>
      <Link to={config.routes.createLinkStep2}>
        <button className={cx("btn", "btn-secondary")}>Back</button>
        </Link>
        <Link to={config.routes.createLinkStep4}>
          <button className={cx("btn", "btn-primary")}>Continue</button>
        </Link>
      </div>
    </div>
  );
};

export default CreateLinkStep3;
