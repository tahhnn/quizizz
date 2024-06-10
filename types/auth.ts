export interface IUser {
  id: string | number;
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
  googleId: string;
  loginType: number;
  avatar: string;
  role: number;
  rememberToken: string;
  createdAt: Date;
  updatedAt: Date;
}
