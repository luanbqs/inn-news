import { useState } from "react";

import { DateOptions } from "@/app/contexts/SearchContext";
import { useSearch } from "@/app/hooks";

export const useFilters = () => {
  const [date, setDate] = useState<DateOptions>("Anytime");
  const [sources, setSources] = useState<string[]>([]);
  const { handleFromDateChange, handleSourceFilter } = useSearch();

  const handleDateChange = (date: DateOptions) => {
    setDate(date);
  };

  const handleSourceChange = (newSource: string[]) => {
    setSources(newSource);
  };

  const applyFilters = (onClose: () => void) => {
    handleFromDateChange(date);
    handleSourceFilter(sources);
    onClose();
  };

  return {
    date,
    handleDateChange,
    applyFilters,
    sources,
    handleSourceChange,
  };
};
