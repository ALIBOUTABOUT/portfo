import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Play, ArrowRight, Mail, ExternalLink } from 'lucide-react';
import './Demo.css';

const Demo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="demo" className="demo section">
      <div className="bg-pattern" />
      <div className="container" ref={ref}>
        <motion.div
          className="demo-content"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="demo-text">
            <h2 className="demo-title">
              Ready to See <span className="gradient-text">ZYNORA</span> in Action?
            </h2>
            <p className="demo-description">
              Experience the future of Algerian commerce. Schedule a personalized demo 
              to see how ZYNORA can transform your business or explore our interactive prototype.
            </p>
          </div>

          <div className="demo-actions">
            <motion.a
              href="https://drive.google.com/drive/folders/1KcxraGhCa-V1jTKqo5H0ZrTJ0vZCvKOv"
              target="_blank"
              rel="noopener noreferrer"
              className="demo-btn primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play size={24} />
              <span>Watch Demo Video</span>
            </motion.a>
            <motion.button
              className="demo-btn secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={20} />
              <span>View Prototype</span>
            </motion.button>
          </div>

          <motion.div
            className="demo-contact"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3>Interested in Investing or Partnering?</h3>
            <p>
              ZYNORA is seeking strategic partners and investors who share our vision 
              of transforming Algerian commerce. Let's connect and explore opportunities.
            </p>
            <button className="contact-btn">
              <Mail size={20} />
              <span>Get in Touch</span>
              <ArrowRight size={20} />
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="demo-stats"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="demo-stat">
            <span className="stat-number">₠</span>
            <span className="stat-text">Edahabia Ready</span>
          </div>
          <div className="demo-stat">
            <span className="stat-number">🇩🇿</span>
            <span className="stat-text">Made for Algeria</span>
          </div>
          <div className="demo-stat">
            <span className="stat-number">∞</span>
            <span className="stat-text">Scalable Growth</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Demo;
