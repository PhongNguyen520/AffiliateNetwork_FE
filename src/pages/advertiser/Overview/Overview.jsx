import React, { useState, useEffect } from "react";
import { Card, Button } from "antd";
import classNames from "classnames/bind";
import styles from "./Overview.module.scss";
import Diagram from "./Diagram/Diagram";
import CampaignList from "./CampaignList/CampaignList";
import CampaignModal from "./CampaignModal/CampaignModal";
import RequestList from "./RequestList/RequestList";
import { requestsPrivate } from "../../../utils/requests";

const cx = classNames.bind(styles);
const LIST_CAMPAIGN_OF_ADVERTISER = "campaign/advertiser_list";

const Overview = () => {
  const [dateRange, setDateRange] = useState([]);
  const [statusFilter, setStatusFilter] = useState("all");
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 6,
    total: 0,
  });
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [selectedCampaignId, setSelectedCampaignId] = useState(null);

  useEffect(() => {
    fetchCampaigns();
  }, [pagination.current, pagination.pageSize]);

  const fetchCampaigns = async (params = {}) => {
    try {
      setLoading(true);
      const response = await requestsPrivate.get(LIST_CAMPAIGN_OF_ADVERTISER, {
        params: {
          page: params.current || pagination.current,
          pageSize: params.pageSize || pagination.pageSize,
          name: params.name || "",
          status: params.status || "",
        },
      });
      
      setCampaigns(response.data.data.items);
      setPagination({
        ...pagination,
        current: params.current || pagination.current,
        pageSize: params.pageSize || pagination.pageSize,
        total: response.data.data.totalItems || 0,
      });
    } catch (error) {
      console.error("Error fetching campaigns:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDateChange = (dates) => {
    setDateRange(dates);
  };

  const handleStatusChange = (value) => {
    setStatusFilter(value);
  };

  const handleTableChange = (newPagination) => {
    setPagination(newPagination);
    fetchCampaigns(newPagination);
  };

  const handleViewDetails = (campaign) => {
    setSelectedCampaignId(campaign.id);
    setViewModalOpen(true);
  };

  return (
    <div className={cx("content-container")}>
     <Diagram campaigns={campaigns}/>

      <Card className={cx("campaign-card")}>
        <CampaignList
          campaigns={campaigns}
          loading={loading}
          pagination={pagination}
          onTableChange={handleTableChange}
          onViewDetails={handleViewDetails}
          fetchCampaigns={fetchCampaigns}
        />
      </Card>

      <RequestList
        onDateChange={handleDateChange}
        onStatusChange={handleStatusChange}
        onCreateClick={() => console.log("Create clicked")}
      />

      <CampaignModal
        campaignId={selectedCampaignId}
        visible={viewModalOpen}
        onClose={() => setViewModalOpen(false)}
        refreshCampaigns={fetchCampaigns}
      />
    </div>
  );
};

export default Overview;
