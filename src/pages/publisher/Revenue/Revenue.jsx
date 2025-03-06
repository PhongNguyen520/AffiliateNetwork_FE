import { useState } from "react";
import styles from "./Revenue.module.scss";
import Header from "../../../components/HeaderPublisher/Header";


const currentYear = new Date().getFullYear();
const yearOptions = Array.from({ length: 5 }, (_, i) => currentYear - i);

export default function RevenueReport() {
    const [fromYear, setFromYear] = useState(currentYear.toString());
    const [toYear, setToYear] = useState(currentYear.toString());
    const [status, setStatus] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);

    const handleExport = () => {
        console.log("Exporting data...");
    };

    const handleSearch = () => {
        console.log("Searching with filters:", { fromYear, toYear, status });
    };

    return (
        <div className={styles.container}>

            <div className={styles.toolbar}>
                <h1>Revenue Report</h1>
                <button className={styles.exportBtn} onClick={handleExport}>
                    Export file
                </button>
            </div>

            <div className={styles.filterSection}>
                <label>From year</label>
                <select className={styles.filterSelect} value={fromYear} onChange={(e) => setFromYear(e.target.value)}>
                    {yearOptions.map((year) => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>

                <label>To year</label>
                <select className={styles.filterSelect} value={toYear} onChange={(e) => setToYear(e.target.value)}>
                    {yearOptions.map((year) => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>

                <label>Status</label>
                <select className={styles.filterSelect} value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="all">All</option>
                    <option value="pending">Pending</option>
                    <option value="success">Success</option>
                    <option value="rejected">Rejected</option>
                </select>

                <button className={styles.searchBtn} onClick={handleSearch}>Search</button>
            </div>


            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Month</th>
                        <th>Success commission (d)</th>
                        <th>Pending commission (d)</th>
                        <th>Rejected commission (d)</th>
                        <th>Bonus commission (d)</th>
                        <th>Paid (d)</th>
                        <th>Remain (d)</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {[...Array(5)].map((_, index) => (
                        <tr key={index}>
                            <td>01/{currentYear}</td>
                            <td>1000d</td>
                            <td>200d</td>
                            <td>50d</td>
                            <td>150d</td>
                            <td>1200d</td>
                            <td>100d</td>
                            <td>
                                <button className={styles.detailsBtn}>Details</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className={styles.paginationContainer}>
                <div className={styles.paginationControls}>
                    <button
                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <span className={styles.pageNumber}>{currentPage}</span>
                    <button onClick={() => setCurrentPage(p => p + 1)}>Next</button>
                </div>
            </div>

        </div>
    );
}
