import { AxiosRequestConfig } from "axios";
import { Either, Left, Right } from "monet";
import { ApiResponse, ErrorApiResponse, IdIndexedData } from "../domain/ApiResponse";
import PlayerAccount from "../domain/PlayerAccount";
import { EitherApiResponse, EuClient } from "./ApiClient";

export async function getPlayerProfile(
  id: number,
  axiosOptions?: AxiosRequestConfig
) {
  const response: Either<
    ErrorApiResponse,
    ApiResponse<IdIndexedData<PlayerAccount>>
  > = await EuClient.queryApi(
    "wows/account/info",
    `&account_id=${id}`,
    axiosOptions
  );
  return response.catchMap(({ error }) =>
    Left(`No player found: ${error.message} - ${error.field}:${error.value}`)
  );
}

export async function findPlayer(
  name: string,
  axiosOptions?: AxiosRequestConfig
): Promise<Either<string, ApiResponse<IdIndexedData<PlayerAccount>>>> {
  const response: EitherApiResponse<
    IdIndexedData<PlayerAccount>
  > = await EuClient.queryApi(
    "wows/account/list",
    `&search=${name}&type=exact`,
    axiosOptions
  );
  return response
    .catchMap(({ error }) =>
      Left(
        `Invalid player search query: ${error.message} - ${error.field}:${
          error.value
        }`
      )
    )
    .flatMap(val => {
      if (val.meta.count === 0) {
        return Left(`No player found with name ${name}`);
      }
      return Right(val);
    });
}
