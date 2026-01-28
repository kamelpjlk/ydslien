"use client";

import { motion } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";

export function Badge() {
  return (
    <motion.div
      className="inline-flex items-center space-x-3 px-4 py-3 bg-white rounded-2xl shadow-lg"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <div className="w-2 h-2 rounded-full bg-green-500"></div>
      <span className="text-sm font-semibold text-gray-800">
        5+ New Patterns
      </span>
      <motion.div
        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
        transition={{ duration: 0.5 }}
      >
        <Zap className="w-4 h-4 text-orange-500" />
      </motion.div>
      <span className="text-sm font-semibold text-gray-800">Read More</span>
      <motion.div
        whileHover={{ x: 4 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <ArrowRight className="w-4 h-4 text-gray-800" />
      </motion.div>
    </motion.div>
  );
}
