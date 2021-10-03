const mongoose = require('mongoose');

const menuSchema = mongoose.Schema({
    menu: { type: Array }
});

module.exports = mongoose.model('Menu', menuSchema);