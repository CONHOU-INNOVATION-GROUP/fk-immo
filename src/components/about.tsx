/* eslint-disable @next/next/no-img-element */
import { about } from "@/lib/data";

export const About = () => {
  return (
    <section className="" id="about">
      <div className="max-w-4xl mx-auto  flex flex-col md:flex-row bg-white rounded-3xl shadow-xl">
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-4">{about.title}</h2>
          <h3 className="text-xl text-gray-600 mb-6">{about.subtitle}</h3>
          <p className="text-gray-600 mb-8">{about.description}</p>
          <a
            href={about.cta.href}
            className="inline-block bg-[#DC2626] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-red-700 transition-colors"
          >
            {about.cta.label}
          </a>
        </div>
        <img
          src={about.image}
          alt="Modern building"
          className="w-full h-[400px] object-cover"
        />
      </div>
    </section>
  );
};
