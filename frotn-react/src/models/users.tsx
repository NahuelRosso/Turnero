export interface IUser {
    HomeAddress: string;
    id: string;
    name: string;
    surname: string;
    user: string;
    password: string;
    confirmPassword: string;
    role: string;
    image: any;
    address: string;
    gender: string;
    phone: string;
  }
  
  export type ILoginUser = Pick<IUser, "user" | "password">;
  
