import ServicesHero from "@/components/services/ServicesHero";
import ServicesCTA from "@/components/services/ServicesCTA";
import ServiceBlock from "@/components/services/ServiceBlock";
import { ReactNode } from "react";

type Service = {
  title: string;
  description: ReactNode;
  image: string;
};

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
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
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
    title: "Digital Marketing & SEO",
    description: (
      <>
        A great product or service needs visibility to succeed online. Our
        digital marketing and SEO strategies help businesses rank higher in
        search engines, attract targeted traffic, and convert visitors into
        loyal customers. Through technical SEO, content strategy, and
        data-driven marketing campaigns, businesses can increase organic
        traffic by over{" "}
        <span className="font-semibold text-red-500">50%</span> and generate a
        steady flow of qualified leads.
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
  },

  {
    title: "AI Integration",
    description: (
      <>
        Artificial Intelligence is transforming how businesses operate. We
        integrate AI solutions into your existing systems to automate complex
        processes, uncover valuable insights from data, and improve
        decision-making across your organization. Companies leveraging AI
        effectively often operate{" "}
        <span className="font-semibold text-red-500">2× faster</span> and gain a
        significant competitive advantage through smarter, data-driven
        operations.
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
  },
];

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />

      {services.map((service, index) => (
        <ServiceBlock
          key={service.title}
          title={service.title}
          description={service.description}
          image={service.image}
          reverse={index % 2 !== 0}
        />
      ))}

      <ServicesCTA />
    </>
  );
}