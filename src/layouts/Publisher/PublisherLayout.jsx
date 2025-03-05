import React from "react";
import HeaderPublisher from "../../components/HeaderPublisher/Header";

import styles from "./PublisherLayout.module.scss"; 
import Footer from "../../components/Publisher/Footer/Footer";

const PublisherLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.mainContent}>
        <HeaderPublisher />
        <div className={styles.content}>
          {children}
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default PublisherLayout;
