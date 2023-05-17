import axios from "axios";
import { stringify } from "qs";

export const client = axios.create({
  baseURL: process.env.BASE_API_URL,
  headers: { Authorization: `Bearer ${process.env.STRAPI_API_KEY}` },
  paramsSerializer: (params) => {
    return stringify(params);
  },
});
