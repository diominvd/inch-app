const express = require('express');
const cors = require('cors');
const database = require('./src/config/database.js');

const app = express();
app.use(cors());
app.use(express.json());

const getRoutes = require('./src/routes/routes.get.js');
const postRoutes = require('./src/routes/routes.post.js');

app.use('/api/get', getRoutes);
app.use('/api/post', postRoutes) ;

// Test connection to database.
database.query('SELECT NOW()', (error, result) => {
  if (error) {
    console.error('Error connecting to the database', error.stack);
  } else {
    console.log('Connected to the database:', result.rows);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});