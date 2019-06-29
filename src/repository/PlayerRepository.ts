import axios, { AxiosRequestConfig } from "axios";
import { ApiResponse } from "../domain/ApiResponse";
import PlayerAccount from "../domain/PlayerAccount";

export async function getPlayerProfile(id: number) {
  const response = (await axios.get(
    `https://api.worldofwarships.eu/wows/account/info/?application_id=${
      process.env.REACT_APP_WG_APP_ID
    }&account_id=${id}`
  )).data;
  return response.data;
}

export async function findPlayer(
  name: string,
  axiosOptions?: AxiosRequestConfig
) {
  const response: ApiResponse<PlayerAccount> = (await axios.get(
    `https://api.worldofwarships.eu/wows/account/list/?application_id=${
      process.env.REACT_APP_WG_APP_ID
    }&search=${name}&type=exact`,
    axiosOptions
  )).data;
  return response.data;
}
