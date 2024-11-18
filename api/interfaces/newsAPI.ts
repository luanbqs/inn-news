export interface SourceProps {
  id: string | null;
  name: string;
}

export interface ArticleProps {
  source: SourceProps;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface NewsApiResponseProps {
  status: string;
  totalResults: number;
  articles: ArticleProps[];
}
