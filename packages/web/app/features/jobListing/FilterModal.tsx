import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { JobFilters } from "./JobFilters";
import { SlidersHorizontal } from "lucide-react";
import type { FilterOptions } from "@/lib/jobs";
import React from "react";

interface FilterModalProps {
  onApplyFilters: (filters: FilterOptions) => void;
  initialFilters: FilterOptions;
}

export function FilterModal({ onApplyFilters, initialFilters }: FilterModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button
        variant="ghost"
        className="flex h-12 items-center gap-2 rounded-full px-4"
        onClick={() => setOpen(true)}
      >
        <SlidersHorizontal className="h-4 w-4" />
        <span className="text-sm font-medium">Filters</span>
      </Button>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Filter Jobs</DialogTitle>
        </DialogHeader>
        <JobFilters
          onApplyFilters={(filters) => {
            onApplyFilters(filters);
            setOpen(false);
          }}
          initialFilters={initialFilters}
        />
      </DialogContent>
    </Dialog>
  );
}
