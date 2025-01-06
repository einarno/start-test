import { motion } from "framer-motion";
import { PlayCircle, CreditCard, RefreshCcw, FileText, Calendar } from "lucide-react";
import { HowItWorks, type Step } from "./HowItWorks";

export function Workers() {
  const steps: Step[] = [
    {
      title: "SEND DIN CV VÅR VEI",
      description:
        "Send CV'en din, og vis oss din spennende arbeidserfaring. Inkluder 3-4 setninger som beskriver deg, og hvor du holder til.",
      icon: FileText,
    },
    {
      title: "DU FÅR TILBUD OM EN VAKT",
      description:
        "Når et passende oppdrag dukker opp sender vi deg all nødvendig informasjon. Du velger selv om du ønsker å takke ja eller nei. Takker du ja blir du koblet opp i en chat med oppdragsgiver, og du blir onboardet via Comod før oppdragsdagen.",
      icon: Calendar,
    },
    {
      title: "GET TO WORK",
      description: "Du er ferdig onboardet, og møter opp blid og motivert for å utføre den avtalte vakten.",
      icon: PlayCircle,
    },
    {
      title: "BETALING & VURDERING",
      description:
        "Du blir betalt for oppdraget innen 48t. Utbetaling skjer via Easyfreelance som tar seg av alt av skatter og forsikringer. En gjensidig vurdering av opplevelsen blir loggført.",
      icon: CreditCard,
    },
    {
      title: "REPEAT!",
      description:
        "Bygg nettverk, skaff deg en ekstra inntektskilde og jobb fleksibelt - enklere blir det neppe!",
      icon: RefreshCcw,
    },
  ];

  return (
    <HowItWorks
      steps={steps}
      title="Side hustle made easy - endelig!"
      description={`Vi har gjort det enkelt for deg å tjene litt ekstra penger ved å tilby
                      fleksible arbeidsmuligheter!`}
    />
  );
}
