import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer__top">
          <div className="footer__brand">
            <svg viewBox="0 0 240 240" aria-hidden="true">
              <path d="M118,226 C46,224 36,162 46,130 C54,98 92,90 92,60 C93,40 110,26 138,20 C146,48 154,76 172,104 C194,134 190,186 148,212 C138,220 128,226 118,226 Z" fill="#FF6A1A" />
              <path d="M122,204 C76,202 68,164 76,142 C82,120 104,114 104,94 C105,80 116,70 134,66 C140,84 146,102 158,120 C172,140 168,174 142,192 C136,198 128,204 122,204 Z" fill="#D62B1F" />
              <circle cx="140" cy="20" r="17" fill="#4E9A2F" />
            </svg>
            <span>AL <em>PUNTO</em></span>
          </div>

          <div className="footer__links">
            <div className="footer__col">
              <h4>Plataforma</h4>
              <ul>
                <li><a href="#problema">Por qué existimos</a></li>
                <li><a href="#cursos">Tipos de curso</a></li>
                <li><a href="#certificacion">Certificación</a></li>
                <li><a href="#roadmap">Hoja de ruta</a></li>
              </ul>
            </div>
            <div className="footer__col">
              <h4>Comunidad</h4>
              <ul>
                <li><a href="#unirme">Quiero aprender</a></li>
                <li><a href="#unirme">Quiero enseñar</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__legal">
            Al Punto es un proyecto en etapa de validación. La certificación acredita la
            finalización de un curso revisado; no equivale a un título profesional ni a
            una licencia para ejercer una profesión regulada.
          </p>
          <p>© 2026 Al Punto — Aprende. Comparte. Crece.</p>
        </div>
      </div>
    </footer>
  );
}
