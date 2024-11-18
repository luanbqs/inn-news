"use server";

import { TheGuardianResponseProps } from "../interfaces";
import { NewsApiResponseProps } from "../interfaces/newsAPI";
import mapTopHeadlinesNewsApi from "../sources/newsAPI/mapper";
import fetchHeadLinesNewsApi from "../sources/newsAPI/service";
import mapTheGuardianResponse from "../sources/theGuardian/mapper";
import fetchTheGuardianNews from "../sources/theGuardian/service";

export default async function fetchNews() {
  const response = await Promise.all([
    fetchTheGuardianNews(),
    fetchHeadLinesNewsApi(),
  ]);

  const theGuardianNews = mapTheGuardianResponse(
    response[0] as unknown as TheGuardianResponseProps
  );

  const newsApiNews = mapTopHeadlinesNewsApi(
    response[1] as unknown as NewsApiResponseProps
  );

  return [...theGuardianNews, ...newsApiNews];
}
