import './Problem.css';

const ITEMS = [
  { n: '01', title: 'Contenido fragmentado', text: 'Videos, redes y cursos sueltos que no se conectan entre sí ni siguen un camino de aprendizaje real.' },
  { n: '02', title: 'Ninguna forma clara de confiar', text: 'Es difícil distinguir a alguien con oficio real de un tutorial improvisado.' },
  { n: '03', title: 'Plataformas que no son para gastronomía', text: 'Compites por atención contra miles de categorías que no tienen nada que ver con cocina.' },
  { n: '04', title: 'Poco camino para monetizar el oficio', text: 'Chefs, reposteros y baristas con años de experiencia no tienen dónde convertir ese conocimiento en ingresos.' },
];

export default function Problem() {
  return (
    <section className="section light" id="problema">
      <div className="wrap problema__grid">
        <div>
          <span className="eyebrow">El problema</span>
          <h2 style={{ marginTop: 16 }}>Aprender cocina en internet está disperso</h2>
          <p style={{ marginTop: 18, color: 'rgba(23,17,13,.68)', maxWidth: '38ch' }}>
            Entre videos sueltos, redes sociales y plataformas genéricas, es difícil saber
            en quién confiar — y quien sabe cocinar no siempre sabe cómo convertir eso en ingresos.
          </p>
        </div>
        <ul className="problema__list">
          {ITEMS.map((item) => (
            <li key={item.n}>
              <span className="n">{item.n}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
