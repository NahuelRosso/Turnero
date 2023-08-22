import axios, { AxiosError, AxiosResponse } from 'axios';
import { ILoginUser, IUser } from '../../../models/users';
class ApiService {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public async createUser(usuario: IUser): Promise<any> {
    try {
      const response: AxiosResponse <string> = await axios.post(`${this.baseUrl}/registry`, usuario);
      return response.data;
    } catch (error) {
      console.log(error)
      throw new Error((error as AxiosError).message);
    }
  }

  public async getAllUsers(): Promise<any> {
    try {
      const response: AxiosResponse<any> = await axios.get(`${this.baseUrl}/getAll`);
      return response.data;
    } catch (error) {
      throw new Error((error as AxiosError).message);
    }
  }

  async login(loginData: ILoginUser): Promise<ILoginUser> {
    try {
      const response: AxiosResponse<ILoginUser> = await axios.post(
        `${this.baseUrl}/login`,
        loginData
      );
      return response.data;
    } catch (error) {
      throw new Error('Error de inicio de sesión');
    }
  }
}

export default ApiService;
