import { Categories } from "./Categories";
import { Methods } from "./Methods";

export interface CategoryMetadata {
  name: Categories;
  path: string;
  commonParameters?: string[];
  methods: {
    [path: string]: QueryMetadata;
  };
}

export interface QueryMetadata<T = any> {
  method: Methods;
  parameters: Array<keyof T>;
  path: string;
  paginated?: boolean;
}

export interface ApiMetadata {
  [path: string]: CategoryMetadata;
}
