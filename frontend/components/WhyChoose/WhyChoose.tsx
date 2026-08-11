import {
  ShieldCheck,
  Heart,
  Clock,
  Award,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Pet Safety First",
    description:
      "Our trained groomers ensure a safe and comfortable experience for every pet.",
  },
  {
    icon: Heart,
    title: "Loving Care",
    description:
      "We treat every pet like family with patience, kindness and attention.",
  },
  {
    icon: Clock,
    title: "On-Time Service",
    description:
      "Reliable appointments and timely grooming sessions that fit your schedule.",
  },
  {
    icon: Award,
    title: "Experienced Groomers",
    description:
      "Professional grooming experts with experience handling different breeds.",
  },
];

export default function WhyChoose() {
  return (
    <section id="why-choose-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#0A1733]">
            Why Choose Us?
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Professional grooming services designed to keep your pets happy,
            healthy and looking their best.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-lg transition"
              >
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                  <Icon className="text-green-600" size={28} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-[#0A1733]">
                  {feature.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}