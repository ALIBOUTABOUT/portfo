import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2, Users, TrendingUp, Zap, Heart, Globe } from 'lucide-react';
import './Solution.css';

const Solution = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const solutions = [
    {
      icon: <Users />,
      title: 'Single Account, Multiple Roles',
      description: 'One unified account allows users to be buyers, sellers, restaurant owners, and couriers simultaneously.'
    },
    {
      icon: <CheckCircle2 />,
      title: 'Freedom of Choice',
      description: 'No forced orders or missions. Everyone chooses what, when, and where they want to work or buy.'
    },
    {
      icon: <TrendingUp />,
      title: 'Transparent Pricing',
      description: 'Clear, upfront pricing with no hidden fees. Performance-based points system reflects real reliability.'
    },
    {
      icon: <Zap />,
      title: 'Local Payment Support',
      description: 'Full integration with Edahabia and other Algerian payment methods for seamless transactions.'
    },
    {
      icon: <Heart />,
      title: 'Empowering Small Businesses',
      description: 'Home-based sellers and small businesses get equal opportunities without expensive infrastructure.'
    },
    {
      icon: <Globe />,
      title: 'Adapted to Algeria',
      description: 'Designed specifically for the Algerian market context, culture, and business practices.'
    }
  ];

  return (
    <section id="solution" className="solution section">
      <div className="container" ref={ref}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            How <span className="gradient-text">ZYNORA</span> Solves It
          </h2>
          <p className="section-subtitle">
            An intelligent opportunity management system built on trust, 
            transparency, and flexibility for the Algerian ecosystem
          </p>
        </motion.div>

        <div className="solution-grid">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="solution-card card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="solution-icon">{solution.icon}</div>
              <h3 className="solution-title">{solution.title}</h3>
              <p className="solution-description">{solution.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="solution-value"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3>Not Just a Marketplace</h3>
          <p>
            ZYNORA is a smart opportunity management system with strong economic 
            and social impact, transforming how Algerians connect, trade, and deliver.
          </p>
          <div className="value-highlights">
            <div className="highlight-item">
              <span className="highlight-number">Digital</span>
              <span className="highlight-label">Trust System</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">Fair</span>
              <span className="highlight-label">Opportunity Distribution</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">Economic</span>
              <span className="highlight-label">Social Impact</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;
