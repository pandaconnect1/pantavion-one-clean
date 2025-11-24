import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function CompassPage() {
  return (
    <div className="min-h-screen w-full p-6 flex flex-col items-center justify-start gap-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center"
      >
        Compass
      </motion.h1>

      <Card className="w-full max-w-2xl p-4 rounded-2xl shadow-lg">
        <CardContent className="text-center">
          <p className="text-lg font-medium">
            Welcome to Pantavion Compass
          </p>
          <p className="text-sm mt-2 text-muted-foreground">
            (Placeholder) — Add your global navigation, guides, world folders,
            knowledge graph routes, and map links here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
