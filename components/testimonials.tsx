"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Testimonials() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  return (
    <section
      ref={containerRef}
      id="testimonials"
      className="min-h-[50vh] flex items-center justify-center px-4 md:px-6 lg:px-8 py-20 border-t border-red-900/30 bg-black overflow-hidden"
    >
      <motion.div 
        style={{ y, scale }}
        className="max-w-5xl mx-auto w-full text-center"
      >
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black mb-12 tracking-tighter text-white uppercase"
        >
          CLIENT <span className="text-red-600">LOGS</span>
        </motion.h2>

        {/* Empty State */}
        <div
          className="border border-red-900/30 bg-red-950/5 rounded-none p-12 relative overflow-hidden group hover:border-red-600 transition-colors"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-red-600/20" />
          
          <div className="space-y-6 relative z-10">
            <div className="text-6xl text-red-900/50 font-serif">"</div>
            <p className="text-2xl font-bold text-white">
              Oops! No transmission data found.
            </p>
            <p className="text-gray-400 font-mono max-w-2xl mx-auto">
              Be the first to initiate a handshake. Share your experience working with me.
            </p>
          </div>

          <div className="mt-8">
            <a
              href="mailto:hulo@hulobiral.online?subject=Testimonial for Hulo Biral"
              className="inline-flex items-center gap-2 px-8 py-3 bg-red-600 text-black font-bold uppercase font-mono hover:bg-white hover:text-red-600 transition-all duration-300"
            >
              Submit_Feedback
            </a>
          </div>
          
          <p className="text-xs text-red-900 mt-6 font-mono">
             // DATA WILL BE ENCRYPTED AND STORED SECURELY
          </p>
        </div>
      </motion.div>
    </section>
  )
}