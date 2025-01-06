import { createFileRoute, Link } from "@tanstack/react-router";
import ComodImg from "../assets/comod.svg";
import { LandingSearch } from "@/features/landingPage/LandingSearch";
import { Button } from "@/components/ui/button";
import { LandingPageHeader } from "@/features/about/header";
import { AnimatedBackground } from "@/features/landingPage/AnimatedBackground";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <AnimatedBackground />
      <LandingPageHeader />
      <main className="mt-8 flex-1">
        {/* Hero Section */}
        <section className="h-[calc(100vh-100px)] text-primary-foreground">
          <div className="container">
            {/* Full-width Image */}
            <div className="mb-8">
              <img src={ComodImg} alt="COMOD" className="h-auto w-full object-contain" />
            </div>

            {/* Text and Search Section */}
            <div className="flex flex-col gap-8 md:flex-row md:items-center lg:justify-between">
              {/* Landing Search */}
              <div className="w-full md:w-1/2">
                <LandingSearch />
              </div>

              {/* Text Content - Hidden on Small Screens */}
              <div className="hidden md:block md:w-1/2">
                <h1 className="text-3xl font-bold tracking-tighter lg:text-4xl">
                  Enkel løsning for oppdrag. Enkel måte å tjene litt ekstra penger på.
                </h1>
                <p className="mt-4 text-lg">Vi kaller det vinn-vinn!</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
