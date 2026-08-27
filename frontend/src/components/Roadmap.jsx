import './Roadmap.css';

const PHASES = [
  { n: '0', title: 'Validación', text: 'Landing, entrevistas y primeras señales de interés real.', now: true },
  { n: '1', title: 'Instructores', text: 'Primeros 3–5 instructores fundadores.' },
  { n: '2', title: 'Contenido', text: '5–10 cursos listos para lanzar.' },
  { n: '3', title: 'MVP', text: 'Compra, aprendizaje, progreso y certificados.' },
  { n: '4', title: 'Lanzamiento', text: 'Primeros usuarios y primera venta real.' },
  { n: '5', title: 'Escalamiento', text: 'Más categorías, suscripción y alianzas.' },
];

export default function Roadmap() {
  return (
    <section className="section light" id="roadmap">
      <div className="wrap">
        <span className="eyebrow">Hoja de ruta</span>
        <h2 style={{ marginTop: 16, fontSize: 'clamp(28px,3.6vw,42px)', maxWidth: '18ch' }}>
          Primero validar, después escalar
        </h2>

        <div className="roadmap">
          <div className="roadmap__track">
            {PHASES.map((p) => (
              <div className={`rm ${p.now ? 'is-now' : ''}`} key={p.n}>
                <div className="rm__dot">{p.n}</div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
