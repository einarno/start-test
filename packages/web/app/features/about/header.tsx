import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import ComodIcon from "../../assets/comod_hvit.svg";

interface Props {
  hasLogo?: boolean;
}

export function LandingPageHeader({ hasLogo = true }: Props) {
  return (
    <nav className="container mx-auto flex h-16 items-center justify-between">
      <Link to="/">
        <Button variant="ghost" size="icon" className="shrink-0">
          {hasLogo && <img src={ComodIcon} alt="Comod logo" />}
        </Button>
      </Link>
      <div className="flex items-center space-x-12">
        <Link
          to="/info/empoyeers"
          className="text-primary-foreground transition-colors hover:text-primary-foreground/40"
        >
          For oppdragsgivere
        </Link>
        <Link
          to="/info/workers"
          className="text-primary-foreground transition-colors hover:text-primary-foreground/40"
        >
          For workers
        </Link>
        <Link
          to="/info/about"
          className="text-primary-foreground transition-colors hover:text-primary-foreground/40"
        >
          Om oss
        </Link>
        <Button>Logg inn</Button>
      </div>
    </nav>
  );
}
