import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { notification } from "antd";

import Notification from "@/components/Notification/Notification";
import { BaseButton, BaseInput } from "@/components/Base";

import { schemaRegister } from "./register.schema";
import authService from "@/services/auth.service";
import { messageValidate } from "@/utils/messageValidate";
import { IUser } from "@/types/auth";
import { useGlobalContext } from "@/hooks/useGlobalContext";

const RegisterForm = () => {
  const { toggleVariant } = useGlobalContext();
  const [api, contextHolder] = notification.useNotification();
  const [loadingRegister, setLoadingRegister] = useState<boolean>(false);
  const { control, handleSubmit, reset } = useForm<IUser>({
    resolver: joiResolver(schemaRegister),
  });

  const onSubmit = async (data: IUser) => {
    delete data.confirmPassword;

    const payload = {
      ...data,
      role: 1,
      loginType: 1,
    };

    try {
      setLoadingRegister(true);
      await authService.SignUp(payload);
      api.open(Notification("Đăng ký thành công", messageValidate["success"]));
      setTimeout(() => {
        reset();
        toggleVariant();
      }, 1500);
    } catch (error) {
      api.open(
        Notification(
          "Đăng ký thất bại",
          messageValidate["error.unique.email"],
          "error"
        )
      );
    } finally {
      setLoadingRegister(false);
    }
  };

  return (
    <>
      {contextHolder}
      <form onSubmit={handleSubmit(onSubmit)}>
        <BaseInput control={control} name="name" placeholder="Enter name" />
        <BaseInput
          type="email"
          control={control}
          name="email"
          placeholder="Enter email"
        />
        <BaseInput
          type="password"
          control={control}
          name="password"
          placeholder="Enter password"
        />
        <BaseInput
          type="password"
          control={control}
          name="confirmPassword"
          placeholder="Enter confirm password"
        />
        <BaseButton disabled={loadingRegister}>Register</BaseButton>
      </form>
    </>
  );
};

export default RegisterForm;
