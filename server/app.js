// src/app.js
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const bfhlRoutes = require('./routes/bfhlRoutes');

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('tiny'))

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Request parsing - make sure this comes before routes
app.use(express.json({ 
    limit: '10mb',
    strict: true // Enforce strict JSON parsing
  }));

app.use(bodyParser.json());

// Routes
app.use('/', bfhlRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});



const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
