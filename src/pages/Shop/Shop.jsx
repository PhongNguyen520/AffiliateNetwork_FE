import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Shop.module.scss';
import { requestsPrivate } from '../../utils/requests';
import images from '../../assets/images';

const cx = classNames.bind(styles);

const TRACKING_SALE_URL = "conversion";

const PRODUCTS = [
  { id: 'prod_001', name: 'Smartphone X', price: 5000000 },
  { id: 'prod_002', name: 'Laptop Pro', price: 15000000},
  { id: 'prod_003', name: 'Wireless Earbuds', price: 1200000 },
  { id: 'prod_004', name: 'Smart Watch', price: 3500000 },
  { id: 'prod_005', name: '4K TV', price: 10000000 },
];
const ProductCard = ({ product, onCheckout, disabled }) => {
  return (
    <div className={cx('product-card')}>
      <div className={cx('product-image-container')}>
        <img 
          src={images.product} 
          alt={product.name} 
          className={cx('product-image')}
        />
      </div>
      <div className={cx('product-details')}>
        <div className={cx('product-info')}>
          <h2 className={cx('product-title')}>{product.name}</h2>
          <p className={cx('product-description')}>
            High-end product with comprehensive warranty and premium features
          </p>
        </div>
        <div className={cx('product-footer')}>
          <span className={cx('product-price')}>
            {product.price.toLocaleString('vi-VN')} VND
          </span>
          <button 
            className={cx('checkout-button')} 
            onClick={onCheckout}
            disabled={disabled}
          >
            {disabled ? 'Processing...' : 'Buy Now'}
          </button>
        </div>
      </div>
    </div>
  );
};

const SuccessModal = ({ orderInfo, onClose }) => {
  return (
    <div className={cx('modal-overlay')}>
      <div className={cx('modal-content')}>
        <div className={cx('modal-header')}>
          <div className={cx('modal-icon')}>🎉</div>
          <h2 className={cx('modal-title')}>Purchase Successful!</h2>
        </div>
        <div className={cx('order-details')}>
          <div className={cx('order-detail-item')}>
            <span>Order ID:</span>
            <strong>{orderInfo.orderId}</strong>
          </div>
          <div className={cx('order-detail-item')}>
            <span>Product:</span>
            <strong>{orderInfo.productName}</strong>
          </div>
          <div className={cx('order-detail-item')}>
            <span>Quantity:</span>
            <strong>{orderInfo.quantity}</strong>
          </div>
          <div className={cx('order-detail-item')}>
            <span>Total:</span>
            <strong>{orderInfo.subtotal.toLocaleString('vi-VN')} VND</strong>
          </div>
        </div>
        <button 
          className={cx('modal-continue')} 
          onClick={onClose}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

function Shop() {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentOrder, setCurrentOrder] = useState(null);
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const affiliateId = urlParams.get('affiliateId');

    if (affiliateId) {
      document.cookie = `.Affiliate.Tracking.Application=${affiliateId}; path=/; max-age=2592000`;
      
      const cleanUrl = window.location.pathname;
      window.history.replaceState({}, document.title, cleanUrl);
      
      setCurrentProduct(
        PRODUCTS[Math.floor(Math.random() * PRODUCTS.length)]
      );
    } else {
      setCurrentProduct(
        PRODUCTS[Math.floor(Math.random() * PRODUCTS.length)]
      );
    }
  }, []);

  const generateOrderId = () => {
    return `order_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
  };

  const getAffiliateCookie = () => {
    const cookies = document.cookie.split(';');
    const affiliateCookie = cookies.find(
      cookie => cookie.trim().startsWith('.Affiliate.Tracking.Application=')
    );
    return affiliateCookie 
      ? affiliateCookie.split('=')[1].trim() 
      : 'unknown';
  };

  const handleCheckout = async () => {
    if (!currentProduct) return;

    setIsLoading(true);
    setError(null);
    
    try {
      const orderId = generateOrderId();
      const affiliateLinkId = getAffiliateCookie();
      const quantity = Math.floor(Math.random() * 3) + 1;
      const subtotal = currentProduct.price * quantity;

      const conversionData = {
        orderId,
        productId: currentProduct.id,
        quantity,
        subtotal,
        affiliateLinkId
      };

      await requestsPrivate.post(TRACKING_SALE_URL, conversionData);
      
      setCurrentOrder({
        ...conversionData,
        productName: currentProduct.name
      });
      
      setShowModal(true);
      
      setCurrentProduct(
        PRODUCTS.filter(p => p.id !== currentProduct.id)[
          Math.floor(Math.random() * (PRODUCTS.length - 1))
        ]
      );
    } catch (err) {
      console.error('Conversion tracking failed:', err);
      setError('Failed to process your order. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentOrder(null);
  };

  if (!currentProduct) return null;

  return (
    <div className={cx('container')}>
      <div className={cx('shop-wrapper')}>
        {error && <div className={cx('error-message')}>{error}</div>}
        
        <ProductCard 
          product={currentProduct}
          onCheckout={handleCheckout} 
          disabled={isLoading}
        />
        
        {isLoading && <div className={cx('loading-overlay')}>Processing your order...</div>}
        
        {showModal && currentOrder && (
          <SuccessModal 
            orderInfo={currentOrder} 
            onClose={handleCloseModal} 
          />
        )}
      </div>
    </div>
  );
}

export default Shop;