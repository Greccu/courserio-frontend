import axios from "axios";
import { BackendUrl } from "./constants";

export const baseUrl = BackendUrl;

export const apiClient = axios.create({
  baseURL: baseUrl,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});