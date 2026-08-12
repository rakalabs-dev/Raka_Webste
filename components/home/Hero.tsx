"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

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

export default function Hero() {
  return (
    <section className="relative py-4 md:py-8 xl:py-10">
      <div className="relative z-20 mx-auto max-w-7xl xl:max-w-none px-4 py-4 md:py-6 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
        <div className="grid items-center gap-10 md:grid-cols-2 xl:gap-16 2xl:gap-24">
          {/* Left */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-6 rounded-lg border bg-gray-900/50 px-3 py-8 lg:mt-8 lg:px-6"
          >
            <motion.h1
              variants={slideInLeft}
              className="mb-6 font-heading text-3xl font-bold leading-tight tracking-tight text-gray-100 md:text-4xl xl:text-4xl 2xl:text-5xl"
            >
              Building the Digital Systems Powering the{" "}
              <span className="font-semibold text-blue-500">
                Future of EV
              </span>{" "}
              &{" "}
              <span className="font-semibold text-blue-500">
                Renewable Energy
              </span>
            </motion.h1>

            <motion.p
              variants={slideInLeft}
              className="mb-8 text-base leading-relaxed text-neutral-200 md:text-lg xl:text-xl"
            >
              RAKA LABS builds intelligent systems that automate workflows,
              connect your tools, and help EV charging and renewable energy
              businesses scale faster with less manual work.
            </motion.p>

            <motion.div
              variants={slideInLeft}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="/contact"
                className="rounded-lg bg-blue-700 px-8 py-3 text-center font-bold text-gray-100 transition hover:bg-blue-600 shadow-custom"
              >
                Let's Start Now →
              </Link>
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative h-[320px] w-full rounded-xl bg-black/40 shadow-[0_10px_30px_rgba(59,130,246,0.5)] md:h-[380px] xl:h-[420px]"
          >
            <Image
              src="/pictures/HomePage/home11.png"
              alt="Business Automation"
              fill
              priority
              className="rounded-xl object-cover opacity-90"
            />
          </motion.div>
        </div>

        {/* Bottom Card */}
        <div className="mt-10 flex w-full justify-center">
          <div className="relative w-full rounded-2xl border border-blue-500 bg-black/40 p-5 shadow-lg backdrop-blur-md lg:w-2/3 md:p-8">
            <motion.div
              className="m-4 flex justify-center md:m-6"
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative h-[130px] w-[300px] sm:h-[170px] sm:w-[380px] md:h-[250px] md:w-[560px] lg:h-[320px] lg:w-[720px] xl:h-[380px] xl:w-[860px] 2xl:h-[420px] 2xl:w-[950px]">
                <Image
                  src="/pictures/HomePage/Logo1.png"
                  alt="Raka Labs"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="mt-4 text-center"
            >
              <motion.p
                variants={slideInLeft}
                className="text-sm font-medium text-gray-300 md:text-base"
              >
                <span className="font-semibold text-blue-500">60%</span> Less
                Manual Work •{" "}
                <span className="font-semibold text-blue-500">40%</span> Better
                Pipeline Visibility •{" "}
                <span className="font-semibold text-blue-500">
                  2× Faster Operations
                </span>
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}