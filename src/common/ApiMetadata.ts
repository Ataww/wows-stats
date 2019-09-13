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
  parameters: Array<keyof T | MethodParameter<T>>;
  path: string;
  paginated?: boolean;
}

export interface MethodParameter<T> {
  name: keyof T;
  required?: boolean;
  values?: string[];
}

export interface ApiMetadata {
  [path: string]: CategoryMetadata;
}

export function isStringParameter<T>(
  param: keyof T | MethodParameter<T>
): param is keyof T {
  return typeof param === "string";
}
