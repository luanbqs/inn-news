import "server-only";

import { AxiosError } from "axios";

import axios from "@/config/axios";
import { THE_NYT_BASE_URL } from "@/api/constants";

interface TheGuardianDTO {
  searchValue?: string;
  fromDate?: string;
  sourcesFilter?: string[];
}

export default async function fetchTheNYT<Response>({
  searchValue = "",
  fromDate,
  sourcesFilter,
}: TheGuardianDTO): Promise<Response> {
  if (
    sourcesFilter?.length === 1 &&
    sourcesFilter?.find((source) => source !== "the-nyt")
  ) {
    return [] as Response;
  }

  const url = buildQueryUrl({
    searchValue,
    fromDate,
  });

  try {
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
  fromDate?: string;
}): string {
  const params = new URLSearchParams();

  if (searchValue) {
    params.append("q", encodeURIComponent(searchValue));
  }

  if (fromDate) {
    params.append("begin_date", fromDate);
  }

  params.append("api-key", process.env.THE_NYT_APY_KEY || "");

  return `${THE_NYT_BASE_URL}?${params.toString()}`;
}
