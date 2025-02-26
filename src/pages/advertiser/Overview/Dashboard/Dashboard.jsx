import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from './Dashboard.module.scss'
import { DatePicker} from "antd";

const cx = classNames.bind(styles);
const { RangePicker } = DatePicker;

function Dashboard() {
    const [dateRange, setDateRange] = useState(null);

    const handleDateChange = (dates) => {
      setDateRange(dates);
    };
  return (
    <div className={cx("dashboard-container")}>
      <div className={cx("filter-section")}>
        <div className={cx("date-range")}>
          <span>Khoảng ngày</span>
          <RangePicker style={{ width: 250 }} onChange={handleDateChange} />
        </div>
        <div className={cx("offer-type")}>
          <span>Loại offer</span>
          <div className={cx("type-picker")}>Tất cả</div>
        </div>
      </div>

      <div className={cx("commission-section")}>
        <div className={cx("commission-card", "success")}>
          <h3>HOA HỒNG THÀNH CÔNG</h3>
          <div className={cx("commission-details")}>
            <p>Hoa hồng thường: 0</p>
            <p>Đơn hàng: 0</p>
            <p>Hoa hồng bonus: 0</p>
            <p>Tổng giá trị: 0</p>
          </div>
        </div>
        <div className={cx("commission-card", "cancelled")}>
          <h3>HOA HỒNG HỦY</h3>
          <div className={cx("commission-details")}>
            <p>Hoa hồng thường: 0</p>
            <p>Đơn hàng: 0</p>
            <p>Hoa hồng bonus: 0</p>
            <p>Tổng giá trị: 0</p>
          </div>
        </div>
        <div className={cx("commission-card", "pending")}>
          <h3>HOA HỒNG CHỜ DUYỆT</h3>
          <div className={cx("commission-details")}>
            <p>Hoa hồng thường: 0</p>
            <p>Đơn hàng: 0</p>
            <p>Hoa hồng bonus: 0</p>
            <p>Tổng giá trị: 0</p>
          </div>
        </div>
      </div>

      <div className={cx("bottom-section")}>
        <div className={cx("news-section")}>
          <h3>Tin tức</h3>
          <div className={cx("news-content")}>
            <p>MASOFFER | THÔNG BÁO LỊCH HOẠT ĐỘNG TRONG TẾT ẤT TỰ 2025</p>
            <p>
              MASOFFER xin thông báo lịch hoạt động trong Tết Át Tự 2025 như
              sau:
            </p>
          </div>
        </div>
        <div className={cx("latest-orders")}>
          <h3>Đơn hàng mới nhất</h3>
          <div className={cx("orders-table")}>
            <table>
              <thead>
                <tr>
                  <th>Thành công</th>
                  <th>Chờ duyệt</th>
                  <th>Hủy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="3">No data Available</td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className={cx("view-details")}>Xem chi tiết</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
