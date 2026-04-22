import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden" style={{ backgroundColor: 'var(--bg)' }}>
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-transparent to-purple-950/20"></div>

      <motion.div
        className="relative text-center px-6 max-w-3xl"
        style={{ color: 'var(--text)' }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={itemVariants} className="text-sm mb-4 font-semibold tracking-wider" style={{ color: 'var(--accent)' }}>WELCOME TO MY PORTFOLIO</motion.p>

        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Hi, I&apos;m <span style={{ color: 'var(--accent)' }}>Vivek Bendre</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-xl md:text-2xl mb-8 font-light" style={{ color: 'var(--text)' }}>
          Full Stack Developer | MERN Stack | React Native
        </motion.p>

        <motion.p variants={itemVariants} className="mb-12 text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
          Crafting elegant, scalable web applications with modern technologies. Building real-world solutions with clean code and user-centric design.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg font-semibold transition duration-300 hover:opacity-90"
            style={{ backgroundColor: 'var(--accent)', color: '#fff' }}
          >
            Get In Touch
          </motion.a>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg font-semibold transition duration-300 hover:opacity-90"
            style={{
              borderWidth: '2px',
              borderColor: 'var(--accent)',
              color: 'var(--accent)',
              backgroundColor: 'transparent'
            }}
          >
            View Work
          </motion.a>
        </motion.div>

        <motion.div variants={itemVariants} className="flex gap-6 justify-center">
          <motion.a
            href="https://github.com/vivek5200"
            className="hover:opacity-80 transition text-2xl"
            style={{ color: 'var(--accent)' }}
            whileHover={{ scale: 1.2, rotate: 5 }}
            title="GitHub"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/vivek-bendre"
            className="hover:opacity-80 transition text-2xl"
            style={{ color: 'var(--accent)' }}
            whileHover={{ scale: 1.2, rotate: -5 }}
            title="LinkedIn"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="mailto:vivekbendre012@gmail.com"
            className="hover:opacity-80 transition text-2xl"
            style={{ color: 'var(--accent)' }}
            whileHover={{ scale: 1.2, rotate: 5 }}
            title="Email"
          >
            <FaEnvelope />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
