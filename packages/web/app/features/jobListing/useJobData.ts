import type { Job } from "@/lib/jobs";
import { useState, useMemo } from "react";

/**
 * Type for your Location items
 */
export interface LocationType {
  id: string;
  name: string;
  image: string;
}

const jobDescriptions = [
  "Join our dynamic team in a fast-paced retail environment. Excellent customer service skills required.",
  "Looking for energetic individuals to support our grocery operations. Flexible hours available.",
  "Exciting opportunity in our flagship store. Competitive pay and growth opportunities.",
  "Part-time position perfect for students or those seeking supplemental income.",
  "Full-time role with benefits. Experience in retail or customer service preferred but not required.",
];

const longDescriptionTemplate = (id: string): string => `
## Job ${id}: Exciting Opportunity

We're looking for talented individuals to join our team as **Job ${id} specialists**. This role involves working in a fast-paced environment, collaborating with dynamic teams, and delivering outstanding service to our customers.

### Key Responsibilities:
- Engage with customers to provide excellent service.
- Maintain the integrity of our store operations.
- Collaborate with team members to achieve goals.

### Qualifications:
- Strong communication skills.
- Previous experience in a related field is a plus.
- Ability to adapt to new challenges with a positive attitude.

### Benefits:
- Competitive hourly pay.
- Opportunities for growth and career development.
- A supportive and inclusive workplace culture.

Apply now to join our team and make an impact!
`;

const defaultLocations: LocationType[] = [
  { id: "overalt", name: "Hvor som helst", image: "/placeholder.svg" },
  { id: "oslo", name: "Oslo", image: "/placeholder.svg" },
  { id: "trondheim", name: "Trondheim", image: "/placeholder.svg" },
  { id: "bergen", name: "Bergen", image: "/placeholder.svg" },
];

/**
 * Function to create a single job
 */
export function createSingleJob(index: string): Job {
  const randomLocation = defaultLocations[Math.floor(Math.random() * defaultLocations.length)];
  const randomEmployerId = Math.floor(Math.random() * 100);

  // Generate startDate within the next 30 days
  const startDate = new Date(Date.now() + Math.random() * 30 * 86400000);

  // Ensure endDate is between 1 hour and 4 days after startDate
  const minDuration = 1 * 60 * 60 * 1000; // 1 hour in milliseconds
  const maxDuration = 4 * 24 * 60 * 60 * 1000; // 4 days in milliseconds
  const randomDuration = minDuration + Math.random() * (maxDuration - minDuration);
  const endDate = new Date(startDate.getTime() + randomDuration);

  // Calculate hoursWorking
  const msPerDay = 24 * 60 * 60 * 1000; // Milliseconds in a day
  const totalDays = Math.ceil((endDate.getTime() - startDate.getTime()) / msPerDay);

  let hoursWorking = 0;
  if (totalDays === 1) {
    // If the job spans a single day
    hoursWorking = Math.min(10, Math.round((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60)));
  } else {
    // If the job spans multiple days
    hoursWorking = Math.min(10, totalDays * 10);
  }

  return {
    id: `job-${index}`,
    title: `Job ${index}`,
    company: `Company ${index}`,
    city: randomLocation.name,
    hourlyPay: Math.floor(Math.random() * 30) + 10,
    industry: Math.random() > 0.5 ? "retail" : "grocery",
    startDate,
    endDate,
    hoursWorking, // New field
    description: jobDescriptions[Math.floor(Math.random() * jobDescriptions.length)],
    longDescription: longDescriptionTemplate(index),
    employer: {
      id: `emp-${randomEmployerId}`,
      name: `Employer ${randomEmployerId}`,
      description: "A great company to work for.",
      website: "https://example.com",
      logoUrl: "/logos/coca_cola.svg",
    },
  };
}

/**
 * Function to generate an initial set of jobs
 */
function generateInitialJobs(): Job[] {
  return Array.from({ length: 1000 }, (_, i) => createSingleJob(String(i)));
}

/**
 * Hook to manage and filter job data
 */
export function useJobData(
  filters: { city?: string; minHourlyPay?: number; industry?: string },
  numberOfJobs: number,
) {
  // Stateful storage of initial mock jobs
  const [initialJobs] = useState(() => generateInitialJobs());

  // Filtered jobs based on criteria
  const filteredJobs = useMemo(() => {
    const filtered = initialJobs.filter((job) => {
      const matchesCity = !filters.city || job.city.toLowerCase().includes(filters.city.toLowerCase());
      const matchesPay = !filters.minHourlyPay || job.hourlyPay >= filters.minHourlyPay;
      const matchesIndustry = !filters.industry || job.industry === filters.industry;

      return matchesCity && matchesPay && matchesIndustry;
    });

    // Limit to the specified number of jobs
    return filtered.slice(0, numberOfJobs);
  }, [filters, numberOfJobs, initialJobs]);

  return filteredJobs;
}

/**
 * Hook to manage and filter location data
 */
export function useLocationData(search: string) {
  return defaultLocations.filter((location) => location.name.toLowerCase().includes(search.toLowerCase()));
}
