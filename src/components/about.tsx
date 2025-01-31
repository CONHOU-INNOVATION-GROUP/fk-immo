/* eslint-disable @next/next/no-img-element */
import { about } from "@/lib/data";

export const About = () => {
  return (
    <section className="" id="about">
      <div className="max-w-4xl mx-auto items-center flex flex-col md:flex-row bg-white rounded-3xl shadow-xl">
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-4">{about.title}</h2>
          <h3 className="text-xl text-gray-600 mb-6">{about.subtitle}</h3>
          <p className="text-gray-600 mb-8">{about.description}</p>
        </div>
        <img
          src={about.image}
          alt="Modern building"
          className="w-full max-h-[400px]  h-full object-cover"
        />
      </div>
    </section>
  );
};
