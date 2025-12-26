import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
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

  return (
    <section id="about" className="py-20" style={{
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
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-16 text-center">
          About <span style={{ color: 'var(--accent)' }}>Me</span>
        </motion.h2>

        <motion.div variants={containerVariants} className="space-y-8">
          <motion.p variants={itemVariants} className="text-lg leading-relaxed" style={{ color: 'var(--text)' }}>
            I&apos;m a passionate Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js) and React Native. Currently a final-year B.Tech student in Computer Science & Design at K. K. Wagh Institute of Engineering Education and Research.
          </motion.p>

          <motion.p variants={itemVariants} className="text-lg leading-relaxed" style={{ color: 'var(--text)' }}>
            I&apos;ve worked on diverse projects ranging from cloud-native systems to real-time communication platforms. At Craftivert, I delivered 10+ production-ready web solutions with 100% on-time delivery. Currently optimizing web performance at Anstric Games.
          </motion.p>

          <motion.p variants={itemVariants} className="text-lg leading-relaxed" style={{ color: 'var(--text)' }}>
            I&apos;m driven by solving complex technical challenges with clean, maintainable code. An active open-source contributor, hackathon participant (SIH 2024 Semi-Finalist), and technical leader who&apos;s passionate about mentoring.
          </motion.p>

          <motion.div variants={containerVariants} className="grid md:grid-cols-3 gap-4 mt-12 pt-8 border-t" style={{ borderColor: 'var(--text-muted)' }}>
            <motion.div variants={itemVariants} className="p-6">
              <p className="text-2xl font-bold" style={{ color: 'var(--accent)' }}>8.46</p>
              <p className="text-sm mt-2" style={{ color: 'var(--text-muted)' }}>CGPA</p>
            </motion.div>
            <motion.div variants={itemVariants} className="p-6">
              <p className="text-2xl font-bold" style={{ color: 'var(--accent)' }}>10+</p>
              <p className="text-sm mt-2" style={{ color: 'var(--text-muted)' }}>Projects Delivered</p>
            </motion.div>
            <motion.div variants={itemVariants} className="p-6">
              <p className="text-2xl font-bold" style={{ color: 'var(--accent)' }}>2024</p>
              <p className="text-sm mt-2" style={{ color: 'var(--text-muted)' }}>SIH Semi-Finalist</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
