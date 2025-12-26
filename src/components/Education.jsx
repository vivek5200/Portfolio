import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap } from 'react-icons/fa';

export default function Education() {
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

  const educationData = [
    {
      degree: 'B.Tech Computer Science and Design',
      institution: 'K K Wagh Institute of Engineering Education and Research',
      location: 'Nashik',
      score: 'CGPA: 8.46',
      year: '2026',
      icon: <FaGraduationCap />,
    },
    {
      degree: 'HSC Board (12th)',
      institution: 'Chanakya Vidhyalya',
      location: 'Ankleshwar, Gujarat',
      score: 'Percentage: 58%',
      year: '2022',
      icon: <FaGraduationCap />,
    },
    {
      degree: 'SSC Board (10th)',
      institution: 'Lions School',
      location: 'Ankleshwar, Gujarat',
      score: 'Percentage: 70.5%',
      year: '2020',
      icon: <FaGraduationCap />,
    },
  ];

  return (
    <section id="education" className="py-20" style={{
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
          <span style={{ color: 'var(--accent)' }}>Education</span>
        </motion.h2>

        <motion.div variants={containerVariants} className="space-y-8">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ borderColor: 'var(--accent)' }}
              className="p-6 rounded-lg border transition duration-300 flex gap-4"
              style={{
                backgroundColor: `rgba(var(--bg-rgb), 0.5)`,
                borderColor: 'var(--text-muted)'
              }}
            >
              <motion.div
                className="text-3xl pt-1 flex-shrink-0"
                style={{ color: 'var(--accent)' }}
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                {edu.icon}
              </motion.div>

              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-xl font-bold" style={{ color: 'var(--text)' }}>{edu.degree}</h3>
                    <p style={{ color: 'var(--text)' }}>{edu.institution}</p>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{edu.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold" style={{ color: 'var(--accent)' }}>{edu.score}</p>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{edu.year}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
