import ServicesHero from "@/components/services/ServicesHero";
import ServicesCTA from "@/components/services/ServicesCTA";
import ServiceBlock from "@/components/services/ServiceBlock";
import { ReactNode } from "react";

type Service = {
  title: string;
  description: ReactNode;
  image: string;
};

// ✅ Helper to generate clean IDs
const generateId = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

const services: Service[] = [
  {
    title: "Full Stack Web Solutions",
    description: (
      <>
        We design and develop modern, high-performance business websites and web
        applications tailored to your company's goals. Our full stack solutions
        focus on scalability, performance, and seamless integrations so your
        digital platform grows with your business. Companies using optimized
        websites often see up to{" "}
        <span className="font-semibold text-red-500">40% higher conversion rates</span>{" "}
        and significantly improved user engagement.
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800",
  },

  {
    title: "Business Automation",
    description: (
      <>
        Manual processes slow down growth and increase operational costs. We
        build intelligent automation systems that handle repetitive tasks,
        streamline workflows, and connect your business tools into a single
        efficient ecosystem. Businesses implementing automation often reduce
        manual workload by{" "}
        <span className="font-semibold text-red-500">60% or more</span> while
        significantly improving productivity and operational accuracy.
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800",
  },

  {
    title: "CRM Optimization",
    description: (
      <>
        A well-optimized CRM system is the backbone of successful sales and
        customer relationships. We implement and optimize CRM platforms that
        centralize your customer data, automate follow-ups, and provide clear
        visibility into your sales pipeline. Businesses that optimize CRM
        workflows typically experience{" "}
        <span className="font-semibold text-red-500">
          30%–40% improvement in sales efficiency
        </span>{" "}
        and stronger long-term customer retention.
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800",
  },

  {
    title: "AI Chatbots for Business",
    description: (
      <>
        Customer expectations are higher than ever. Our AI-powered chatbots
        provide instant responses, automate customer support, and help qualify
        leads around the clock. By integrating intelligent conversational AI
        into your website or business platform, companies can reduce response
        time by up to{" "}
        <span className="font-semibold text-red-500">70%</span> while delivering
        consistent and reliable support to customers{" "}
        <span className="font-semibold text-red-500">24/7</span>.
      </>
    ),
    image: "/pictures/projects/RevTalk ss.png",
  },

  {
    title: "Mobile App Development",
    description: (
      <>
        We build high-performance mobile applications designed to deliver seamless
        user experiences across iOS and Android. Businesses often see up to{" "}
        <span className="font-semibold text-red-500">60% higher user engagement</span>.
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
  },

  {
    title: "Fintech Solutions",
    description: (
      <>
        We develop secure financial technology systems like payment platforms and
        digital wallets, improving efficiency by{" "}
        <span className="font-semibold text-red-500">2×</span>.
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
  },

  {
    title: "Cybersecurity Services",
    description: (
      <>
        Protect your business from digital threats with advanced security
        solutions, reducing risks by{" "}
        <span className="font-semibold text-red-500">70%+</span>.
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
  },

  {
    title: "Custom SaaS Development",
    description: (
      <>
        Build scalable SaaS platforms that automate workflows and increase
        efficiency by{" "}
        <span className="font-semibold text-red-500">3×</span>.
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
  },

  {
    title: "Data Analytics",
    description: (
      <>
        Turn data into insights and improve decision-making by{" "}
        <span className="font-semibold text-red-500">40%</span>.
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
  },
];

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />

      {services.map((service, index) => (
        <div id={generateId(service.title)} key={service.title}>
          <ServiceBlock
            title={service.title}
            description={service.description}
            image={service.image}
            reverse={index % 2 !== 0}
          />
        </div>
      ))}

      <ServicesCTA />
    </>
  );
}