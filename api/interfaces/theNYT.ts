export interface TheNYTResponseProps {
  status: string;
  copyright: string;
  response: {
    docs: ArticleProps[];
    meta: {
      hits: number;
      offset: number;
      time: number;
    };
  };
}

interface ArticleProps {
  web_url: string;
  snippet: string;
  multimedia: MultimediaProps[];
  headline: HeadlineProps;
  section_name: string;
  pub_date: string;
}

interface MultimediaProps {
  url: string;
  subtype: string;
}

interface HeadlineProps {
  main: string;
}
