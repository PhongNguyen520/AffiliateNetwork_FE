import React, { useState } from "react";
import ConversionReport from "../../../components/PublisherConversion/ConversionReport ";
import ReportByOrder from "../../../components/PublisherConversion/ReportByOrder";
import styles from "./Conversion.module.scss";
import Footer from "../../../components/Publisher/Footer/Footer";

const Conversion = () => {
    const [tab, setTab] = useState("conversion");

    return (
        <div className={styles.container}>
            <div className={styles.filters}>
                <input type="date" />
                <input type="text" placeholder="Order Code" />
                <select>
                    <option>Campaigns</option>
                </select>
                <input type="text" placeholder="UTM source" />
                <button className={styles.searchBtn}>🔍Search</button>
            </div>

            <div className={styles.stats}>
                <div className={styles.card}>
                    <div className={styles.cardTitle}>Approved Commission</div>
                    <div className={styles.cardContent}>Nomal commission: 50</div>
                    <div className={styles.cardContent}>Orders: 10</div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardTitle}>Pending Commission</div>
                    <div className={styles.cardContent}>Nomal commission: 50</div>
                    <div className={styles.cardContent}>Orders: 5</div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardTitle}>Rejected Commission</div>
                    <div className={styles.cardContent}>Nomal commission: 50</div>
                    <div className={styles.cardContent}>Orders: 1</div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardTitle}>Clicks</div>
                    <div className={styles.cardContent}>2000</div>
                </div>

            </div>

            <div className={styles.tabsContainer}>
                <div className={styles.leftSection}>
                    <button
                        className={tab === "conversion" ? styles.active : ""}
                        onClick={() => setTab("conversion")}
                    >
                        Conversion Report
                    </button>
                    <button
                        className={tab === "order" ? styles.active : ""}
                        onClick={() => setTab("order")}
                    >
                        Report By Order
                    </button>
                </div>


                <button className={styles.exportBtn}>Export file</button>
            </div>


            <div className={styles.content}>
                {tab === "conversion" ? <ConversionReport /> : <ReportByOrder />}
            </div>
            <Footer />
        </div>
    );
};

export default Conversion;
