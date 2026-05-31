import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      <Image
        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
        alt="Luxury Property"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <span className="inline-block bg-[#D4AF37] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            Premium Real Estate Solutions
          </span>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Find Your Dream Property Today
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mt-6 max-w-2xl">
            Premium residential and commercial properties
            in prime locations. Helping families and
            investors discover exceptional opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a
              href="#properties"
              className="bg-[#D4AF37] text-white px-8 py-4 rounded-lg text-center font-semibold hover:opacity-90 transition"
            >
              View Properties
            </a>

            <a
              href="#contact"
              className="border border-white text-white px-8 py-4 rounded-lg text-center font-semibold hover:bg-white hover:text-black transition"
            >
              Contact Us
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-16 max-w-xl">
            <div>
              <h3 className="text-3xl font-bold text-white">
                500+
              </h3>
              <p className="text-gray-300">
                Properties Sold
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">
                1000+
              </h3>
              <p className="text-gray-300">
                Happy Clients
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">
                15+
              </h3>
              <p className="text-gray-300">
                Years Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}