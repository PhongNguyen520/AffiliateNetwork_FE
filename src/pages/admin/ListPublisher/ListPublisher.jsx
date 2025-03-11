import React, { useState } from 'react';
import { Download, Filter, Share2, LayoutGrid, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './ListPublisher.module.scss';

const mockPublishers = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    code: `PUB${1000 + i}`,
    publisherName: `Publisher ${i + 1}`,
    phone: '0278976549',
    enrollDate: '2023-12-01',
    taxCode: '04504',
    status: i % 2 === 0 ? 'Active' : 'Banned',
    enrollCampaign: (i + 30).toString(),
    country: i % 2 === 0 ? 'Việt Nam' : 'United Kingdom',
    totalConversion: '200',
    links: (i + 20).toString(),
}));

export default function ListPublisher() {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedDate, setSelectedDate] = useState('');
    const itemsPerPage = 10;
    const totalPages = Math.ceil(mockPublishers.length / itemsPerPage);

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
        setCurrentPage(1);
    };

    const getFilteredItems = () => {
        return selectedDate
            ? mockPublishers.filter((publisher) => publisher.enrollDate === selectedDate)
            : mockPublishers;
    };

    const getCurrentItems = () => {
        const filteredItems = getFilteredItems();
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return filteredItems.slice(startIndex, endIndex);
    };

    const filteredTotalPages = Math.ceil(getFilteredItems().length / itemsPerPage);

    return (
        <div className={styles.container}>

            <div className={styles.header}>
                <div className={styles.leftButtons}>
                    <button className={styles.button}>
                        <Download className={styles.icon} />
                        Download
                    </button>
                </div>
                <div className={styles.rightButtons}>
                    <button className={styles.button}>
                        <Filter className={styles.icon} />
                        Load Filters
                    </button>
                    <button className={styles.button}>
                        <Share2 className={styles.icon} />
                        Share
                    </button>
                    <button className={styles.button}>
                        <LayoutGrid className={styles.icon} />
                        Table Layout
                    </button>
                </div>
            </div>


            <div className={styles.filterSection}>
                <button className={styles.exportButton}>Export File</button>
                <input
                    type="date"
                    className={styles.dateFilter}
                    value={selectedDate}
                    onChange={handleDateChange}
                />
            </div>


            <div className={styles.tableContainer}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>PublisherName</th>
                            <th>Phone</th>
                            <th>EnrollDate</th>
                            <th>TaxCode</th>
                            <th>Status</th>
                            <th>EnrollCampaign</th>
                            <th>Country</th>
                            <th>Total Conversion</th>
                            <th>Links</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getCurrentItems().map((publisher) => (
                            <tr key={publisher.id}>
                                <td>{publisher.code}</td>
                                <td>{publisher.publisherName}</td>
                                <td>{publisher.phone}</td>
                                <td>{publisher.enrollDate}</td>
                                <td>{publisher.taxCode}</td>
                                <td>
                                    <span className={`${styles.badge} ${styles[publisher.status.toLowerCase()]}`}>
                                        {publisher.status}
                                    </span>
                                </td>
                                <td>{publisher.enrollCampaign}</td>
                                <td>{publisher.country}</td>
                                <td>{publisher.totalConversion}</td>
                                <td>{publisher.links}</td>
                                <td>
                                    <a href="#" className={styles.detailLink}>Detail</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


            <div className={styles.pagination}>
                <button
                    className={styles.pageButton}
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                    <ChevronLeft className="h-4 w-4" />
                </button>
                <span className={styles.pageInfo}>
                    Page {currentPage} of {filteredTotalPages}
                </span>
                <button
                    className={styles.pageButton}
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, filteredTotalPages))}
                    disabled={currentPage === filteredTotalPages}
                >
                    <ChevronRight className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
}
