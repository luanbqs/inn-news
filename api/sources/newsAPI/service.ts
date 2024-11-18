import "server-only";

import { AxiosError } from "axios";

import axios from "@/config/axios";

export default async function fetchHeadLinesNewsApi<
  Response,
>(): Promise<Response> {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWSAPI_API_KEY}`
    );

    return response.data.response;
  } catch (error) {
    const axiosError = error as AxiosError;

    if (axiosError.request) {
      throw new Error("Axios Error");
    }

    throw new Error(axiosError.message);
  }
}
