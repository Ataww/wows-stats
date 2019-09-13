import { AxiosRequestConfig } from "axios";
import { Either, Left, Right } from "monet";
import {
  ApiResponse,
  ErrorApiResponse,
  IdIndexedData
} from "../domain/ApiResponse";
import { EitherApiResponse, EuClient } from "./ApiClient";
import { PersonalData } from "../domain/account";
import { formatOptions } from "./util";
import { AccountSearch } from "../search/account";

export async function getPlayerProfile(
  id: number,
  axiosOptions?: AxiosRequestConfig
) {
  const response: Either<
    ErrorApiResponse,
    ApiResponse<IdIndexedData<PersonalData>>
  > = await EuClient.queryApi(
    "account/info",
    formatOptions({ account_id: id }),
    axiosOptions
  );
  return response.catchMap(({ error }) =>
    Left(`No player found: ${error.message} - ${error.field}:${error.value}`)
  );
}

/**
 * Fetch a list of players. See https://developers.wargaming.net/reference/all/wows/account/list/
 * @param parameters The query parameters
 * @param axiosOptions Optional parameters for axios
 */
export async function findPlayers(
  parameters: AccountSearch,
  axiosOptions?: AxiosRequestConfig
): Promise<Either<string, ApiResponse<IdIndexedData<PersonalData>>>> {
  const response: EitherApiResponse<
    IdIndexedData<PersonalData>
  > = await EuClient.queryApi(
    "account/list",
    formatOptions(parameters),
    axiosOptions
  );
  return response
    .catchMap(({ error }) =>
      Left(
        `Invalid player search query: ${error.message} - ${error.field}:${error.value}`
      )
    )
    .flatMap(val => {
      if (val.meta.count === 0) {
        return Left(`No player found with name ${parameters.search}`);
      }
      return Right(val);
    });
}
