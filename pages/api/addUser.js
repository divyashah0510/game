import User from "@/models/User";
import connectDB from "@/middleware/mongoose";

const handler = async (req, res) => {
  if (req.method === "POST") {
    console.log(req.body);
    for (let i = 0; i < req.body.length; i++) {
      // let user = new User({
      //   username: req.body[i].username,
      //   email: req.body[i].email,
      //   password: req.body[i].password,
      // });
      let user = new User(req.body)
      user.save()
    }
    res.status(200).json({ success: "Success User created!" });
  } else {
    res.status(400).json({ error: "This method is not allowed!" });
  }
};

export default connectDB(handler);
