const express = require('express');
const connectDB = require('./database/connectDB');
const visitorRoutes = require('./routes/visitorRoutes');

const app = express();

// Connect to MongoDB
connectDB('mongodb+srv://sachinpal:sachinpal59921@visitormanagement.ppdfx.mongodb.net/?retryWrites=true&w=majority&appName=VisitorManagement');


app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.use('/api/visitors', visitorRoutes);

app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({ message: 'Internal Server Error' });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
