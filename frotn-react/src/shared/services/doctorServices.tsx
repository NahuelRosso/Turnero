import axios, { AxiosError, AxiosResponse } from 'axios';
import { ILoginDoctor } from '../../models/doctors';
class ApiService {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public async createUser(Doctor: any): Promise<any> {
    try {
      const response: AxiosResponse <string> = await axios.post(`${this.baseUrl}/registry`, Doctor);
      return response.data;
    } catch (error) {
      throw new Error((error as AxiosError).message);
    }
  }

  public async getAll(): Promise<any> {
    try {
      const response: AxiosResponse<any> = await axios.get(`${this.baseUrl}/getAll`);
      return response.data;
    } catch (error) {
      throw new Error((error as AxiosError).message);
    }
  }

  async login(loginData: ILoginDoctor): Promise<ILoginDoctor> {
    try {
      const response: AxiosResponse<ILoginDoctor> = await axios.post(
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
