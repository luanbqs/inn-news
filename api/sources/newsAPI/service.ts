import "server-only";

import { AxiosError } from "axios";

import axios from "@/config/axios";

interface NesAPIDTO {
  searchValue?: string;
  fromDate?: string;
}

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
  fromDate,
}: NesAPIDTO): Promise<Response> {
  try {
    const url = buildQueryUrl({ searchValue, fromDate });

    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;

    if (axiosError.request) {
      throw new Error("Axios Error");
    }

    throw new Error(axiosError.message);
  }
}

function buildQueryUrl({
  searchValue,
  fromDate,
}: {
  searchValue: string;
  format?: string;
  tag?: string;
  fromDate?: string;
  showTags?: string;
  showFields?: string;
  showRefinements?: string;
  orderBy?: string;
}): string {
  const baseUrl = "https://newsapi.org/v2/everything";

  const params = new URLSearchParams();

  if (searchValue) {
    params.append("q", encodeURIComponent(searchValue));
  }

  if (fromDate) params.append("from-date", fromDate);

  params.append("apiKey", process.env.NEWSAPI_API_KEY || "");

  return `${baseUrl}?${params.toString()}`;
}
