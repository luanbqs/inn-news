import "server-only";

import { AxiosError } from "axios";

import axios from "@/config/axios";

export async function fetchHeadLinesNewsApi<Response>(): Promise<Response> {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWSAPI_API_KEY}`
    );

    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;

    if (axiosError.request) {
      throw new Error("Axios Error");
    }

    throw new Error(axiosError.message);
  }
}

export async function fetchNewsApi<Response>({
  searchValue = "",
}: { searchValue?: string } = {}): Promise<Response> {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${searchValue}&apiKey=${process.env.NEWSAPI_API_KEY}`
    );

    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;

    if (axiosError.request) {
      throw new Error("Axios Error");
    }

    throw new Error(axiosError.message);
  }
}
