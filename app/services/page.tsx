import ServicesHero from "@/components/services/ServicesHero";
import ServicesCTA from "@/components/services/ServicesCTA";
import ServiceBlock from "@/components/services/ServiceBlock";

type Service = {
  title: string;
  description: string; // ✅ changed to string
  image: string;
};

// ✅ Helper to generate clean IDs
const generateId = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

const services: Service[] = [
  {
    title: "Full Stack Web Solutions",
    description:
      "We craft high-performance web applications that are not just visually appealing but built to drive real business results. From scalable backend architectures to seamless frontend experiences, our full stack solutions are designed to support your growth at every stage. We focus on speed, responsiveness, and modern design principles to ensure your platform stands out in a competitive market. Whether you're launching a startup or upgrading an existing system, we create web solutions that convert visitors into customers and keep them engaged. Our approach combines clean code, strong UX, and future-ready technology to give your business a powerful digital foundation.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800",
  },
  {
    title: "Business Automation",
    description:
      "Repetitive manual tasks slow down growth and drain valuable resources. We design intelligent automation systems that streamline your workflows, eliminate inefficiencies, and allow your team to focus on what truly matters. From integrating your tools to building custom automation pipelines, we create systems that run your operations smoothly in the background. Our solutions reduce human error, improve consistency, and significantly boost productivity. Whether it's lead management, internal processes, or customer workflows, we help transform your business into a highly efficient, automated ecosystem that scales effortlessly with your growth.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800",
  },
  {
    title: "CRM Optimization",
    description:
      "Your CRM should be your strongest growth engine — not just a data storage tool. We optimize CRM systems to give you complete visibility into your customer journey, automate follow-ups, and streamline your sales pipeline. By refining workflows and integrating smart automation, we help you close deals faster and build stronger relationships with your customers. Our approach ensures that no lead is lost and every opportunity is maximized. With a well-optimized CRM, your team gains clarity, efficiency, and the ability to scale sales operations with confidence.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800",
  },
  {
    title: "AI Chatbots for Business",
    description:
      "Modern customers expect instant responses — and that’s exactly what our AI chatbots deliver. We build intelligent chatbot systems that handle customer queries, guide users, and capture leads 24/7 without any manual effort. These bots integrate seamlessly with your website and business tools, providing accurate and consistent responses at scale. Beyond support, they actively engage visitors, qualify leads, and enhance overall user experience. With our chatbot solutions, you can reduce response time, improve customer satisfaction, and create a smarter, always-available digital assistant for your business.",
    image: "/pictures/projects/RevTalk ss.png",
  },
  {
    title: "Mobile App Development",
    description:
      "In today’s mobile-first world, having a powerful app is essential for growth. We build high-performance mobile applications that deliver seamless user experiences across devices. From intuitive UI design to scalable backend systems, our apps are crafted to engage users and drive long-term retention. Whether it’s a customer-facing app or an internal business tool, we ensure smooth performance, security, and scalability. Our goal is to turn your ideas into reliable mobile solutions that not only look great but also create real impact and value for your business.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
  },
  {
    title: "Fintech Solutions",
    description:
      "We build secure and scalable fintech solutions that power modern financial operations. From payment gateways to digital wallets and transaction systems, our solutions are designed with performance, security, and compliance in mind. We help businesses simplify complex financial processes while ensuring a seamless user experience. With a strong focus on reliability and data protection, our fintech systems enable faster transactions, reduced risks, and improved operational efficiency. Whether you're launching a fintech product or upgrading existing systems, we provide the technology to support your growth.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
  },
  {
    title: "Cybersecurity Services",
    description:
      "In a world of increasing digital threats, protecting your business is critical. We provide advanced cybersecurity solutions that safeguard your systems, data, and operations from potential risks. Our approach includes secure architecture design, threat detection, and proactive monitoring to ensure your business stays protected at all times. We focus on building resilient systems that prevent breaches and maintain trust with your customers. With our cybersecurity services, you can operate with confidence, knowing your digital infrastructure is secure and future-ready.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
  },
  {
    title: "Custom SaaS Development",
    description:
      "We design and develop custom SaaS platforms tailored to your unique business needs. Our solutions focus on scalability, performance, and seamless user experience, enabling you to automate operations and unlock new revenue streams. From multi-tenant architectures to cloud-based deployments, we build systems that grow with your business. Whether you're creating a new product or modernizing an existing one, we deliver SaaS solutions that are reliable, efficient, and built for long-term success.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
  },
  {
    title: "Data Analytics",
    description:
      "Data is one of your most valuable assets — if used correctly. We help businesses transform raw data into meaningful insights that drive smarter decisions. Our data analytics solutions include dashboards, reporting systems, and predictive models that give you a clear understanding of your performance. By identifying trends and opportunities, we empower you to optimize strategies and stay ahead of the competition. With the right data insights, your business can grow faster, reduce risks, and make confident, data-driven decisions.",
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