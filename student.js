const mongoose = require('mongoose');

// 6. Schema 생성
const studentSchema = new mongoose.Schema({
    name: String,
    address: String,
    age: Number,
});

module.exports = mongoose.model('Student', studentSchema);