import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20" style={{
      backgroundColor: 'var(--bg)',
      color: 'var(--text)',
      background: 'linear-gradient(135deg, var(--bg) 0%, rgba(var(--accent-rgb), 0.03) 100%)'
    }}>
      <motion.div
        className="container mx-auto px-6 max-w-4xl"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-16 text-center" style={{ color: 'var(--text)' }}>
          Get In <span style={{ color: 'var(--accent)' }}>Touch</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div variants={containerVariants} className="space-y-6">
            <motion.div variants={itemVariants}>
              <p className="text-sm font-semibold mb-2" style={{ color: 'var(--accent)' }}>EMAIL</p>
              <a href="mailto:vivekbendre012@gmail.com" className="hover:opacity-80 transition text-lg" style={{ color: 'var(--text)' }}>
                vivekbendre012@gmail.com
              </a>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-sm font-semibold mb-2" style={{ color: 'var(--accent)' }}>PHONE</p>
              <a href="tel:+918866030924" className="hover:opacity-80 transition text-lg" style={{ color: 'var(--text)' }}>
                +91-8866030924
              </a>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-sm font-semibold mb-2" style={{ color: 'var(--accent)' }}>LOCATION</p>
              <p className="text-lg" style={{ color: 'var(--text)' }}>Nashik, India</p>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4 space-y-3">
              <p className="text-sm font-semibold" style={{ color: 'var(--accent)' }}>CONNECT WITH ME</p>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/vivek5200"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition text-xl"
                  style={{ color: 'var(--text-muted)' }}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/vivek-bendre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition text-xl"
                  style={{ color: 'var(--text-muted)' }}
                  whileHover={{ scale: 1.2, rotate: -10 }}
                >
                  <FaLinkedin />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          <motion.form onSubmit={handleSubmit} variants={containerVariants} className="space-y-4">
            <motion.input
              variants={itemVariants}
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              whileFocus={{ scale: 1.02 }}
              className="w-full px-4 py-3 rounded-lg focus:outline-none transition"
              style={{
                backgroundColor: `rgba(var(--bg-rgb), 0.8)`,
                color: 'var(--text)',
                border: '2px solid var(--text-muted)'
              }}
            />
            <motion.input
              variants={itemVariants}
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              whileFocus={{ scale: 1.02 }}
              className="w-full px-4 py-3 rounded-lg focus:outline-none transition"
              style={{
                backgroundColor: `rgba(var(--bg-rgb), 0.8)`,
                color: 'var(--text)',
                border: '2px solid var(--text-muted)'
              }}
            />
            <motion.textarea
              variants={itemVariants}
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              whileFocus={{ scale: 1.02 }}
              className="w-full px-4 py-3 rounded-lg focus:outline-none transition resize-none"
              style={{
                backgroundColor: `rgba(var(--bg-rgb), 0.8)`,
                color: 'var(--text)',
                border: '2px solid var(--text-muted)'
              }}
            ></motion.textarea>
            <motion.button
              type="submit"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 font-semibold rounded-lg transition duration-300"
              style={{ backgroundColor: 'var(--accent)', color: '#fff' }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}
