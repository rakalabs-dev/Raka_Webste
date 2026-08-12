import Image from "next/image";
import Link from "next/link";
import { projects } from "@/app/data/projects";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-black py-16 px-6">
      <div className="mx-auto max-w-8xl">
        <header className="mb-14 text-center">
          <h1 className="mb-4 text-4xl font-bold text-blue-600">
            Our Projects
          </h1>

          <p className="mx-auto max-w-2xl text-neutral-300">
            Explore real-world automation systems and AI solutions designed to
            transform manual workflows into intelligent, automated processes
            that save time, reduce effort, and improve business performance.
          </p>
        </header>

        <section className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              className="group overflow-hidden rounded-2xl border border-blue-700 bg-gray-950 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width:640px) 100vw,
                         (max-width:1024px) 50vw,
                         (max-width:1280px) 33vw,
                         25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h2 className="mb-3 text-lg font-semibold text-blue-500">
                  {project.title}
                </h2>

                <p className="text-sm leading-relaxed text-gray-300">
                  {project.shortDescription}
                </p>
              </div>
            </Link>
          ))}
        </section>

        <div className="mt-16 flex justify-center">
          <Link
            href="/contact"
            className="rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/40"
          >
            Let's Start →
          </Link>
        </div>
      </div>
    </main>
  );
}