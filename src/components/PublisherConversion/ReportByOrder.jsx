import React, { useState } from "react";
import { 
  FaSort, 
  FaPlus, 
  FaSearch, 
  FaCalendarAlt, 
  FaFilter, 
  FaEllipsisV 
} from "react-icons/fa";
import styles from "./ReportByOrder.module.scss";

const orderData = [
  {
    id: "ORD123",
    productCode: "PROD456",
    campaign: "Campaign A",
    advertiser: "Advertiser X",
    date: "2024-03-04",
    status: "Approved"
  },
  {
    id: "ORD124",
    productCode: "PROD789",
    campaign: "Campaign B",
    advertiser: "Advertiser Y",
    date: "2024-03-05",
    status: "Pending"
  },
  {
    id: "ORD125",
    productCode: "PROD101",
    campaign: "Campaign C",
    advertiser: "Advertiser Z",
    date: "2024-03-06",
    status: "Rejected"
  },
  {
    id: "ORD123",
    productCode: "PROD456",
    campaign: "Campaign A",
    advertiser: "Advertiser X",
    date: "2024-03-04",
    status: "Approved"
  },
  {
    id: "ORD124",
    productCode: "PROD789",
    campaign: "Campaign B",
    advertiser: "Advertiser Y",
    date: "2024-03-05",
    status: "Pending"
  },
  {
    id: "ORD125",
    productCode: "PROD101",
    campaign: "Campaign C",
    advertiser: "Advertiser Z",
    date: "2024-03-06",
    status: "Rejected"
  }, {
    id: "ORD123",
    productCode: "PROD456",
    campaign: "Campaign A",
    advertiser: "Advertiser X",
    date: "2024-03-04",
    status: "Approved"
  },
  {
    id: "ORD124",
    productCode: "PROD789",
    campaign: "Campaign B",
    advertiser: "Advertiser Y",
    date: "2024-03-05",
    status: "Pending"
  },
  {
    id: "ORD125",
    productCode: "PROD101",
    campaign: "Campaign C",
    advertiser: "Advertiser Z",
    date: "2024-03-06",
    status: "Rejected"
  }, {
    id: "ORD123",
    productCode: "PROD456",
    campaign: "Campaign A",
    advertiser: "Advertiser X",
    date: "2024-03-04",
    status: "Approved"
  },
  {
    id: "ORD124",
    productCode: "PROD789",
    campaign: "Campaign B",
    advertiser: "Advertiser Y",
    date: "2024-03-05",
    status: "Pending"
  },
  {
    id: "ORD125",
    productCode: "PROD101",
    campaign: "Campaign C",
    advertiser: "Advertiser Z",
    date: "2024-03-06",
    status: "Rejected"
  }
];

const ReportByOrder = () => {
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedOrders(orderData.map(order => order.id));
    } else {
      setSelectedOrders([]);
    }
  };

  const handleSelectOrder = (orderId) => {
    setSelectedOrders(prev => 
      prev.includes(orderId) 
        ? prev.filter(id => id !== orderId)
        : [...prev, orderId]
    );
  };

  const filteredData = orderData.filter(order => 
    Object.values(order).some(value => 
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Order Reports</h1>
        <div className={styles.headerActions}>
          <div className={styles.searchWrapper}>
            <FaSearch className={styles.searchIcon} />
            <input 
              type="text" 
              placeholder="Search orders..." 
              className={styles.searchBar}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className={styles.toolbar}>
        <div className={styles.leftTools}>
          <button className={styles.toolBtn} title="Add New">
            <FaPlus />
          </button>
          <button className={styles.toolBtn} title="Sort">
            <FaSort />
          </button>
          <button className={styles.toolBtn} title="Filter">
            <FaFilter />
          </button>
          {selectedOrders.length > 0 && (
            <div className={styles.selectedCount}>
              {selectedOrders.length} selected
            </div>
          )}
        </div>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.checkbox}>
                <input 
                  type="checkbox" 
                  onChange={handleSelectAll}
                  checked={selectedOrders.length === orderData.length}
                />
              </th>
              <th>Order ID</th>
              <th>Product Code</th>
              <th>Campaigns</th>
              <th>Advertiser</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((order) => (
              <tr 
                key={order.id} 
                className={selectedOrders.includes(order.id) ? styles.selected : ''}
              >
                <td className={styles.checkbox}>
                  <input 
                    type="checkbox" 
                    checked={selectedOrders.includes(order.id)}
                    onChange={() => handleSelectOrder(order.id)}
                  />
                </td>
                <td>{order.id}</td>
                <td>{order.productCode}</td>
                <td>{order.campaign}</td>
                <td>{order.advertiser}</td>
                <td className={styles.date}>
                  <FaCalendarAlt className={styles.dateIcon} />
                  {order.date}
                </td>
                <td>
                  <span className={`${styles.status} ${styles[order.status.toLowerCase()]}`}>
                    {order.status}
                  </span>
                </td>
                <td>
                  <button className={styles.actionBtn}>
                    <FaEllipsisV />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.footer}>
        <div className={styles.pagination}>
          <button className={styles.pageBtn}>«</button>
          <button className={`${styles.pageBtn} ${styles.active}`}>1</button>
          <button className={styles.pageBtn}>2</button>
          <button className={styles.pageBtn}>3</button>
          <button className={styles.pageBtn}>»</button>
        </div>
        <div className={styles.pageInfo}>
          Showing 1-3 of {orderData.length} orders
        </div>
      </div>
    </div>
  );
};

export default ReportByOrder;