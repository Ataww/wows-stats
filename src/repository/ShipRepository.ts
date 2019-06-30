import { AxiosRequestConfig } from "axios";
import { ApiResponse, IdIndexedData } from "../domain/ApiResponse";
import Warship from "../domain/Ship";
import { EuClient, isErrorReponse } from "./ApiClient";

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

  const response = await EuClient.queryApi(
    "wows/encyclopedia/ships",
    fields.join(""),
    axiosOptions
  );
  if (isErrorReponse(response)) {
    throw new Error(
      `${response.error.code} - Could not fetch ships information: ${
        response.error.message
      }`
    );
  }

  return response as ApiResponse<IdIndexedData<Warship>>;
}
