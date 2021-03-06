const mongoose = require("mongoose");

const objSchema = mongoose.Schema(
  {
    rough_id: {
      type: mongoose.ObjectId,
      ref: "Rough",
      required: true,
    },
    office_total_carat: Number,
    office_total_piece: Number,
    office_assigne_name: String,
    assign_date: Date,
    return_date: Date,
    carat: Number,
    total_packet: Number,
    copyCarat: Number,
    packetNo: Number,
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Office", objSchema);
