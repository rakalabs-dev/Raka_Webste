"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import SphereModel from "./SphereModel";

// Import 3D Model (disable SSR)
const RakaModel = dynamic(() => import("./RicilixModel"), {
  ssr: false,
});

/* =========================
   Animation Variants
========================= */

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const Hero = () => {
  return (
    <section className="relative  py-4 md:py-8 xl:py-10">
      {/* Sphere Background */}

      <div className=" relative z-20  max-w-7xl xl:max-w-none md:py-6 py-4 mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">

        {/* ===== HERO GRID ===== */}
        <div className="grid md:grid-cols-2 gap-10 xl:gap-16 2xl:gap-24 items-center">

          {/* ================= TEXT SECTION ================= */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="border mt-6 lg:mt-8 rounded-lg py-8 px-3 lg:px-6  bg-gray-900/50"
          >
            <motion.h1
              variants={slideInLeft}
              className="tracking-tight font-bold leading-tight font-heading text-3xl md:text-4xl xl:text-4xl 2xl:text-5xl text-gray-100 mb-6"
            >
              Building the Digital Systems Powering the <span className="font-heading font-semibold text-blue-500">Future of EV</span>{" "}  & <span className="font-heading font-semibold text-blue-500">Renewable Energy</span>{" "}
            </motion.h1>

            <motion.p
              variants={slideInLeft}
              className="text-base md:text-lg xl:text-xl text-neutral-200 mb-8 leading-relaxed"
            >
             RAKA LABS builds intelligent systems that automate workflows, connect your tools, and help EV charging & renewable-energy businesses scale faster—with less manual work.
            </motion.p>

            <motion.div
              variants={slideInLeft}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact">
                <button className="bg-blue-700 cursor-pointer font-bold text-gray-100 px-8 py-3 rounded-lg hover:bg-blue-600 transition shadow-custom">
                  Lets Start Now →
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* ================= IMAGE SECTION ================= */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative h-[320px] md:h-[380px] xl:h-[420px] w-full
             rounded-xl
             shadow-[0_10px_30px_rgba(59,130,246,0.5)]  // blue shadow
             bg-black/40" // semi-transparent overlay to see behind
          >
            <Image
              src="/pictures/HomePage/home11.png"
              alt="Business Automation"
              fill
              className="rounded-xl object-cover opacity-90" // slightly transparent
              priority
            />
          </motion.div>
        </div><div className="w-full flex justify-center items-center mt-10">
          <div className="relative bg-black/40 lg:w-2/3 backdrop-blur-md border border-blue-500 shadow-lg rounded-2xl p-5 md:p-8">

            {/* ================= LOGO ================= */}
            <motion.div
              className="m-4 md:m-6 flex justify-center"
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div
                className="
    relative
    w-[300px] h-[130px]
    sm:w-[380px] sm:h-[170px]
    md:w-[560px] md:h-[250px]
    lg:w-[720px] lg:h-[320px]
    xl:w-[860px] xl:h-[380px]
    2xl:w-[950px] 2xl:h-[420px]
  "
              >
                <Image
                  src="/pictures/HomePage/Logo1.png"
                  alt="Raka Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>

            {/* ================= STATS ================= */}
            <motion.div
              className="mt-4 text-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.p
                variants={slideInLeft}
                className="text-sm md:text-base text-gray-300 font-medium"
              >
                <span className="font-heading font-semibold text-blue-500">60%</span>{" "}
                Less Manual Work •{" "}
                <span className="font-heading font-semibold text-blue-500">40%</span>{" "}
                Better Pipeline Visibility •{" "}
                <span className="font-heading font-semibold text-blue-500">2× Faster Operations</span>
              </motion.p>
            </motion.div>
          </div>
        </div>

      </div>

      {/* ===== 3D MODEL (Optional) ===== */}
      {/* 
      <div className="mt-6 w-full">
        <RakaModel />
      </div> 
      */}

    </section>
  );
};

export default Hero;