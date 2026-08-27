import { useState, useEffect } from 'react';
import './Header.css';

const LINKS = [
  { label: 'Por qué', href: '#problema' },
  { label: 'Cursos', href: '#cursos' },
  { label: 'Certificación', href: '#certificacion' },
  { label: 'Hoja de ruta', href: '#roadmap' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  return (
    <header>
      <nav className="nav">
        <a className="nav__brand" href="#top">
          <svg viewBox="0 0 240 240" aria-hidden="true">
            <path d="M118,226 C46,224 36,162 46,130 C54,98 92,90 92,60 C93,40 110,26 138,20 C146,48 154,76 172,104 C194,134 190,186 148,212 C138,220 128,226 118,226 Z" fill="#FF6A1A" />
            <path d="M122,204 C76,202 68,164 76,142 C82,120 104,114 104,94 C105,80 116,70 134,66 C140,84 146,102 158,120 C172,140 168,174 142,192 C136,198 128,204 122,204 Z" fill="#D62B1F" />
            <circle cx="140" cy="20" r="17" fill="#4E9A2F" />
          </svg>
          <span>AL <em>PUNTO</em></span>
        </a>

        <ul className="nav__links">
          {LINKS.map((link) => (
            <li key={link.href}><a href={link.href}>{link.label}</a></li>
          ))}
        </ul>

        <div className="nav__cta">
          <a href="#unirme" className="btn btn--ghost btn--sm">Quiero enseñar</a>
          <a href="#unirme" className="btn btn--solid btn--sm">Unirme a la lista</a>
        </div>

        <button
          className="nav__burger"
          aria-label="Abrir menú"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {menuOpen && (
        <div className="nav__mobile">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#unirme" className="btn btn--solid btn--sm" onClick={() => setMenuOpen(false)}>
            Unirme a la lista
          </a>
        </div>
      )}
    </header>
  );
}
