import { useQuery } from "@tanstack/react-query";

import fetchNews from "@/api/processors/fetchNews";

export function useNews() {
  return useQuery({
    queryKey: ["news"],
    queryFn: async () => await fetchNews(),
  });
}
