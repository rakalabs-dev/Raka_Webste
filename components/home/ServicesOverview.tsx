"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";

/* =========================
   Animation Variants
========================= */

const leftContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const slideLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const cardContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const slideUp: Variants = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const ServicesOverview = () => {
  const services = [
    {
      title: "Business Automation",
      description: (
        <>
          Reduce manual work by up to <span className="font-semibold text-blue-500">60%</span> and streamline daily operations with automated workflows.
        </>
      ),
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      href: "/services#business-automation",
    },
    {
      title: "CRM Optimization",
      description: (
        <>
          Increase customer retention and sales visibility with structured CRM systems improving pipeline efficiency by{" "}
          <span className="font-semibold text-blue-500">30%-40%</span>.
        </>
      ),
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10" />
        </svg>
      ),
      href: "/services#crm-optimization",
    },
    {
      title: "Full Stack Web Solutions",
      description: (
        <>
          Build high-performance business websites and web apps that improve user experience and increase conversions by{" "}
          <span className="font-semibold text-blue-500">40%+</span>.
        </>
      ),
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
        </svg>
      ),
      href: "/services#full-stack-web-solutions",
    },
    {
      title: "AI Chatbots for Business",
      description: (
        <>
          Provide instant customer support and lead qualification 24/7 and reduce response time by{" "}
          <span className="font-semibold text-blue-500">70%</span>.
        </>
      ),
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01" />
        </svg>
      ),
      href: "/services#ai-chatbots-for-business",
    },
  ];

  return (
    <section className="py-16 md:py-20 relative">
      <div className="max-w-8xl mx-4 px-4 sm:px-6 lg:px-8  py-6 px-3 lg:px-6 bg-gray-900/60">

        {/* ================= HEADING ================= */}
        <motion.div
          className="text-center mb-12"
          variants={leftContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            variants={slideLeft}
            className="font-heading tracking-tight leading-tight text-4xl md:text-4xl text-white font-bold mb-4"
          >
            Solutions That Drive <span className="text-blue-500">Growth</span>
          </motion.h2>

          <motion.p
            variants={slideLeft}
            className="text-xl text-neutral-200 max-w-2xl mx-auto"
          >
            We solve real operational challenges with technology that works for your business.
          </motion.p>
        </motion.div>

        {/* ================= SERVICES GRID ================= */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={cardContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={slideUp} className="h-full">
              <Link href={service.href} className="block h-full">
                <div className="border border-blue-400/50 bg-black/40 p-8 rounded-lg h-full flex flex-col shadow-[0_10px_30px_rgba(59,130,246,0.25)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.5)] transform hover:scale-105 transition duration-300">

                  <div className="w-12 h-12 bg-blue-100 flex items-center justify-center mb-6 rounded-md">
                    {service.icon}
                  </div>

                  <div className="flex-grow">
                    <h3 className="font-bold text-blue-500 font-heading text-xl mb-3">
                      {service.title}
                    </h3>

                    <p className="text-neutral-200 mb-4">
                      {service.description}
                    </p>
                  </div>

                  <button className="text-blue-500 border-blue-600 border cursor-pointer bg-gray-800 px-4 py-2 mt-auto rounded-lg hover:bg-gray-700 transition font-semibold">
                    See Details →
                  </button>

                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex justify-center pt-15 items-center">
          <a
            href="https://calendly.com/rakalabs12/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="group bg-blue-600 text-white font-semibold px-10 py-4 rounded-xl shadow-lg transition duration-300 hover:bg-blue-500 hover:shadow-2xl hover:scale-105 cursor-pointer">
              Book Free Discovery Call →
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;