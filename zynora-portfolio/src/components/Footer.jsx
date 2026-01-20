import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                  d="M20 2L37 12V28L20 38L3 28V12L20 2Z"
                  fill="url(#footerGradient)"
                  stroke="var(--color-turquoise)"
                  strokeWidth="2"
                />
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dy=".35em"
                  fill="var(--color-deep-black)"
                  fontSize="16"
                  fontWeight="bold"
                >
                  Z
                </text>
                <defs>
                  <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--color-turquoise)" />
                    <stop offset="100%" stopColor="var(--color-turquoise-dark)" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="footer-brand-name">ZYNORA</span>
            </div>
            <p className="footer-tagline">
              Transforming Algerian commerce through intelligent technology, 
              transparency, and human-centered design.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Platform</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#technology">Technology</a></li>
                <li><a href="#demo">Demo</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>About</h4>
              <ul>
                <li><a href="#problem">Our Mission</a></li>
                <li><a href="#solution">Our Vision</a></li>
                <li><a href="#demo">Contact Us</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Connect</h4>
              <div className="social-links">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Github"
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Email"
                >
                  <Mail size={20} />
                </motion.a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} ZYNORA. All rights reserved.
          </p>
          <p className="made-with">
            Made with <Heart size={14} className="heart-icon" /> for Algeria
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
