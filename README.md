# Al Punto

Plataforma de educación gastronómica: cursos certificados, cursos de comunidad,
instructores y certificación digital verificable.

## Estructura del repositorio

```
Al-Punto-PJ/
├── frontend/     → React + Vite (landing y app)
└── backend/      → Express + Supabase (API)
```

Frontend y backend están separados en carpetas independientes para
facilitar el despliegue en Render como dos servicios distintos
(o el front como Static Site y el back como Web Service).

## Frontend

```bash
cd frontend
npm install
npm run dev
```

Variables de entorno (`frontend/.env`, ver `.env.example`):

- `VITE_API_URL` → URL del backend (ej. `http://localhost:4000` en local)

## Backend

```bash
cd backend
npm install
npm run dev   # o: node server.js
```

Variables de entorno (`backend/.env`, ver `.env.example`):

- `PORT` → puerto del servidor (4000 por defecto)
- `SUPABASE_URL` → URL del proyecto de Supabase
- `SUPABASE_KEY` → API key de Supabase

### Tabla en Supabase

```sql
create table waitlist (
  id uuid primary key default gen_random_uuid(),
  nombre text not null,
  email text not null,
  mensaje text,
  role text not null,
  created_at timestamp with time zone default now()
);
```

## Despliegue en Render

- **Backend**: Web Service, root directory `backend`, build `npm install`,
  start `node server.js`. Agregar variables `SUPABASE_URL` y `SUPABASE_KEY`.
- **Frontend**: Static Site, root directory `frontend`, build `npm install && npm run build`,
  publish directory `dist`. Agregar variable `VITE_API_URL` apuntando a la URL
  pública del backend en Render.

## Identidad visual

- Logo: llama + punto
- Paleta: carbón `#232323`, crema `#F7F1E7`, naranja `#E8792F`, rojo `#C43A2F`, verde `#4F7A5A`
- Tipografías: Fraunces (display), Manrope (cuerpo), JetBrains Mono (mono/datos)
