import { useState } from 'react';
import axios from 'axios';
import './WaitlistForm.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

const ESPECIALIDADES = [
  { value: 'cocina', label: 'Cocina' },
  { value: 'reposteria', label: 'Repostería' },
  { value: 'panaderia', label: 'Panadería' },
  { value: 'cafe', label: 'Café y bebidas' },
  { value: 'emprendimiento', label: 'Emprendimiento gastronómico' },
  { value: 'otro', label: 'Otro' },
];

export default function WaitlistForm() {
  const [role, setRole] = useState('estudiante');
  const [form, setForm] = useState({ nombre: '', email: '', especialidad: 'cocina' });
  const [status, setStatus] = useState('idle'); // idle | sending | ok | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const payload = {
      nombre: form.nombre,
      email: form.email,
      role,
      mensaje: role === 'instructor' ? `Especialidad: ${form.especialidad}` : null,
    };

    try {
      await axios.post(`${API_URL}/api/waitlist`, payload);
      setStatus('ok');
      setForm({ nombre: '', email: '', especialidad: 'cocina' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section className="section join" id="unirme">
      <div className="wrap join__inner">
        <span className="eyebrow">Fase 0 · Validación</span>
        <h2 style={{ marginTop: 16 }}>Sé parte de la primera lista</h2>
        <p className="join__sub">
          Todavía no lanzamos. Estamos midiendo interés real antes de construir.
          Dejanos tu correo y te avisamos apenas abramos cupos.
        </p>

        <div className="roleToggle" role="tablist" aria-label="Quiero unirme como">
          <button
            type="button"
            className={role === 'estudiante' ? 'is-active' : ''}
            onClick={() => setRole('estudiante')}
          >
            Quiero aprender
          </button>
          <button
            type="button"
            className={role === 'instructor' ? 'is-active' : ''}
            onClick={() => setRole('instructor')}
          >
            Quiero enseñar
          </button>
        </div>

        <form className="joinForm" onSubmit={handleSubmit} autoComplete="off">
          <div className="field">
            <label htmlFor="nombre">Nombre</label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              placeholder="Tu nombre"
              value={form.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="email">Correo</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="tucorreo@ejemplo.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          {role === 'instructor' && (
            <div className="field field--especialidad is-visible">
              <label htmlFor="especialidad">Especialidad</label>
              <select id="especialidad" name="especialidad" value={form.especialidad} onChange={handleChange}>
                {ESPECIALIDADES.map((op) => (
                  <option key={op.value} value={op.value}>{op.label}</option>
                ))}
              </select>
            </div>
          )}

          <button type="submit" className="btn btn--solid" disabled={status === 'sending'}>
            {status === 'sending' && <span className="spinner" />}
            <span className="btnLabel">
              {role === 'instructor' ? 'Quiero enseñar' : 'Unirme a la lista'}
            </span>
          </button>

          {status === 'ok' && (
            <div className="formMsg is-ok" role="status">¡Listo! Te avisamos apenas abramos cupos.</div>
          )}
          {status === 'error' && (
            <div className="formMsg is-err" role="status">No pudimos enviar tu registro. Intentá de nuevo en un momento.</div>
          )}
        </form>

        <p className="join__count">Objetivo de esta fase: <b>100+</b> interesados y <b>5+</b> instructores.</p>
      </div>
    </section>
  );
}
