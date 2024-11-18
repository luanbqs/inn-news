import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

import { FilterDropdown } from "./components/Dropdown";
import { useFilters } from "./hooks/useFilters";

interface FiltersProps {
  isOpen: boolean;
  onOpenChange: () => void;
}

export const Filters = ({ isOpen, onOpenChange }: FiltersProps) => {
  const { date, handleDateChange, applyFilters } = useFilters();

  return (
    <>
      <Modal isOpen={isOpen} size="2xl" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Filters</ModalHeader>
              <ModalBody>
                <div className="text-white w-full flex flex-row items-center">
                  <h1 className="me-16">Date </h1>
                  <FilterDropdown
                    date={date}
                    handleDateChange={handleDateChange}
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={() => applyFilters(onClose)}>
                  Apply
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
