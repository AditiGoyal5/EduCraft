import { useEffect, useState } from 'react';
import Logo from './Logo';
import { navLinks } from '../constants/siteData';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`} id="header">
      <div className="header-wrap container">
        <nav className="nav">
          <Logo />
          <button
            type="button"
            className={`nav-toggle${menuOpen ? ' active' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
          <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a href={href} onClick={closeMenu}>
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className="btn btn-sm btn-whatsapp" onClick={closeMenu}>
                WhatsApp Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
