import "server-only";

import { AxiosError } from "axios";

import axios from "@/config/axios";

export default async function fetchTheGuardianNews<
  Response,
>(): Promise<Response> {
  try {
    const response = await axios.get(
      `https://content.guardianapis.com/search?api-key=${process.env.THEGUARDIAN_API_KEY}`,
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
