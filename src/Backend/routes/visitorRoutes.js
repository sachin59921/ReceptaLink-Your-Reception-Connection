const express = require('express');
const Visitor = require('../models/Visitor');
const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const visitorData = req.body;
    const newVisitor = new Visitor(visitorData);
    await newVisitor.save();
    res.status(201).json({ message: 'Visitor registered successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error registering visitor' });
  }
});

router.get('/getVisitors', async (req, res) => {
  try {
    const { visitorType } = req.query;
    let visitors = [];

    if (visitorType) {
      visitors = await Visitor.find({ visitorType });
    } else {
      visitors = await Visitor.find(); 
    }

    res.status(200).json(visitors);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching visitors' });
  }
});

module.exports = router;
