import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";

import fetchNews from "@/api/processors/fetchNews";
import { SearchContext } from "@/app/contexts/SearchContext";

interface UseNewsProps {
  searchValue?: string;
  fromDate?: string;
}

export function useNews(params?: UseNewsProps) {
  const { searchValue = "", fromDate } = params || {};

  return useQuery({
    queryKey: ["news", searchValue, fromDate],
    queryFn: async () => await fetchNews({ searchValue, fromDate }),
  });
}

export const useSearch = () => useContext(SearchContext);
