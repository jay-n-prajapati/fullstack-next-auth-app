import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  verifyEmailToken: String,
  verifyEmailTokenExpiry: Date,
  changePasswordToken: String,
  changePasswordTokenExpiry: Date,
});

// we have to connect every time while hitting any endpoint so if model is already created then we will directly use it else we create it.
export const User =
  mongoose.models.users || mongoose.model("users", userSchema);
