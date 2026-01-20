import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { AlertCircle, TrendingDown, ShoppingBag, Truck, Shield } from 'lucide-react';
import './Problem.css';

const Problem = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const problems = [
    {
      icon: <AlertCircle />,
      title: 'Lack of Trust',
      description: 'Traditional platforms lack transparency in pricing and service quality, creating distrust among users.'
    },
    {
      icon: <TrendingDown />,
      title: 'Limited Access',
      description: 'Small businesses and home-based sellers struggle to reach customers without expensive infrastructure.'
    },
    {
      icon: <ShoppingBag />,
      title: 'Payment Barriers',
      description: 'Most platforms don\'t support local payment methods like Edahabia, limiting adoption in Algeria.'
    },
    {
      icon: <Truck />,
      title: 'Courier Exploitation',
      description: 'Delivery workers are forced to accept unfavorable orders with no control over working hours or zones.'
    },
    {
      icon: <Shield />,
      title: 'No Flexibility',
      description: 'Rigid systems force both buyers and sellers into preset workflows that don\'t match local needs.'
    }
  ];

  return (
    <section id="problem" className="problem section">
      <div className="bg-pattern" />
      <div className="container" ref={ref}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            The Challenge in <span className="gradient-text">Algerian Market</span>
          </h2>
          <p className="section-subtitle">
            Current e-commerce and delivery platforms in Algeria face critical issues 
            that hinder growth and user satisfaction
          </p>
        </motion.div>

        <div className="problems-grid">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="problem-card card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="problem-icon">{problem.icon}</div>
              <h3 className="problem-title">{problem.title}</h3>
              <p className="problem-description">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="problem-impact"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="impact-content">
            <h3>The Result?</h3>
            <p>
              A fragmented ecosystem where users struggle with trust issues, limited opportunities, 
              and unfair practices. This creates barriers to digital transformation and economic growth.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
