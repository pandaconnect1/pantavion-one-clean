
"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const sections = [
  "World Map & Regions",
  "Continents & Countries",
  "Cities & Places",
  "Travel & Airports",
  "Marine & Ports",
  "Environment & Climate",
  "Culture & Heritage",
  "Health & Hospitals",
  "Education & Universities",
  "Business & Jobs",
  "Sports & Stadiums",
  "Embassies & Services"
];

export default function CompassPage() {
  return (
    <div className="min-h-screen w-full px-4 py-8 flex flex-col items-center gap-8">
      {/* Τίτλος */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-center"
      >
        Pantavion Compass
      </motion.h1>

      {/* Υπότιτλος */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-sm md:text-base text-center max-w-2xl text-muted-foreground"
      >
        Ο παγκόσμιος χάρτης του Pantavion. Εδώ θα οργανώσουμε ηπείρους, χώρες,
        πόλεις, διαδρομές και θεματικούς φακέλους για όλον τον κόσμο.
      </motion.p>

      {/* Κεντρική κάρτα */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="w-full max-w-4xl"
      >
        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-6 md:p-8 flex flex-col gap-6">
            <div className="text-center">
              <p className="text-lg md:text-xl font-semibold">
                Global Navigation Hub
              </p>
              <p className="text-xs md:text-sm mt-2 text-muted-foreground">
                (Placeholder) — Στο επόμενο στάδιο θα μπουν real χάρτες,
                δέντρο ηπείρων / χωρών / πόλεων και links προς όλες τις
                ενότητες του Pantavion.
              </p>
            </div>

            {/* Grid με ενότητες */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {sections.map((item) => (
                <div
                  key={item}
                  className="text-xs md:text-sm border rounded-2xl px-3 py-2 md:px-4 md:py-3 text-center cursor-default hover:shadow-sm transition"
                >
                  {item}
                </div>
              ))}
            </div>

            <p className="text-[11px] md:text-xs text-center text-muted-foreground">
              * Αργότερα θα συνδέσουμε το Compass με Neo4j και χάρτες
              (continents → countries → cities → places).
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
