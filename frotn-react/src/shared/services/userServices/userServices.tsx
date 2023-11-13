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

  async login(loginData: ILoginUser): Promise<string> {
    try {
      const response: AxiosResponse<{ token: string }> = await axios.post(`${this.baseUrl}/login`, loginData);
      const token = response.data.token;

      if (!token) {
        console.error('No hay Token');
        throw new Error('No hay Token');
      }

      return token;
    } catch (error) {
      console.error('Error de inicio de sesión:', error);

      if (error instanceof Error) {
        console.error('Mensaje de error:', error.message);
      }

      throw error;
    }
  }

  public setAuthToken(token: string): void {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
  public clearAuthToken(): void {
    delete axios.defaults.headers.common['Authorization'];
  }
  logout(): void {
    // Limpiar el token en localStorage u otras acciones necesarias
    localStorage.removeItem('token');
  }
}

export default ApiService;
