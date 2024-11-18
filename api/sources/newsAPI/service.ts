import "server-only";

import { AxiosError } from "axios";

import axios from "@/config/axios";

interface NesAPIDTO {
  searchValue?: string;
  fromDate?: string;
  sourcesFilter?: string[];
}
const baseUrl = "https://newsapi.org/v2";

export async function fetchHeadLinesNewsApi<Response>(): Promise<Response> {
  try {
    const response = await axios.get(
      `${baseUrl}/top-headlines?country=us&apiKey=${process.env.NEWSAPI_API_KEY}`
    );

    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;

    if (axiosError.request) {
      return [] as Response;
    }

    throw new Error(axiosError.message);
  }
}

export async function fetchNewsApi<Response>({
  searchValue = "",
  fromDate,
  sourcesFilter,
}: NesAPIDTO): Promise<Response> {
  try {
    if (sourcesFilter?.find((source) => source === "the-guardian")) {
      return [] as Response;
    }

    const url = buildQueryUrl({ searchValue, fromDate, sourcesFilter });

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
  sourcesFilter = ["bbc-news", "cnn"],
}: {
  searchValue: string;
  fromDate?: string;
  sourcesFilter?: string[];
}): string {
  const params = new URLSearchParams();
  const newsAPISource = !!sourcesFilter.length
    ? [...sourcesFilter]
    : ["bbc-news", "cnn"];

  if (searchValue) {
    params.append("q", encodeURIComponent(searchValue));
  }
  if (sourcesFilter) {
    params.append("sources", newsAPISource.join(","));
  }

  if (fromDate) params.append("from-date", fromDate);

  params.append("apiKey", process.env.NEWSAPI_API_KEY || "");

  return `${baseUrl}/everything?${params.toString()}`;
}
