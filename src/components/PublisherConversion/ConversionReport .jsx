import React from "react";
import styles from "./ConversionReport.module.scss";

const ConversionReport = () => {
    const data = [
        {
            buyingTime: "2024-03-01 10:30",
            transactionId: "TXN123456",
            orderCode: "ORD001",
            advertiser: "Brand A",
            productCode: "P12345",
            product: "Smartphone X",
            productPath: "/electronics/smartphone-x",
            number: 2,
            status: "Approved",
            price: "$500",
            commission: "$50",
            expectedApproval: "2024-03-10",
            reasonCancellation: "-",
            complaints: "No complaints",
        },
        {
            buyingTime: "2024-03-02 15:45",
            transactionId: "TXN789012",
            orderCode: "ORD002",
            advertiser: "Brand B",
            productCode: "P67890",
            product: "Wireless Earbuds",
            productPath: "/electronics/earbuds",
            number: 1,
            status: "Pending",
            price: "$80",
            commission: "$8",
            expectedApproval: "2024-03-12",
            reasonCancellation: "-",
            complaints: "Under review",
        },
        {
            buyingTime: "2024-03-03 08:20",
            transactionId: "TXN345678",
            orderCode: "ORD003",
            advertiser: "Brand C",
            productCode: "P11223",
            product: "Gaming Mouse",
            productPath: "/accessories/mouse",
            number: 1,
            status: "Rejected",
            price: "$45",
            commission: "$0",
            expectedApproval: "-",
            reasonCancellation: "Out of stock",
            complaints: "Customer complaint",
        },
        {
            buyingTime: "2024-03-03 08:20",
            transactionId: "TXN345678",
            orderCode: "ORD003",
            advertiser: "Brand C",
            productCode: "P11223",
            product: "Gaming Mouse",
            productPath: "/accessories/mouse",
            number: 1,
            status: "Rejected",
            price: "$45",
            commission: "$0",
            expectedApproval: "-",
            reasonCancellation: "Out of stock",
            complaints: "Customer complaint",
        },
        {
            buyingTime: "2024-03-01 10:30",
            transactionId: "TXN123456",
            orderCode: "ORD001",
            advertiser: "Brand A",
            productCode: "P12345",
            product: "Smartphone X",
            productPath: "/electronics/smartphone-x",
            number: 2,
            status: "Approved",
            price: "$500",
            commission: "$50",
            expectedApproval: "2024-03-10",
            reasonCancellation: "-",
            complaints: "No complaints",
        },
        {
            buyingTime: "2024-03-03 08:20",
            transactionId: "TXN345678",
            orderCode: "ORD003",
            advertiser: "Brand C",
            productCode: "P11223",
            product: "Gaming Mouse",
            productPath: "/accessories/mouse",
            number: 1,
            status: "Rejected",
            price: "$45",
            commission: "$0",
            expectedApproval: "-",
            reasonCancellation: "Out of stock",
            complaints: "Customer complaint",
        },

        {
            buyingTime: "2024-03-03 08:20",
            transactionId: "TXN345678",
            orderCode: "ORD003",
            advertiser: "Brand C",
            productCode: "P11223",
            product: "Gaming Mouse",
            productPath: "/accessories/mouse",
            number: 1,
            status: "Rejected",
            price: "$45",
            commission: "$0",
            expectedApproval: "-",
            reasonCancellation: "Out of stock",
            complaints: "Customer complaint",
        },
        {
            buyingTime: "2024-03-01 10:30",
            transactionId: "TXN123456",
            orderCode: "ORD001",
            advertiser: "Brand A",
            productCode: "P12345",
            product: "Smartphone X",
            productPath: "/electronics/smartphone-x",
            number: 2,
            status: "Approved",
            price: "$500",
            commission: "$50",
            expectedApproval: "2024-03-10",
            reasonCancellation: "-",
            complaints: "No complaints",
        },
        {
            buyingTime: "2024-03-03 08:20",
            transactionId: "TXN345678",
            orderCode: "ORD003",
            advertiser: "Brand C",
            productCode: "P11223",
            product: "Gaming Mouse",
            productPath: "/accessories/mouse",
            number: 1,
            status: "Rejected",
            price: "$45",
            commission: "$0",
            expectedApproval: "-",
            reasonCancellation: "Out of stock",
            complaints: "Customer complaint",
        },

        {
            buyingTime: "2024-03-03 08:20",
            transactionId: "TXN345678",
            orderCode: "ORD003",
            advertiser: "Brand C",
            productCode: "P11223",
            product: "Gaming Mouse",
            productPath: "/accessories/mouse",
            number: 1,
            status: "Rejected",
            price: "$45",
            commission: "$0",
            expectedApproval: "-",
            reasonCancellation: "Out of stock",
            complaints: "Customer complaint",
        },
        {
            buyingTime: "2024-03-02 15:45",
            transactionId: "TXN789012",
            orderCode: "ORD002",
            advertiser: "Brand B",
            productCode: "P67890",
            product: "Wireless Earbuds",
            productPath: "/electronics/earbuds",
            number: 1,
            status: "Pending",
            price: "$80",
            commission: "$8",
            expectedApproval: "2024-03-12",
            reasonCancellation: "-",
            complaints: "Under review",
        },
        {
            buyingTime: "2024-03-01 10:30",
            transactionId: "TXN123456",
            orderCode: "ORD001",
            advertiser: "Brand A",
            productCode: "P12345",
            product: "Smartphone X",
            productPath: "/electronics/smartphone-x",
            number: 2,
            status: "Approved",
            price: "$500",
            commission: "$50",
            expectedApproval: "2024-03-10",
            reasonCancellation: "-",
            complaints: "No complaints",
        },
        {
            buyingTime: "2024-03-03 08:20",
            transactionId: "TXN345678",
            orderCode: "ORD003",
            advertiser: "Brand C",
            productCode: "P11223",
            product: "Gaming Mouse",
            productPath: "/accessories/mouse",
            number: 1,
            status: "Rejected",
            price: "$45",
            commission: "$0",
            expectedApproval: "-",
            reasonCancellation: "Out of stock",
            complaints: "Customer complaint",
        },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2>Conversion Report</h2>
                <div className={styles.headerStats}>
                    <span>Total Conversions: {data.length}</span>
                </div>
            </div>

            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Buying Time</th>
                            <th>Transaction ID</th>
                            <th>Order Code</th>
                            <th>Advertiser</th>
                            <th>Product</th>
                            <th>Number</th>
                            <th>Status</th>
                            <th>Price</th>
                            <th>Commission</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                <td>{row.buyingTime}</td>
                                <td>{row.transactionId}</td>
                                <td>{row.orderCode}</td>
                                <td>{row.advertiser}</td>
                                <td>{row.product}</td>
                                <td>{row.number}</td>
                                <td>
                                    <span className={`${styles.statusBadge} ${styles[row.status.toLowerCase()]}`}>
                                        {row.status}
                                    </span>
                                </td>
                                <td>{row.price}</td>
                                <td>{row.commission}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className={styles.pagination}>
                <button className={styles.pageBtn}>«</button>
                <button className={`${styles.pageBtn} ${styles.active}`}>1</button>
                <button className={styles.pageBtn}>2</button>
                <button className={styles.pageBtn}>3</button>
                <button className={styles.pageBtn}>»</button>
            </div>
        </div>
    );
};

export default ConversionReport;