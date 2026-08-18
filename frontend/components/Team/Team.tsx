import Image from "next/image";

const groomers = [
  {
    name: "John Paul.A",
    role: "Senior Groomer",
    experience: "5+ Years Experience",
    image: "/team/john-paul.jpg",
  },
//   {
//     name: "Rahul Nair",
//     role: "Dog Styling Expert",
//     experience: "5+ Years Experience",
//     image: "/team/groomer2.jpg",
//   },
//   {
//     name: "Priya Sharma",
//     role: "Cat Care Specialist",
//     experience: "6+ Years Experience",
//     image: "/team/groomer3.jpg",
//   },
];

export default function Team() {
  return (
    <section id="team" className="bg-[#F7F5F0] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#0A1733]">
            Founder & Lead Groomer
          </h2>

          <p className="mt-4 text-gray-600">
            Experienced professionals who care for your pets like family.
          </p>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8">
            {groomers.map((groomer) => (
              <div
                key={groomer.name}
                className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <Image
                  src={groomer.image}
                  alt={groomer.name}
                  width={500}
                  height={500}
                  className="h-64 w-full object-cover"
                />
          
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900">
                    {groomer.name}
                  </h3>
          
                  <p className="mt-2 text-green-600">
                    {groomer.role}
                  </p>
          
                  <p className="mt-2 text-sm text-gray-500">
                    {groomer.experience}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
