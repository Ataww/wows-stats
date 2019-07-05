import { isArray, isEmpty } from "lodash";

type UrlPrefix = "&" | "?";

/**
 * Format query options to be inlined in the query url.
 * The given object must have an index signature. Array fields are formatted to a CSV string.
 *
 * If the options object is empty, an empty string is returned.
 * @param options The object to inline
 * @param prefix The prefix to add to the option string. Defaults to ?. Valid options are & or ?
 */
export function formatOptions(
  options?: { [key: string]: string | number | string[] | number[] },
  prefix: UrlPrefix = "?"
) {
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
    return `${prefix}${fields.join("&")}`;
  }
  return "";
}
