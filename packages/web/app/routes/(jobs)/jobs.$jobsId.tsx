import { createFileRoute } from "@tanstack/react-router";
import Markdown from "react-markdown";
import { Header } from "@/features/jobListing/Header";
import { JobContactSidebar } from "@/features/jobListing/JobContactSidebar";
import { createSingleJob } from "@/features/jobListing/useJobData";
import { formatJobDateRange } from "@/features/jobListing/helpers";
import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import testImage from "@/assets/cola.svg";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export const Route = createFileRoute("/(jobs)/jobs/$jobsId")({
  component: RouteComponent,
});

function RouteComponent() {
  return <JobDetailPage />;
}

function JobDetailPage() {
  const { jobsId } = Route.useParams();

  const job = createSingleJob(jobsId);
  return (
    <div className="flex min-h-screen flex-col">
      <Header filters={{}} />
      <main className="container mx-auto flex-1 px-4 py-6">
        {/* Button and Image visible on small screens */}
        <div className="mb-6 block space-y-4 md:hidden">
          <img src={testImage} alt="job advert logo" className="w-full rounded-lg" />
        </div>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_350px]">
          <div>
            <div className="mb-6 flex items-start justify-between">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold">{job.title}</h1>
                <p className="text-xl">{job.employer.name}</p>
              </div>
            </div>

            <div className="mb-8 grid gap-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="font-medium">Tidspunkt</div>
                  <div>{formatJobDateRange(job.startDate, job.endDate)}</div>
                </div>

                <div className="flex flex-col">
                  <div className="font-medium">Lønn</div>
                  <div className="flex items-center space-x-2">
                    <div>
                      {new Intl.NumberFormat("no-NO", {
                        style: "currency",
                        currency: "NOK",
                      }).format(job.hourlyPay * job.hoursWorking)}
                    </div>

                    {/* Popover for hourly pay */}
                    <Popover>
                      <PopoverTrigger asChild>
                        <Info className="cursor-pointer" />
                      </PopoverTrigger>
                      <PopoverContent side="bottom" align="center">
                        <div className="text-sm text-muted-foreground">
                          {new Intl.NumberFormat("no-NO", {
                            style: "currency",
                            currency: "NOK",
                          }).format(job.hourlyPay)}
                          /time
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
                <div className="col-span-2 mb-6 block space-y-4 md:hidden">
                  <Button className="w-full" size="lg">
                    Søk her
                  </Button>
                </div>
              </div>
              <div>
                <Markdown className="prose">{job.longDescription}</Markdown>
              </div>
            </div>
          </div>

          {/* Sidebar hidden on small screens */}
          <div className="hidden md:block">
            <JobContactSidebar company={job.employer} />
          </div>
        </div>
      </main>
    </div>
  );
}
