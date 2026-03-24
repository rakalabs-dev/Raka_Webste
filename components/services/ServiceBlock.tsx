import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  title: string;
  description: ReactNode;
  image: string;
  reverse?: boolean;
};

const ServiceBlock = ({ title, description, image, reverse }: Props) => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-black to-blue-950">
      <div className="max-w-8xl mx-auto px-6 sm:px-16 lg:px-20">

        <div
          className={`grid md:grid-cols-2 gap-12 items-center ${
            reverse ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >

          {/* TEXT */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl leading-tight tracking-tight text-blue-500 font-bold mb-6">
              {title}
            </h2>

            <p className="text-neutral-400 mb-8">
              {description}
            </p>

            <Link href="/contact">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 cursor-pointer transition">
                Let's Start →
              </button>
            </Link>
          </div>

          {/* IMAGE */}
          <div className="relative h-[380px] w-full rounded-2xl shadow-[8px_10px_25px_rgba(255,0,0,0.4)] ">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover rounded-2xl"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default ServiceBlock;