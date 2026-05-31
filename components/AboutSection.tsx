export default function AboutSection() {
  const stats = [
    {
      number: "500+",
      label: "Properties Sold",
    },
    {
      number: "1000+",
      label: "Happy Clients",
    },
    {
      number: "15+",
      label: "Years Experience",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <span className="text-[#D4AF37] font-semibold uppercase tracking-wider">
              About Us
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
              Your Trusted Partner in Real Estate
            </h2>

            <p className="text-gray-600 mt-6 leading-relaxed">
              We help individuals, families, and businesses
              buy, sell, and rent premium residential and
              commercial properties across prime locations.
              Our team of experienced professionals ensures
              a smooth and transparent property journey from
              start to finish.
            </p>

            <p className="text-gray-600 mt-4 leading-relaxed">
              With years of industry expertise and a strong
              network of verified listings, we are committed
              to delivering the best real estate solutions
              tailored to your goals and budget.
            </p>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex bg-[#0F172A] text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition"
              >
                Talk To Our Experts
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300 text-center"
              >
                <h3 className="text-4xl font-bold text-[#D4AF37]">
                  {item.number}
                </h3>

                <p className="text-gray-600 mt-3">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mt-20">
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-relaxed">
              To simplify the real estate experience by
              connecting clients with verified properties,
              expert guidance, and exceptional customer
              service throughout every transaction.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Our Vision
            </h3>

            <p className="text-gray-600 leading-relaxed">
              To become the most trusted and preferred real
              estate company by consistently delivering value,
              transparency, and long-term relationships with
              our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}