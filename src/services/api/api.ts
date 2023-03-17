import axios from "axios";

export const getAPIClient = (ctx?: any) => {
  
  const api = axios.create({
    baseURL: "https://political-api.vercel.app",
  });

  return api;
};

export const api = getAPIClient();