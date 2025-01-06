import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { FilterOptions } from "@/lib/jobs";
import { DateRangePicker } from "./DateRangePicker";
import { type LocationType, useLocationData } from "./useJobData";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { LocationPicker } from "./LocationPicker";
import { MapPinIcon, X } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";

interface JobFiltersProps {
  onApplyFilters: (filters: FilterOptions) => void;
  initialFilters: FilterOptions;
}

export function JobFilters({ onApplyFilters, initialFilters }: JobFiltersProps) {
  const [filters, setFilters] = useState<FilterOptions>(initialFilters);
  const [cityPopoverOpen, setCityPopoverOpen] = useState(false);

  const handleCitySelect = (city: LocationType) => {
    setFilters({ ...filters, city: city.id });
    setCityPopoverOpen(false);
  };

  const handleCityReset = () => {
    setFilters({ ...filters, city: undefined });
  };

  const handleApplyFilters = () => {
    onApplyFilters(filters);
  };
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="date-range">Datoer</Label>
        <DateRangePicker
          onReset={() => setFilters({ ...filters, dateRange: undefined })}
          dateRange={filters.dateRange}
          onSelect={(range) => setFilters({ ...filters, dateRange: range })}
          modal
        />
      </div>
      <div>
        <Label htmlFor="By">By</Label>
        <Popover open={cityPopoverOpen} onOpenChange={setCityPopoverOpen} modal>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              className={cn(
                "group flex h-12 w-full items-center gap-2 rounded-full px-4 py-4", // Added w-full to span the entire row
                !filters.city && "text-muted-foreground",
              )}
            >
              <MapPinIcon className="h-4 w-4" />
              <span className="text-sm font-medium">{filters.city || "Hvor som helst"}</span>
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
          <PopoverContent align="center">
            <LocationPicker onLocationSelect={handleCitySelect} />
          </PopoverContent>
        </Popover>
      </div>
      <div>
        <Label htmlFor="min-hourly-pay">Minimum Hourly Pay</Label>
        <Input
          id="min-hourly-pay"
          type="number"
          value={filters.minHourlyPay}
          onChange={(e) => setFilters({ ...filters, minHourlyPay: Number(e.target.value) })}
          min={0}
        />
      </div>
      <div>
        <Label htmlFor="industry">Industry</Label>
        <Select
          value={filters.industry}
          onValueChange={(value: "all" | "retail" | "grocery") => setFilters({ ...filters, industry: value })}
        >
          <SelectTrigger id="industry">
            <SelectValue placeholder="Select industry" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="retail">Retail</SelectItem>
            <SelectItem value="grocery">Grocery</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button onClick={handleApplyFilters}>Apply Filters</Button>
    </div>
  );
}
