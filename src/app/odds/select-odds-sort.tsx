"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SortOrder } from "@/app/odds/types";

interface OddsSortProps {
  onChange: (value: SortOrder) => void;
}
const SelectOddsSort: React.FC<OddsSortProps> = (props: OddsSortProps) => {
  const handleSortTypeChange = (value: string) => {
    props.onChange(value as SortOrder);
  };

  return (
    <div className="pt-2 pl-1 pb-2">
      <Select onValueChange={(value) => handleSortTypeChange(value)}>
        <SelectTrigger className="w-[180px] bg-codere-grey ">
          <SelectValue placeholder="Select a sort order" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={SortOrder.Default}>Default</SelectItem>
          <SelectItem value={SortOrder.Asc}>Ascending</SelectItem>
          <SelectItem value={SortOrder.Desc}>Descending</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectOddsSort;
