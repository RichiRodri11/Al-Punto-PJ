require('dotenv').config();
const express = require('express');
const cors = require('cors');
const waitlistRoutes = require('./routes/waitlist');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ status: 'ok', service: 'Al Punto API' });
});

app.use('/api/waitlist', waitlistRoutes);

app.listen(PORT, () => {
  console.log(`Al Punto API corriendo en el puerto ${PORT}`);
});
