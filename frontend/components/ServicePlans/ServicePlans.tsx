"use client";

const plans = [
  {
    name: "Essential Bath",
    price: "999",
    color: "bg-rose-100",
    included: [
      "Bath",
      "Shampoo & Conditioning",
      "Deshedding",
      "Blow Drying",
      "Combing & Brushing",
    ],
    excluded: [
      "Nail Clipping",
      "Paw Massage",
      "Teeth Cleaning",
      "Ear & Eye Cleaning",
      "Sanitary Trimming",
      "Hair Styling",
      "Full Body Trimming",
    ],
  },

  {
    name: "Bath & Basic Grooming",
    price: "1499",
    color: "bg-cyan-100",
    popular: true,
    included: [
      "Bath",
      "Shampoo & Conditioning",
      "Deshedding",
      "Blow Drying",
      "Combing & Brushing",
      "Nail Clipping",
      "Paw Massage",
      "Teeth Cleaning",
      "Ear & Eye Cleaning",
      "Sanitary Trimming",
      "Minor Trim - Face, Paws & Belly",
    ],
    excluded: ["Hair Styling", "Full Body Trimming"],
  },

  {
    name: "Just Trim",
    price: "1599",
    color: "bg-purple-100",
    included: [
      "Nail Clipping",
      "Ear & Eye Cleaning",
      "Full Body Trimming",
    ],
    excluded: [
      "Bath",
      "Shampoo & Conditioning",
      "Deshedding",
      "Blow Drying",
      "Combing & Brushing",
      "Sanitary Trimming",
      "Teeth Cleaning",
      "Paw Massage",
      "Hair Styling",
    ],
  },

  {
    name: "Complete Makeover",
    price: "1999",
    color: "bg-amber-100",
    included: [
      "Bath",
      "Shampoo & Conditioning",
      "Deshedding",
      "Blow Drying",
      "Combing & Brushing",
      "Nail Clipping",
      "Paw Massage",
      "Teeth Cleaning",
      "Ear & Eye Cleaning",
      "Sanitary Trimming",
      "Minor Trim - Face, Paws & Belly",
      "Hair Styling",
      "Full Body Trimming",
    ],
    excluded: [],
  },
];

export default function ServicePlans() {
  const whatsappNumber = "916361263658"; // Replace with your WhatsApp number

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-slate-900">
          Our Grooming Packages
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Choose the perfect grooming package for your furry friend.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`${plan.color} rounded-3xl shadow-lg overflow-hidden relative`}
          >
            {plan.popular && (
              <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
            )}

            <div className="p-8">
              <h2 className="text-3xl font-bold text-center mb-8">
                {plan.name}
              </h2>

              <div className="space-y-4">
                {plan.included.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="text-green-600 text-xl">✅</span>
                    <span className="text-lg">{item}</span>
                  </div>
                ))}

                {plan.excluded.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="text-red-500 text-xl">❌</span>
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-300 mt-10 pt-8">
                <div className="text-center">
                  <p className="text-xl text-gray-700 mb-2">Starting From</p>

                  <p className="text-5xl font-bold text-slate-900">
                    ₹{plan.price}
                  </p>
                </div>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    `Hi Sara Pet.Meow,
                    I would like to book the following grooming package:
                    
                    🐕Package: ${plan.name}
                    💰Price: ₹${plan.price}
                    
                    ✅ Included Services:
                    ${plan.included.map((item) => `• ${item}`).join("\n")}
                    
                    Please contact me to confirm the appointment and available slots.
                    
                    Thank you.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-600 hover:bg-green-700 text-white text-center font-semibold py-4 rounded-xl mt-8 transition"
                >
                  Book on WhatsApp
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
