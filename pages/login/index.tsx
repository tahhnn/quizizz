import banner from "../../public/banner/auth/banner.png";

import LoginForm from "@/components/Modules/Login/LoginForm";
import RegisterForm from "@/components/Modules/Register/RegisterForm";

import authService from "@/services/auth.service";
import { useGlobalContext } from "@/hooks/useGlobalContext";

const Login = () => {
  const { variant, toggleVariant } = useGlobalContext();

  const handleGoogleSignIn = async () => {
    try {
      await authService.SignInOAuth("google");
    } catch (error) {
      console.error("Error sign in:", error);
    }
  };

  return (
    <div className="container-fluid">
      <div className="app__signup">
        <div className="app__signup--content">
          <div className="">
            <div className="app__signup--content-title">
              {variant === "LOGIN" ? "Sign in" : "Sign up"} to Quizizz
            </div>
            <div className="app__signup--content-form">
              {variant === "LOGIN" ? <LoginForm /> : <RegisterForm />}
            </div>

            <div className="app__signup--content-socialite">
              <div className="app__signup--content-socialite-title">
                {" "}
                <span className=""> or continue with</span>
              </div>
              <div
                onClick={handleGoogleSignIn}
                className="app__signup--content-socialite-icon"
              >
                <img
                  src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-pks9lbdv.png"
                  alt=""
                />
                <span className="">Google</span>
              </div>
            </div>
          </div>
          <div className="app__signup--content-last-block">
            <span className="">
              {variant === "LOGIN"
                ? "New to Quizizz ?"
                : "Have you an account ?"}
            </span>
            <div onClick={toggleVariant} className="cursor-pointer">
              {variant === "LOGIN" ? "Sign up" : "Sign in"}
            </div>
          </div>
        </div>
        <div className="app__signup--banner">
          <img src={banner.src} alt="" />
          <div className="app__signup--banner-description">
            <span className="">Teachers love us</span>
            <span className="">
              Join over 200 million educators and learners on Quizizz
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
