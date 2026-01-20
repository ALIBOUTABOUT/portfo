import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ShoppingCart, Store, UtensilsCrossed, Bike, CreditCard, MapPin, Star, Clock } from 'lucide-react';
import './Features.css';

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeRole, setActiveRole] = useState('buyer');

  const roles = {
    buyer: {
      icon: <ShoppingCart />,
      title: 'For Buyers',
      color: 'turquoise',
      features: [
        { icon: <Store />, title: 'Wide Selection', description: 'Access products from local sellers, restaurants, and businesses' },
        { icon: <CreditCard />, title: 'Local Payments', description: 'Pay with Edahabia and other Algerian payment methods' },
        { icon: <Star />, title: 'Trusted Reviews', description: 'Transparent rating system based on real transactions' },
        { icon: <MapPin />, title: 'Track Orders', description: 'Real-time delivery tracking with courier details' }
      ]
    },
    seller: {
      icon: <Store />,
      title: 'For Sellers',
      color: 'orange',
      features: [
        { icon: <ShoppingCart />, title: 'Easy Setup', description: 'Start selling without expensive infrastructure or technical knowledge' },
        { icon: <CreditCard />, title: 'Fair Pricing', description: 'Set your own prices with transparent fee structure' },
        { icon: <Star />, title: 'Build Reputation', description: 'Earn trust through consistent quality and service' },
        { icon: <Clock />, title: 'Flexible Hours', description: 'Work on your own schedule, manage your own time' }
      ]
    },
    restaurant: {
      icon: <UtensilsCrossed />,
      title: 'For Restaurants',
      color: 'red',
      features: [
        { icon: <Store />, title: 'Digital Menu', description: 'Showcase your dishes with photos and detailed descriptions' },
        { icon: <Clock />, title: 'Order Management', description: 'Efficient system to handle multiple orders simultaneously' },
        { icon: <Bike />, title: 'Delivery Network', description: 'Connect with reliable couriers in your area' },
        { icon: <Star />, title: 'Customer Feedback', description: 'Build reputation through quality food and service' }
      ]
    },
    courier: {
      icon: <Bike />,
      title: 'For Couriers',
      color: 'green',
      features: [
        { icon: <MapPin />, title: 'Choose Your Zone', description: 'Select delivery areas that work best for you' },
        { icon: <Clock />, title: 'Set Your Hours', description: 'Work when you want, no forced schedules or quotas' },
        { icon: <Star />, title: 'Performance Points', description: 'Earn reputation through reliable and quality service' },
        { icon: <CreditCard />, title: 'Fair Compensation', description: 'Transparent payment for each delivery with no hidden deductions' }
      ]
    }
  };

  return (
    <section id="features" className="features section">
      <div className="container" ref={ref}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            Features for <span className="gradient-text">Everyone</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive features tailored for each role in the ZYNORA ecosystem
          </p>
        </motion.div>

        <motion.div
          className="role-tabs"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {Object.keys(roles).map((role) => (
            <button
              key={role}
              className={`role-tab ${activeRole === role ? 'active' : ''}`}
              onClick={() => setActiveRole(role)}
            >
              <span className="role-icon">{roles[role].icon}</span>
              <span className="role-label">{roles[role].title}</span>
            </button>
          ))}
        </motion.div>

        <motion.div
          className="features-content"
          key={activeRole}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="features-grid">
            {roles[activeRole].features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="features-highlight"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="highlight-content">
            <h3>One Account, Unlimited Possibilities</h3>
            <p>
              Switch between roles seamlessly. Be a buyer in the morning, 
              a seller in the afternoon, and a courier in the evening. 
              ZYNORA adapts to your lifestyle.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
