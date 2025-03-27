import React from "react";
import { Table, DatePicker, Select, Button, Row, Col } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import classNames from "classnames/bind";
import styles from "./RequestList.module.scss";

const { RangePicker } = DatePicker;
const { Option } = Select;
const cx = classNames.bind(styles);

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

const RequestList = ({ 
  onDateChange, 
  onStatusChange,
  onCreateClick
}) => {
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

  return (
    <div className={cx("request-container")}>
      <div className={cx("filter-card")}>
        <Row gutter={[16, 16]}>
          <Col span={14} className={cx("header")}>
            <span>List of requirements</span>
          </Col>
          <Col span={5} className={cx("date-range")}>
            <span>Date Range</span>
            <RangePicker onChange={onDateChange} />
          </Col>
          <Col span={3} className={cx("select")}>
            <span>Select Type</span>
            <Select
              defaultValue="all"
              style={{ width: "100%" }}
              onChange={onStatusChange}
            >
              <Option value="all">All</Option>
              <Option value="pending">Pending</Option>
              <Option value="approved">Approved</Option>
              <Option value="rejected">Rejected</Option>
            </Select>
          </Col>
          <Col span={2} className={cx("button-create")}>
            <Button type="primary" icon={<PlusOutlined />} onClick={onCreateClick}>
              Create
            </Button>
          </Col>
        </Row>
      </div>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{
          pageSize: 5,
          showSizeChanger: true,
          pageSizeOptions: [5, 10, 20],
        }}
        className={cx("request-table")}
      />
    </div>
  );
};

export default RequestList;