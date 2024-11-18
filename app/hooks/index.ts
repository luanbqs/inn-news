import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";

import { FeedContext } from "@/app/contexts/FeedContext";
import fetchNews from "@/api/processors/fetchNews";
import { SearchContext } from "@/app/contexts/SearchContext";

interface UseNewsProps {
  searchValue?: string;
  fromDate?: string;
  sourcesFilter?: string[];
}

export function useNews(params?: UseNewsProps) {
  const { searchValue = "", fromDate, sourcesFilter = [] } = params || {};

  return useQuery({
    queryKey: ["news", searchValue, fromDate, sourcesFilter],
    queryFn: async () =>
      await fetchNews({ searchValue, fromDate, sourcesFilter }),
  });
}

export const useSearch = () => useContext(SearchContext);
export const useFeed = () => useContext(FeedContext);
