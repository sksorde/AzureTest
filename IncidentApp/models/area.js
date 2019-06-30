var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var areaSchema = new Schema({
    id: { type: Number, unique: true },
    area: { type: String, Required: 'Area cannot be left blank.' },
    location: { type: String, Required: 'Location cannot be left blank.' }
});

autoIncrement.initialize(mongoose.connection);
areaSchema.plugin(autoIncrement.plugin, { model: 'Area', field: 'id', startAt: 1, incrementBy: 1 });

var area = mongoose.model('area', areaSchema, 'area');
module.exports = area;