import mongoose from "mongoose";

const walletSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true, trim: true },
    address: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Wallet || mongoose.model("Wallet", walletSchema);
