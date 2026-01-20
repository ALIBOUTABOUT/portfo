import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Screenshots.css';

const Screenshots = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const screens = [
    {
      title: 'Home Dashboard',
      description: 'Unified interface for all user roles',
      mockup: 'home'
    },
    {
      title: 'Order Tracking',
      description: 'Real-time delivery status',
      mockup: 'tracking'
    },
    {
      title: 'Marketplace',
      description: 'Browse products and sellers',
      mockup: 'marketplace'
    },
    {
      title: 'Courier Dashboard',
      description: 'Manage deliveries and earnings',
      mockup: 'courier'
    }
  ];

  return (
    <section id="screenshots" className="screenshots section">
      <div className="container" ref={ref}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            App <span className="gradient-text">Preview</span>
          </h2>
          <p className="section-subtitle">
            Intuitive design crafted for seamless user experience
          </p>
        </motion.div>

        <div className="screenshots-grid">
          {screens.map((screen, index) => (
            <motion.div
              key={index}
              className="screenshot-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="phone-mockup">
                <div className="phone-frame">
                  <div className="phone-notch"></div>
                  <div className="phone-screen">
                    <ScreenContent type={screen.mockup} />
                  </div>
                </div>
              </div>
              <h3 className="screenshot-title">{screen.title}</h3>
              <p className="screenshot-description">{screen.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ScreenContent = ({ type }) => {
  const screenTypes = {
    home: (
      <div className="mock-screen mock-home">
        <div className="mock-header">
          <div className="mock-logo">Z</div>
          <div className="mock-greeting">
            <div className="mock-text-lg">Welcome back!</div>
            <div className="mock-text-sm">Mohammed</div>
          </div>
        </div>
        <div className="mock-stats-row">
          <div className="mock-stat-card">
            <div className="mock-stat-value">5</div>
            <div className="mock-stat-label">Orders</div>
          </div>
          <div className="mock-stat-card">
            <div className="mock-stat-value">4.8</div>
            <div className="mock-stat-label">Rating</div>
          </div>
        </div>
        <div className="mock-section-title">Quick Actions</div>
        <div className="mock-actions">
          <div className="mock-action-btn">🛒 Shop</div>
          <div className="mock-action-btn">📦 Track</div>
          <div className="mock-action-btn">💰 Earn</div>
        </div>
      </div>
    ),
    tracking: (
      <div className="mock-screen mock-tracking">
        <div className="mock-map">
          <div className="mock-map-pin">📍</div>
          <div className="mock-map-route"></div>
          <div className="mock-map-destination">🏠</div>
        </div>
        <div className="mock-tracking-info">
          <div className="mock-text-lg">Order #1234</div>
          <div className="mock-text-sm">On the way</div>
          <div className="mock-progress-bar">
            <div className="mock-progress"></div>
          </div>
          <div className="mock-eta">ETA: 15 mins</div>
        </div>
      </div>
    ),
    marketplace: (
      <div className="mock-screen mock-marketplace">
        <div className="mock-search">🔍 Search products...</div>
        <div className="mock-section-title">Categories</div>
        <div className="mock-categories">
          <div className="mock-category">🍕</div>
          <div className="mock-category">👕</div>
          <div className="mock-category">📱</div>
          <div className="mock-category">🏠</div>
        </div>
        <div className="mock-section-title">Popular</div>
        <div className="mock-products">
          <div className="mock-product">
            <div className="mock-product-img"></div>
            <div className="mock-product-info">
              <div className="mock-text-sm">Product A</div>
              <div className="mock-price">1500 DA</div>
            </div>
          </div>
          <div className="mock-product">
            <div className="mock-product-img"></div>
            <div className="mock-product-info">
              <div className="mock-text-sm">Product B</div>
              <div className="mock-price">2300 DA</div>
            </div>
          </div>
        </div>
      </div>
    ),
    courier: (
      <div className="mock-screen mock-courier">
        <div className="mock-header">
          <div className="mock-text-lg">Today's Earnings</div>
          <div className="mock-earnings">4,500 DA</div>
        </div>
        <div className="mock-section-title">Available Deliveries</div>
        <div className="mock-deliveries">
          <div className="mock-delivery">
            <div className="mock-delivery-icon">📦</div>
            <div className="mock-delivery-info">
              <div className="mock-text-sm">El Biar → Hydra</div>
              <div className="mock-delivery-price">350 DA</div>
            </div>
          </div>
          <div className="mock-delivery">
            <div className="mock-delivery-icon">🍔</div>
            <div className="mock-delivery-info">
              <div className="mock-text-sm">Sidi Yahia → Kouba</div>
              <div className="mock-delivery-price">280 DA</div>
            </div>
          </div>
        </div>
      </div>
    )
  };

  return screenTypes[type] || null;
};

export default Screenshots;
