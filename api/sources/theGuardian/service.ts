import "server-only";

import { AxiosError } from "axios";

import axios from "@/config/axios";

export default async function fetchTheGuardianNews<Response>({
  searchValue = "",
}: { searchValue?: string } = {}): Promise<Response> {
  const url = buildQueryUrl({
    searchValue,
  });

  try {
    const response = await axios.get(
      `${url}api-key=${process.env.THEGUARDIAN_API_KEY}`,
      {
        params: {
          "show-fields": "thumbnail,bodyText",
        },
      }
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

function buildQueryUrl({
  searchValue,
  tag,
  fromDate,
  showTags,
  showFields,
  showRefinements,
  orderBy,
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
  const baseUrl = "https://content.guardianapis.com/search";

  const params = new URLSearchParams();

  if (searchValue) {
    params.append("q", encodeURIComponent(searchValue));
  }

  if (tag) params.append("tag", tag);
  if (fromDate) params.append("from-date", fromDate);
  if (showTags) params.append("show-tags", showTags);
  if (showFields) params.append("show-fields", showFields);
  if (showRefinements) params.append("show-refinements", showRefinements);
  if (orderBy) params.append("order-by", orderBy);

  return `${baseUrl}?${params.toString()} ${params ? "&" : ""}`;
}
