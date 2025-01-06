"use client";

import { format } from "date-fns";
import { CalendarIcon, X } from "lucide-react";
import type { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface DateRangePickerProps {
  className?: string;
  dateRange: DateRange | undefined;
  onSelect: (range: DateRange | undefined) => void;
  onReset: () => void;
  modal?: boolean;
}

export function DateRangePicker({
  className,
  dateRange,
  onSelect,
  onReset,
  modal = false,
}: DateRangePickerProps) {
  return (
    <div className={cn("grid gap-2", className)}>
      <Popover modal={modal}>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            className={cn(
              "group flex h-12 items-center gap-2 rounded-full px-4 py-4", // Matches second component
              !dateRange && "text-muted-foreground",
            )}
          >
            <CalendarIcon className="h-4 w-4" />
            {dateRange?.from ? (
              <span className="text-sm font-medium">
                {format(dateRange.from, "MMM d")} - {dateRange.to ? format(dateRange.to, "MMM d") : "Select"}
              </span>
            ) : (
              <span className="text-sm font-medium">Any dates</span>
            )}
            {dateRange && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onReset();
                }}
                className="pl-2 opacity-0 transition-opacity group-hover:opacity-100" // Matches second component
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={dateRange?.from}
            selected={dateRange}
            onSelect={onSelect}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
