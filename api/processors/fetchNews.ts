"use server";

import { NewsProps, TheGuardianResponseProps } from "../interfaces";
import { NewsApiResponseProps } from "../interfaces/newsAPI";
import mapTopHeadlinesNewsApi from "../sources/newsAPI/mapper";
import {
  fetchHeadLinesNewsApi,
  fetchNewsApi,
} from "../sources/newsAPI/service";
import mapTheGuardianResponse from "../sources/theGuardian/mapper";
import fetchTheGuardianNews from "../sources/theGuardian/service";

interface FetchNewsProps {
  searchValue?: string;
  fromDate?: string;
  sourcesFilter?: string[];
}

export default async function fetchNews(
  fetchProps: FetchNewsProps
): Promise<NewsProps[]> {
  const { searchValue, fromDate, sourcesFilter } = fetchProps;
  const filtersApplied = searchValue || fromDate || sourcesFilter;

  const newsAPIGateway = filtersApplied ? fetchNewsApi : fetchHeadLinesNewsApi;

  const response = await Promise.all([
    fetchTheGuardianNews(fetchProps),
    newsAPIGateway(fetchProps),
  ]);

  const theGuardianNews = mapTheGuardianResponse(
    response[0] as unknown as TheGuardianResponseProps
  );

  const newsApiNews = mapTopHeadlinesNewsApi(
    response[1] as unknown as NewsApiResponseProps
  );

  return [...theGuardianNews, ...newsApiNews];
}
