export interface NewsProps {
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  source: string;
  url: string;
}

export interface TheGuardianResponseProps {
  status: string;
  userTier: string;
  total: number;
  startIndex: number;
  pageSize: number;
  currentPage: number;
  pages: number;
  orderBy: string;
  results: {
    id: string;
    type: string;
    sectionId: string;
    sectionName: string;
    webPublicationDate: string;
    webTitle: string;
    webUrl: string;
    apiUrl: string;
    isHosted: boolean;
    pillarId: string;
    pillarName: string;
    fields: {
      bodyText: string;
      thumbnail: string;
    };
  }[];
}
