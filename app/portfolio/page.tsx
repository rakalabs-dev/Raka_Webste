import Link from "next/link";
import Image from "next/image";
import { projects } from "@/app/data/projects";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-black py-16 px-6">
      <div className="max-w-8xl mx-auto">

        <h1 className="text-4xl font-bold text-blue-600 mb-4 text-center">
          Our Projects
        </h1>

        <p className="text-neutral-200 text-center max-w-2xl mx-auto mb-14">
  Explore real-world automation systems and AI solutions designed to transform manual workflows into intelligent, automated processes that save time, reduce effort, and improve business performance.
</p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              className="group bg-gray-950 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-blue-700"
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-lg font-semibold text-blue-500 mb-3">
                  {project.title}
                </h2>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {project.shortDescription}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-16">
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/40"
          >
            Let’s Start →
          </Link>
        </div>

      </div>
    </div>
  );
}