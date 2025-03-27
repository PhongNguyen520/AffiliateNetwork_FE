"use client"

import React, { useState } from "react";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid, 
  ResponsiveContainer 
} from "recharts";
import { 
  Card, 
  Row, 
  Col, 
  Button, 
  Radio, 
  Typography, 
  Space, 
  Statistic, 
  Divider 
} from "antd";

import styles from "./Overview.module.scss";
import { Download, Mouse, Percent } from "lucide-react";
import { ArrowUpOutlined, DollarCircleFilled, SwapOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const dataCards = [
  { 
    title: "Total Click", 
    value: "1,258", 
    change: "+6.2", 
    color: "#3BAFDA", 
    icon: <Mouse /> 
  },
  { 
    title: "Total Conversion", 
    value: "120", 
    change: "+4.8", 
    color: "#D9534F", 
    icon: <SwapOutlined /> 
  },
  { 
    title: "Total Revenue", 
    value: "10,258,000", 
    change: "+2.3", 
    color: "#F0AD4E", 
    icon: <DollarCircleFilled /> 
  },
  { 
    title: "Total Rate", 
    value: "64%", 
    change: "+1.2", 
    color: "#5CB85C", 
    icon: <Percent /> 
  }
];

const dailyData = [
  { month: "JAN", revenue: 500000, commission: 300000, earnings: 200000 },
  { month: "FEB", revenue: 1000000, commission: 500000, earnings: 300000 },
  { month: "MAR", revenue: 1500000, commission: 700000, earnings: 500000 },
  { month: "APR", revenue: 2000000, commission: 900000, earnings: 800000 },
  { month: "MAY", revenue: 1000000, commission: 600000, earnings: 400000 },
  { month: "JUN", revenue: 1200000, commission: 700000, earnings: 500000 },
  { month: "JUL", revenue: 1800000, commission: 800000, earnings: 600000 },
  { month: "AUG", revenue: 1700000, commission: 750000, earnings: 550000 },
  { month: "SEP", revenue: 1900000, commission: 850000, earnings: 650000 },
  { month: "OCT", revenue: 2000000, commission: 950000, earnings: 700000 },
  { month: "NOV", revenue: 2200000, commission: 1050000, earnings: 750000 },
  { month: "DEC", revenue: 2300000, commission: 1100000, earnings: 800000 }
];

const weeklyData = dailyData.map(d => ({
  ...d,
  revenue: d.revenue / 4,
  commission: d.commission / 4,
  earnings: d.earnings / 4
}));

const monthlyData = dailyData.map(d => ({
  ...d,
  revenue: d.revenue * 3,
  commission: d.commission * 2,
  earnings: d.earnings * 1.5
}));

const Overview = () => {
  const [timeRange, setTimeRange] = useState("monthly");

  const getChartData = () => {
    if (timeRange === "daily") return dailyData;
    if (timeRange === "weekly") return weeklyData;
    return monthlyData;
  };

  // Custom Legend
  const CustomLegend = () => (
    <div className={styles.legend}>
      <Space size="large">
        <div className={styles.legendItem}>
          <span className={styles.legendDot} style={{ backgroundColor: "#573BFF" }}></span>
          <Text>Total Revenue</Text>
        </div>
        <div className={styles.legendItem}>
          <span className={styles.legendDot} style={{ backgroundColor: "#FF3B3B" }}></span>
          <Text>Commission Earned</Text>
        </div>
        <div className={styles.legendItem}>
          <span className={styles.legendDot} style={{ backgroundColor: "#00C49F" }}></span>
          <Text>Paid Earnings</Text>
        </div>
      </Space>
    </div>
  );

  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboardHeader}>
        <Title level={4} className={styles.dashboardTitle}>Publisher Overview</Title>
        <Button 
          type="primary" 
          icon={<Download />} 
          className={styles.exportButton}
        >
          Export
        </Button>
      </div>
      
      <Row gutter={[16, 16]} className={styles.statsRow}>
        {dataCards.map((item, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <Card className={styles.statCard} bordered={false}>
              <div className={styles.cardIndicator} style={{ backgroundColor: item.color }}></div>
              <div className={styles.cardContent}>
                <div className={styles.cardIcon} style={{ color: item.color }}>
                  {item.icon}
                </div>
                <div className={styles.cardInfo}>
                  <Text type="secondary">{item.title}</Text>
                  <Statistic 
                    value={item.value} 
                    valueStyle={{ color: item.color, fontSize: '24px', fontWeight: 'bold' }} 
                  />
                  <Text className={styles.cardChange} style={{ color: item.color }}>
                    <ArrowUpOutlined /> {item.change}% Since last week
                  </Text>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      <Card className={styles.chartCard} bordered={false}>
        <div className={styles.chartHeader}>
          <div>
            <Title level={5} type="secondary" style={{ marginBottom: 8 }}>Statistics</Title>
            <Title level={4} style={{ color: "#53A8AD", margin: 0 }}>Income</Title>
          </div>
          
          <div className={styles.chartControls}>
            <CustomLegend />
            <Radio.Group 
              value={timeRange} 
              onChange={(e) => setTimeRange(e.target.value)}
              buttonStyle="solid"
              className={styles.timeToggle}
            >
              <Radio.Button value="daily">Daily</Radio.Button>
              <Radio.Button value="weekly">Weekly</Radio.Button>
              <Radio.Button value="monthly">Monthly</Radio.Button>
            </Radio.Group>
          </div>
        </div>
        
        <Divider style={{ margin: '16px 0' }} />
        
        <div className={styles.chartWrapper}>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={getChartData()} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: 'none', 
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)', 
                  borderRadius: '4px' 
                }} 
              />
              <Line 
                type="monotone" 
                dataKey="revenue" 
                stroke="#573BFF" 
                strokeWidth={3} 
                dot={{ r: 4, fill: "#573BFF" }} 
                activeDot={{ r: 6 }} 
              />
              <Line 
                type="monotone" 
                dataKey="commission" 
                stroke="#FF3B3B" 
                strokeWidth={3} 
                dot={{ r: 4, fill: "#FF3B3B" }} 
                activeDot={{ r: 6 }} 
              />
              <Line 
                type="monotone" 
                dataKey="earnings" 
                stroke="#00C49F" 
                strokeWidth={3} 
                dot={{ r: 4, fill: "#00C49F" }} 
                activeDot={{ r: 6 }} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};

export default Overview;
