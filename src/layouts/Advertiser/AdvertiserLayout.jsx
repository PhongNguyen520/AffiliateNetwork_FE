import React from "react";
import classNames from "classnames/bind";
import styles from "./AdvertiserLayout.module.scss";
import HeaderAdvertiser from "../../components/HeaderAdvertiser/HeaderAdvertiser";
import SidebarAdvertiser from "../../components/SidebarAdvertiser/SidebarAdvertiser";

const cx = classNames.bind(styles);

function AdvertiserLayout({children}) {
  return (
    <div className={cx("wrapper")}>
      <SidebarAdvertiser />
      <div className={cx("body")}>
        <HeaderAdvertiser />
        {children}
      </div>
    </div>
  );
}

export default AdvertiserLayout;
