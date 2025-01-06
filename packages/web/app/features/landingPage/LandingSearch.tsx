import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, MapPin } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { useNavigate } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { useLocationData, type LocationType } from "../jobListing/useJobData";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns/format";
import { nb } from "date-fns/locale";
import { LocationPicker } from "../jobListing/LocationPicker";

export function LandingSearch() {
  const [selectedCity, setSelectedCity] = useState<LocationType | null>(null);
  const [citySearchQuery, setCitySearchQuery] = useState("");
  const [cityPopoverOpen, setCityPopoverOpen] = useState(false);
  const [fromDate, setFromDate] = useState<Date | undefined>(undefined);
  const [toDate, setToDate] = useState<Date | undefined>(undefined);

  const navigate = useNavigate();

  const filteredCities = useLocationData(citySearchQuery);

  const handleSearch = () => {
    navigate({
      to: "/jobs/find",
      search: { dateRange: { from: fromDate, to: toDate }, city: selectedCity?.name },
    });
  };

  return (
    <Card className="mx-auto w-full max-w-3xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Søk etter oppdrag</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Popover open={cityPopoverOpen} onOpenChange={setCityPopoverOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              aria-expanded={cityPopoverOpen}
              tabIndex={0}
              className="relative h-14 w-full justify-start rounded-full pl-12 text-left font-normal"
            >
              <MapPin className="absolute left-4 h-5 w-5 text-gray-500" />
              {selectedCity ? selectedCity.name : "Hvor ser du etter jobb..."}
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-full p-0">
            <LocationPicker onLocationSelect={setSelectedCity} />
          </PopoverContent>
        </Popover>
        <div className="grid grid-cols-2 gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                tabIndex={0}
                className={cn(
                  "h-14 justify-start rounded-full text-left text-lg font-normal",
                  !fromDate && "text-muted-foreground",
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {fromDate ? format(fromDate, "PPP", { locale: nb }) : "Fra"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={fromDate}
                onSelect={(date) => setFromDate(date || undefined)}
                initialFocus
              />
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                tabIndex={0}
                className={cn(
                  "h-14 justify-start rounded-full text-left text-lg font-normal",
                  !toDate && "text-muted-foreground",
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {toDate ? format(toDate, "PPP", { locale: nb }) : "Til"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={toDate}
                onSelect={(date) => setToDate(date || undefined)}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleSearch} tabIndex={0}>
          Finn en vakt
        </Button>
      </CardFooter>
    </Card>
  );
}
