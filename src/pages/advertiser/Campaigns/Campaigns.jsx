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
      key: "1",
      name: "Summer Sale Campaign",
      description: "Chiến dịch quảng cáo sản phẩm mùa hè",
      startDate: "2024-06-01",
      endDate: "2024-08-31",
      status: "Đang chạy",
      budget: 5000,
      conversionRate: 2.5,
      commissionType: "CPA",
      affiliateNetworks: ["Sendo", "Lazada"],
      image: "https://placehold.co/200",
    },
    {
      key: "2",
      name: "Electronics Promo",
      description: "Chiến dịch điện tử cuối năm",
      startDate: "2024-11-15",
      endDate: "2024-12-31",
      status: "Sắp bắt đầu",
      budget: 10000,
      conversionRate: 1.8,
      commissionType: "Revenue Share",
      affiliateNetworks: ["Tiki", "Shopee"],
      image: "https://placehold.co/200",
    },
    {
      key: "2",
      name: "Electronics Promo",
      description: "Chiến dịch điện tử cuối năm",
      startDate: "2024-11-15",
      endDate: "2024-12-31",
      status: "Sắp bắt đầu",
      budget: 10000,
      conversionRate: 1.8,
      commissionType: "Revenue Share",
      affiliateNetworks: ["Tiki", "Shopee"],
      image: "https://placehold.co/200",
    },
    {
      key: "2",
      name: "Electronics Promo",
      description: "Chiến dịch điện tử cuối năm",
      startDate: "2024-11-15",
      endDate: "2024-12-31",
      status: "Sắp bắt đầu",
      budget: 10000,
      conversionRate: 1.8,
      commissionType: "Revenue Share",
      affiliateNetworks: ["Tiki", "Shopee"],
      image: "https://placehold.co/200",
    },
    {
      key: "2",
      name: "Electronics Promo",
      description: "Chiến dịch điện tử cuối năm",
      startDate: "2024-11-15",
      endDate: "2024-12-31",
      status: "Sắp bắt đầu",
      budget: 10000,
      conversionRate: 1.8,
      commissionType: "Revenue Share",
      affiliateNetworks: ["Tiki", "Shopee"],
      image: "https://placehold.co/200",
    },
    {
      key: "2",
      name: "Electronics Promo",
      description: "Chiến dịch điện tử cuối năm",
      startDate: "2024-11-15",
      endDate: "2024-12-31",
      status: "Sắp bắt đầu",
      budget: 10000,
      conversionRate: 1.8,
      commissionType: "Revenue Share",
      affiliateNetworks: ["Tiki", "Shopee"],
      image: "https://placehold.co/200",
    },
    {
      key: "2",
      name: "Electronics Promo",
      description: "Chiến dịch điện tử cuối năm",
      startDate: "2024-11-15",
      endDate: "2024-12-31",
      status: "Sắp bắt đầu",
      budget: 10000,
      conversionRate: 1.8,
      commissionType: "Revenue Share",
      affiliateNetworks: ["Tiki", "Shopee"],
      image: "https://placehold.co/200",
    },
    {
      key: "2",
      name: "Electronics Promo",
      description: "Chiến dịch điện tử cuối năm",
      startDate: "2024-11-15",
      endDate: "2024-12-31",
      status: "Sắp bắt đầu",
      budget: 10000,
      conversionRate: 1.8,
      commissionType: "Revenue Share",
      affiliateNetworks: ["Tiki", "Shopee"],
      image: "https://placehold.co/200",
    },
    {
      key: "2",
      name: "Electronics Promo",
      description: "Chiến dịch điện tử cuối năm",
      startDate: "2024-11-15",
      endDate: "2024-12-31",
      status: "Sắp bắt đầu",
      budget: 10000,
      conversionRate: 1.8,
      commissionType: "Revenue Share",
      affiliateNetworks: ["Tiki", "Shopee"],
      image: "https://placehold.co/200",
    },
    {
      key: "2",
      name: "Electronics Promo",
      description: "Chiến dịch điện tử cuối năm",
      startDate: "2024-11-15",
      endDate: "2024-12-31",
      status: "Sắp bắt đầu",
      budget: 10000,
      conversionRate: 1.8,
      commissionType: "Revenue Share",
      affiliateNetworks: ["Tiki", "Shopee"],
      image: "https://placehold.co/200",
    },
    {
      key: "2",
      name: "Electronics Promo",
      description: "Chiến dịch điện tử cuối năm",
      startDate: "2024-11-15",
      endDate: "2024-12-31",
      status: "Sắp bắt đầu",
      budget: 10000,
      conversionRate: 1.8,
      commissionType: "Revenue Share",
      affiliateNetworks: ["Tiki", "Shopee"],
      image: "https://placehold.co/200",
    },
  ]);


  const showModal = (campaign = null) => {
    if (campaign) {
      setIsEditMode(true);
      setCurrentCampaign(campaign);
      form.setFieldsValue({
        ...campaign,
        dateRange: [dayjs(campaign.startDate), dayjs(campaign.endDate)],
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
      key: isEditMode ? currentCampaign.key : String(campaigns.length + 1),
      startDate: values.dateRange[0].format("YYYY-MM-DD"),
      endDate: values.dateRange[1].format("YYYY-MM-DD"),
      status: isEditMode ? currentCampaign.status : "Sắp bắt đầu",
      image: values.image,
    };

    if (isEditMode) {
      setCampaigns(
        campaigns.map((c) => (c.key === campaignData.key ? campaignData : c))
      );
      message.success("Cập nhật chiến dịch thành công!");
    } else {
      setCampaigns([...campaigns, campaignData]);
      message.success("Tạo chiến dịch thành công!");
    }

    handleCancel();
  };

  const handleDelete = (key) => {
    setCampaigns(campaigns.filter((c) => c.key !== key));
    message.success("Xóa chiến dịch thành công!");
  };

  const handleStatusChange = (key, newStatus) => {
    setCampaigns(
      campaigns.map((c) => (c.key === key ? { ...c, status: newStatus } : c))
    );
    message.info(
      `Đã ${newStatus === "Dừng" ? "dừng" : "kích hoạt"} chiến dịch!`
    );
  };

  const columns = [
    {
      title: "Hình Ảnh",
      dataIndex: "image",
      key: "image",
      render: (image) => (
        <img
          src={image}
          alt="Campaign"
          style={{ width: 50, height: 50, borderRadius: 4 }}
        />
      ),
    },
    {
      title: "Tên Chiến Dịch",
      dataIndex: "name",
      key: "name",
      render: (text) => <strong>{text}</strong>,
    },
    {
      title: "Mô Tả",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Ngày Chạy",
      key: "dates",
      render: (_, record) => (
        <div>
          {record.startDate} <FaArrowRight /> {record.endDate}
        </div>
      ),
    },
    {
      title: "Trạng Thái",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        const color =
          status === "Đang chạy"
            ? "green"
            : status === "Sắp bắt đầu"
            ? "blue"
            : status === "Dừng"
            ? "red"
            : "default";
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: "Ngân Sách",
      dataIndex: "budget",
      key: "budget",
      render: (budget) => `$${budget.toLocaleString()}`,
    },
    {
      title: "Mạng Affiliate",
      key: "affiliateNetworks",
      render: (_, record) => (
        <div>
          {record.affiliateNetworks.map((network) => (
            <Tag key={network}>{network}</Tag>
          ))}
        </div>
      ),
    },
    {
      title: "Hành Động",
      key: "action",
      render: (_, record) => (
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item
                key="edit"
                icon={<EditOutlined />}
                onClick={() => showModal(record)}
              >
                Chỉnh Sửa
              </Menu.Item>
              <NavLink to={"/campaigns/detail"}>
                <Menu.Item key="view" icon={<EyeOutlined />}>
                  Chi Tiết
                </Menu.Item>
              </NavLink>
              {record.status === "Đang chạy" ? (
                <Menu.Item
                  key="stop"
                  icon={<StopOutlined />}
                  onClick={() => handleStatusChange(record.key, "Dừng")}
                >
                  Dừng Chiến Dịch
                </Menu.Item>
              ) : (
                <Menu.Item
                  key="activate"
                  icon={<PlayCircleOutlined />}
                  onClick={() => handleStatusChange(record.key, "Đang chạy")}
                >
                  Kích Hoạt
                </Menu.Item>
              )}
              <Menu.Item key="delete" danger>
                <Popconfirm
                  title="Bạn có chắc muốn xóa chiến dịch này?"
                  onConfirm={() => handleDelete(record.key)}
                  okText="Xóa"
                  cancelText="Hủy"
                >
                  <div>
                    <DeleteOutlined /> Xóa Chiến Dịch
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
        <h1>Quản Lý Chiến Dịch</h1>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => showModal()}
        >
          Tạo Chiến Dịch Mới
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
        title={isEditMode ? "Chỉnh Sửa Chiến Dịch" : "Tạo Chiến Dịch Mới"}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          form={form}
          onFinish={handleSubmit}
          layout="vertical"
          initialValues={{
            commissionType: "CPA",
            affiliateNetworks: [],
          }}
        >
          <Form.Item
            label="Tên Chiến Dịch"
            name="name"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập tên chiến dịch!",
              },
            ]}
          >
            <Input placeholder="Nhập tên chiến dịch" />
          </Form.Item>

          <Form.Item
            label="Mô Tả"
            name="description"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mô tả chiến dịch!",
              },
            ]}
          >
            <Input.TextArea
              placeholder="Mô tả chi tiết về chiến dịch"
              rows={3}
            />
          </Form.Item>

          <Form.Item
            label="Hình Ảnh"
            name="image"
            rules={[{ required: true, message: "Vui lòng nhập URL hình ảnh!" }]}
          >
            <Input placeholder="Nhập URL hình ảnh" />
          </Form.Item>

          <Form.Item
            label="Thời Gian Chiến Dịch"
            name="dateRange"
            rules={[
              {
                required: true,
                message: "Vui lòng chọn thời gian chiến dịch!",
              },
            ]}
          >
            <RangePicker style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label="Ngân Sách"
            name="budget"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập ngân sách chiến dịch!",
              },
            ]}
          >
            <Input type="number" prefix="$" placeholder="Nhập ngân sách" />
          </Form.Item>

          <Form.Item
            label="Loại Hoa Hồng"
            name="commissionType"
            rules={[
              {
                required: true,
                message: "Vui lòng chọn loại hoa hồng!",
              },
            ]}
          >
            <Select placeholder="Chọn loại hoa hồng">
              <Option value="CPA">CPA (Chi trả theo hành động)</Option>
              <Option value="Revenue Share">Chia sẻ doanh thu</Option>
              <Option value="Hybrid">Kết hợp</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Mạng Affiliate" name="affiliateNetworks">
            <Select mode="multiple" placeholder="Chọn các mạng affiliate">
              <Option value="Sendo">Sendo</Option>
              <Option value="Lazada">Lazada</Option>
              <Option value="Shopee">Shopee</Option>
              <Option value="Tiki">Tiki</Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              {isEditMode ? "Cập Nhật" : "Tạo Chiến Dịch"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Campaigns;
