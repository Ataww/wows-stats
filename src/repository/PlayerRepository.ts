import { AxiosRequestConfig } from "axios";
import { ApiResponse, BaseApiResponse, IdIndexedData } from "../domain/ApiResponse";
import PlayerAccount from "../domain/PlayerAccount";
import { EuClient, isErrorReponse } from "./ApiClient";

export async function getPlayerProfile(
  id: number,
  axiosOptions?: AxiosRequestConfig
): Promise<ApiResponse<IdIndexedData<PlayerAccount>>> {
  const response = await EuClient.queryApi(
    "wows/account/info",
    `&account_id=${id}`,
    axiosOptions
  );
  if (isErrorReponse(response)) {
    throw new Error(
      `No player found: ${response.error.message} - ${response.error.field}:${
        response.error.value
      }`
    );
  }
  return response as ApiResponse<IdIndexedData<PlayerAccount>>;
}

export async function findPlayer(
  name: string,
  axiosOptions?: AxiosRequestConfig
): Promise<ApiResponse<IdIndexedData<PlayerAccount>>> {
  const response: BaseApiResponse = await EuClient.queryApi(
    "wows/account/list",
    `&search=${name}&type=exact`,
    axiosOptions
  );
  if (isErrorReponse(response)) {
    throw new Error(
      `Invalid player search query: ${response.error.message} - ${
        response.error.field
      }:${response.error.value}`
    );
  }
  return response as ApiResponse<IdIndexedData<PlayerAccount>>;
}
