import axios from "axios";
import { ApiResponse } from "../domain/ApiResponse";
import Warship from "../domain/Ship";

/**
 *
 * @param search
 */
export async function getShips(search: { [field in keyof Warship]: any }) {
  const fields: string[] = [];
  for (const field in search) {
    fields.push(`&${field}=${search[field]}`);
  }

  const response: ApiResponse<Warship> = (await axios.get(
    `https://api.worldofwarships.eu/wows/encyclopedia/ships/?application_id=${
      process.env.REACT_APP_WG_APP_ID
    }${fields.join("")}`
  )).data;
  return response.data;
}
