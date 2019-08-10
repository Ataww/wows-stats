import { isArray, isEmpty } from "lodash";

export type QueryParameters = {
  [key: string]: string | number | string[] | number[] | undefined;
};

export type TypedParameters<T> = {
  [key in keyof T]: string | number | string[] | number[] | undefined;
};

/**
 * Format query options to be inlined in the query url.
 * The given object must have an index signature. Array fields are formatted to a CSV string.
 *
 * If the options object is empty, an empty string is returned.
 * @param options The object to inline
 */
export function formatOptions(options?: QueryParameters) {
  if (!options) {
    return "";
  }
  const fields: string[] = [];
  for (const field in options) {
    const data = options[field];
    if (isArray(data) && !isEmpty(data)) {
      fields.push(`${field}=${data.join(",")}`);
    } else {
      fields.push(`${field}=${data}`);
    }
  }
  if (fields.length > 0) {
    return fields.join("&");
  }
  return "";
}
