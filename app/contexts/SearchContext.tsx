import {
  ChangeEvent,
  createContext,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from "react";

import { useNews } from "../(home)/hooks";

import { NewsProps } from "@/api/interfaces";

type SearchContextProps = {
  searchValue: string;
  handleSearchInput: (event: ChangeEvent<HTMLInputElement>) => void;
  data?: NewsProps[];
  isLoading: boolean;
  isError: boolean;
};

export const SearchContext = createContext<SearchContextProps>({
  searchValue: "",
  isLoading: false,
  isError: false,
  handleSearchInput: () => undefined,
  data: [],
});

let timeout: NodeJS.Timeout;
const DEBOUNCE_DELAY = 1000;

export const SearchProvider = ({ children }: PropsWithChildren) => {
  const [searchValue, setSearchValue] = useState("");

  const { data, isLoading, isError } = useNews({
    searchValue,
  });

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
      data,
      isLoading,
      isError,
    }),
    [searchValue, handleSearchInput, data, isLoading, isError],
  );

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};
