import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="grid min-h-[80vh] grid-cols-1 md:grid-cols-2">
        <motion.div
          className="flex items-center bg-primary p-12 md:p-24"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold leading-tight text-secondary md:text-6xl">
            Velkommen til Comod!
          </h1>
        </motion.div>
        <motion.div
          className="flex items-center bg-muted p-12 md:p-24"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary-content text-xl md:text-2xl">
            Er du klar for å ta på deg morsomme oppdrag og tjene litt ekstra penger? Da har du kommet til rett
            sted!
          </p>
        </motion.div>
      </section>

      {/* What is Comod Section */}
      <section className="grid min-h-[60vh] grid-cols-1 md:grid-cols-3">
        <motion.div
          className="bg-secondary-content col-span-2 p-12 md:p-24"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-8 text-3xl font-bold text-secondary md:text-4xl">Hva er Comod?</h2>
          <p className="mb-6 text-lg text-gray-700">
            Comod er din go-to tjeneste for enkeltstående oppdrag innen alt fra butikker til eventer,
            festivaler, servering og mer. Vi er her for å gjøre livet ditt litt enklere, enten du trenger
            ekstra hender til oppdraget ditt, eller du er ute etter en fleksibel måte å tjene penger på.
          </p>
          <p className="text-lg text-gray-700">
            For oppdragsgivere betyr dette ingen forpliktelser, bare kompetent hjelp når du trenger det. Vi er
            betrodd av butikker, festivaler, arrangementer, agenturer og brands over hele Norge.
          </p>
        </motion.div>
        <motion.div
          className="flex items-center justify-center bg-primary p-12 md:p-24"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <svg className="h-full w-full max-w-[300px]" viewBox="0 0 200 200">
            <motion.path
              d="M 100,100 m -75,0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
              fill="none"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="8"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </svg>
        </motion.div>
      </section>

      {/* History Section */}
      <section className="grid min-h-[60vh] grid-cols-1 md:grid-cols-3">
        <motion.div
          className="flex items-center justify-center bg-secondary p-12 md:p-24"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative h-48 w-48">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute inset-0 rounded-lg border-2 border-primary"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </div>
        </motion.div>
        <motion.div
          className="col-span-2 bg-white p-12 md:p-24"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-8 text-3xl font-bold text-secondary md:text-4xl">Vår Historie</h2>
          <p className="mb-6 text-lg text-gray-700">
            Det hele startet da Emilie begynte sin første butikkjobb og så hvor vanskelig det kunne være å
            fylle ledige vakter. Gjennom årene i bransjen ble hun stadig vitne til at problemet fortsatte å
            vokse, uten noen smidige løsninger for å fylle de ledige vaktene.
          </p>
          <p className="text-lg text-gray-700">
            I mai 2023 startet hun Comod i det små, og våren 2024 utvidet vi horisonten og begynte å hjelpe
            til på eventer, festivaler, servering og mye mer.
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="grid min-h-[60vh] grid-cols-1 md:grid-cols-2">
        <motion.div
          className="bg-primary-content flex items-center p-12 md:p-24"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="mb-8 text-3xl font-bold text-secondary md:text-4xl">
              Gi oss dine tilbakemeldinger!
            </h2>
            <p className="text-secondary-content mb-8 text-lg">
              Vi jobber hele tiden med å forbedre tjenesten vår. Vi elsker å høre fra deg, enten det er ris
              eller ros. Din innsikt hjelper oss med å gjøre Comod enda bedre.
            </p>
            <button className="text-primary-content hover:bg-secondary-light flex items-center gap-2 rounded-full bg-secondary px-8 py-3 font-semibold">
              <MessageCircle className="h-5 w-5" />
              Gi tilbakemelding
            </button>
          </div>
        </motion.div>
        <motion.div
          className="flex items-center justify-center bg-secondary p-12 md:p-24"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-primary-content text-center text-xl font-medium md:text-2xl">
            Takk for at du har valgt Comod, og velkommen til oss!
          </p>
        </motion.div>
      </section>
    </div>
  );
}
