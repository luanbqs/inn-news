import { useState } from "react";

import { DateOptions } from "@/app/contexts/SearchContext";
import { useSearch } from "@/app/hooks";

export const useFilters = () => {
  const [date, setDate] = useState<DateOptions>("Anytime");
  const { handleFromDateChange } = useSearch();

  const handleDateChange = (date: DateOptions) => {
    setDate(date);
  };

  const applyFilters = (onClose: () => void) => {
    handleFromDateChange(date);
    onClose();
  };

  return {
    date,
    handleDateChange,
    applyFilters,
  };
};
