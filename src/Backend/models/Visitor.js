const mongoose = require('mongoose');

const visitorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  visitorType: { type: String, required: true },
  employeeToMeet: { type: String },
  meetingPurpose: { type: String },
  numberOfMembers: { type: Number },
  meetDate: { type: Date },
  meetingRequirements: {
    projector: { type: Boolean, default: false },
    whiteboard: { type: Boolean, default: false },
    refreshments: { type: Boolean, default: false },
  },
  age: { type: Number },
  department: { type: String },
  role: { type: String },
  meetingStatus: { type: String, default: 'Pending' },
  feedback: { type: String },
  timeOut: { type: String },
});

module.exports = mongoose.model('Visitor', visitorSchema);
