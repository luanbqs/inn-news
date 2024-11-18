import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

import { DateOptions } from "@/app/contexts/SearchContext";

interface FilterDropdownProps {
  date: DateOptions;
  handleDateChange: (date: DateOptions) => void;
}

export const FilterDropdown = ({
  date,
  handleDateChange,
}: FilterDropdownProps) => {
  return (
    <Dropdown placement="bottom-start">
      <DropdownTrigger>
        <Button variant="bordered">{date}</Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Action event example"
        variant="flat"
        onAction={(key) => handleDateChange(key as DateOptions)}
      >
        <DropdownItem key="Anytime">Anytime</DropdownItem>
        <DropdownItem key="Past 24 hours">Past 24 hours</DropdownItem>
        <DropdownItem key="Past week">Past week</DropdownItem>
        <DropdownItem key="Past year">Past year</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
