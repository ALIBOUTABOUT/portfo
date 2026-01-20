import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero section">
      <div className="bg-pattern" />
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles size={16} />
            <span>Intelligent Platform for Algeria</span>
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform Commerce with{' '}
            <span className="gradient-text">ZYNORA</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            An intelligent Algerian digital platform connecting buyers, sellers, 
            restaurants, and couriers within a unified, transparent, and fair ecosystem 
            adapted to the local context.
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button
              className="btn btn-primary"
              onClick={() => document.getElementById('demo').scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Demo
              <ArrowRight size={20} />
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </button>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="stat-item">
              <div className="stat-value">4</div>
              <div className="stat-label">User Roles</div>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <div className="stat-value">1</div>
              <div className="stat-label">Unified Account</div>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <div className="stat-value">100%</div>
              <div className="stat-label">Transparency</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="floating-card card-1">
            <div className="card-icon">🛒</div>
            <div className="card-label">Buyers</div>
          </div>
          <div className="floating-card card-2">
            <div className="card-icon">🏪</div>
            <div className="card-label">Sellers</div>
          </div>
          <div className="floating-card card-3">
            <div className="card-icon">🍽️</div>
            <div className="card-label">Restaurants</div>
          </div>
          <div className="floating-card card-4">
            <div className="card-icon">🚚</div>
            <div className="card-label">Couriers</div>
          </div>
          <div className="hero-center-logo">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
              <circle cx="60" cy="60" r="58" stroke="url(#gradient2)" strokeWidth="4" />
              <path
                d="M60 10L100 35V85L60 110L20 85V35L60 10Z"
                fill="url(#gradient2)"
              />
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dy=".35em"
                fill="var(--color-deep-black)"
                fontSize="48"
                fontWeight="bold"
              >
                Z
              </text>
              <defs>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--color-turquoise)" />
                  <stop offset="100%" stopColor="var(--color-turquoise-dark)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
