export interface ResponseMetadata {
  count: number;
  page_total?: number;
  total?: number;
  limit?: number;
  page?: number;
}

export interface ApiResponse<T = any> {
  status: string;
  metadata: ResponseMetadata;
  data: T[];
}
