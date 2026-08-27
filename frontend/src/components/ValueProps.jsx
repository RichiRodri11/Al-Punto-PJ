import './ValueProps.css';

const Check = () => (
  <svg viewBox="0 0 20 20" fill="none">
    <path d="M4 10.5 8 14.5 16 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function ValueProps() {
  return (
    <section className="section dark">
      <div className="wrap">
        <span className="eyebrow">Propuesta de valor</span>
        <h2 style={{ marginTop: 16, fontSize: 'clamp(28px,3.6vw,42px)', maxWidth: '20ch' }}>
          Un solo lugar, dos formas de crecer
        </h2>

        <div className="cards">
          <div className="card">
            <div className="card__icon">01</div>
            <h3>Para estudiantes</h3>
            <p>Aprendé a tu ritmo, desde el celular o el computador, con contenido pensado solo para gastronomía.</p>
            <ul>
              <li><Check /> Cursos organizados por nivel y categoría</li>
              <li><Check /> Seguimiento de tu progreso</li>
              <li><Check /> Certificado verificable al aprobar</li>
              <li><Check /> Acceso directo a quienes ya viven de esto</li>
            </ul>
          </div>

          <div className="card card--rojo">
            <div className="card__icon">02</div>
            <h3>Para instructores</h3>
            <p>Convertí tu experiencia en cursos digitales y construí una reputación verificable.</p>
            <ul>
              <li><Check /> Herramientas para estructurar y publicar</li>
              <li><Check /> Ingresos por cada venta de tu curso</li>
              <li><Check /> Perfil con valoraciones y trayectoria</li>
              <li><Check /> Camino claro hacia la certificación</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
