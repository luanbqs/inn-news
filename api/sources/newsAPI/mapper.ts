import { NewsProps } from "../../interfaces";

import { NewsApiResponseProps } from "@/api/interfaces/newsAPI";

export default function mapTopHeadlinesNewsApi(
  response: NewsApiResponseProps
): NewsProps[] {
  if (!response || !response.articles) {
    return [];
  }

  const newsCards: NewsProps[] = response.articles.map((item) => {
    const { title, description, urlToImage, source, publishedAt, url } = item;

    return {
      title,
      description,
      image: urlToImage,
      category: source.name,
      date: new Date(publishedAt).toISOString(),
      source: source.name,
      url,
    };
  });

  return newsCards;
}
