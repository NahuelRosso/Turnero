import axios, { AxiosResponse, AxiosError } from "axios";
import { IPaciente } from "../model/paciente.model";



class ApiServicePaciente {
    private baseUrl: string;
  
    constructor(baseUrl: string) {
      this.baseUrl = baseUrl;
    }

public async createPaciente(doctor: IPaciente): Promise<any> {
    try {
      const response: AxiosResponse <string> = await axios.post(`${this.baseUrl}/registryPaciente`, doctor);
      return response.data;
    } catch (error) {
      throw new Error((error as AxiosError).message);
    }
  }
  public async getAllDoctor(): Promise<any> {
    try {
      const response: AxiosResponse<any> = await axios.get(`${this.baseUrl}/getAll`);
      return response.data;
    } catch (error) {
      throw new Error((error as AxiosError).message);
    }
  }
}
export default ApiServicePaciente;