export const THE_NYT_BASE_URL =
  "https://api.nytimes.com/svc/search/v2/articlesearch.json";
export const THE_NYT_IMAGE_URL = "https://static01.nyt.com/";
export const THE_NYT_SOURCE = "The New York Times";
export const THE_NYT_IMAGE_SIZE = "xlarge";

export const THE_GUARDIAN_BASE_URL = "https://content.guardianapis.com/search";
export const THE_GUARDIAN_SOURCE = "The Guardian";

export const NEWSAPI_API_SOURCES = ["bbc-news", "cnn"];

export const sourcesList = {
  status: "ok",
  sources: [
    {
      id: "bbc-news",
      name: "BBC News",
      description:
        "Use BBC News for up-to-the-minute news, breaking news, video, audio and feature stories. BBC News provides trusted World and UK news as well as local and regional perspectives. Also entertainment, business, science, technology and health news.",
      url: "https://www.bbc.co.uk/news",
      category: "general",
      language: "en",
      country: "gb",
    },
    {
      id: "cnn",
      name: "CNN",
      description:
        "View the latest news and breaking news today for U.S., world, weather, entertainment, politics and health at CNN",
      url: "http://us.cnn.com",
      category: "general",
      language: "en",
      country: "us",
    },
    {
      id: "the-guardian",
      name: "The Guardian",
      description:
        "Check The Guardian for up-to-the-minute news, breaking news, video, audio and feature stories. The Guardian provides trusted World and UK news as well as local and regional perspectives. Also entertainment, business, science, technology and health news.",
      url: "http://theguardian.com",
      category: "general",
      language: "en",
      country: "us",
    },
    {
      id: "the-nyt",
      name: "The New York Times",
      description:
        "Find breaking news, multimedia, reviews & opinion on Washington, business, sports, movies, travel, books, jobs, education, real estate, cars & more at nytimes.com.",
      url: "http://www.nytimes.com",
      category: "general",
    },
  ],
};
