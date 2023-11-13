export interface IUser {
    id: string;
    name: string;
    surname: string;
    password: string;
    confirmPassword: string;
    role: string;
    image: any;
    address: string;
    gender: string;
    phone: string;
    email:string;
  }
  
  export type ILoginUser = Pick<IUser, "email" | "password"|"id">;
  
