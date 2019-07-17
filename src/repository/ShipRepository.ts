import { AxiosRequestConfig } from "axios";
import { Left } from "monet";
import { IdIndexedData } from "../domain/ApiResponse";
import Warship from "../domain/Ship";
import { EitherApiResponse, EuClient } from "./ApiClient";
import { PWarships } from "../search";
import { formatOptions } from "./util";

/**
 *
 * @param search
 */
export async function getShips(
  search: PWarships,
  axiosOptions: AxiosRequestConfig
) {

  const response: EitherApiResponse<
    IdIndexedData<Warship>
  > = await EuClient.queryApi(
    "wows/encyclopedia/ships",
    formatOptions(search,"&"),
    axiosOptions
  );
  return response.catchMap(({ error }) =>
    Left(`${error.code} - Could not fetch ships information: ${error.message}`)
  );
}
