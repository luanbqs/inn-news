import { CheckboxGroup, Checkbox } from "@nextui-org/react";

import { sourcesList } from "../constants";

interface SourceCheckboxProps {
  sources: string[];
  handleSourceChange: (newSource: string[]) => void;
}
export const SourceCheckbox = ({
  sources,
  handleSourceChange,
}: SourceCheckboxProps) => {
  return (
    <CheckboxGroup
      color="secondary"
      orientation="horizontal"
      value={sources}
      onValueChange={handleSourceChange}
    >
      {sourcesList.sources.map((source) => (
        <Checkbox key={source.id} value={source.id}>
          {source.name}
        </Checkbox>
      ))}
    </CheckboxGroup>
  );
};
