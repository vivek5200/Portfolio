import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCode } from 'react-icons/fa';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const technicalSkills = {
    'Programming Languages': ['Python', 'JavaScript', 'Java', 'C++', 'SQL'],
    'Web Development': ['React', 'Node.js', 'HTML', 'CSS', 'Tailwind CSS', 'MySQL', 'PostgreSQL', 'MongoDB'],
    'Tools & Technologies': ['Git', 'Docker', 'AWS', 'Firebase', 'Figma', 'Canva', 'Postman', 'Jupyter'],
  };

  const softSkills = [
    'Problem Solving',
    'Team Leadership',
    'Communication',
    'Time Management',
    'Critical Thinking',
    'Adaptability',
    'Project Management',
  ];

  return (
    <section id="skills" className="py-20" style={{
      backgroundColor: 'var(--bg)',
      color: 'var(--text)',
      background: 'linear-gradient(135deg, var(--bg) 0%, rgba(var(--accent-rgb), 0.03) 100%)'
    }}>
      <motion.div 
        className="container mx-auto px-6 max-w-5xl"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-16">
          <span className="flex items-center gap-3">
            <FaCode style={{ color: 'var(--accent)' }} />
            Skills
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div 
            variants={itemVariants}
            className="rounded-lg p-8 border"
            style={{ 
              backgroundColor: `rgba(var(--bg-rgb), 0.3)`,
              borderColor: 'var(--text-muted)'
            }}
          >
            <h3 className="text-2xl font-bold mb-8">Technical Skills</h3>
            <div className="space-y-8">
              {Object.entries(technicalSkills).map(([category, skills], idx) => (
                <div key={idx}>
                  <h4 className="font-semibold mb-4" style={{ color: 'var(--text)' }}>{category}</h4>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        variants={itemVariants}
                        className="text-sm rounded-lg border transition-colors"
                        style={{ backgroundColor: 'var(--text)', color: 'var(--bg)', padding: '0.5rem 1rem', borderColor: 'var(--text-muted)' }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div 
            variants={itemVariants}
            className="rounded-lg p-8 border"
            style={{ 
              backgroundColor: `rgba(var(--bg-rgb), 0.3)`,
              borderColor: 'var(--text-muted)'
            }}
          >
            <h3 className="text-2xl font-bold mb-8">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-6">
              {softSkills.map((skill, idx) => (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  className="flex items-start gap-3 group"
                >
                  <span className="text-lg mt-1 group-hover:scale-125 transition-transform" style={{ color: 'var(--accent)' }}>●</span>
                  <span style={{ color: 'var(--text)' }}>{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
