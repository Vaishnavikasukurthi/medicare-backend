const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId, ref: "user"
    },
    doctorId: {
        type: mongoose.Schema.Types.ObjectId, ref: "user"
    },
    appointmentDateTime: Date,
    symptoms: String,
    fees: Number,
    prescription: String,
    isDiagnosisDone: Boolean,
});

module.exports = mongoose.model("appointment", appointmentSchema);