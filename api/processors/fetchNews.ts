"use server";

import { TheGuardianResponseProps } from "../interfaces";
import mapTheGuardianResponse from "../sources/theGuardian/mapper";
import fetchTheGuardianNews from "../sources/theGuardian/service";

export default async function fetchNews() {
  const response = await Promise.all([fetchTheGuardianNews()]);

  const theGuardianNews = mapTheGuardianResponse(
    response[0] as unknown as TheGuardianResponseProps
  );

  return theGuardianNews;
}
