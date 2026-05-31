import Image from "next/image";
import { properties } from "@/data/properties";

export default function FeaturedProperties() {
  return (
    <section
      id="properties"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-[#D4AF37] font-semibold uppercase tracking-widest">
            Featured Properties
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
            Explore Premium Listings
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            Discover carefully selected residential and
            commercial properties in some of the most
            desirable locations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">
                <span className="inline-block text-sm bg-[#D4AF37]/10 text-[#D4AF37] px-3 py-1 rounded-full">
                  {property.type}
                </span>

                <h3 className="text-2xl font-bold text-slate-900 mt-4">
                  {property.title}
                </h3>

                <p className="text-gray-500 mt-2">
                  📍 {property.location}
                </p>

                <p className="text-[#D4AF37] text-2xl font-bold mt-4">
                  {property.price}
                </p>

                <button
                  className="w-full mt-6 bg-[#0F172A] text-white py-3 rounded-lg hover:bg-slate-800 transition"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}