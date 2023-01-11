const mongoose = require('mongoose');

// 6. Schema 생성
const userSchema = new mongoose.Schema({
    name: String,
    data: Object,
});

module.exports = mongoose.model('User', userSchema);