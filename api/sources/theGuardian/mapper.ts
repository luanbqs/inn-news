import { NewsProps, TheGuardianResponseProps } from "../../interfaces";

import { THE_GUARDIAN_SOURCE } from "@/api/constants";

export default function mapTheGuardianResponse(
  response: TheGuardianResponseProps
): NewsProps[] {
  if (!response || !response.results) {
    return [];
  }

  const newsCards: NewsProps[] = response.results.map((item) => {
    const { webTitle, sectionName, webPublicationDate, fields, webUrl } = item;

    return {
      title: webTitle,
      description: fields.bodyText,
      image: fields.thumbnail,
      category: sectionName,
      date: webPublicationDate,
      source: THE_GUARDIAN_SOURCE,
      url: webUrl,
    };
  });

  return newsCards;
}
