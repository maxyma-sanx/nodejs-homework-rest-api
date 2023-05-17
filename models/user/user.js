const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../../helpers");

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const SUBSCRIPTION = ["starter", "pro", "business"];

const userSchema = new Schema(
  {
    password: {
      type: String,
      minlength: 6,
      required: [true, "Password is required"],
    },
    email: {
      type: String,
      match: emailRegex,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      default: "starter",
      validate: {
        validator: (v) => SUBSCRIPTION.includes(v),
        message: ({ value }) =>
          `'${value}' is not a valid type! Choose one of ${SUBSCRIPTION}`,
      },
    },
    token: {
      type: String,
      default: null,
    },
    avatarURL: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

const registerSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().pattern(emailRegex).required(),
  subscription: Joi.string().valid(...SUBSCRIPTION),
});

const loginSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().pattern(emailRegex).required(),
  subscription: Joi.string().valid(...SUBSCRIPTION),
});

const subscriptionSchema = Joi.object({
  subscription: Joi.string()
    .valid(...SUBSCRIPTION)
    .required(),
});

const userSchemas = { registerSchema, loginSchema, subscriptionSchema };

const User = model("user", userSchema);

module.exports = { User, userSchemas };
