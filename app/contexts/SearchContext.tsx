import {
  ChangeEvent,
  createContext,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from "react";

import { useNews } from "../hooks";

import { NewsProps } from "@/api/interfaces";
import { getFromDate } from "@/utils";

export type DateOptions =
  | "Anytime"
  | "Past 24 hours"
  | "Past week"
  | "Past year";

type SearchContextProps = {
  searchValue: string;
  handleSearchInput: (event: ChangeEvent<HTMLInputElement>) => void;
  fromDate?: string;
  handleFromDateChange: (date: DateOptions) => void;
  sourcesFilter?: string[];
  handleSourceFilter: (sources: string[]) => void;
  data?: NewsProps[];
  isLoading: boolean;
  isError: boolean;
};

export const SearchContext = createContext<SearchContextProps>({
  searchValue: "",
  handleFromDateChange: () => undefined,
  fromDate: "",
  handleSearchInput: () => undefined,
  sourcesFilter: [],
  handleSourceFilter: () => undefined,
  isLoading: false,
  isError: false,
  data: [],
});

let timeout: NodeJS.Timeout;
const DEBOUNCE_DELAY = 1000;

export const SearchProvider = ({ children }: PropsWithChildren) => {
  const [searchValue, setSearchValue] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [sourcesFilter, setSourcesFilter] = useState<string[]>([]);

  const { data, isLoading, isError } = useNews({
    searchValue,
    fromDate,
    sourcesFilter,
  });

  const handleFromDateChange = useCallback((date: DateOptions) => {
    const fromDate = getFromDate(date);

    setFromDate(fromDate);
  }, []);

  const handleSourceFilter = useCallback((source: string[]) => {
    setSourcesFilter(source);
  }, []);

  const handleSearchInput = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        const query = event.target.value;

        setSearchValue(query);
      }, DEBOUNCE_DELAY);
    },
    [],
  );

  const contextValue = useMemo(
    () => ({
      searchValue,
      handleSearchInput,
      fromDate,
      data,
      isLoading,
      isError,
      handleFromDateChange,
      sourcesFilter,
      handleSourceFilter,
    }),
    [
      searchValue,
      handleSearchInput,
      data,
      isLoading,
      isError,
      fromDate,
      handleFromDateChange,
      sourcesFilter,
      handleSourceFilter,
    ],
  );

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};
