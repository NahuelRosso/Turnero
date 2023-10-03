import axios, { AxiosResponse, AxiosError } from "axios";
import { ITurno } from "../components/model/turno.model";




class ApiServiceTurno {
    private baseUrl: string;
  
    constructor(baseUrl: string) {
      this.baseUrl = baseUrl;
    }

public async createTurno(turno: ITurno): Promise<any> {
    try {
      const response: AxiosResponse <string> = await axios.post(`${this.baseUrl}/registryturno`, turno);
      return response.data;
    } catch (error) {
      throw new Error((error as AxiosError).message);
    }
  }
  public async getAllTurno(): Promise<any> {
    try {
      const response: AxiosResponse<any> = await axios.get(`${this.baseUrl}/getAllturno`);
      return response.data;
    } catch (error) {
      throw new Error((error as AxiosError).message);
    }
  }
}
export default ApiServiceTurno;