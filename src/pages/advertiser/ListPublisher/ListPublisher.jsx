import React, { useState } from "react";
import styles from "./ListPublisher.module.scss";

const initialData = [
    { id: 564, advertiser: "Shoppe", email: "hello@johncarter.com", campaign: "Black Friday Sale", createDate: "Jan 30, 2024", totalConversions: 60, status: "Active", utmSource: "Facebook", utmMedium: "Banner", totalClicks: 200, totalOrders: 50, link: "https://rutgon.me/moem1K" },
    { id: 584, advertiser: "Shoppe", email: "contact@sophiemoore.com", campaign: "Black Friday Sale", createDate: "Jan 27, 2024", totalConversions: 47, status: "Expired", utmSource: "Youtube", utmMedium: "Email", totalClicks: 200, totalOrders: 30, link: "https://rutgon.me/moem1K" },
    { id: 684, advertiser: "Lazada", email: "info@mattcannon.com", campaign: "Black Friday Sale", createDate: "Jan 24, 2024", totalConversions: 36, status: "Active", utmSource: "Instagram", utmMedium: "Post", totalClicks: 200, totalOrders: 24, link: "https://rutgon.me/moem1K" },
    { id: 568, advertiser: "FPT Shop", email: "hi@grahamhills.com", campaign: "Black Friday Sale", createDate: "May 21, 2023", totalConversions: 68, status: "Active", utmSource: "Youtube", utmMedium: "Email", totalClicks: 200, totalOrders: 15, link: "https://rutgon.me/moem1K" },
    { id: 564, advertiser: "Shoppe", email: "hello@johncarter.com", campaign: "Black Friday Sale", createDate: "Feb 3, 2025", totalConversions: 60, status: "Active", utmSource: "Facebook", utmMedium: "Banner", totalClicks: 200, totalOrders: 50, link: "https://rutgon.me/moem1K" },
    { id: 584, advertiser: "Shoppe", email: "contact@sophiemoore.com", campaign: "Black Friday Sale", createDate: "July 27, 2024", totalConversions: 47, status: "Expired", utmSource: "Youtube", utmMedium: "Email", totalClicks: 200, totalOrders: 30, link: "https://rutgon.me/moem1K" },
    { id: 684, advertiser: "Lazada", email: "info@mattcannon.com", campaign: "Black Friday Sale", createDate: "May 9, 2025", totalConversions: 36, status: "Active", utmSource: "Instagram", utmMedium: "Post", totalClicks: 200, totalOrders: 24, link: "https://rutgon.me/moem1K" },
    { id: 568, advertiser: "FPT Shop", email: "hi@grahamhills.com", campaign: "Black Friday Sale", createDate: "Jan 21, 2024", totalConversions: 68, status: "Active", utmSource: "Youtube", utmMedium: "Email", totalClicks: 200, totalOrders: 15, link: "https://rutgon.me/moem1K" },
];


const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};

const ListPublisher = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;


    const formattedData = initialData.map(item => ({
        ...item,
        formattedDate: formatDate(item.createDate),
    }));


    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentData = formattedData.slice(indexOfFirstItem, indexOfLastItem);


    const totalPages = Math.ceil(formattedData.length / itemsPerPage);

    return (
        <div className={styles.listPublisher}>
            <table className={styles.dataTable}>
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Advertiser</th>
                        <th>Campaign</th>
                        <th>Create Date</th>
                        <th>Total Conversions</th>
                        <th>Status</th>
                        <th>UTM Source</th>
                        <th>UTM Medium</th>
                        <th>Total Clicks</th>
                        <th>Total Orders</th>
                        <th>Generated Link</th>
                    </tr>
                </thead>
                <tbody>
                    {currentData.map((row, index) => (
                        <tr key={index}>
                            <td>#{row.id}</td>
                            <td>{row.advertiser}<br /><small>{row.email}</small></td>
                            <td>{row.campaign}</td>
                            <td>{row.formattedDate}</td>
                            <td>{row.totalConversions}</td>
                            <td>
                                <span className={`${styles.status} ${styles[row.status.toLowerCase()]}`}>
                                    {row.status}
                                </span>
                            </td>
                            <td>{row.utmSource}</td>
                            <td>{row.utmMedium}</td>
                            <td>{row.totalClicks}</td>
                            <td>{row.totalOrders}</td>
                            <td><a href={row.link} target="_blank" rel="noopener noreferrer">{row.link}</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>


            <div className={styles.paginationContainer}>
                <div className={styles.paginationControls}>
                    <button
                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <span className={styles.pageNumber}>
                        {currentPage} / {totalPages}
                    </span>
                    <button
                        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ListPublisher;
