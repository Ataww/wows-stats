import Axios, { AxiosRequestConfig } from "axios";
import { Either, Left, Right } from "monet";
import {
  ApiResponse,
  BaseApiResponse,
  ErrorApiResponse
} from "../domain/ApiResponse";
import { formatOptions, QueryParameters } from "./util";

export enum REALM {
  EU = "https://api.worldofwarships.eu",
  RU = "https://api.worldofwarships.ru",
  NA = "https://api.worldofwarships.com",
  ASIA = "https://api.worldofwarships.asia"
}

export interface ClientOptions {
  realm: REALM;
  applicationId: string;
}

export function isErrorReponse(
  response: BaseApiResponse
): response is ErrorApiResponse {
  return response.status === "error";
}

export type EitherApiResponse<V> = Either<ErrorApiResponse, ApiResponse<V>>;

class ApiClient {
  private readonly options: ClientOptions;
  private _queryConfig?: AxiosRequestConfig;

  constructor(options: ClientOptions) {
    this.options = options;
    this.queryApi = this.queryApi.bind(this);
    this.formatQuery = this.formatQuery.bind(this);
    this.prepareQuery = this.prepareQuery.bind(this);
  }

  set queryConfig(cfg: AxiosRequestConfig | undefined) {
    this._queryConfig = cfg;
  }

  get queryConfig() {
    return this._queryConfig;
  }

  prepareQuery(path: string, parameters: QueryParameters) {
    const paramObject: { [key: string]: string } = {};
    let i = 0;
    for (const key in parameters) {
      paramObject[key] = `{${i++}}`;
    }
    return this.formatQuery(path, paramObject);
  }

  formatQuery(path: string, parameters: QueryParameters | string) {
    const params =
      typeof parameters === "string" ? parameters : formatOptions(parameters);
    const prefixedParameters = params !== "" ? `&${params}` : "";
    return `${this.options.realm}/wows/${path}/?application_id=${this.options.applicationId}${prefixedParameters}`;
  }

  /**
   *
   * @param path
   * @param parameters A list of query parameters joined by &
   * @param axiosOptions
   */
  async queryApi<T>(
    path: string,
    parameters: string,
    axiosOptions?: AxiosRequestConfig
  ): Promise<Either<ErrorApiResponse, ApiResponse<T>>> {
    return this.runQuery(this.formatQuery(path, parameters));
  }

  async runQuery<T>(
    query: string,
    axiosOptions?: AxiosRequestConfig
  ): Promise<Either<ErrorApiResponse, ApiResponse<T>>> {
    try {
      const response = await Axios.get(query, axiosOptions);
      const apiResponse: BaseApiResponse = response.data;
      if (isErrorReponse(apiResponse)) {
        return Left(apiResponse as ErrorApiResponse);
      }
      return Right(apiResponse as ApiResponse<T>);
    } catch (e) {
      if (e.response) {
        const error: ErrorApiResponse = {
          status: "error",
          error: {
            field: "",
            message: e.response.data,
            code: e.response.status,
            value: e.response.data
          }
        };
        return Left(error);
      } else if (Axios.isCancel(e)) {
        console.log("Request cancelled", e.message);
      } else {
        throw new Error("Unexpected error occured");
      }
    }
    throw new Error("Unknown API client error");
  }
}

export const EuClient = new ApiClient({
  realm: REALM.EU,
  applicationId: process.env.REACT_APP_WG_APP_ID!
});

export const NaClient = new ApiClient({
  realm: REALM.NA,
  applicationId: process.env.REACT_APP_WG_APP_ID!
});

export const RuClient = new ApiClient({
  realm: REALM.RU,
  applicationId: process.env.REACT_APP_WG_APP_ID!
});

export const AsiaClient = new ApiClient({
  realm: REALM.ASIA,
  applicationId: process.env.REACT_APP_WG_APP_ID!
});
