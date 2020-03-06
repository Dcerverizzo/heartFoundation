const mongoose = require('mongoose');

const ExamSchema = new mongoose.Schema({
    description: String,
    price: Number,
});

module.exports = mongoose.model('Exam', ExamSchema);