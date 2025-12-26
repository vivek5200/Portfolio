import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const experiences = [
    {
      title: 'Web Developer Intern',
      company: 'Anstric Games',
      period: 'Present',
      desc: 'Engineered high-performance web applications reducing page load times by 20%. Architected scalable front-end solutions ensuring 99.9% system uptime.',
    },
    {
      title: 'Full Stack Developer',
      company: 'Craftivert',
      period: 'Jan 2023 – May 2025',
      desc: 'Delivered 10+ production-ready web solutions with 100% on-time delivery. Full-stack MERN development achieving 30% increase in engagement.',
    },
  ];

  return (
    <section id="experience" className="py-20" style={{
      backgroundColor: 'var(--bg)',
      color: 'var(--text)',
      background: 'linear-gradient(135deg, var(--bg) 0%, rgba(var(--accent-rgb), 0.03) 100%)'
    }}>
      <motion.div 
        className="container mx-auto px-6 max-w-3xl"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span style={{ color: 'var(--text)' }}>Experience</span>
        </motion.h2>
        
        <motion.div variants={containerVariants} className="space-y-6">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="flex gap-6 group"
            >
              <div className="flex flex-col items-center">
                <motion.div 
                  className="w-4 h-4 rounded-full mt-2"
                  style={{ backgroundColor: 'var(--accent)' }}
                  whileHover={{ scale: 1.3 }}
                ></motion.div>
                {idx < experiences.length - 1 && <div className="w-1 h-20 mt-2" style={{ background: `linear-gradient(to bottom, var(--accent), var(--text-muted))` }}></div>}
              </div>
              <div className="pb-6">
                <p className="text-sm font-semibold" style={{ color: 'var(--accent)' }}>{exp.period}</p>
                <h3 className="text-xl font-bold mt-1" style={{ color: 'var(--text)' }}>{exp.title}</h3>
                <p className="text-sm mb-3" style={{ color: 'var(--text-muted)' }}>{exp.company}</p>
                <p className="leading-relaxed" style={{ color: 'var(--text)' }}>{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
