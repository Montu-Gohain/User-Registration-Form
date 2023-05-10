const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    // Required fields : Name , Age and Sex
    // Personal Details
    name: {
      type: String,
      required: true,
    },
    dobOrAge: {
      type: Date,
      validate: {
        validator: function (value) {
          // Check if the value is a valid date
          if (value instanceof Date && !isNaN(value)) {
            return true;
          }

          // Check if the value is a valid age
          const age = parseInt(value);
          const maxAge = 150; // Maximum age to prevent invalid inputs
          if (age > 0 && age < maxAge) {
            const current_year = new Date().getUTCFullYear();

            return true;
          }

          return false;
        },
        message: "Invalid date of birth or age",
      },
      required: true,
    },
    sex: {
      type: String,
      required: true,
    },
    mobile_no: {
      type: Number,
    },
    id_type: {
      type: String,
    },
    issued_id: {
      type: String,
    },
    // Contact Details
    gurdian_relation: {
      type: String,
    },
    gurdian_name: {
      type: String,
    },
    email: {
      type: String,
    },
    emergency_contact_no: {
      type: Number,
    },
    // Address Details
    address: {
      type: String,
    },
    state: {
      type: String,
    },
    city: {
      type: String,
    },
    country: {
      type: String,
    },
    pincode: {
      type: Number,
    },
    // Other Details
    occupation: {
      type: String,
    },
    religion: {
      type: String,
    },
    marital_status: {
      type: String,
    },
    nationality: {
      type: String,
    },
    blood_group: {
      type: String,
    },
  },
  { versionKey: false }
);

const user = mongoose.model("userinfo", UserSchema);
module.exports = user;
