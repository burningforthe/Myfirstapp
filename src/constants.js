import getEnvVars from "./Environment";
const {
  apiUrl,
} = getEnvVars();

export const BASE_URL = apiUrl;