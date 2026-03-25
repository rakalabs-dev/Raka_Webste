"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative bg-neutral-900 text-neutral-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <div className="flex justify-center mb-12">
          <div className="relative w-[220px] h-[80px] md:w-[280px] md:h-[90px]">
            <Image
              src="/pictures/HomePage/Logo1.png"
              alt="Raka Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-4 gap-10 mb-12 text-center md:text-left">

          {/* About */}
          <div>
            <h4 className="text-white font-semibold mb-4">About</h4>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Empowering businesses with{" "}
              <span className="">AI-driven systems</span>,{" "}
              scalable SaaS, and secure digital infrastructure.
            </p>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
  <h4 className="text-white font-semibold mb-4">Services</h4>

  <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
    
    <li>
      <Link href="/services#full-stack-web-solutions" className="hover:text-white transition">
        Web Dev
      </Link>
    </li>

    <li>
      <Link href="/services#crm-optimization" className="hover:text-white transition">
        CRM
      </Link>
    </li>

    <li>
      <Link href="/services#business-automation" className="hover:text-white transition">
        Automation
      </Link>
    </li>

    <li>
      <Link href="/services#mobile-app-development" className="hover:text-white transition">
        Mobile Apps
      </Link>
    </li>

    <li>
      <Link href="/services#custom-saas-development" className="hover:text-white transition">
        SaaS
      </Link>
    </li>

    <li>
      <Link href="/services#fintech-solutions" className="hover:text-white transition">
        Fintech
      </Link>
    </li>

    <li>
      <Link href="/services#cybersecurity-services" className="hover:text-white transition">
        Security
      </Link>
    </li>

    <li>
      <Link href="/services#data-analytics" className="hover:text-white transition">
        Analytics
      </Link>
    </li>

    <li className="col-span-2 flex justify-center md:justify-start">
      <Link href="/services#ai-chatbots-for-business" className="hover:text-white transition">
        AI Chatbots
      </Link>
    </li>

  </ul>
</div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>

            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/" className="hover:text-white">Blog</Link></li>
            </ul>
          </div>

          {/* Contact / Social */}
          <div>
  <h4 className="text-white font-semibold mb-4">Contact</h4>

  <p className="text-sm text-neutral-400 mb-4">
    
  </p>

  <div className="flex justify-center md:justify-start gap-5">

    {/* LinkedIn */}
    <a
      href="#"
      className="text-neutral-400 hover:text-blue-500 transition"
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.6v2.2h.05c.5-.95 1.75-2.2 3.6-2.2C19 8 21 10.2 21 14v10h-4v-8.9c0-2.1-.75-3.5-2.6-3.5-1.4 0-2.2.95-2.6 1.85-.15.35-.2.85-.2 1.35V24H8V8z" />
      </svg>
    </a>

    {/* Instagram */}
    <a
      href="#"
      className="text-neutral-400 hover:text-pink-500 transition"
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 
        0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm5 
        5a5 5 0 110 10 5 5 0 010-10zm6.5-.88a1.13 
        1.13 0 11-2.26 0 1.13 1.13 0 012.26 
        0zM12 9a3 3 0 100 6 3 3 0 000-6z" />
      </svg>
    </a>

    {/* Facebook */}
    <a
      href="#"
      className="text-neutral-400 hover:text-blue-600 transition"
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12a10 10 0 10-11.63 
        9.88v-6.99H7.9V12h2.47V9.8c0-2.44 
        1.45-3.8 3.67-3.8 1.06 0 2.17.19 
        2.17.19v2.39H15c-1.21 0-1.59.75-1.59 
        1.52V12h2.7l-.43 2.89h-2.27v6.99A10 
        10 0 0022 12z" />
      </svg>
    </a>

  </div>
</div>
        </div>

        {/* Bottom */}
        <div className="border-t border-neutral-800 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">

          <p className="text-neutral-400">
            © 2026 <span className="text-white font-semibold">Raka Labs</span>. All rights reserved.
          </p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;