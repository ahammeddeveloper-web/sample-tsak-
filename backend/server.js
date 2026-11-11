const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const productRoutes = require('./routes/productRoutes');

const app = express(); // app declare cheythathinu shesham cors use cheyyanam - munpu cheytha CORS bug aavarthikkarutu

app.use(cors()); // frontend (5173) - backend (3001) requests allow cheyyan
app.use(express.json()); // JSON body parse cheyyan

// routes
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log('MongoDB connection error:', err));