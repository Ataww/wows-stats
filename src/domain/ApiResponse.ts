export interface ResponseMetadata {
  count: number;
  page_total?: number;
  total?: number;
  limit?: number;
  page?: number;
}

export interface ErrorData {
  field: string;
  message: string;
  code: number;
  value: string;
}

export interface BaseApiResponse {
  status: string;
}

export interface ErrorApiResponse extends BaseApiResponse {
  error: ErrorData;
}

export interface ApiResponse<T = any> extends BaseApiResponse {
  meta: ResponseMetadata;
  data: T;
}

export interface IdIndexedData<T = any> {
  [id: number]: T;
}
