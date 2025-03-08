
import { useState } from "react";
import {
    Download,
    Filter,
    Share2,
    LayoutGrid,
    Lock,
    UnlockKeyhole,
    Check
} from "lucide-react";
import styles from "./AdvertiserList.module.scss";

export default function AdvertiserList() {
    const [page, setPage] = useState(1);
    const [unlockedEmails, setUnlockedEmails] = useState(new Set());
    const [unlockedPhones, setUnlockedPhones] = useState(new Set());
    const [selectedRows, setSelectedRows] = useState(new Set());
    const [selectAll, setSelectAll] = useState(false);


    const advertisers = [
        {
            id: 1,
            contact: "Roger Brooks",
            website: "https://example.com",
            jobFunction: "Marketing Manager",
            company: "Tech Solutions Inc.",
            email: "roger.brooks@example.com",
            phone: "+1 (555) 123-4567",
            location: "New York, USA",
            details: "View Details"
        },
        {
            id: 2,
            contact: "Sarah Johnson",
            website: "https://techinnovate.com",
            jobFunction: "Sales Director",
            company: "Tech Innovate",
            email: "sarah.j@techinnovate.com",
            phone: "+1 (555) 987-6543",
            location: "San Francisco, USA",
            details: "View Details"
        },
        {
            id: 3,
            contact: "Michael Chen",
            website: "https://digitalfuture.org",
            jobFunction: "Product Manager",
            company: "Digital Future",
            email: "mchen@digitalfuture.org",
            phone: "+1 (555) 456-7890",
            location: "Boston, USA",
            details: "View Details"
        }
    ];

    const toggleUnlock = (id, type) => {
        if (type === 'email') {
            setUnlockedEmails(prev => {
                const next = new Set(prev);
                if (prev.has(id)) {
                    next.delete(id);
                } else {
                    next.add(id);
                }
                return next;
            });
        } else {
            setUnlockedPhones(prev => {
                const next = new Set(prev);
                if (prev.has(id)) {
                    next.delete(id);
                } else {
                    next.add(id);
                }
                return next;
            });
        }
    };

    const toggleRowSelection = (id) => {
        setSelectedRows(prev => {
            const next = new Set(prev);
            if (prev.has(id)) {
                next.delete(id);
            } else {
                next.add(id);
            }
            return next;
        });
    };

    const toggleSelectAll = () => {
        if (selectAll) {
            setSelectedRows(new Set());
        } else {
            const allIds = advertisers.map(adv => adv.id);
            setSelectedRows(new Set(allIds));
        }
        setSelectAll(!selectAll);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.leftButtons}>
                    <button className={`${styles.button} ${styles.buttonOutline}`}>
                        <Download className={styles.icon} />
                        Download
                    </button>
                </div>
                <div className={styles.rightButtons}>
                    <button className={`${styles.button} ${styles.buttonOutline}`}>
                        <Filter className={styles.icon} />
                        Load Filters
                    </button>
                    <button className={`${styles.button} ${styles.buttonOutline}`}>
                        <Share2 className={styles.icon} />
                        Share
                    </button>
                    <button className={`${styles.button} ${styles.buttonOutline}`}>
                        <LayoutGrid className={styles.icon} />
                        Table Layout
                    </button>
                </div>
            </div>

            <div className={styles.tableContainer}>
                <table className={styles.dataTable}>
                    <thead>
                        <tr>
                            <th className={styles.checkboxCell}>
                                <label className={styles.checkboxContainer}>
                                    <input
                                        type="checkbox"
                                        checked={selectAll}
                                        onChange={toggleSelectAll}
                                        className={styles.checkbox}
                                    />
                                    <span className={styles.checkmark}>
                                        {selectAll && <Check className={styles.checkIcon} />}
                                    </span>
                                </label>
                            </th>
                            <th>Contact</th>
                            <th>Website</th>
                            <th>Job Function</th>
                            <th>Company</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Contact Location</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {advertisers.map((advertiser) => (
                            <tr key={advertiser.id}>
                                <td className={styles.checkboxCell}>
                                    <label className={styles.checkboxContainer}>
                                        <input
                                            type="checkbox"
                                            checked={selectedRows.has(advertiser.id)}
                                            onChange={() => toggleRowSelection(advertiser.id)}
                                            className={styles.checkbox}
                                        />
                                        <span className={styles.checkmark}>
                                            {selectedRows.has(advertiser.id) && <Check className={styles.checkIcon} />}
                                        </span>
                                    </label>
                                </td>
                                <td>{advertiser.contact}</td>
                                <td>{advertiser.website}</td>
                                <td>{advertiser.jobFunction}</td>
                                <td>{advertiser.company}</td>
                                <td>
                                    <div className={styles.unlockContainer}>
                                        {unlockedEmails.has(advertiser.id) ? (
                                            <>
                                                {advertiser.email}
                                                <button
                                                    className={`${styles.button} ${styles.buttonGhost}`}
                                                    onClick={() => toggleUnlock(advertiser.id, 'email')}
                                                >
                                                    <UnlockKeyhole className={styles.iconSmall} />
                                                </button>
                                            </>
                                        ) : (
                                            <button
                                                className={`${styles.button} ${styles.buttonGhost}`}
                                                onClick={() => toggleUnlock(advertiser.id, 'email')}
                                            >
                                                <Lock className={styles.iconSmall} />
                                                Unlock Email
                                            </button>
                                        )}
                                    </div>
                                </td>
                                <td>
                                    <div className={styles.unlockContainer}>
                                        {unlockedPhones.has(advertiser.id) ? (
                                            <>
                                                {advertiser.phone}
                                                <button
                                                    className={`${styles.button} ${styles.buttonGhost}`}
                                                    onClick={() => toggleUnlock(advertiser.id, 'phone')}
                                                >
                                                    <UnlockKeyhole className={styles.iconSmall} />
                                                </button>
                                            </>
                                        ) : (
                                            <button
                                                className={`${styles.button} ${styles.buttonGhost}`}
                                                onClick={() => toggleUnlock(advertiser.id, 'phone')}
                                            >
                                                <Lock className={styles.iconSmall} />
                                                Unlock Mobile
                                            </button>
                                        )}
                                    </div>
                                </td>
                                <td>{advertiser.location}</td>
                                <td>
                                    <a href="#" className={styles.detailsLink}>Details</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className={styles.pagination}>
                <button
                    className={`${styles.button} ${styles.buttonOutline} `}
                    onClick={() => setPage(p => Math.max(1, p - 1))}
                    disabled={page === 1}
                >
                    Previous
                </button>
                <button
                    className={`${styles.button} ${styles.buttonOutline}`}
                    onClick={() => setPage(p => p + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    );
}
