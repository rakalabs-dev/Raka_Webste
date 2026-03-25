import Image from "next/image";
import Link from "next/link";

const MobileAppSolutions = () => {
  return (
    <section className="py-16 md:py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image Section */}
          <div className="order-1 md:order-1 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/pictures/projects/mobile-app.png"
              alt="Mobile App Development"
              fill
              className="object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="order-2 md:order-2">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-md text-sm font-medium mb-6">
              Mobile App Development
            </div>

            <h2 className="font-heading text-3xl md:text-4xl leading-tight tracking-tight text-blue-700 mb-6">
              Scalable Mobile Apps for Modern Businesses
            </h2>

            <p className="text-neutral-600 mb-6">
              Build high-performance mobile applications that deliver seamless user experiences,
              engage your audience, and help your business grow faster across iOS and Android platforms.
            </p>

            <div className="space-y-4 mb-8">

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-heading text-neutral-900 mb-1">Cross-Platform Development</h4>
                  <p className="text-neutral-600">Launch apps on both iOS and Android with a single scalable codebase.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-heading text-neutral-900 mb-1">User-Centric UI/UX</h4>
                  <p className="text-neutral-600">Design intuitive and engaging interfaces that enhance user retention and satisfaction.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-heading text-neutral-900 mb-1">Performance & Scalability</h4>
                  <p className="text-neutral-600">Build fast, secure, and scalable apps that grow with your business needs.</p>
                </div>
              </div>

            </div>

            {/* Call-to-Action */}
            <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition">
              Build Your Mobile App
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
};

export default MobileAppSolutions;