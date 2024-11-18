import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";

import fetchNews from "@/api/processors/fetchNews";
import { SearchContext } from "@/app/contexts/SearchContext";

export function useNews(params?: { searchValue?: string }) {
  const { searchValue = "" } = params || {};

  return useQuery({
    queryKey: ["news", searchValue],
    queryFn: async () => await fetchNews({ searchValue }),
  });
}

export const useSearch = () => useContext(SearchContext);
