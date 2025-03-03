import React from "react";
import { Outlet } from "react-router-dom";

import HeaderPublisher from "../../components/HeaderPublisher/Header";

import styles from "./PublisherLayout.module.scss"; // SCSS module cho layout

const PublisherLayout = () => {
  return (
    <div className={styles.layout}>
     
      <div className={styles.mainContent}>
        <HeaderPublisher />
        <div className={styles.content}>
          <Outlet /> 
        </div>
       
      </div>
    </div>
  );
};

export default PublisherLayout;
