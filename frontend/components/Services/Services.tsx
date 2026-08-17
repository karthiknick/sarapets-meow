import Link from "next/link";
import {
  Bath,
  Scissors,
  PawPrint,
  Sparkles,
  Smile
} from "lucide-react";

const services = [
  {
    icon: Bath,
    title: "Bath & Shampoo",
    description: "Gentle bath with premium pet-safe products.",
  },
  {
    icon: Scissors,
    title: "Haircut & Styling",
    description: "Trendy cuts and styling for every breed.",
  },
  {
    icon: PawPrint,
    title: "Nail Trimming",
    description: "Safe and careful nail trimming.",
  },
  {
    icon: Sparkles,
    title: "Ear Cleaning",
    description: "Clean ears for better health and hygiene.",
  },
  {
    icon: Smile,
    title: "Teeth Brushing",
    description: "Keep your pet's smile healthy and bright.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-[#F7F5F0] px-6 py-20 md:px-8"
    >
      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-5xl font-bold tracking-tight text-slate-900">
          Our Services
        </h2>

        <p className="mt-4 text-gray-500">
          Everything your pet needs to look and feel their best.
        </p>
      </div>

      {/* Service Cards */}
      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Icon */}
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-50 text-green-600 transition-all duration-300 group-hover:scale-110">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="font-bold text-slate-900">
              {service.title}
            </h3>

            {/* Description */}
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* View All Services */}
        <div className="text-center mt-10">
            <Link
                href="/services"
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
            >
                View All Services
            </Link>
            </div>
    </section>
  );
}
