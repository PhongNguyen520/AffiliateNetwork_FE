import React from "react";
import { Outlet } from "react-router-dom";
import SidebarPublisher from "../../components/Publisher/Sidebar/SidebarPublisher";
import HeaderPublisher from "../../components/HeaderPublisher/Header";
import FooterPublisher from "../../components/Publisher/Footer/FooterPublisher";
import styles from "./PublisherLayout.module.scss"; // SCSS module cho layout

const PublisherLayout = () => {
  return (
    <div className={styles.layout}>
      {/* <SidebarPublisher /> */}
      <div className={styles.mainContent}>
        <HeaderPublisher />
        <div className={styles.content}>
          <Outlet /> 
        </div>
        <FooterPublisher />
      </div>
    </div>
  );
};

export default PublisherLayout;
