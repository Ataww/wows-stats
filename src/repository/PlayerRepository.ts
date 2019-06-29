import axios, { AxiosRequestConfig } from "axios";
import { ApiResponse, IdIndexedData } from "../domain/ApiResponse";
import PlayerAccount from "../domain/PlayerAccount";

export async function getPlayerProfile(
  id: number
): Promise<ApiResponse<{ [id: number]: PlayerAccount }>> {
  const response = await axios.get(
    `https://api.worldofwarships.eu/wows/account/info/?application_id=${
      process.env.REACT_APP_WG_APP_ID
    }&account_id=${id}`
  );
  return response.data;
}

export async function findPlayer(
  name: string,
  axiosOptions?: AxiosRequestConfig
): Promise<ApiResponse<IdIndexedData<PlayerAccount>>> {
  const response = await axios.get(
    `https://api.worldofwarships.eu/wows/account/list/?application_id=${
      process.env.REACT_APP_WG_APP_ID
    }&search=${name}&type=exact`,
    axiosOptions
  );
  return response.data;
}
