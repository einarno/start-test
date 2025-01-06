import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, MapPinIcon, BuildingIcon, DollarSignIcon } from "lucide-react";
import type { Job } from "@/lib/jobs";
import testImage from "@/assets/cola.svg";
import { formatJobDateRange } from "./helpers";
import { Link } from "@tanstack/react-router";

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <Link to="/jobs/$jobsId" params={{ jobsId: job.id }}>
      <Card className="h-full hover:shadow-md">
        <CardHeader>
          <img src={testImage} alt="job advert logo" />
          <CardDescription className="flex items-center">
            <div className="flex items-center space-x-1">
              <MapPinIcon className="h-4 w-4 text-muted-foreground" />
              <span>{job.city}</span>
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-2">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col items-start space-y-2">
                <div className="flex items-center space-x-2">
                  <BuildingIcon className="mr-2 h-4 w-4" />
                  {job.company}
                </div>
                <div className="flex items-center space-x-2">
                  <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                  <span>{formatJobDateRange(job.startDate, job.endDate)}</span>
                </div>
                <Badge variant="outline" className="w-fit">
                  {job.industry}
                </Badge>
              </div>
              <div className="flex flex-col items-start">
                <div>
                  {new Intl.NumberFormat("no-NO", { style: "currency", currency: "NOK" }).format(
                    job.hourlyPay * job.hoursWorking,
                  )}
                </div>
                <div className="text-sm text-muted-foreground">
                  {new Intl.NumberFormat("no-NO", { style: "currency", currency: "NOK" }).format(
                    job.hourlyPay,
                  )}
                  /time
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
