const { validationResult } = require("express-validator");

const User = require("../models/auth");

const registerUser = async (req, res, next) => {
  let resp;

  try {
    const validationError = validationResult(req);

    const email = req.body.email;
    let password = req.body.password;

    const user = new User({ email, password });
    const result = await user.save();

    if (!result) {
      resp = { status: "error", message: "No result dound", data: {} };

      res.send(resp);
    } else {
      resp = {
        status: "success",
        message: "Registration done",
        data: { userId: result._id },
      };

      res.send(resp);
    }
  } catch (err) {
    next(err);
  }
};

const loginUser = async (req, res, next) => {
  let resp;

  try {
    const email = req.body.email;
    const password = req.body.password;

    const user = await User.findOne({ email });

    if (user) {
      if (password === user.password) {
        resp = { status: "success", message: "Logged in.", data: {} };
      } else {
        resp = { status: "error", message: "Credentials mismatch", data: {} };
      }
      res.send(resp);
    } else {
      res.send("User not found");
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { registerUser, loginUser };
