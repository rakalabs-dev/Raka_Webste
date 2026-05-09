import Link from "next/link";

export default function EVAutoQuoteCaseStudy() {
  return (
    <section className="py-20 bg-black">

      <div className="max-w-5xl mx-auto px-6">

        {/* Hero */}
        <h1 className="text-4xl md:text-5xl tracking-tight text-center font-heading text-white mb-6 leading-tight">
          How <span className="font-bold text-blue-500">Rakalabs</span> Built an End-to-End{" "}
          <span className="font-bold text-blue-500">EV Auto Quote</span> Automation System for Sales Operations
        </h1>

        <p className="text-lg text-neutral-200 mb-12 leading-relaxed">
          Auto Quote is a full-scale business process automation system designed for EV charging companies
          to eliminate manual bottlenecks across quoting, invoicing, payments, CRM synchronization,
          installer allocation, and installation scheduling. Built using Zapier, Python, Webhooks,
          HubSpot, Xero, Jumptech, Cypher, and database automation, it transforms fragmented operations
          into a unified intelligent workflow system.
        </p>

        {/* Executive Summary */}
        <h2 className="text-2xl font-heading font-bold text-blue-500 mb-4">
          Executive Summary
        </h2>

        <p className="text-neutral-200 mb-10 leading-relaxed">
          EV Auto Quote replaces a traditional 12–14 step manual operational process with a fully automated,
          event-driven system. It connects customer onboarding, quote generation, payment processing,
          CRM updates, and installer scheduling into a single seamless pipeline, improving speed,
          accuracy, and scalability across EV operations.
        </p>

        {/* Industry Problem */}
        <h2 className="text-2xl font-heading font-bold text-blue-500 mb-4">
          Industry Problem
        </h2>

        <p className="text-neutral-200 mb-4">
          EV charging companies face operational inefficiencies due to disconnected systems and manual workflows.
        </p>

        <ul className="list-disc pl-6 text-neutral-200 space-y-2 mb-10">
          <li>Slow quote generation (hours or days)</li>
          <li>Fragmented customer data across multiple systems</li>
          <li>Manual invoice creation and payment tracking</li>
          <li>CRM inconsistency across sales and operations teams</li>
          <li>Delayed installer assignment and scheduling</li>
          <li>High operational overhead due to manual coordination</li>
        </ul>

        {/* Solution */}
        <h2 className="text-2xl font-heading font-bold text-blue-500 mb-4">
          Our Solution — Auto Quote System
        </h2>

        <p className="text-neutral-200 mb-10 leading-relaxed">
          Auto Quote automates the entire EV sales and installation lifecycle:
          Customer Survey → Quote Generation → Payment Processing → Invoice Automation →
          CRM Sync → Installer Allocation → Installation Scheduling.
        </p>

        {/* Tech Stack */}
        <h2 className="text-2xl font-heading font-bold text-blue-500 mb-4">
          Technology Stack
        </h2>

        <ul className="list-disc pl-6 text-neutral-200 space-y-2 mb-10">
          <li>Zapier (workflow automation)</li>
          <li>Python (business logic & pricing engine)</li>
          <li>Webhooks (real-time triggers)</li>
          <li>HubSpot CRM (customer management)</li>
          <li>Xero (invoice & financial automation)</li>
          <li>Jumptech (order management)</li>
          <li>Cypher system (delivery workflow)</li>
          <li>Database automation & spreadsheets</li>
        </ul>

        {/* Phase 1 */}
        <h2 className="text-2xl font-heading text-blue-500 mb-4">
          Phase 1 — Customer Intake & Qualification
        </h2>

        <p className="text-neutral-200 mb-8">
          Customer survey submissions are captured via webhook, transformed into structured data,
          and automatically synced into HubSpot CRM. Deals and orders are created instantly
          without manual intervention.
        </p>

        {/* Phase 2 */}
        <h2 className="text-2xl font-heading text-blue-500 mb-4">
          Phase 2 — Intelligent Quote Generation
        </h2>

        <p className="text-neutral-200 mb-8">
          The system evaluates electrical requirements, property configuration, and installation constraints
          to generate intelligent charger recommendations such as:
        </p>

        <div className="text-neutral-200 mb-10">
          <p>• Tesla Gen 3 Wall Connector</p>
          <p>• Wallbox Pulsar Max</p>
          <p>• Zappi 2.1 Solar Compatible System</p>
        </div>

        {/* Phase 3 */}
        <h2 className="text-2xl font-heading text-blue-500 mb-4">
          Phase 3 — Payment Automation
        </h2>

        <p className="text-neutral-200 mb-8">
          Supports both card and bank transfer workflows. Payments automatically trigger invoice generation,
          CRM updates, and fulfillment activation without manual finance intervention.
        </p>

        {/* Phase 4 */}
        <h2 className="text-2xl font-heading text-blue-500 mb-4">
          Phase 4 — Installer Allocation
        </h2>

        <p className="text-neutral-200 mb-10">
          Once payment is confirmed, the system automatically assigns installers based on availability,
          workload, and geographic proximity, ensuring optimized scheduling and faster installations.
        </p>

        {/* Features */}
        <h2 className="text-2xl font-heading text-blue-500 mb-4">
          Key System Features
        </h2>

        <ul className="list-disc pl-6 text-neutral-200 space-y-2 mb-10">
          <li>Unified real-time operational visibility</li>
          <li>Event-driven workflow automation</li>
          <li>Dynamic pricing engine using Python</li>
          <li>Dual payment processing system</li>
          <li>Automated installer optimization</li>
          <li>Audit-ready logging and tracking</li>
        </ul>

        {/* Impact */}
        <h2 className="text-2xl font-heading text-blue-500 mb-4">
          Business Impact
        </h2>

        <ul className="space-y-2 text-neutral-200 mb-12">
          <li>✔ Up to 80% reduction in manual coordination tasks</li>
          <li>✔ Quote generation reduced from hours to minutes</li>
          <li>✔ Near real-time payment processing accuracy</li>
          <li>✔ Improved customer experience and communication</li>
          <li>✔ Scalable system without proportional staffing growth</li>
        </ul>

        {/* Why It Matters */}
        <h2 className="text-2xl font-heading text-blue-500 mb-4">
          Why This Matters
        </h2>

        <p className="text-neutral-200 leading-relaxed mb-12">
          EV companies win on speed and execution. Auto Quote transforms fragmented operations into a
          unified automation system that improves response time, reduces costs, and enables scalable growth
          without operational bottlenecks.
        </p>

      </div>

      {/* Back Button */}
      <div className="text-center">
        <Link href="/">
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-full transition duration-300 shadow-md">
            ← Back to Home
          </button>
        </Link>
      </div>

    </section>
  );
}