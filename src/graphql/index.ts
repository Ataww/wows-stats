import axios, { AxiosInstance } from "axios";

class GraphClient {
  private client: AxiosInstance;

  constructor(private baseUrl: string) {
    this.client = axios.create({
      baseURL: baseUrl
    });
  }

  async query(request: any) {
    return await this.client.post("/graphql", request);
  }
}

export default new GraphClient("http://localhost:9090");
