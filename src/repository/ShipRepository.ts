import { AxiosRequestConfig } from "axios";
import { Left } from "monet";
import { IdIndexedData } from "../domain/ApiResponse";
import Warship from "../domain/Ship";
import { EitherApiResponse, EuClient } from "./ApiClient";

/**
 *
 * @param search
 */
export async function getShips(
  search: { [field in keyof Warship]?: any },
  axiosOptions: AxiosRequestConfig
) {
  const fields: string[] = [];
  for (const field in search) {
    fields.push(`&${field}=${search[field]}`);
  }

  const response: EitherApiResponse<
    IdIndexedData<Warship>
  > = await EuClient.queryApi(
    "wows/encyclopedia/ships",
    fields.join(""),
    axiosOptions
  );
  return response.catchMap(({ error }) =>
    Left(`${error.code} - Could not fetch ships information: ${error.message}`)
  );
}
