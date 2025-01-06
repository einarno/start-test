import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPinIcon, X } from "lucide-react";
import {} from "@radix-ui/react-popover";
import { PopoverContent, PopoverTrigger, Popover } from "@/components/ui/popover";
import type { FilterOptions } from "@/lib/jobs";
import { DateRangePicker } from "./DateRangePicker";
import { FilterModal } from "./FilterModal";
import { LocationPicker } from "./LocationPicker";
import type { LocationType } from "./useJobData";

interface IntegratedSearchBarProps {
  onApplyFilters: (filters: FilterOptions) => void;
  filters: FilterOptions;
}

export function IntegratedSearchBar({ onApplyFilters, filters }: IntegratedSearchBarProps) {
  const [cityPopoverOpen, setCityPopoverOpen] = useState(false);

  const handleCitySelect = (city: LocationType) => {
    setCityPopoverOpen(false);
    onApplyFilters({
      ...filters,
      city: city.name === "Anywhere" ? undefined : city.id,
    });
  };

  const handleCityReset = () => {
    onApplyFilters({
      ...filters,
      city: "",
    });
  };

  const handleDateReset = () => {
    onApplyFilters({
      ...filters,
      dateRange: undefined,
    });
  };

  return (
    <div className="flex w-full justify-center">
      <div className="flex items-center gap-0 rounded-full border bg-background shadow-sm">
        {/* City Selector (hidden on small screens) */}
        <div className="hidden md:block">
          <Popover open={cityPopoverOpen} onOpenChange={setCityPopoverOpen}>
            <PopoverTrigger asChild>
              <Button variant="ghost" className="group flex h-12 items-center gap-2 rounded-full px-4 py-4">
                <MapPinIcon className="h-4 w-4" />
                <span className="text-sm font-medium">{filters.city || "Anywhere"}</span>
                {filters.city && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCityReset();
                    }}
                    className="pl-2 opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[600px] p-0" align="start">
              <LocationPicker onLocationSelect={handleCitySelect} />
            </PopoverContent>
          </Popover>
        </div>
        <div className="hidden h-8 w-px bg-border md:block" />
        {/* Date Range Picker (hidden on small screens) */}
        <div className="hidden md:block">
          <DateRangePicker
            dateRange={filters.dateRange}
            onSelect={(range) => {
              onApplyFilters({ ...filters, dateRange: range });
            }}
            onReset={handleDateReset}
            className="h-12"
          />
        </div>

        <div className="h-8 w-px bg-border" />

        {/* Filters */}
        <div className="flex items-center">
          <FilterModal onApplyFilters={onApplyFilters} initialFilters={filters} />
        </div>
      </div>
    </div>
  );
}
