import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

import { FilterDropdown } from "./components/DateDropdown";
import { useFilters } from "./hooks/useFilters";
import { SourceCheckbox } from "./components/SourceCheckbox";

interface FiltersProps {
  isOpen: boolean;
  onOpenChange: () => void;
}

export const Filters = ({ isOpen, onOpenChange }: FiltersProps) => {
  const { date, handleDateChange, applyFilters, sources, handleSourceChange } =
    useFilters();

  return (
    <>
      <Modal isOpen={isOpen} size="2xl" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Filters</ModalHeader>
              <ModalBody>
                <div className="text-white w-full mt-2 flex flex-row items-center">
                  <h1 className="me-16">Date </h1>
                  <FilterDropdown
                    date={date}
                    handleDateChange={handleDateChange}
                  />
                </div>
                <div className="text-white w-full mt-2 flex flex-row items-center">
                  <h1 className="me-16">Sources </h1>
                  <SourceCheckbox
                    handleSourceChange={handleSourceChange}
                    sources={sources}
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
