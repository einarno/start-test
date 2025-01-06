import { createFileRoute, useSearch } from "@tanstack/react-router";
import { Header } from "../../features/jobListing/Header";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { JobCard } from "../../features/jobListing/JobCard";
import { z } from "zod";
import { useNavigate } from "@tanstack/react-router";
import type { FilterOptions } from "@/lib/jobs";
import { useJobData } from "@/features/jobListing/useJobData";

export const Route = createFileRoute("/(jobs)/jobs/find")({
  component: RouteComponent,
  validateSearch: (search) =>
    z
      .object({
        city: z.string().optional(),
        minHourlyPay: z.number().optional(),
        industry: z.string().optional(),
        dateRange: z
          .object({
            from: z
              .preprocess((value) => (typeof value === "string" ? new Date(value) : value), z.date())
              .optional(),
            to: z.preprocess(
              (value) => (typeof value === "string" ? new Date(value) : value),
              z.date().optional(),
            ),
          })
          .catch({ from: undefined, to: undefined }),
      })
      .parse(search),
});

function RouteComponent() {
  const { city, minHourlyPay, industry, dateRange } = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });
  const [numberOfJobs, setNumberOfJobs] = useState(20);
  const applyFilters = (filters: FilterOptions) => {
    navigate({
      search: (prev) => ({
        ...prev,
        ...filters,
        dateRange: {
          from: filters.dateRange?.from, // Ensure `from` is always a Date
          to: filters.dateRange?.to, // `to` remains optional
        },
      }),
    });
  };

  const jobs = useJobData(
    {
      city,
      minHourlyPay,
      industry,
    },
    numberOfJobs,
  );

  // Infinite scrolling logic
  const observer = useRef<IntersectionObserver | null>(null);
  const lastJobElementRef = useCallback((node: HTMLDivElement | null) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setNumberOfJobs((prev) => prev + 20);
      }
    });
    if (node) observer.current.observe(node);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header
        onApplyFilters={applyFilters}
        filters={{ city, minHourlyPay, industry, dateRange: { from: dateRange.from, to: dateRange.to } }}
      />
      <main className="flex-1">
        <div className="container mx-auto py-10">
          {jobs.length === 0 ? (
            <div className="py-10 text-center">
              <p className="mb-4 text-xl">No job listings found.</p>
              <Button onClick={() => applyFilters({})}>Remove filters</Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
              {jobs.map((job, index) => (
                <div key={job.id} ref={index === jobs.length - 1 ? lastJobElementRef : null}>
                  <JobCard job={job} />
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
