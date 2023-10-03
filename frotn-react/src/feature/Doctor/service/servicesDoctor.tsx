import axios, { AxiosResponse, AxiosError } from "axios";
import { IDoctor } from "../model/doctor.model";

class ApiServiceDoctor {
  static getAllDoctor() {
      throw new Error("Method not implemented.");
  }
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }
public async createDoctor(doctor: IDoctor): Promise<any> {
    try {
      const response: AxiosResponse <string> = await axios.post(`${this.baseUrl}/creatDoctor`, doctor);
      return response.data;
    } catch (error) {
      throw new Error((error as AxiosError).message);
    }
  }
  public async getAllDoctor(): Promise<any> {
    try {
      const response: AxiosResponse<any> = await axios.get(`${this.baseUrl}/getAllDoctor`);
      return response.data;
    } catch (error) {
      throw new Error((error as AxiosError).message);
    }
  }
}
export default ApiServiceDoctor;