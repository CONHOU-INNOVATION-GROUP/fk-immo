import { hero } from "@/lib/data";

export const Hero = () => {
  return (
    <div className="relative h-[100dvh]" id="home">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero.webp')",
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto pt-10">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-4 text-black">
          {hero.title}
        </h1>
        <p className="text-md md:text-lg text-center mb-6 text-gray-800 max-w-2xl">
          {hero.subtitle}
        </p>
        <a
          href={hero.cta.href}
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-sm font-medium transition-colors uppercase"
        >
          {hero.cta.label}
        </a>
      </div>
    </div>
  );
};
