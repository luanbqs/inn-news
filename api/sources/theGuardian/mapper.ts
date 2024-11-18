import { NewsProps, TheGuardianResponseProps } from "../../interfaces";

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
      source: "The Guardian",
      url: webUrl,
    };
  });

  return newsCards;
}
