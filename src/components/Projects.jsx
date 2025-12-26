import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const projects = [
    {
      title: 'SkyStack',
      subtitle: 'On Demand Processing System',
      description: 'Cloud-native system handling large-scale geospatial datasets. Optimized data storage by converting HDF5 to Cloud Optimized GeoTIFF, reducing latency by 40%.',
      tech: ['Python', 'Flask', 'React', 'AWS', 'Docker'],
      github: 'https://github.com/vivek5200/SkyStack',
      live: 'https://sky-stack.vercel.app/',
    },
    {
      title: 'Geo-Report',
      subtitle: 'Civic Incident Reporting Platform',
      description: 'Real-time civic issue reporting with geotagged submissions. Implemented RBAC security and sub-second updates using Redis and Socket.io.',
      tech: ['MERN', 'Redis', 'Socket.io', 'Geolocation'],
      github: 'https://github.com/vivek5200/geo-report',
    },
    {
      title: 'Temporary Chat',
      subtitle: 'Ephemeral Messaging Platform',
      description: 'Secure real-time communication with ephemeral messaging and passcode-protected rooms. Firebase Authentication for instant synchronization.',
      tech: ['React Native', 'Firebase', 'Real-time'],
      github: 'https://github.com/vivek5200/Temp-Chat',
    },
    {
      title: 'Craftivert',
      subtitle: '10+ Client Solutions',
      description: 'Delivered production-ready web solutions with 100% on-time delivery. Full-stack development achieving 30% increase in user engagement.',
      tech: ['MERN', 'Node.js', 'MongoDB', 'AWS'],
    },
  ];

  return (
    <section id="projects" className="py-20" style={{
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
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Featured <span style={{ color: 'var(--accent)' }}>Projects</span>
        </motion.h2>

        <motion.div variants={containerVariants} className="space-y-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ borderColor: 'var(--accent)' }}
              className="group p-6 border rounded-lg transition duration-300"
              style={{
                backgroundColor: `rgba(var(--bg-rgb), 0.5)`,
                borderColor: 'var(--text-muted)'
              }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-1" style={{ color: 'var(--text)' }}>{project.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{project.subtitle}</p>
                </div>
                <div className="flex gap-4 mt-2 md:mt-0">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold flex items-center gap-2 hover:opacity-80 transition"
                      style={{ color: 'var(--accent)' }}
                      whileHover={{ x: 5 }}
                    >
                      <FaGithub /> Code
                    </motion.a>
                  )}
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold flex items-center gap-2 hover:opacity-80 transition"
                      style={{ color: 'var(--accent)' }}
                      whileHover={{ x: 5 }}
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </motion.a>
                  )}
                </div>
              </div>

              <p className="mb-4 leading-relaxed" style={{ color: 'var(--text)' }}>{project.description}</p>

              <motion.div variants={containerVariants} className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <motion.span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full border transition"
                    style={{
                      backgroundColor: `rgba(var(--accent-rgb), 0.1)`,
                      color: 'var(--accent)',
                      borderColor: `rgba(var(--accent-rgb), 0.2)`
                    }}
                    whileHover={{ scale: 1.1, opacity: 0.8 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
