import Joi from "joi";

import { email_regex, name_regex, password_regex } from "@/utils/pattern";
import { messageValidate } from "@/utils/messageValidate";

export const schemaRegister = Joi.object({
  name: Joi.string().pattern(new RegExp(name_regex)).required().messages({
    "string.empty": messageValidate["name.required"],
    "string.pattern.base": messageValidate["name.regex"],
    "any.required": messageValidate["name.required"],
  }),
  email: Joi.string().pattern(new RegExp(email_regex)).required().messages({
    "string.empty": messageValidate["email.required"],
    "string.pattern.base": messageValidate["email.regex"],
    "any.required": messageValidate["email.required"],
  }),
  password: Joi.string()
    .pattern(new RegExp(password_regex))
    .required()
    .messages({
      "any.required": messageValidate["password.required"],
      "string.empty": messageValidate["password.required"],
      "string.pattern.base": messageValidate["password.regex"],
    }),
  confirmPassword: Joi.string()
    .pattern(new RegExp(password_regex))
    .equal(Joi.ref("password"))
    .required()
    .messages({
      "any.only": messageValidate["confirmPassword.match"],
      "string.empty": messageValidate["password.required"],
      "any.required": messageValidate["password.required"],
      "string.pattern.base": messageValidate["password.regex"],
    }),
});
