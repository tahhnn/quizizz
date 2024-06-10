import Joi from "joi";

import { email_regex, password_regex } from "@/utils/pattern";
import { messageValidate } from "@/utils/messageValidate";

export const schema = Joi.object({
  email: Joi.string().pattern(email_regex).required().messages({
    "string.base": "Email must be a string",
    "string.empty": messageValidate["email.required"],
    "string.pattern.base": messageValidate["email.regex"],
  }),
  password: Joi.string().pattern(password_regex).required().messages({
    "string.base": "Password must be a string",
    "string.empty": messageValidate["password.required"],
    "string.pattern.base": messageValidate["password.regex"],
  }),
});
