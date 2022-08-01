const {
    Schema,
    model
} = require('mongoose')
const studSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
lastName: {
    type: String,
    required: true
},
Group: {
    type: String,
    required: true
},
Course: {
    type: String,
    required: true
},
phoneNumber: {
    type: Number,
    required: true
},
Score: {
    type: Number,
    default: 0
}
})
module.exports = model('student', studSchema)