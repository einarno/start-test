import { motion } from "framer-motion";
import { ClipboardList, Users, PlayCircle, CreditCard, RefreshCcw } from "lucide-react";
import { HowItWorks } from "./HowItWorks";

export function Employeers() {
  const steps = [
    {
      title: "KARTLEGG BEHOVET",
      description:
        "Fortell oss nøyaktig hva du trenger hjelp til, når du trenger det, og varigheten på oppdraget",
      icon: ClipboardList,
    },
    {
      title: "DU BLIR MATCHET",
      description:
        "Vi finner den perfekte worker for deg og ditt oppdrag basert på dine ønsker og behov. Du velger selv om du ønsker å takke ja eller nei til workeren. Takker du ja blir dere koblet opp i en chat, og workeren blir onboardet via Comod",
      icon: Users,
    },
    {
      title: "JOBBEN BLIR UTFØRT",
      description:
        "Den utvalgte workeren møter opp onbordet og motivert til avtalt tid og sted - klar til å utføre arbeidet. Timeprisen starter på kr. 250,- eks mva",
      icon: PlayCircle,
    },
    {
      title: "BETALING & VURDERING",
      description:
        "Du blir fakturert for arbeidet, og en gjensidig vurdering av opplevelsen vil bli loggført",
      icon: CreditCard,
    },
    {
      title: "REPEAT!",
      description:
        "Spar tid, penger og hodebry ved hjelp av eksterne ressurser som er motiverte og fleksible - enklere blir det neppe!",
      icon: RefreshCcw,
    },
  ];

  return (
    <HowItWorks
      steps={steps}
      title={"Hvordan fungerer det?"}
      description={`Endelig en måte å fylle den lørdagsvakten ingen kan ta! Eller kanskje hjelp til varetelling?
      Serveringsoppdrag? Julehjelp? sample-salg? Pop-up butikk? Vertinneoppdrag?`}
    />
  );
}
