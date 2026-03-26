const AboutHero = () => {
  return (
    <section className="py-16 md:py-24 bg-black max-h-[600px] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-heading text-4xl md:text-5xl leading-tight tracking-tight text-white font-bold mb-6">
          Inspired by <span className="text-blue-600">Strength,</span> Built for <span className="text-blue-600">Impact</span>
        </h1>

        <p className="text-lg md:text-xl text-neutral-200 max-w-5xl mx-auto leading-relaxed">
          Raka was inspired by the powerful presence of <span className="text-blue-400 font-bold">Raka Poshi</span> — a mountain that stands tall, 
          independent, and distinct among all others. That same philosophy defines our journey. 
          We are building a company that doesn’t follow trends but sets its own direction, helping 
          businesses rise above competition through technology. Our mission is to empower companies 
          worldwide with intelligent systems, automation, and scalable digital solutions that simplify 
          complexity and unlock growth. Just like a mountain that stands firm through every challenge, 
          we aim to build solutions that are reliable, future-ready, and designed to elevate businesses 
          to new heights.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;