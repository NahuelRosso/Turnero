import axios, { AxiosResponse, AxiosError } from "axios";
import { IPaciente } from "../components/model/paciente";




class ApiServicePaciente {
    static getAllPaciente() {
        throw new Error("Method not implemented.");
    }
    private baseUrl: string;
  
    constructor(baseUrl: string) {
      this.baseUrl = baseUrl;
    }

public async createPaciente(paciente: IPaciente): Promise<any> {
    try {
      const response: AxiosResponse <string> = await axios.post(`${this.baseUrl}/registryPaciente`, paciente);
      return response.data;
    } catch (error) {
      throw new Error((error as AxiosError).message);
    }
  }
  public async getAllPaciente(): Promise<any> {
    try {
      const response: AxiosResponse<any> = await axios.get(`${this.baseUrl}/getAllPaciente`);
      return response.data;
    } catch (error) {
      throw new Error((error as AxiosError).message);
    }
  }
}
export default ApiServicePaciente;