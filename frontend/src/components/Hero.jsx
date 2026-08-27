import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero__grid">
        <div>
          <div className="hero__eyebrow eyebrow">
            <span className="dot" /> Escuela gastronómica digital · MVP en validación
          </div>
          <h1>Aprende a cocinar<br />con el punto <em>exacto</em>.</h1>
          <p className="hero__sub">
            Al Punto conecta a personas que quieren aprender gastronomía con chefs,
            reposteros, panaderos y baristas reales. Cursos revisados y certificados,
            o abiertos por la comunidad — vos decidís de quién aprender.
          </p>
          <div className="hero__ctas">
            <a href="#unirme" className="btn btn--solid">Quiero aprender →</a>
            <a href="#unirme" className="btn btn--ghost">Quiero enseñar</a>
          </div>
          <div className="hero__meta">
            <div><strong>2</strong><span>tipos de curso</span></div>
            <div><strong>5–10</strong><span>cursos en el catálogo inicial</span></div>
            <div><strong>100%</strong><span>enfocado en gastronomía</span></div>
          </div>
        </div>

        <div className="gauge">
          <div className="gauge__card">
            <div className="gauge__top">
              <span className="label">Punto de cocción</span>
              <span className="gauge__reading">92/100</span>
            </div>
            <div className="gauge__track">
              <div className="gauge__zone" />
              <div className="gauge__needle" />
            </div>
            <div className="gauge__labels">
              <span>Crudo</span>
              <span className="mid">Al punto</span>
              <span>Quemado</span>
            </div>
            <p className="gauge__caption">
              <b>Así pensamos cada curso:</b> ni tan básico que se quede corto, ni tan
              avanzado que pierda a quien empieza. Justo al punto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
