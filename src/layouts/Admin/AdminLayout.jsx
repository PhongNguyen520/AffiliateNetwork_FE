import React from "react";
import classNames from "classnames/bind";
import styles from "./AdminLayout.module.scss";
import HeaderAdmin from "../../components/HeaderAdmin/HeaderAdmin";
import SidebarAdmin from "../../components/SidebarAdmin/SidebarAdmin";

const cx = classNames.bind(styles);

function AdminminLayout({children}) {
  return (
    <div className={cx("wrapper")}>
      <SidebarAdmin />
      <div className={cx("body")}>
        <HeaderAdmin />
        {children}
      </div>
    </div>
  );
}

export default AdminminLayout;
