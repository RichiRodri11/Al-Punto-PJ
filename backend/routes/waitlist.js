// const express = require('express');
// const router = express.Router();
// const supabase = require('../config/supabase');

// // POST /api/waitlist
// router.post('/', async (req, res) => {
//   const { nombre, email, mensaje, role } = req.body;

//   if (!nombre || !email || !role) {
//     return res.status(400).json({ error: 'Nombre, email y role son requeridos' });
//   }

//   try {
//     const { data, error } = await supabase
//       .from('waitlist')
//       .insert([{ nombre, email, mensaje: mensaje || null, role }]);

//     if (error) throw error;

//     return res.status(201).json({ message: 'Registro guardado', data });
//   } catch (err) {
//     console.error('Error al guardar en waitlist:', err.message);
//     return res.status(500).json({ error: 'No se pudo guardar el registro' });
//   }
// });

// module.exports = router;
