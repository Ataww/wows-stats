import axios from "axios";

export async function auth() {
  return await axios.get(
    `https://api.worldoftanks.eu/wot/auth/login/?application_id=${
      process.env.REACT_APP_WG_APP_ID
    }`
  );
}
