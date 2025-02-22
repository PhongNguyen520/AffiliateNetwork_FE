import React from 'react';
import { Nav } from 'react-bootstrap';
import styles from "./Sidebar.module.scss";
import logo2 from '../../../assets/images/finalLogo.png'

const SidebarPublisher = () => {
    return (
        <aside className={styles.sidebar}>
            {/* Logo */}
            <div className={styles.logo}>
                <img src={logo2} alt="AfriLinker" />
            </div>

            {/* Danh sách menu */}
            <Nav className="flex-column">
                <Nav.Item>
                    <Nav.Link href="#" className={`${styles.navItem} ${styles.active}`}>
                        <i className="bi bi-grid-fill"></i> Dashboard
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#" className={styles.navItem}>
                        <i className="bi bi-bookmark-fill"></i> Bookmark
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#" className={styles.navItem}>
                        <i className="bi bi-bar-chart-fill"></i> Conversion List
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#" className={styles.navItem}>
                        <i className="bi bi-megaphone-fill"></i> Campaign List
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#" className={styles.navItem}>
                        <i className="bi bi-cart-fill"></i> Advertiser List
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#" className={styles.navItem}>
                        <i className="bi bi-link-45deg"></i> Link Management
                    </Nav.Link>
                </Nav.Item>
            </Nav>

            {/* Account Setting */}
            <div className={styles.account}>
                <Nav.Link href="#" className={styles.navItem}>
                    <i className="bi bi-gear-fill"></i> Account Setting
                </Nav.Link>
            </div>
        </aside>
    );
};

export default SidebarPublisher;
