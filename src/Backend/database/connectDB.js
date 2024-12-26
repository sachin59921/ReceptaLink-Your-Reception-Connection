const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = 'mongodb+srv://sachinpal:sachinpal59921@visitormanagement.ppdfx.mongodb.net/?retryWrites=true&w=majority&appName=VisitorManagement';
    
    await mongoose.connect(uri, {
      useNewUrlParser: true, 
      useUnifiedTopology: true
    });

    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
};

module.exports = connectDB;
