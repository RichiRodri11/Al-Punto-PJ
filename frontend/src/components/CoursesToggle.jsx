import { useState } from 'react';
import './CoursesToggle.css';

const PANELS = {
  certificado: {
    label: 'Certificados',
    badge: 'Revisado por Al Punto',
    badgeClass: 'badge--certificado',
    title: 'Formación con respaldo',
    text: 'Cursos que pasaron un proceso de revisión y cumplen criterios definidos por Al Punto. La certificación acredita que el curso fue completado y aprobado — no reemplaza un título profesional.',
    steps: [
      'Verificación de identidad y trayectoria del instructor',
      'Revisión de objetivos, estructura y materiales',
      'Evaluaciones o actividades de aprendizaje',
      'Aprobación del equipo de Al Punto y emisión del certificado',
    ],
  },
  comunidad: {
    label: 'Comunidad',
    badge: 'Abierto a todos',
    badgeClass: 'badge--comunidad',
    title: 'Conocimiento sin filtro',
    text: 'Cualquier persona puede proponer y publicar un curso siguiendo las reglas de la plataforma. Se identifican claramente como contenido de comunidad, sin certificación Al Punto.',
    steps: [
      'Publicás tu curso siguiendo la guía de calidad mínima',
      'Tu contenido queda etiquetado como "comunidad"',
      'Construís reputación con reseñas y estudiantes reales',
      'Con trayectoria, podés pedir revisión para pasar a certificado',
    ],
  },
};

export default function CoursesToggle() {
  const [active, setActive] = useState('certificado');
  const panel = PANELS[active];

  return (
    <section className="section light" id="cursos">
      <div className="wrap">
        <span className="eyebrow">Dos formas de aprender</span>
        <h2 style={{ marginTop: 16, fontSize: 'clamp(28px,3.6vw,42px)', maxWidth: '18ch' }}>
          Certificados o de comunidad — vos elegís
        </h2>

        <div className="toggle" role="tablist" aria-label="Tipo de curso">
          {Object.entries(PANELS).map(([key, p]) => (
            <button
              key={key}
              type="button"
              className={active === key ? 'is-active' : ''}
              role="tab"
              aria-selected={active === key}
              onClick={() => setActive(key)}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div className="toggle-panels">
          <div className="toggle-panel is-active">
            <div>
              <span className={`badge ${panel.badgeClass}`}>{panel.badge}</span>
              <h3>{panel.title}</h3>
              <p>{panel.text}</p>
            </div>
            <ol>
              {panel.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
