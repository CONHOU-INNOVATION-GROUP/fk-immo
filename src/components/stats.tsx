import { stats } from "@/lib/data";

export const Stats = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 uppercase">
          Trouvez Votre Future Propriété
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center border border-gray-400 p-8 md:border-b-0"
            >
              <div className="text-4xl md:text-5xl font-semi text-[#044BD9] mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
