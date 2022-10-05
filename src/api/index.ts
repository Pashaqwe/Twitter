import axios from "axios";

const axiosClient = axios.create();

axiosClient.defaults.baseURL = "http://twitter.local:3000";
axiosClient.defaults.withCredentials = true;

export const getRequest = (url: string) =>
  axiosClient.get(`${url}`).then((response) => response);

export const postRequest = <T>(url: string, payload: T) =>
  axiosClient.post(`${url}`, payload).then((response) => response);

export const patchRequest = <T>(url: string, payload: T) =>
  axiosClient.patch(`${url}`, payload).then((response) => response);

export const deleteRequest = (url: string) =>
  axiosClient.delete(`${url}`).then((response) => response);
