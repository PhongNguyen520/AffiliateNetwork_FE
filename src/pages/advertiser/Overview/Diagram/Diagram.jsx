import React from 'react'
import {
    FaCircleXmark,
    FaClockRotateLeft,
    FaRegHourglassHalf,
  } from "react-icons/fa6";
  import { FaCheckCircle, FaClock, FaCogs, FaPause } from "react-icons/fa";
  import classNames from 'classnames/bind';
  import styles from './Diagram.module.scss';
  
  const cx = classNames.bind(styles);

  const RetentionStatus = ({ title, count, icon, color }) => {
    return (
      <div className={cx("retention-status")}>
        <div className={cx("icon")} style={{ color }}>
          {icon}
        </div>
        <div className={cx("text-wrap")}>
          <p className={cx("title", "text-nowrap")}>{title}</p>
          <p className={cx("count", "text-nowrap")}>Quantity: {count}</p>
        </div>
      </div>
    );
  };
function Diagram() {
  return (
    <div className={cx("graph-container")}>
            <div className={cx("status-column-one")}>
              <RetentionStatus
                title="Acceptance"
                count={1}
                icon={<FaClock />}
                color="#DC6803"
              />
            </div>
            <div className={cx("divider")}>
              <span>
                <svg
                  width="34"
                  height="2"
                  viewBox="0 0 34 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 1C0 0.447715 0.447715 0 1 0H33C33.5523 0 34 0.447715 34 1C34 1.55228 33.5523 2 33 2H1C0.447716 2 0 1.55228 0 1Z"
                    fill="#D9D9D9"
                  />
                </svg>
              </span>
              <span>
                <svg
                  width="12"
                  height="114"
                  viewBox="0 0 12 114"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 1.25H7C3.68629 1.25 1 3.93629 1 7.25V106.75C1 110.064 3.68629 112.75 7 112.75H11"
                    stroke="#D0D5DD"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </div>
            <div className={cx("status-column-two")}>
              <RetentionStatus
                title="Rejected"
                count={0}
                icon={<FaCircleXmark />}
                color="#D92D20"
              />
              <RetentionStatus
                title="Resubmission"
                count={0}
                icon={<FaRegHourglassHalf />}
                color="#FFC107"
              />
            </div>
            <div className={cx("divider", "divider-1")}>
              <span>
                <svg
                  width="34"
                  height="2"
                  viewBox="0 0 34 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 1C0 0.447715 0.447715 0 1 0H33C33.5523 0 34 0.447715 34 1C34 1.55228 33.5523 2 33 2H1C0.447716 2 0 1.55228 0 1Z"
                    fill="#D9D9D9"
                  />
                </svg>
              </span>
            </div>
            <div className={cx("status-column-one", "consider")}>
              <RetentionStatus
                title="Pending Approval"
                count={0}
                icon={<FaClockRotateLeft />}
                color="#6938EF"
              />
            </div>
            <div className={cx("divider", "divider-2")}>
              <span>
                <svg
                  width="34"
                  height="2"
                  viewBox="0 0 34 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 1C0 0.447715 0.447715 0 1 0H33C33.5523 0 34 0.447715 34 1C34 1.55228 33.5523 2 33 2H1C0.447716 2 0 1.55228 0 1Z"
                    fill="#D9D9D9"
                  />
                </svg>
              </span>
              <span>
                <svg
                  width="12"
                  height="114"
                  viewBox="0 0 12 114"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 1.25H7C3.68629 1.25 1 3.93629 1 7.25V106.75C1 110.064 3.68629 112.75 7 112.75H11"
                    stroke="#D0D5DD"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </div>
            <div className={cx("status-column-two", "align-bottom-one")}>
              <RetentionStatus
                title="Rejected"
                count={0}
                icon={<FaCircleXmark />}
                color="#D92D20"
              />
              <RetentionStatus
                title="In Progress"
                count={0}
                icon={<FaCogs />}
                color="#1570EF"
              />
            </div>
            <div className={cx("divider", "divider-3")}>
              <span>
                <svg
                  width="34"
                  height="2"
                  viewBox="0 0 34 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 1C0 0.447715 0.447715 0 1 0H33C33.5523 0 34 0.447715 34 1C34 1.55228 33.5523 2 33 2H1C0.447716 2 0 1.55228 0 1Z"
                    fill="#D9D9D9"
                  />
                </svg>
              </span>
              <span>
                <svg
                  width="12"
                  height="114"
                  viewBox="0 0 12 114"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 1.25H7C3.68629 1.25 1 3.93629 1 7.25V106.75C1 110.064 3.68629 112.75 7 112.75H11"
                    stroke="#D0D5DD"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </div>
            <div className={cx("status-column-two", "align-bottom-two")}>
              <RetentionStatus
                title="Paused"
                count={0}
                icon={<FaPause />}
                color="#D92D20"
              />
              <RetentionStatus
                title="Completed"
                count={0}
                icon={<FaCheckCircle />}
                color="#079455"
              />
            </div>
          </div>
  )
}

export default Diagram