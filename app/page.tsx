"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { AnimatedLogo } from "./components/AnimatedLogo";
import { LinkCard } from "./components/LinkCard";
import { Typewriter } from "./components/Typewriter";
import { LINKS } from "./constants";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // After logo animation completes (1.5s), show content
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-primary-blackblue text-white selection:bg-primary-orange1/30 selection:text-primary-orange3">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-primaryblue/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary-orange1/10 rounded-full blur-[120px] animate-pulse-slow"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      {/* Logo - Starts centered, animates to top */}
      <motion.div
        className="fixed left-1/2 z-30 pointer-events-none"
        style={{ x: "-50%" }}
        initial={{
          top: "50vh",
          y: "-50%",
          scale: 1.3,
        }}
        animate={{
          top: showContent ? "2.5rem" : "50vh",
          y: showContent ? "0" : "-50%",
          scale: showContent ? 1 : 1.3,
          opacity: showContent ? 0 : 1,
        }}
        transition={{
          duration: 1.2,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        <AnimatedLogo />
      </motion.div>

      <main className="relative z-10 max-w-2xl mx-auto px-6 pt-10 pb-32 flex flex-col items-center">
        <AnimatePresence>
          {showContent && (
            <>
              {/* Hero Section */}
              <motion.div
                className="flex flex-col items-center text-center mb-4 md:mb-12 w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Logo in final position */}
                <div className="mb-4 md:mb-6">
                  <AnimatedLogo />
                </div>
                <p className="text-gray-400 text-base md:text-lg mb-3 md:mb-6 font-medium min-h-[1.5rem]">
                  <Typewriter
                    text="Navigating your business through the digital landscape."
                    speed={50}
                  />
                </p>
              </motion.div>

              {/* Links Section */}
              <motion.div
                className="w-full space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {LINKS.map((link, index) => (
                  <LinkCard key={link.id} item={link} index={index} />
                ))}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-20 bg-primary-blackblue/80 backdrop-blur-md border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Your Digital Step. All rights
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
