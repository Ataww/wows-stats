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

export async function findPlayer(
  name: string,
  axiosOptions?: AxiosRequestConfig
): Promise<Either<string, ApiResponse<IdIndexedData<PersonalData>>>> {
  const response: EitherApiResponse<
    IdIndexedData<PersonalData>
  > = await EuClient.queryApi(
    "account/list",
    formatOptions({ search: name, type: "exact" }),
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
        return Left(`No player found with name ${name}`);
      }
      return Right(val);
    });
}
