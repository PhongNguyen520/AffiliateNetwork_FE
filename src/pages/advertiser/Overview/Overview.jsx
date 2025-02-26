import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Overview.module.scss";
import { DatePicker, Table, Select, Card, Row, Col, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Diagram from "./Diagram/Diagram";

const cx = classNames.bind(styles);
const { RangePicker } = DatePicker;
const { Option } = Select;

const dataSource = [
  {
    key: "1",
    stt: 1,
    ngayTao: "2023-10-01",
    ten: "Yêu cầu 1",
    moTa: "Mô tả yêu cầu 1",
    thoiGianThucHien: "Không có dữ liệu",
    trangThai: "Chờ xử lý",
  },
  {
    key: "2",
    stt: 2,
    ngayTao: "2023-10-01",
    ten: "Yêu cầu 1",
    moTa: "Mô tả yêu cầu 1",
    thoiGianThucHien: "Không có dữ liệu",
    trangThai: "Chờ xử lý",
  },
  {
    key: "3",
    stt: 3,
    ngayTao: "2023-10-01",
    ten: "Yêu cầu 1",
    moTa: "Mô tả yêu cầu 1",
    thoiGianThucHien: "Không có dữ liệu",
    trangThai: "Chờ xử lý",
  },
  {
    key: "4",
    stt: 4,
    ngayTao: "2023-10-01",
    ten: "Yêu cầu 1",
    moTa: "Mô tả yêu cầu 1",
    thoiGianThucHien: "Không có dữ liệu",
    trangThai: "Chờ xử lý",
  },
  {
    key: "5",
    stt: 5,
    ngayTao: "2023-10-01",
    ten: "Yêu cầu 1",
    moTa: "Mô tả yêu cầu 1",
    thoiGianThucHien: "Không có dữ liệu",
    trangThai: "Chờ xử lý",
  },
  {
    key: "6",
    stt: 6,
    ngayTao: "2023-10-01",
    ten: "Yêu cầu 1",
    moTa: "Mô tả yêu cầu 1",
    thoiGianThucHien: "Không có dữ liệu",
    trangThai: "Chờ xử lý",
  },
];

const columns = [
  {
    title: "STT",
    dataIndex: "stt",
    key: "stt",
  },
  {
    title: "Ngày tạo",
    dataIndex: "ngayTao",
    key: "ngayTao",
  },
  {
    title: "Tên",
    dataIndex: "ten",
    key: "ten",
  },
  {
    title: "Mô tả",
    dataIndex: "moTa",
    key: "moTa",
  },
  {
    title: "Thời gian thực hiện",
    dataIndex: "thoiGianThucHien",
    key: "thoiGianThucHien",
  },
  {
    title: "Trạng thái",
    dataIndex: "trangThai",
    key: "trangThai",
  },
];

function Overview() {
  const [dateRange, setDateRange] = useState([]);
  const [statusFilter, setStatusFilter] = useState("all");

  const handleDateChange = (dates) => {
    setDateRange(dates);
  };

  const handleStatusChange = (value) => {
    setStatusFilter(value);
  };


  return (
    <div className={cx("content-container")}>
      <Diagram />
      <Card className={cx("filter-card")}>
        <Row gutter={[16, 16]}>
          <Col span={14} className={cx("header")}>
            <span>List of requirements</span>
          </Col>
          <Col span={5} className={cx("date-range")}>
            <span>Date Range</span>
            <RangePicker onChange={handleDateChange} />
          </Col>
          <Col span={3} className={cx("select")}>
            <span>Select Type</span>
            <Select
              defaultValue="all"
              style={{ width: "100%" }}
              onChange={handleStatusChange}
            >
              <Option value="all">All</Option>
              <Option value="pending">Pending</Option>
              <Option value="approved">Approved</Option>
              <Option value="rejected">Rejected</Option>
            </Select>
          </Col>
          <Col span={2} className={cx("button-create")}>
              <Button
                type="primary"
                icon={<PlusOutlined />}
              >
                Create
              </Button>
          </Col>
        </Row>
      </Card>
      <Table dataSource={dataSource} columns={columns}  pagination={{ 
          pageSize: 5, 
          showSizeChanger: true,
          pageSizeOptions: [5, 10, 20]
        }}/>
    </div>
  );
}

export default Overview;
