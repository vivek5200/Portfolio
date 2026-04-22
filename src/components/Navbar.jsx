import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaSun, FaMoon, FaDownload } from 'react-icons/fa';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check system preference on mount
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    setIsDark(theme === 'dark');
    applyTheme(theme);
  }, []);

  useEffect(() => {
    // Apply theme to document
    const theme = isDark ? 'dark' : 'light';
    applyTheme(theme);
    localStorage.setItem('theme', theme);
  }, [isDark]);

  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'light') {
      document.documentElement.style.colorScheme = 'light';
    } else {
      document.documentElement.style.colorScheme = 'dark';
    }
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const downloadResume = () => {
    // Download resume PDF from public folder
    const link = document.createElement('a');
    link.href = '/VivekBendre_Resume.pdf';
    link.download = 'Vivek_Bendre_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.nav 
      className="fixed w-full backdrop-blur-md z-50"
      style={{
        backgroundColor: 'rgba(var(--bg-rgb), 0.9)',
        borderBottomColor: 'var(--text)',
        color: 'var(--text)',
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.h1 
          className="text-2xl font-bold"
          style={{ color: 'var(--text)' }}
          whileHover={{ scale: 1.05 }}
        >
          VB
        </motion.h1>
        
        <div className="hidden md:flex gap-8 text-sm items-center">
          <motion.a 
            href="#home" 
            className="hover:opacity-80 transition duration-300"
            style={{ color: 'var(--text)' }}
            whileHover={{ opacity: 1 }}
          >
            Home
          </motion.a>
          <motion.a 
            href="#about" 
            className="hover:opacity-80 transition duration-300"
            style={{ color: 'var(--text)' }}
            whileHover={{ opacity: 1 }}
          >
            About
          </motion.a>
          <motion.a 
            href="#skills" 
            className="hover:opacity-80 transition duration-300"
            style={{ color: 'var(--text)' }}
            whileHover={{ opacity: 1 }}
          >
            Skills
          </motion.a>
          <motion.a 
            href="#projects" 
            className="hover:opacity-80 transition duration-300"
            style={{ color: 'var(--text)' }}
            whileHover={{ opacity: 1 }}
          >
            Projects
          </motion.a>
          <motion.a 
            href="#contact" 
            className="hover:opacity-80 transition duration-300"
            style={{ color: 'var(--text)' }}
            whileHover={{ opacity: 1 }}
          >
            Contact
          </motion.a>

          <motion.button
            onClick={downloadResume}
            className="px-4 py-2 rounded-lg font-semibold transition duration-300 flex items-center gap-2"
            style={{ backgroundColor: 'var(--accent)', color: 'white' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="Download Resume"
          >
            <FaDownload size={14} />
            Resume
          </motion.button>
          
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-lg transition duration-300 hover:opacity-80"
            style={{ backgroundColor: `rgba(var(--accent-rgb), 0.1)` }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDark ? <FaSun style={{ color: '#fbbf24' }} /> : <FaMoon style={{ color: '#ffffff' }} />}
          </motion.button>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <motion.button
            onClick={downloadResume}
            className="px-3 py-2 rounded-lg text-sm font-semibold transition duration-300 flex items-center gap-2 text-white hover:opacity-90"
            style={{ backgroundColor: 'var(--accent)' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="Download Resume"
          >
            <FaDownload size={12} />
          </motion.button>

          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-lg transition duration-300 hover:opacity-80"
            style={{ backgroundColor: `rgba(var(--accent-rgb), 0.1)` }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDark ? <FaSun style={{ color: '#fbbf24' }} /> : <FaMoon style={{ color: '#ffffff' }} />}
          </motion.button>
          
          <motion.button 
            className="text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>
      </div>

      {menuOpen && (
        <motion.div 
          className="md:hidden bg-black/50 backdrop-blur-md px-6 py-4 space-y-2 border-t"
          style={{ borderColor: 'var(--text-muted)' }}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.a 
            href="#home" 
            className="block py-2 hover:opacity-80 transition"
            style={{ color: 'var(--text)' }}
            whileHover={{ x: 10 }}
          >
            Home
          </motion.a>
          <motion.a 
            href="#about" 
            className="block py-2 hover:opacity-80 transition"
            style={{ color: 'var(--text)' }}
            whileHover={{ x: 10 }}
          >
            About
          </motion.a>
          <motion.a 
            href="#skills" 
            className="block py-2 hover:opacity-80 transition"
            style={{ color: 'var(--text)' }}
            whileHover={{ x: 10 }}
          >
            Skills
          </motion.a>
          <motion.a 
            href="#projects" 
            className="block py-2 hover:opacity-80 transition"
            style={{ color: 'var(--text)' }}
            whileHover={{ x: 10 }}
          >
            Projects
          </motion.a>
          <motion.a 
            href="#contact" 
            className="block py-2 hover:opacity-80 transition"
            style={{ color: 'var(--text)' }}
            whileHover={{ x: 10 }}
          >
            Contact
          </motion.a>
        </motion.div>
      )}
    </motion.nav>
  );
}
