export interface IDoctor {
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
  
  export type ILoginDoctor = Pick<IDoctor, "user" | "password">;
  
  