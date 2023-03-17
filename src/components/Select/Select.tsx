import React from "react";

import { Select } from "@chakra-ui/react";

type SelectProps = {
  options: string[];
  onChange: (value: string) => void;
};

const SelectComponent = ({ options, onChange }: SelectProps) => {
  return (
    <Select placeholder="Selecione um partido" onChange={(e) => onChange(e.target.value)}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Select>
  );
};

export default SelectComponent;