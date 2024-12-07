import React , { useContext } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import { ThemeContext } from '../../context/ThemeContext';
const ScrollIndicator = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <motion.div
      className={`theme-${theme} scroll-indicator`}
      initial={{ opacity: 0, y: 20 }} // Start slightly below and transparent
      animate={{ opacity: 1, y: 0 }}   // Slide up to original position and become visible
      transition={{ delay: 3, duration: 0.5 }} // Delay before appearing
    >
      <Link to="/AboutMe" className="scroll-link">
        <FaChevronDown size={45} />
        <p>Learn More About Me</p>
      </Link>
    </motion.div>
  );
};

export default ScrollIndicator;