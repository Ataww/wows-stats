import axios, { AxiosRequestConfig } from "axios";
import { ApiResponse, IdIndexedData } from "../domain/ApiResponse";
import Warship from "../domain/Ship";

/**
 *
 * @param search
 */
export async function getShips(
  search: { [field in keyof Warship]?: any },
  axiosOptions: AxiosRequestConfig
): Promise<ApiResponse<IdIndexedData<Warship>>> {
  const fields: string[] = [];
  for (const field in search) {
    fields.push(`&${field}=${search[field]}`);
  }

  const response = await axios.get(
    `https://api.worldofwarships.eu/wows/encyclopedia/ships/?application_id=${
      process.env.REACT_APP_WG_APP_ID
    }${fields.join("")}`,
    axiosOptions
  );
  return response.data;
}
