"use client";

import * as React from "react";
import { MapPinIcon } from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import type { LocationType } from "./useJobData";
import { useLocationData } from "./useJobData";

interface LocationPickerProps {
  onLocationSelect: (location: LocationType) => void;
}

export function LocationPicker({ onLocationSelect }: LocationPickerProps) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const locations = useLocationData(searchQuery);

  return (
    <Command>
      <CommandInput
        placeholder="Søk etter din by..."
        value={searchQuery}
        onValueChange={(value) => setSearchQuery(value || "")}
        className="h-12"
      />
      <CommandList>
        {locations.length === 0 && <CommandEmpty>Ingen byer matchet søket</CommandEmpty>}
        <CommandGroup>
          {locations.map((location) => (
            <CommandItem
              key={location.id || location.name} // Ensure unique key
              value={location.name}
              onSelect={() => onLocationSelect(location)}
            >
              <MapPinIcon className="mr-2 h-4 w-4" />
              <span>{location.name}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
