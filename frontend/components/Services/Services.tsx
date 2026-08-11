const services = [
  {
    title: "Bath & Shampoo",
    description: "Gentle bath with premium pet-safe products.",
    icon: (
      <svg
        viewBox="0 0 64 64"
        className="h-12 w-12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 32h40" />
        <path d="M16 32v12c0 5 4 8 8 8h16c4 0 8-3 8-8V32" />
        <path d="M10 28h44" />
        <path d="M20 24v-8" />
        <path d="M32 24v-12" />
        <path d="M44 24v-6" />
        <circle cx="20" cy="12" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="32" cy="7" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="44" cy="13" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },

  {
    title: "Haircut & Styling",
    description: "Trendy cuts and styling for every breed.",
    icon: (
      <svg
        viewBox="0 0 64 64"
        className="h-12 w-12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="18" cy="44" r="7" />
        <circle cx="18" cy="25" r="7" />
        <path d="M24 29L48 12" />
        <path d="M24 40L48 14" />
        <path d="M29 36l19 16" />
      </svg>
    ),
  },

  {
    title: "Nail Trimming",
    description: "Safe and careful nail trimming.",
    icon: (
      <svg
        viewBox="0 0 64 64"
        className="h-12 w-12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 14l32 36" />
        <path d="M26 11l25 29" />
        <path d="M15 20l20 24" />
        <path d="M38 42l8 8" />
        <path d="M45 38l8 8" />
        <path d="M22 19l-5 5" />
      </svg>
    ),
  },

  {
    title: "Ear Cleaning",
    description: "Clean ears for better health and hygiene.",
    icon: (
      <svg
        viewBox="0 0 64 64"
        className="h-12 w-12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M37 13c-12 0-21 9-21 22 0 12 6 18 13 18 6 0 9-4 9-9 0-4-3-7-6-7-3 0-5 2-5 5" />
        <path d="M37 13c8 0 14 6 14 14 0 7-4 12-10 12" />
        <path d="M35 28c4 0 7 3 7 7" />
      </svg>
    ),
  },

  {
    title: "Teeth Brushing",
    description: "Keep your pet's smile healthy and bright.",
    icon: (
      <svg
        viewBox="0 0 64 64"
        className="h-12 w-12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 18c4-4 9-5 18-5s14 1 18 5v19c0 7-5 13-10 13-4 0-6-3-8-3s-4 3-8 3c-5 0-10-6-10-13V18z" />
        <path d="M23 26c3 2 6 3 9 3s6-1 9-3" />
      </svg>
    ),
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
      <div className="mt-10 flex justify-center">
        <button className="flex items-center gap-3 rounded-xl bg-green-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-green-700">
          View all services
          <span className="text-lg">›</span>
        </button>
      </div>
    </section>
  );
}