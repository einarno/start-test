import type { DateRange } from "react-day-picker";

export interface Job {
  id: string;
  title: string;
  company: string;
  city: string;
  hourlyPay: number;
  industry: "retail" | "grocery";
  startDate: Date;
  endDate: Date;
  hoursWorking: number;
  description: string;
  longDescription?: string; // Optional to handle cases where this field might not be present
  employer: {
    logoUrl: string;
    id: string;
    name: string;
    description: string;
    website: string;
  };
}

export interface FilterOptions {
  dateRange?: DateRange;
  city?: string;
  minHourlyPay?: number;
  industry?: string;
}
