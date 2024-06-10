import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { FiEye, FiEyeOff } from "react-icons/fi";

import { BaseButton, BaseInput } from "@/components/Base";

import { schema } from "./login.schema";
import authService from "@/services/auth.service";

type FormValues = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { control, handleSubmit } = useForm<FormValues>({
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: joiResolver(schema),
  });

  const onSubmit: SubmitHandler<FieldValues> = async (formData) => {
    try {
      const response = await authService.SignIn({
        email: formData.email,
        password: formData.password,
      });
      if (response) {
        console.log(response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BaseInput
        type="email"
        control={control}
        name="email"
        placeholder="Enter email"
      />
      <BaseInput
        id="password"
        type={showPassword ? "text" : "password"}
        control={control}
        name="password"
        placeholder="Enter password"
      >
        {showPassword ? <FiEyeOff /> : <FiEye />}
      </BaseInput>
      <input
        hidden
        type="checkbox"
        id="show-password"
        onChange={() => setShowPassword(!showPassword)}
      />

      <BaseButton className="w-[50%]">Login</BaseButton>
    </form>
  );
};

export default LoginForm;
