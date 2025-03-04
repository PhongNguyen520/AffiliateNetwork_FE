import React from "react";
import { FaSort, FaPlus, FaSearch, FaCalendarAlt } from "react-icons/fa";
import styles from "./ReportByOrder.module.scss";

const ReportByOrder = () => {
    return (
        <div className={styles.container}>



            <div className={styles.toolbar}>
                <div className={styles.leftTools}>
                    <button className={styles.toolBtn}><FaPlus /></button>
                    <button className={styles.toolBtn}><FaSort /></button>
                </div>
                <input type="text" placeholder="Search..." className={styles.searchBar} />
            </div>


            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.checkbox}><input type="checkbox" /></th>
                        <th>Order ID</th>
                        <th>Product Code</th>
                        <th>Campaigns</th>
                        <th>Advertiser</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={styles.checkbox}><input type="checkbox" /></td>
                        <td>ORD123</td>
                        <td>PROD456</td>
                        <td>Campaign A</td>
                        <td>Advertiser X</td>
                        <td className={styles.date}>
                            <FaCalendarAlt className={styles.dateIcon} />
                            2024-03-04
                        </td>
                        <td><span className={`${styles.status} ${styles.approved}`}>Approved</span></td>
                    </tr>
                    <tr>
                        <td className={styles.checkbox}><input type="checkbox" /></td>
                        <td>ORD124</td>
                        <td>PROD789</td>
                        <td>Campaign B</td>
                        <td>Advertiser Y</td>
                        <td className={styles.date}>
                            <FaCalendarAlt className={styles.dateIcon} />
                            2024-03-05
                        </td>
                        <td><span className={`${styles.status} ${styles.pending}`}>Pending</span></td>
                    </tr>
                </tbody>
            </table>


            <div className={styles.pagination}>
                <button>«</button>
                <button className={styles.active}>1</button>
                <button>2</button>
                <button>3</button>
                <button>»</button>
            </div>
        </div>
    );
};

export default ReportByOrder;
