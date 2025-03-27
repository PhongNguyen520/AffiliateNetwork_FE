import React, { useState } from "react";
import { Table, Tag, Image, Progress, Button, Empty, Tooltip, Row, Col, Input, Select } from "antd";
import { 
  EyeOutlined, 
  ClockCircleOutlined, 
  CheckCircleOutlined,
  StopOutlined,
  DollarOutlined,
  CloseCircleOutlined,
  SearchOutlined
} from "@ant-design/icons";
import classNames from "classnames/bind";
import styles from "./CampaignList.module.scss";
import { User } from "lucide-react";

const cx = classNames.bind(styles);

const statusIcons = {
  Active: <CheckCircleOutlined />,
  Wait: <ClockCircleOutlined />,
  Reject: <CloseCircleOutlined />,
  Unpaid: <DollarOutlined />,
  Stop: <StopOutlined />,
  End: <StopOutlined />
};

const statusOptions = [
  { value: '', label: 'All Statuses' },
  { value: 'Active', label: 'Active' },
  { value: 'Wait', label: 'Pending' },
  { value: 'Reject', label: 'Rejected' },
  { value: 'UnPaid', label: 'Unpaid' },
  { value: 'Stop', label: 'Stopped' },
  { value: 'End', label: 'Ended' },
];

const CampaignList = ({ 
  campaigns, 
  loading, 
  pagination, 
  onTableChange,
  onViewDetails,
  fetchCampaigns
}) => {

  const [searchParams, setSearchParams] = useState({
    name: '',
    status: ''
  });

const handleSearch = () => {
  const newPagination = { ...pagination, current: 1 };
  fetchCampaigns({
    ...newPagination,
    ...searchParams
  });
};

const handleReset = () => {
  setSearchParams({ name: '', status: '' });
  const newPagination = { ...pagination, current: 1 };
  fetchCampaigns(newPagination);
};
  const getStatusTag = (status) => {
    let color = "";
    switch (status) {
      case "Active": color = "green"; break;
      case "Wait": color = "orange"; break;
      case "Reject": color = "red"; break;
      case "UnPaid": color = "volcano"; break;
      case "Stop": color = "magenta"; break;
      case "End": color = "blue"; break;
      default: color = "default";
    }
    return (
      <Tag 
        color={color} 
        icon={statusIcons[status]}
        className={cx("status-tag")}
      >
        {status}
      </Tag>
    );
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const columns = [
    {
      title: "CAMPAIGN",
      dataIndex: "campaignName",
      key: "campaignName",
      render: (text, record) => (
        <div className={cx("campaign-cell")}>
          <div className={cx("campaign-image-container")}>
            {record.image ? (
              <Image
                src={record.image}
                alt={text}
                width={80}
                height={50}
                className={cx("campaign-image")}
                preview={false}
                fallback="/placeholder-image.svg"
              />
            ) : (
              <div className={cx("image-placeholder")}>
                <span>No Image</span>
              </div>
            )}
          </div>
          <div className={cx("campaign-info")}>
            <div className={cx("campaign-name")}>{text}</div>
            <div className={cx("campaign-dates")}>
              {formatDate(record.startDate)} - {formatDate(record.endDate)}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "STATUS",
      dataIndex: "status",
      key: "status",
      align: "center",
      render: (status) => getStatusTag(status),
    },
    {
      title: "ENROLLMENTS",
      dataIndex: "enrollCount",
      key: "enrollCount",
      align: "center",
      render: (count) => (
        <div className={cx("enroll-count")}>
          <span className={cx("count-value")}>{count}</span>
          <span className={cx("count-label")}><User/></span>
        </div>
      ),
    },
    {
      title: "CONVERSION RATE",
      dataIndex: "conversionRate",
      key: "conversionRate",
      align: "center",
      render: (rate) => (
        <div className={cx("conversion-cell")}>
          <Progress
            percent={Math.round(rate * 100)}
            size="small"
            status={rate >= 0.5 ? "success" : "normal"}
            showInfo={false}
            className={cx("conversion-progress")}
          />
          <span className={cx("conversion-value")}>{Math.round(rate * 100)}%</span>
        </div>
      ),
    },
    {
      title: "ACTIONS",
      key: "action",
      align: "right",
      render: (_, record) => (
        <Tooltip title="View details">
          <Button 
            type="text" 
            shape="circle"
            icon={<EyeOutlined />}
            onClick={() => onViewDetails(record)}
            className={cx("view-button")}
          />
        </Tooltip>
      ),
    },
  ];

  return (
    <div className={cx("campaign-list-container")}>

<div className={cx("filter-section")}>
        <Row gutter={16} align="middle">
          <Col xs={24} sm={12} md={8} lg={6}>
            <Input
              placeholder="Search by campaign name"
              prefix={<SearchOutlined />}
              value={searchParams.name}
              onChange={(e) => setSearchParams({...searchParams, name: e.target.value})}
              onPressEnter={handleSearch}
              allowClear
            />
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Select
              placeholder="Filter by status"
              style={{ width: '100%' }}
              value={searchParams.status || undefined}
              onChange={(value) => setSearchParams({...searchParams, status: value})}
              options={statusOptions}
              allowClear
            />
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Button 
              type="primary" 
              onClick={handleSearch}
              icon={<SearchOutlined />}
            >
              Search
            </Button>
            <Button 
              style={{ marginLeft: 8 }}
              onClick={handleReset}
            >
              Reset
            </Button>
          </Col>
        </Row>
      </div>

      <Table
        columns={columns}
        dataSource={campaigns}
        rowKey="id"
        loading={loading}
        pagination={{
          ...pagination,
          showSizeChanger: true,
          pageSizeOptions: ["6", "12", "24", "48"],
          showTotal: (total) => `Total ${total} campaigns`,
        }}
        onChange={onTableChange}
        locale={{
          emptyText: (
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description="No campaigns found"
              className={cx("empty-state")}
            />
          ),
        }}
        className={cx("campaign-table")}
      />
    </div>
  );
};

export default CampaignList;