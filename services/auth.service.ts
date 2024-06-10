import { Provider } from "@supabase/supabase-js";

import { axiosClient } from "@/api/axios.config";
import { IUser } from "@/types/auth";
import { supabase } from "@/utils/supabaseClient";

class AuthService {
  async SignUp(payload: IUser) {
    return await axiosClient.post("users", payload);
  }

  async SignIn(payload: any) {
    const { email, password } = payload;
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        return { error: error.message };
      }

      return { data };
    } catch (error) {
      console.error("Sign in error:", error);
      return { error: "Sign in failed" };
    }
  }

  async SignInOAuth(provider: Provider) {
    try {
      const redirectTo = `${process.env.NEXT_PUBLIC_REDIRECT_URL}/auth/callback`;

      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: { redirectTo },
      });

      if (error) {
        return { error: error.message };
      }
    } catch (error) {
      console.error(error);
      return { error: "Sign in failed" };
    }
  }
}
export default new AuthService();
