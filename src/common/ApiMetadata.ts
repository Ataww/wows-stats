import { Categories } from "./Categories";
import { Methods } from "./Methods";

export interface CategoryMetadata {
  name: Categories;
  path: string;
  methods: {
    [path: string]: QueryMetadata;
  };
}

export interface QueryMetadata {
  method: Methods;
  path: string;
}

export interface ApiMetadata {
  [path: string]: CategoryMetadata;
}
