const express = require("express");
const { body } = require("express-validator");

const { registerUser, loginUser, isUserExist } = require("../controllers/auth");

const router = express.Router();

// POST /auth/
router.post(
  "/",
  [
    body("email")
      .trim()
      .isEmail()
      .custom((emailId) => {
        return isUserExist(emailId)
          .then((status) => {
            if (status) {
              return Promise.reject("User already exist.");
            }
          })
          .catch((error) => {
            return Promise.reject(error);
          });
      })
      .normalizeEmail(),
    body("password")
      .trim()
      .isLength({ min: 5 })
      .withMessage("Please enter at least 5 characters of password."),
    body("confirm_password")
      .trim()
      .custom((value, { req }) => {
        if (value != req.body.password) {
          return Promise.reject("Password mismatch.");
        }
        return true;
      }),
  ],
  registerUser
);

// POST /auth/login
router.post("/login", loginUser);

module.exports = router;
