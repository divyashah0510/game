import User from "@/models/User";
import connectDB from "@/middleware/mongoose";

const handler = async (req, res) => {
  if (req.method === "POST") {
    console.log(req.body);
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      if (
        req.body.email === user.email &&
        req.body.password === user.password
      ) {
        res
          .status(200)
          .json({
            success: "Success User created!",
            email: user.email,
            name: user.name,
          });
      }
    }
  } else {
    res.status(400).json({ error: "This method is not allowed!" });
  }
};

export default connectDB(handler);
