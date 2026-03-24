import Link from "next/link";

const ServicesCTA = () => {
  return (
    <section className="py-16 md:py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl font-bold md:text-4xl text-white mb-6">
          Ready to Transform Your Operations?
        </h2>
        <p className="text-lg text-neutral-300 mb-8">
          Let's discuss which solutions will have the biggest impact on your business growth.
        </p>

        <Link href="/contact">
          <button className=" cursor-pointer bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-500 transition shadow-custom font-medium">
            Schedule a Consultation →
          </button>
        </Link>
        
      </div>
    </section>
  );
};

export default ServicesCTA;