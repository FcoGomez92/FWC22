import dbConnect from "../../lib/dbConnect";
import Wallet from "../../Models/Wallet";

export default async function addWallet(req, res) {
  const { address } = req.body;
  const pattern = /^0x[a-fA-F0-9]{40}$/;
  const okAddress = pattern.test(address);
  if (!okAddress) {
    return res.status(400).json({
      status: "Error",
      message: "⛔️ Wallet doesn't fit the pattern.",
    });
  }
  await dbConnect();

  const lowerCaseAddress = address.toLowerCase();

  const existWallet = await Wallet.findById(lowerCaseAddress);

  if (existWallet) {
    return res.status(400).json({
      status: "Error",
      message: "🚫 Wallet already added.",
    });
  }

  const newWallet = new Wallet({
    _id: lowerCaseAddress,
    address: lowerCaseAddress,
  });
  try {
    await newWallet.save();
    return res.status(200).json({
      status: "ok",
      message: "🎉 Wallet succesfully added! 🎉",
    });
  } catch (err) {
    return res.status(400).json({
      status: "Error",
      message: err,
    });
  }
}
