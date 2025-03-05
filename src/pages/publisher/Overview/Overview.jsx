import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import styles from "./Overview.module.scss";

const dataCards = [
    { title: "Total Click", value: "1.258", change: "+6.2", color: "#3BAFDA" },
    { title: "Total Conversion", value: "120", change: "+4.8", color: "#D9534F" },
    { title: "Total Revenue", value: "10.258.000", change: "+2.3", color: "#F0AD4E" },
    { title: "Total Rate", value: "64", change: "+1.2", color: "#5CB85C" }
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

    // Custom Legend (Legend đưa lên trên)
    const customLegend = () => (
        <div className={styles.legend}>
            <div className={styles.legendItem}>
                <span className={styles.revenueDot}></span> Total Revenue
            </div>
            <div className={styles.legendItem}>
                <span className={styles.commissionDot}></span> Commission Earned
            </div>
            <div className={styles.legendItem}>
                <span className={styles.earningsDot}></span> Paid Earnings
            </div>
        </div>
    );

    return (
        <div className={styles.dashboard}>
            {/* <h2 className={styles.title}>Publisher Overview</h2> */}
            <div className={styles.exportButton}>
                <button>
                <i class="bi bi-cloud-download-fill"></i>
                    Export</button>
            </div>
            <div className={styles.stats}>
                {dataCards.map((item, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.cardLeft} style={{ backgroundColor: item.color }}></div>
                        <div className={styles.cardContent}>
                            <div className="d-flex gap-3 align-items-center">
                                <div className={styles.line} style={{ backgroundColor: item.color }}></div>
                                <div>
                                    <p className={styles.cardTitle}>{item.title}</p>
                                    <h3 className={styles.cardValue} style={{ color: item.color }}>{item.value}</h3>
                                </div>

                            </div>
                            <span className={styles.cardChange} style={{ color: item.color }}>
                                ▲ {item.change} Since last week
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.chartContainer}>
                <div className={styles.chartHeader}>
                    <h3 style={{ color: "#9291A5", fontSize: "20px" }}>Statistics</h3>
                </div>
                <div className={styles.rowNote}>
                    <h3 style={{ color: "#53A8AD", fontWeight: "bolder" }}>Income</h3>
                    {customLegend()}
                    <div className={styles.timeToggle}>
                        <button className={timeRange === "daily" ? styles.active : ""} onClick={() => setTimeRange("daily")}>
                            Daily
                        </button>
                        <button className={timeRange === "weekly" ? styles.active : ""} onClick={() => setTimeRange("weekly")}>
                            Weekly
                        </button>
                        <button className={timeRange === "monthly" ? styles.active : ""} onClick={() => setTimeRange("monthly")}>
                            Monthly
                        </button>
                    </div>
                </div>


                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={getChartData()} margin={{ left: 40 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="revenue" stroke="#573BFF" strokeWidth={3} dot={{ r: 4 }} />
                        <Line type="monotone" dataKey="commission" stroke="#FF3B3B" strokeWidth={3} dot={{ r: 4 }} />
                        <Line type="monotone" dataKey="earnings" stroke="#00C49F" strokeWidth={3} dot={{ r: 4 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Overview;
