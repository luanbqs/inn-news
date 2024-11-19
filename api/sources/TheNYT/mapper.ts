import { NewsProps } from "../../interfaces";

import {
  THE_NYT_IMAGE_SIZE,
  THE_NYT_IMAGE_URL,
  THE_NYT_SOURCE,
} from "@/api/constants";
import { TheNYTResponseProps } from "@/api/interfaces/theNYT";

export default function mapTheNYTResponse(
  response: TheNYTResponseProps
): NewsProps[] {
  if (response.status !== "OK") {
    return [];
  }

  return response.response.docs.map((article) => ({
    title: article.headline.main,
    description: article.snippet,
    image:
      THE_NYT_IMAGE_URL +
        article.multimedia.find((media) => media.subtype === THE_NYT_IMAGE_SIZE)
          ?.url || article.multimedia[0]?.url,
    category: article.section_name,
    date: article.pub_date,
    source: THE_NYT_SOURCE,
    url: article.web_url,
  }));
}
