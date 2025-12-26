import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 border-t" style={{ backgroundColor: 'var(--bg)', color: 'var(--text-muted)', borderColor: 'var(--text-muted)' }}>
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text)' }}>Vivek Bendre</h3>
            <p className="text-sm">Full Stack Developer | MERN Stack | React Native</p>
            <p className="text-xs mt-2" style={{ color: 'var(--text-muted)' }}>Building scalable web solutions with clean code.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm" style={{ color: 'var(--text)' }}>NAVIGATION</h4>
            <div className="space-y-2 text-sm">
              <a href="#home" className="hover:opacity-80 transition block" style={{ color: 'var(--text-muted)' }}>Home</a>
              <a href="#about" className="hover:opacity-80 transition block" style={{ color: 'var(--text-muted)' }}>About</a>
              <a href="#projects" className="hover:opacity-80 transition block" style={{ color: 'var(--text-muted)' }}>Projects</a>
              <a href="#contact" className="hover:opacity-80 transition block" style={{ color: 'var(--text-muted)' }}>Contact</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm" style={{ color: 'var(--text)' }}>CONNECT</h4>
            <div className="flex gap-4">
              <a href="https://github.com/vivek5200" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition" style={{ color: 'var(--accent)' }}>
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/vivek-bendre" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition" style={{ color: 'var(--accent)' }}>
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm" style={{ borderColor: 'var(--text-muted)' }}>
          <p className="flex items-center justify-center gap-1">
            Made with <FaHeart className="text-red-500 text-xs" /> © {year} Vivek Bendre
          </p>
        </div>
      </div>
    </footer>
  );
}
