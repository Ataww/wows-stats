import { isArray } from "lodash";

type UrlPrefix = "&" | "?";

/**
 * Format query options to be inlined in the query url.
 * The given object must have an index signature. Array fields are formatted to a CSV string.
 *
 * If the options object is empty, an empty string is returned.
 * @param options The object to inline
 * @param prefix The prefix to add to the option string. Defaults to &. Valid options are & or ?
 */
export function formatOptions(
  options: { [key: string]: any },
  prefix: UrlPrefix = "&"
) {
  const fields: string[] = [];
  for (const field in options) {
    const data = isArray(options[field])
      ? options[field].join()
      : options[field];
    fields.push(`${field}=${data}`);
  }
  if (fields.length > 0) {
    return `${prefix}${fields.join("&")}`;
  }
  return "";
}
