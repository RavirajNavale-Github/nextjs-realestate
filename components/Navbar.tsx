"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Properties",
    href: "#properties",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">
          <a
            href="#"
            className="text-2xl font-bold text-slate-900"
          >
            PrimeEstate
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-[#D4AF37] transition"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:flex bg-[#D4AF37] text-white px-5 py-3 rounded-lg hover:opacity-90 transition"
          >
            Get Consultation
          </a>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-700"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              className="bg-[#D4AF37] text-white py-3 text-center rounded-lg"
            >
              Get Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}