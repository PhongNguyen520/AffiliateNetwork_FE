import React from "react";
import HeaderPublisher from "../../components/HeaderPublisher/Header";

import styles from "./PublisherLayout.module.scss"; 

const PublisherLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.mainContent}>
        <HeaderPublisher />
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default PublisherLayout;
