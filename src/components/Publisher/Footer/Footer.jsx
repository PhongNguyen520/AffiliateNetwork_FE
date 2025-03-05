import React from 'react';
import styles from "./Footer.module.scss";
import classNames from 'classnames/bind';
import images from '../../../assets/images';

const cx = classNames.bind(styles);

const Footer = () => {
    return (
        <footer className={cx('footer')}>
            <div className={cx('container-footer')}>
                <div className={cx('row')}>
                    <div className={cx('col', 'brand-col')}>
                        <div className={cx('brand')}>
                            <img src={images.logo} alt="Affilinker" className={cx('logo')} />
                        </div>
                        <p className={cx('description')}>
                            Affilinker provides a comprehensive suite of affiliate marketing tools designed to help publishers maximize their earnings. From campaign management to performance tracking, we offer the expertise and resources to meet your affiliate marketing needs.
                        </p>
                        <div className={cx('social-icons')}>
                            <a href="#" className={cx('social-icon')}><i className="fa fa-facebook"></i></a>
                            <a href="#" className={cx('social-icon')}><i className="fa fa-twitter"></i></a>
                            <a href="#" className={cx('social-icon')}><i className="fa fa-linkedin"></i></a>
                            <a href="#" className={cx('social-icon')}><i className="fa fa-instagram"></i></a>
                        </div>
                    </div>
                    
                    <div className={cx('col', 'nav-col')}>
                        <h3 className={cx('col-title')}>Quick Links</h3>
                        <ul className={cx('footer-menu')}>
                            <li><a href="#">Dashboard</a></li>
                            <li><a href="#">Campaigns</a></li>
                            <li><a href="#">Reports</a></li>
                            <li><a href="#">Affiliate Network</a></li>
                            <li><a href="#">Support</a></li>
                        </ul>
                    </div>
                    
                    <div className={cx('col', 'licence-col')}>
                        <h3 className={cx('col-title')}>Legal</h3>
                        <ul className={cx('footer-menu')}>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Cookie Policy</a></li>
                        </ul>
                    </div>
                    
                    <div className={cx('col', 'contact-col')}>
                        <h3 className={cx('col-title')}>Contact Us</h3>
                        <ul className={cx('contact-info')}>
                            <li className={cx('contact-item')}>
                                <i className="fa fa-phone"></i>
                                <span>(406) 555-0120</span>
                            </li>
                            <li className={cx('contact-item')}>
                                <i className="fa fa-envelope"></i>
                                <span>support@affilinker.com</span>
                            </li>
                            <li className={cx('contact-item')}>
                                <i className="fa fa-map-marker"></i>
                                <span>2972 Westheimer Rd. Santa Ana, Illinois 85486</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={cx('footer-bottom')}>
                <p className={cx('copyright')}>
                    &copy; {new Date().getFullYear()} Affilinker. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;