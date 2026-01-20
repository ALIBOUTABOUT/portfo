import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Smartphone, Cloud, Lock, Zap } from 'lucide-react';
import './Technology.css';

const Technology = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const techStack = [
    { name: 'React Native', category: 'Mobile', icon: <Smartphone />, color: '#61DAFB' },
    { name: 'Node.js', category: 'Backend', icon: <Code2 />, color: '#339933' },
    { name: 'PostgreSQL', category: 'Database', icon: <Database />, color: '#4169E1' },
    { name: 'Redis', category: 'Cache', icon: <Zap />, color: '#DC382D' },
    { name: 'AWS', category: 'Cloud', icon: <Cloud />, color: '#FF9900' },
    { name: 'Security', category: 'Encryption', icon: <Lock />, color: '#20d4c4' }
  ];

  return (
    <section id="technology" className="technology section">
      <div className="container" ref={ref}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            Built with <span className="gradient-text">Modern Technology</span>
          </h2>
          <p className="section-subtitle">
            Scalable, secure, and efficient architecture designed for growth
          </p>
        </motion.div>

        <div className="tech-grid">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              className="tech-card card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="tech-icon" style={{ color: tech.color }}>
                {tech.icon}
              </div>
              <h3 className="tech-name">{tech.name}</h3>
              <p className="tech-category">{tech.category}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="architecture-diagram"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3>System Architecture</h3>
          <div className="architecture-layers">
            <div className="layer">
              <div className="layer-title">Presentation Layer</div>
              <div className="layer-content">Mobile Apps (iOS & Android) • Web Interface</div>
            </div>
            <div className="layer-arrow">↓</div>
            <div className="layer">
              <div className="layer-title">API Gateway</div>
              <div className="layer-content">RESTful API • WebSocket • Authentication</div>
            </div>
            <div className="layer-arrow">↓</div>
            <div className="layer">
              <div className="layer-title">Business Logic</div>
              <div className="layer-content">Order Management • Matching Algorithm • Payment Processing</div>
            </div>
            <div className="layer-arrow">↓</div>
            <div className="layer">
              <div className="layer-title">Data Layer</div>
              <div className="layer-content">PostgreSQL • Redis Cache • File Storage</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="tech-features"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="tech-feature-item">
            <Zap className="tech-feature-icon" />
            <div>
              <h4>High Performance</h4>
              <p>Optimized for speed with Redis caching and efficient database queries</p>
            </div>
          </div>
          <div className="tech-feature-item">
            <Lock className="tech-feature-icon" />
            <div>
              <h4>Bank-Level Security</h4>
              <p>End-to-end encryption and secure payment processing</p>
            </div>
          </div>
          <div className="tech-feature-item">
            <Cloud className="tech-feature-icon" />
            <div>
              <h4>Scalable Infrastructure</h4>
              <p>Cloud-based architecture ready to handle growing user base</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technology;
