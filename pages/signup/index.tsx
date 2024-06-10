import BaseInputAuth from "@/components/Form/BaseInputAuth";
import { useForm } from "react-hook-form";
import { schemaRegister } from "@/components/Form/Schemas/auth/register.schema";
import { joiResolver } from "@hookform/resolvers/joi";
import authService from "@/services/auth.service";
import { useState } from "react";
import banner from "../../public/banner/auth/banner.png";
import Link from "next/link";
import { IdcardFilled, LockFilled, MailFilled } from "@ant-design/icons";
import ButtonSubmitRegister from "@/components/Button/ButtonSubmitRegister";
import { messageValidate } from "@/utils/messageValidate";
import {  notification } from 'antd';
import Notification from "@/components/Notification/Notification";
import Router, { useRouter } from 'next/router'
import axios from "axios";
export default function SignUp() {
  const router = useRouter();
  const [api, contextHolder] = notification.useNotification();
  const [loadingRegister, setLoadingRegister] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
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
      const response = await authService.SignUp(payload);
      api.open(Notification('Đăng ký thành công', messageValidate['register.success']));
      Router.push('/login')
   
    } catch (error) {
         api.open(Notification('Đăng ký thất bại', messageValidate['register.error.unique.email'], 'error'));
    } finally {
      setLoadingRegister(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const response = await axios.get("/api/auth/signin-google");
      if (response.status === 200) {
        const data = response.data;
        router.push(data.url);
      } else {
        console.error("Failed to sign in");
      }
    } catch (error) {
      console.error("Error sign in:", error);
    }
  };
  
  return (
    <>
      {contextHolder}
      <div className="container-fluid">
        <div className="app__signup">
          <div className="app__signup--content">
              <div className="">
              <div className="app__signup--content-title" >Sign up to Quizizz</div>
            <div className="app__signup--content-form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <BaseInputAuth
                  control={control}
                  title="Name"
                  name="name"
                  messageError={errors?.name?.message}
                  placeholder="Enter name"
                  type="text"
                  icon={<IdcardFilled />}
                />
                <BaseInputAuth
                  control={control}
                  title="Email"
                  name="email"
                  messageError={errors?.email?.message}
                  placeholder="Enter email"
                  type="email"
                  icon={<MailFilled />}
                />
                <BaseInputAuth
                  control={control}
                  title="Password"
                  name="password"
                  messageError={errors?.password?.message}
                  placeholder="Enter password"
                  type="password"
                  icon={<LockFilled />}
                />
                <BaseInputAuth
                  control={control}
                  title="Confirm password"
                  name="confirmPassword"
                  messageError={errors?.confirmPassword?.message}
                  placeholder="Enter confirm password"
                  type="password"
                  icon={<LockFilled />}
                />
                <ButtonSubmitRegister loading={loadingRegister}/>
               
              </form>
            </div>

            <div className="app__signup--content-socialite">
                  <div className="app__signup--content-socialite-title"> <span className=""> or continue with</span></div>
                  <div onClick={handleGoogleSignIn} className="app__signup--content-socialite-icon">
                         <img src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-pks9lbdv.png" alt="" />
                         <span  className="">Google</span>
                  </div>
            </div>
              </div>
              <div className="app__signup--content-last-block">
                    <span className="">Have you an account ?</span>
                    <Link href="/login"><div className="">Sign in</div></Link>
              </div>


          </div>
          <div className="app__signup--banner">
             
            <img src={banner.src} alt="" />
            <div className="app__signup--banner-description">
                <span className="">Teachers love us</span>
                <span className="">Join over 200 million educators and learners on Quizizz</span>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
