import React from "react";
import classNames from "classnames/bind";
import styles from "./Overview.module.scss";
import {
  DollarSign,
  DollarSignIcon,
  Globe,
  MoreVertical,
  MousePointer,
  Package,
  ShoppingCart,
  User,
  UserCircle,
} from "lucide-react";
import ReactApexChart from "react-apexcharts";

const cx = classNames.bind(styles);
const salesData = {
  series: [
    {
      name: "Facebook",
      data: [500, 250, 300, 350, 500, 300, 550, 350, 400, 500, 300, 550],
    },
    {
      name: "Chrome",
      data: [200, 300, 350, 400, 400, 450, 300, 350, 400, 350, 400, 400],
    },
  ],
  options: {
    chart: {
      type: "areaarea",
      height: 350,
      background: "transparent",
      toolbar: {
        show: true,
        export: {
          csv: {
            filename: "traffic_data",
            columnDelimiter: ",",
            headerCategory: "Month",
            headerValue: "Value",
          },
          svg: {
            filename: "traffic_chart",
          },
          png: {
            filename: "traffic_chart",
          },
        },
      },
    },
    colors: ["#E06A00", "#025A00"],
    stroke: {
      curve: "smooth",
      width: 3,
    },
    grid: {
      borderColor: "rgba(255, 255, 255, 0.1)",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        style: {
          colors: "black",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "black",
        },
      },
    },
    tooltip: {
      theme: "dark",
    },
    legend: {
      show: false,
    },
  },
};

const activeUsersData = {
  series: [
    {
      data: [300, 250, 100, 290, 500, 350, 250, 200, 400],
    },
  ],
  options: {
    chart: {
      type: "bar",
      height: 350,
      background: "transparent",
      toolbar: {
        show: true,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        columnWidth: "20%",
        colors: {
          backgroundBarColors: ["rgba(255, 255, 255, 0.1)"],
        },
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: false,
      textAnchor: "middle",
    },
    colors: ["#AD1921"],
    grid: {
      show: false,
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "black",
        },
      },
    },
  },
};

