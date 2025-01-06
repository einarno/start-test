import { Button } from "@/components/ui/button";
import type { Job } from "@/lib/jobs";
import testImage from "@/assets/cola.svg";

interface JobContactSidebarProps {
  company: Job["employer"];
}

export function JobContactSidebar({ company }: JobContactSidebarProps) {
  return (
    <div className="space-y-6">
      <div className="rounded-lg border bg-background p-6">
        <img src={testImage} alt="job advert logo" />
        <div className={"mt-6 space-y-2"}>
          <div>
            <div className="font-medium">Arbeidsgiver:</div>
            <div>{company.name}</div>
          </div>
        </div>

        <Button className="mt-6 w-full" size="lg">
          Søk her
        </Button>

        <div className="mt-6 space-y-2">
          <a href={company.website} className="block text-primary-foreground hover:underline">
            Hjemmeside
          </a>
        </div>
      </div>
    </div>
  );
}
