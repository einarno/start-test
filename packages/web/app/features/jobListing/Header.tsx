import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { FilterOptions } from "@/lib/jobs";
import { IntegratedSearchBar } from "./IntegratedSearchBar";
import { Link } from "@tanstack/react-router";
import ComodIcon from "../../assets/comod_hvit.svg";

interface HeaderProps {
  onApplyFilters?: (filters: FilterOptions) => void;
  filters: FilterOptions;
}

export function Header({ onApplyFilters, filters }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-300 bg-muted">
      <div className="container mx-auto flex h-16 items-center justify-between">
        {/* Left: Home Icon */}
        <Link to={"/"}>
          <Button variant="ghost" size="icon" className="shrink-0">
            <img src={ComodIcon} alt="comod icon" />
          </Button>
        </Link>
        {/* Center: Search Bar */}
        <div className="flex max-w-4xl flex-1 justify-center p-4">
          <div className="w-full p-4">
            {onApplyFilters && filters ? (
              <IntegratedSearchBar onApplyFilters={onApplyFilters} filters={filters} />
            ) : null}
          </div>
        </div>
        {/* Right: User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="rounded-full">
              <User className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[240px]">
            <Link>
              <DropdownMenuItem className="cursor-pointer font-medium">Register</DropdownMenuItem>
            </Link>
            <DropdownMenuItem className="cursor-pointer">Log in</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
