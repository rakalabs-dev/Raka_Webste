export const projects = [
  {
    slug: "automated-quote-invoice-system",
    title: "Automated Quote & Invoice Generation System",
    shortDescription:
      "Zapier-powered automation system for EV charging companies that generates smart quotes, pricing calculations, and structured invoice-ready data automatically.",
  
    image: "/pictures/projects/quote send zap.png",
  
    content: {
      problem:
        "EV charging companies faced major inefficiencies in their quote generation workflow. Manual pricing calculations, product matching, and installation estimations were time-consuming, error-prone, and difficult to scale. Sales teams struggled to provide accurate quotes quickly while maintaining consistency across multiple customer scenarios.",
  
      solution:
        "I built a fully automated quote and invoice generation system using Zapier automation, Python processing, and webhook integrations. The system intelligently processes customer requirements, matches suitable EV chargers, calculates installation costs and discounts, stores structured quote data, and sends API-ready JSON to backend systems in real-time.",
  
      features: [
        "Automated quote generation workflow",
        "Smart EV charger recommendation engine",
        "Dynamic pricing & discount calculations",
        "Alternative product suggestions",
        "Webhook-based real-time processing",
        "Structured JSON API integration",
        "Customer & quote data storage",
        "Test vs production routing system",
      ],
  
      techStack: [
        "Zapier",
        "Python",
        "Webhooks",
        "Google Sheets",
        "JSON Processing",
        "REST APIs",
        "Automation Workflows",
        "ISO 8601 Date Handling",
      ],
  
      impact: [
        "Reduced manual quote generation time significantly",
        "Eliminated pricing and product selection errors",
        "Improved scalability without increasing staff",
        "Enhanced customer experience with multiple product options",
        "Centralized quote tracking and structured data management",
      ],
    },
  },
  {
    slug: "crm-ecommerce-automation-system",
    title: "CRM & E-commerce Automation System",
    shortDescription:
      "Zapier-powered automation system that synchronizes orders, CRM updates, invoicing, and customer communication into a fully automated order-to-delivery workflow.",
  
    image: "/pictures/projects/cypher_to_jt.png",
  
    content: {
      problem:
        "Businesses managing order fulfillment across CRM, invoicing systems, and e-commerce platforms face major inefficiencies due to manual order tracking, delayed customer communication, disconnected systems, and frequent data syncing errors between logistics and financial workflows. This leads to poor operational efficiency and reduced customer satisfaction.",
  
      solution:
        "I built a fully automated CRM and e-commerce order processing system using Zapier. The system captures real-time order data via webhooks, validates and normalizes it, applies intelligent routing based on order type and status, and synchronizes data across CRM, invoicing, and e-commerce platforms without manual intervention.",
  
      features: [
        "Automated order capture via webhook",
        "Intelligent order validation & formatting",
        "Dynamic routing based on order type & status",
        "CRM project status auto-updates",
        "Automated shipping email notifications",
        "Invoice retrieval & synchronization",
        "E-commerce backend data sync",
        "Customer personalization engine",
        "Real-time order lifecycle automation",
      ],
  
      techStack: [
        "Zapier",
        "Webhooks",
        "JavaScript (Zapier Code Steps)",
        "WooCommerce",
        "Xero",
        "Microsoft Outlook API",
        "CRM Integration",
        "REST API Workflows",
      ],
  
      impact: [
        "Fully automated order-to-delivery lifecycle",
        "Reduced manual order processing errors",
        "Improved customer communication and transparency",
        "Enabled real-time CRM and invoice synchronization",
        "Increased operational efficiency across systems",
        "Scalable multi-platform order management system",
      ],
    },
  },
  {
    slug: "smart-automation-architecture-optimization-webhooks",
    title: "Smart Automation Architecture Optimization using Webhooks & Centralized Control",
    shortDescription:
      "Optimization of a multi-Zap automation system into a centralized, webhook-driven architecture to reduce costs, improve efficiency, and enable scalable workflow execution.",
  
    image: "/pictures/projects/jt main zap.png",
  
    content: {
      problem:
        "The existing automation system consisted of 14–15 independent Zaps, all triggered by the same 'Jumptech Status Update' event. This caused all workflows to execute simultaneously, even when only 1–2 were relevant. The remaining Zaps only stopped after filter conditions, leading to redundant executions, high task consumption, increased operational cost, and poor scalability.",
  
      solution:
        "I redesigned the automation architecture into a centralized, smart routing system using a single Main Controller Zap. This system uses conditional logic (Paths) and webhook-based execution to trigger only relevant sub-workflows. Complex processes were modularized into Sub Zaps, which are executed only when required via webhooks.",
  
      features: [
        "Centralized automation controller (Main Zap)",
        "Conditional routing using Paths (6–7 logic branches)",
        "Webhook-based on-demand execution system",
        "Modular Sub Zap architecture",
        "Consolidation of 8–9 simple workflows into main flow",
        "Reduced redundant automation triggers",
        "Optimized execution logic for efficiency",
        "Scalable workflow design structure",
      ],
  
      techStack: [
        "Zapier",
        "Webhooks",
        "Conditional Logic",
        "Workflow Automation Architecture",
        "Jumptech Status Integration",
        "Data Routing & Transformation",
        "Automation System Design",
      ],
  
      impact: [
        "Reduced automation task usage significantly",
        "Eliminated redundant workflow executions",
        "Improved system performance and response time",
        "Simplified debugging and maintenance",
        "Reduced 14–15 Zaps into a scalable architecture",
        "Enabled enterprise-level automation design",
      ],
    },
  },
  {
    slug: "automated-quote-customer-notification-system",
    title: "Automated Quote Generation & Customer Notification System",
    shortDescription:
      "Zapier-based automation system that generates instant EV charger quotes, applies dynamic discounts, and sends personalized email and SMS notifications to customers.",
  
    image: "/pictures/projects/quote _discount.png",
  
    content: {
      problem:
        "Businesses selling configurable products like EV chargers and installation services face slow and manual quote generation processes, inconsistent pricing calculations, and delayed customer communication. This leads to errors, reduced efficiency, and lost conversion opportunities.",
  
      solution:
        "I built a fully automated quote generation and customer notification system using Zapier. The system triggers when a project status changes to 'Quote Ready', validates incoming data, applies dynamic pricing with discounts, generates personalized customer summaries, and automatically sends quotes via email and SMS in real-time.",
  
      features: [
        "Automated 'Quote Ready' workflow trigger",
        "Real-time data validation & filtering",
        "Smart product configuration routing (1–3 options)",
        "Dynamic pricing engine with discount logic",
        "Personalized customer quote generation",
        "Time-based email scheduling system",
        "Multi-channel notifications (Email + SMS)",
        "Test vs production environment separation",
        "Automatic CRM/status updates",
      ],
  
      techStack: [
        "Zapier",
        "Webhooks",
        "JavaScript",
        "Google Sheets",
        "Zapier Tables",
        "Microsoft Outlook API",
        "SMS API Integration",
        "Trello",
      ],
  
      impact: [
        "Reduced quote generation time from minutes to seconds",
        "Eliminated manual pricing and configuration errors",
        "Improved customer response speed and engagement",
        "Increased conversion rates through faster follow-ups",
        "Standardized sales and quotation workflow at scale",
      ],
    },
  },
 
 
  {
    slug: "ai-powered-hr-management-automation-n8n",
    title: "AI-Powered HR Management Automation System (n8n)",
  
    shortDescription:
      "AI-driven HR automation system built using n8n that streamlines recruitment, candidate evaluation, communication, and HR workflows using intelligent decision-making and automation.",
  
    image: "/pictures/projects/Hr_MANAGMENT_PROJECT.png",
  
    content: {
      problem:
        "HR departments often rely on manual processes for candidate screening, interview coordination, and employee data management. This leads to time-consuming evaluations, delayed communication with candidates, poor tracking of applications, and a lack of centralized automation, resulting in inefficient hiring workflows and reduced candidate experience.",
  
      solution:
        "I built a fully automated AI-powered HR management system using n8n that automates the entire recruitment lifecycle. The system captures candidate data, processes it through AI-based evaluation logic, routes applicants through multiple decision paths, and automatically handles communication, tracking, and HR decision support.",
  
      features: [
        "Automated candidate data collection via webhook/forms",
        "AI-based candidate evaluation and scoring logic",
        "Multi-path workflow routing (shortlisted, rejected, review)",
        "Automated HR communication (emails & notifications)",
        "Interview scheduling automation support",
        "Centralized candidate tracking system",
        "Real-time workflow decision processing",
        "Scalable modular HR automation architecture",
      ],
  
      techStack: [
        "n8n Workflow Automation",
        "JavaScript (Function Nodes)",
        "Webhooks",
        "JSON Data Processing",
        "External APIs Integration",
        "AI-based Decision Logic",
        "Automation Orchestration",
      ],
  
      impact: [
        "Significantly reduced manual HR workload",
        "Faster candidate screening and decision-making",
        "Instant communication with applicants",
        "Improved hiring accuracy and efficiency",
        "Better tracking and structured HR data management",
        "Scalable system for high-volume recruitment",
      ],
    },
  },
    {
      slug: "revtalk-ai-support-1",
      title: "RevTalk – AI-Powered EV Charger Support Chatbot",
      shortDescription:
        "AI-powered 24/7 EV charger support assistant built using RAG architecture and LLM integration.",
      image: "/pictures/projects/RevTalk ss.png",
      content: {
        problem:
          "RevCharge required a 24/7 automated support system to handle customer inquiries related to EV charger compatibility, pricing, and installation. Manual support limited response time and scalability.",
  
        solution:
          "I built a Retrieval-Augmented Generation (RAG) based AI chatbot that intelligently retrieves product and business information and generates accurate responses in real-time.",
  
        features: [
          "Instant customer support",
          "Context-aware responses",
          "Escalation to human representatives",
          "Seamless website integration",
        ],
  
        techStack: [
          "Python",
          "RAG Architecture",
          "LLM API (Gemini/OpenAI)",
          "Vector Database",
          "Next.js",
          "Tailwind CSS",
        ],
  
        impact: [
          "Reduced manual support workload",
          "Enabled 24/7 automated assistance",
          "Improved customer engagement experience",
        ],
      },
    },
  
    {
      slug: "hubspot-crm-transformation-1",
      title: "HubSpot CRM Transformation – EV Charger Operations Automation",
      shortDescription:
        "Centralized CRM and automation system built to unify EV charger leads, customers, and installations across B2B, B2C, and B2B2C workflows.",
      image: "/pictures/projects/hubspot-crm.png",
      content: {
        problem:
          "The EV charger company was managing leads, installations, and customer support across multiple disconnected platforms including email inboxes, Jumptech, Typeform, and internal databases. Teams manually searched systems to locate customer and installation information, causing delays, duplicate records, and lack of operational visibility across B2B, B2C, and B2B2C business models.",
    
        solution:
          "RICILIX implemented HubSpot as a centralized CRM and designed a structured data architecture to unify customer and installation records. Data from multiple platforms was cleaned using Python, mapped, and migrated into HubSpot. Custom objects were introduced to support complex B2B2C workflows, while Zapier automation enabled automatic contact creation, updates, and real-time data synchronization.",
    
        features: [
          "Centralized CRM for leads, customers, and installations",
          "Multi-source data migration and structured data mapping",
          "Custom objects supporting B2B, B2C, and B2B2C workflows",
          "Automated survey-to-CRM synchronization",
          "Custom EV installation and property data tracking",
          "Duplicate prevention and standardized data structure",
        ],
    
        techStack: [
          "HubSpot CRM",
          "Python (Data Cleaning & Migration)",
          "Zapier Automation",
          "Jumptech Integration",
          "Typeform Data Migration",
          "Custom CRM Data Architecture",
        ],
    
        impact: [
          "75% reduction in manual tracking workload",
          "Customer lookup time reduced from 10–15 minutes to under 1 minute",
          "Centralized visibility across all installations and customers",
          "Improved support response efficiency",
          "Scalable CRM foundation for business growth",
        ],
      },
    },
  
  ];
  