function Overview() {
  return (
    <div className={cx("overview-container")}>
      <div className={cx("dashboard")}>
        <div className={cx("metric")}>
          <div>
            <span>Today’s Money</span>
            <h2>
              $53,000 <span>+55%</span>
            </h2>
          </div>
          <div className={cx("wrap-icon")}>
            <DollarSignIcon size={40} className={cx("icon")} />
          </div>
        </div>
        <div className={cx("metric")}>
          <div>
            <span>Today’s Users</span>
            <h2>
              2,300 <span>+3%</span>
            </h2>
          </div>
          <div className={cx("wrap-icon")}>
            <UserCircle size={40} className={cx("icon")} />
          </div>
        </div>
        <div className={cx("metric")}>
          <div>
            <span>New Clients</span>
            <h2>
              +3,462 <span>-2%</span>
            </h2>
          </div>
          <div className={cx("wrap-icon")}>
            <Globe size={40} className={cx("icon")} />
          </div>
        </div>
        <div className={cx("metric")}>
          <div>
            <span>Total Sales</span>
            <h2>
              $103,430 <span>+5%</span>
            </h2>
          </div>
          <div className={cx("wrap-icon")}>
            <ShoppingCart size={40} className={cx("icon")} />
          </div>
        </div>
      </div>

      <div className={cx("wrapper-box")}>
        <div className={cx("box")}>
          <div className={cx("radius", "welcome-message")}>
            <h1>Welcome back, Mark Johnson</h1>
            <p>Glad to see you again! Ask me anything.</p>
            <div className={cx("arrow-right")}>
              <i class="bi bi-arrow-right-circle-fill"></i>
            </div>
          </div>
        </div>

        <div className={cx("box")}>
          <div className={cx("radius", "satisfaction-rate")}>
            <h3 className={cx("title")}>Satisfaction Rate</h3>
            <div className={cx("progress-circle")}>
              <svg viewBox="0 0 100 100">
                <circle
                  className={cx("circle-background")}
                  cx="50"
                  cy="50"
                  r="44"
                  stroke="#E6E6E6"
                  strokeWidth="6"
                  fill="none"
                />
                <circle
                  className={cx("circle-progress")}
                  cx="50"
                  cy="50"
                  r="44"
                  strokeDasharray={`${2 * Math.PI * 44 * 0.6} ${
                    2 * Math.PI * 44
                  }`}
                  stroke="#4caf50"
                  strokeWidth="6"
                  fill="none"
                />
              </svg>

              <div className={cx("progress-content")}>
                <div className={cx("percentage")}>60%</div>
                <p className={cx("details")}>Based on 120 reviews</p>
              </div>
            </div>
            <div className={cx("additional-info")}>
              <p className={cx("info-text")}>
                This metric indicates the overall satisfaction rate based on
                user feedback across all campaigns.
              </p>
            </div>
          </div>
        </div>

        <div className={cx("box")}>
          <div className={cx("radius", "referral-tracking")}>
            <div className={cx("header")}>
              <h3 className={cx("title")}>Affiliate Program Tracking</h3>
              <MoreVertical className={cx("more-icon")} />
            </div>

            <div className={cx("wrap-perform")}>
              <div className={cx("metrics")}>
                <div className={cx("metric-box")}>
                  <div className={cx("label")}>Affiliates Joined</div>
                  <span className={cx("value")}>320 </span>
                  <span className={cx("unit")}>partners</span>
                </div>

                <div className={cx("metric-box")}>
                  <div className={cx("label")}>Total Earnings</div>
                  <div className={cx("value")}>$12,500</div>
                  <div className={cx("unit")}>USD</div>
                </div>
              </div>

              <div className={cx("score-circle")}>
                <svg viewBox="2 2 100 100">
                  <circle
                    className={cx("circle-background")}
                    cx="50"
                    cy="50"
                    r="42"
                  />
                  <circle
                    className={cx("circle-progress")}
                    cx="50"
                    cy="50"
                    r="42"
                    strokeDasharray={`${2 * Math.PI * 42 * 0.93} ${
                      2 * Math.PI * 42
                    }`}
                  />
                </svg>

                <div className={cx("score-content")}>
                  <div className={cx("score")}>9.3</div>
                  <div className={cx("label")}>Total Performance Score</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={cx("dashboard-container")}>
        <div className={cx("charts-container")}>
          <div className={cx("sales-chart")}>
            <div className={cx("chart-header")}>
              <h2 className={cx("title")}>Traffics Overview</h2>
              <p className={cx("subtitle")}>
                <span className={cx("percentage")}>+5% more</span> in 2025
              </p>
            </div>
            <ReactApexChart
              options={salesData.options}
              series={salesData.series}
              type="line"
              height={350}
            />
          </div>

          <div className={cx("users-chart")}>
            <ReactApexChart
              options={activeUsersData.options}
              series={activeUsersData.series}
              type="bar"
              height={350}
            />
            <div className={cx("stats-container")}>
              <div className={cx("stats-header")}>
                <h2 className={cx("title")}>Active Users</h2>
                <span className={cx("change")}>(+23) than last week</span>
              </div>
              <div className={cx("stats-grid")}>
                <div className={cx("stat-item")}>
                  <User className={cx("icon")} />
                  <div className={cx("stat-content")}>
                    <span className={cx("label")}>Users</span>
                    <span className={cx("value")}>32,984</span>
                  </div>
                </div>
                <div className={cx("stat-item")}>
                  <MousePointer className={cx("icon")} />
                  <div className={cx("stat-content")}>
                    <span className={cx("label")}>Clicks</span>
                    <span className={cx("value")}>2.42M</span>
                  </div>
                </div>
                <div className={cx("stat-item")}>
                  <DollarSign className={cx("icon")} />
                  <div className={cx("stat-content")}>
                    <span className={cx("label")}>Revenues</span>
                    <span className={cx("value")}>2,400$</span>
                  </div>
                </div>
                <div className={cx("stat-item")}>
                  <Package className={cx("icon")} />
                  <div className={cx("stat-content")}>
                    <span className={cx("label")}>Sales</span>
                    <span className={cx("value")}>320</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
