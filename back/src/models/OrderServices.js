const mongoose = require('mongoose');

const OrderServicesSchema = new mongoose.Schema({
    
    patient: String,
    doctor: String,
    healthPlan: String,
    collectPost: String,
    exam: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exam'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }



});

module.exports = mongoose.model('OrderServices', OrderServicesSchema);