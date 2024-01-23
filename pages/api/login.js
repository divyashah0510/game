import User from "../../models/User";
import connectDB from "../../middleware/mongoose";
import CryptoJS from "crypto-js";

const handler = async (req, res) => {
  if (req.method === "POST") {
    console.log(req.body);
    let user = await User.findOne({ email: req.body.email });
    const bytes = CryptoJS.AES.decrypt(user.password, "secret123");
    let decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
    if (user) {
      if (
        req.body.email == user.email &&
        req.body.password == decryptedPassword
      ) {
        res
          .status(200)
          .json({ success: true, email: user.email, username: user.username });
      } else {
        res.status(200).json({ success: false, error: "Invalid credentials" });
      }
    } else {
      res.status(200).json({ success: false, error: "No user Found" });
    }
  } else {
    res.status(400).json({ error: "This method is not allowed!" });
  }
};

export default connectDB(handler);
