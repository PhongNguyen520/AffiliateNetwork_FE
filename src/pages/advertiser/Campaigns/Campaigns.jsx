import React, { useState } from "react";
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  DatePicker,
  Select,
  message,
  Tag,
  Dropdown,
  Menu,
  Popconfirm,
} from "antd";
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  MoreOutlined,
  EyeOutlined,
  StopOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";
import classNames from "classnames/bind";
import styles from "./Campaigns.module.scss";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const cx = classNames.bind(styles);
const { RangePicker } = DatePicker;
const { Option } = Select;


const Campaigns = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentCampaign, setCurrentCampaign] = useState(null);
  const [form] = Form.useForm();

  const [campaigns, setCampaigns] = useState([
    {
      id: "1",
      websiteLink: "https://example.com",
      campaignName: "Summer Sale Campaign",
      introduction: "Summer product advertising campaign",
      description: "Summer product advertising campaign with attractive offers",
      policy: "Applicable policies and terms",
      image: "https://placehold.co/200",
      enrollCount: 150,
      conversionRate: 2.5,
      status: "Running",
      createDate: "2024-06-01",
      endDate: "2024-08-31",
      deposit: 5000,
      targetCustomer: "Customers aged 18-35",
      zone: "Nationwide",
      campaignCategory: "Fashion",
      payoutMethod: "CPA",
    },
    {
      id: "2",
      websiteLink: "https://example.com",
      campaignName: "Electronics Promo",
      introduction: "Year-end electronics campaign",
      description: "Year-end electronics campaign with attractive offers",
      policy: "Applicable policies and terms",
      image: "https://placehold.co/200",
      enrollCount: 200,
      conversionRate: 1.8,
      status: "Upcoming",
      createDate: "2024-11-15",
      endDate: "2024-12-31",
      deposit: 10000,
      targetCustomer: "Customers aged 25-45",
      zone: "Southern Region",
      campaignCategory: "Electronics",
      payoutMethod: "Revenue Share",
    },
    {
      id: "3",
      websiteLink: "https://example.com",
      campaignName: "Back to School",
      introduction: "Back to school promotion campaign",
      description: "Promotion campaign for school supplies and accessories",
      policy: "Applicable policies and terms",
      image: "https://placehold.co/200",
      enrollCount: 300,
      conversionRate: 3.2,
      status: "Running",
      createDate: "2024-08-01",
      endDate: "2024-09-15",
      deposit: 7500,
      targetCustomer: "Students and parents",
      zone: "Nationwide",
      campaignCategory: "Education",
      payoutMethod: "CPA",
    },
    {
      id: "4",
      websiteLink: "https://example.com",
      campaignName: "Holiday Special",
      introduction: "Holiday season special offers",
      description: "Special offers for the holiday season",
      policy: "Applicable policies and terms",
      image: "https://placehold.co/200",
      enrollCount: 250,
      conversionRate: 2.0,
      status: "Upcoming",
      createDate: "2024-12-01",
      endDate: "2024-12-25",
      deposit: 12000,
      targetCustomer: "All customers",
      zone: "Nationwide",
      campaignCategory: "Holiday",
      payoutMethod: "Revenue Share",
    },
    {
      id: "5",
      websiteLink: "https://example.com",
      campaignName: "Fitness Challenge",
      introduction: "New year fitness challenge",
      description: "Join our fitness challenge to kickstart your new year",
      policy: "Applicable policies and terms",
      image: "https://placehold.co/200",
      enrollCount: 180,
      conversionRate: 2.8,
      status: "Running",
      createDate: "2024-01-01",
      endDate: "2024-01-31",
      deposit: 6000,
      targetCustomer: "Fitness enthusiasts",
      zone: "Nationwide",
      campaignCategory: "Health & Fitness",
      payoutMethod: "CPA",
    },
    {
      id: "6",
      websiteLink: "https://example.com",
      campaignName: "Tech Gadgets Launch",
      introduction: "Launch of new tech gadgets",
      description: "Be the first to experience our new tech gadgets",
      policy: "Applicable policies and terms",
      image: "https://placehold.co/200",
      enrollCount: 220,
      conversionRate: 2.3,
      status: "Running",
      createDate: "2024-03-01",
      endDate: "2024-03-31",
      deposit: 8000,
      targetCustomer: "Tech enthusiasts",
      zone: "Nationwide",
      campaignCategory: "Technology",
      payoutMethod: "Revenue Share",
    },
    {
      id: "7",
      websiteLink: "https://example.com",
      campaignName: "Spring Fashion",
      introduction: "Spring fashion collection launch",
      description: "Discover our new spring fashion collection",
      policy: "Applicable policies and terms",
      image: "https://placehold.co/200",
      enrollCount: 170,
      conversionRate: 2.1,
      status: "Upcoming",
      createDate: "2024-02-15",
      endDate: "2024-03-15",
      deposit: 7000,
      targetCustomer: "Fashion enthusiasts",
      zone: "Nationwide",
      campaignCategory: "Fashion",
      payoutMethod: "CPA",
    },
  ]);

  const showModal = (campaign = null) => {
    if (campaign) {
      setIsEditMode(true);
      setCurrentCampaign(campaign);
      form.setFieldsValue({
        ...campaign,
        dateRange: [dayjs(campaign.createDate), dayjs(campaign.endDate)],
      });
    } else {
      setIsEditMode(false);
      setCurrentCampaign(null);
    }
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
    setIsEditMode(false);
    setCurrentCampaign(null);
  };

  const handleSubmit = (values) => {
    const campaignData = {
      ...values,
      id: isEditMode ? currentCampaign.id : String(campaigns.length + 1),
      createDate: values.dateRange[0].format("YYYY-MM-DD"),
      endDate: values.dateRange[1].format("YYYY-MM-DD"),
      status: isEditMode ? currentCampaign.status : "Upcoming",
      image: values.image,
    };

    if (isEditMode) {
      setCampaigns(campaigns.map((c) => (c.id === campaignData.id ? campaignData : c)));
      message.success("Campaign updated successfully!");
    } else {
      setCampaigns([...campaigns, campaignData]);
      message.success("Campaign created successfully!");
    }

    handleCancel();
  };

  const handleDelete = (id) => {
    setCampaigns(campaigns.filter((c) => c.id !== id));
    message.success("Campaign deleted successfully!");
  };

  const handleStatusChange = (id, newStatus) => {
    setCampaigns(campaigns.map((c) => (c.id === id ? { ...c, status: newStatus } : c)));
    message.info(`Campaign ${newStatus === "Stopped" ? "stopped" : "activated"}!`);
  };

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image) => (
        <img src={image} alt="Campaign" style={{ width: 50, height: 50, borderRadius: 4 }} />
      ),
    },
    {
      title: "Campaign Name",
      dataIndex: "campaignName",
      key: "campaignName",
      render: (text) => <strong>{text}</strong>,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Campaign Dates",
      key: "dates",
      render: (_, record) => (
        <div>
          {record.createDate} <FaArrowRight /> {record.endDate}
        </div>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        const color =
          status === "Running"
            ? "green"
            : status === "Upcoming"
            ? "blue"
            : status === "Stopped"
            ? "red"
            : "default";
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: "Deposit",
      dataIndex: "deposit",
      key: "deposit",
      render: (deposit) => `$${deposit.toLocaleString()}`,
    },
    {
      title: "Target Customer",
      dataIndex: "targetCustomer",
      key: "targetCustomer",
    },
    {
      title: "Zone",
      dataIndex: "zone",
      key: "zone",
    },
    {
      title: "Actions",
      key: "action",
      render: (_, record) => (
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key="edit" icon={<EditOutlined />} onClick={() => showModal(record)}>
                Edit
              </Menu.Item>
              <NavLink to={"/campaigns/detail"}>
                <Menu.Item key="view" icon={<EyeOutlined />}>
                  View Details
                </Menu.Item>
              </NavLink>
              {record.status === "Running" ? (
                <Menu.Item
                  key="stop"
                  icon={<StopOutlined />}
                  onClick={() => handleStatusChange(record.id, "Stopped")}
                >
                  Stop Campaign
                </Menu.Item>
              ) : (
                <Menu.Item
                  key="activate"
                  icon={<PlayCircleOutlined />}
                  onClick={() => handleStatusChange(record.id, "Running")}
                >
                  Activate
                </Menu.Item>
              )}
              <Menu.Item key="delete" danger>
                <Popconfirm
                  title="Are you sure you want to delete this campaign?"
                  onConfirm={() => handleDelete(record.id)}
                  okText="Delete"
                  cancelText="Cancel"
                >
                  <div>
                    <DeleteOutlined /> Delete Campaign
                  </div>
                </Popconfirm>
              </Menu.Item>
            </Menu>
          }
          trigger={["click"]}
        >
          <Button type="text" icon={<MoreOutlined />} />
        </Dropdown>
      ),
    },
  ];

  return (
    <div className={cx("campaigns-container")}>
      <div className={cx("campaigns-header")}>
        <h1>Campaign Management</h1>
        <Button type="primary" icon={<PlusOutlined />} onClick={() => showModal()}>
          Create New Campaign
        </Button>
      </div>

      <Table
        dataSource={campaigns}
        columns={columns}
        pagination={{
          pageSize: 5,
          showSizeChanger: true,
          pageSizeOptions: [5, 10, 20],
        }}
        className={cx("campaigns-table")}
        bordered
      />

      <Modal
        title={isEditMode ? "Edit Campaign" : "Create New Campaign"}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          form={form}
          onFinish={handleSubmit}
          layout="vertical"
          initialValues={{
            payoutMethod: "CPA",
          }}
        >
          <Form.Item
            label="Campaign Name"
            name="campaignName"
            rules={[
              {
                required: true,
                message: "Please enter the campaign name!",
              },
            ]}
          >
            <Input placeholder="Enter campaign name" />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please enter the campaign description!",
              },
            ]}
          >
            <Input.TextArea placeholder="Enter detailed description of the campaign" rows={3} />
          </Form.Item>

          <Form.Item
            label="Image URL"
            name="image"
            rules={[{ required: true, message: "Please enter the image URL!" }]}
          >
            <Input placeholder="Enter image URL" />
          </Form.Item>

          <Form.Item
            label="Campaign Dates"
            name="dateRange"
            rules={[
              {
                required: true,
                message: "Please select the campaign dates!",
              },
            ]}
          >
            <RangePicker style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label="Deposit"
            name="deposit"
            rules={[
              {
                required: true,
                message: "Please enter the campaign deposit!",
              },
            ]}
          >
            <Input type="number" prefix="$" placeholder="Enter deposit" />
          </Form.Item>

          <Form.Item
            label="Target Customer"
            name="targetCustomer"
            rules={[
              {
                required: true,
                message: "Please enter the target customer!",
              },
            ]}
          >
            <Input placeholder="Enter target customer" />
          </Form.Item>

          <Form.Item
            label="Zone"
            name="zone"
            rules={[
              {
                required: true,
                message: "Please enter the zone!",
              },
            ]}
          >
            <Input placeholder="Enter zone" />
          </Form.Item>

          <Form.Item
            label="Payout Method"
            name="payoutMethod"
            rules={[
              {
                required: true,
                message: "Please select the payout method!",
              },
            ]}
          >
            <Select placeholder="Select payout method">
              <Option value="CPA">CPA (Cost Per Action)</Option>
              <Option value="Revenue Share">Revenue Share</Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              {isEditMode ? "Update" : "Create Campaign"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Campaigns;