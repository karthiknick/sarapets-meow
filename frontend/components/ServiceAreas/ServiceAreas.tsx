export default function ServiceAreas() {
  const areas = [
    "Kudlu gate",
    "HSR Layout",
    "Bommanahlli",
    "Electronic City",
    "Begur",
    "Singasandra",
    "JP Nagar",
    "Jayanagar",
    "Harlur",
    "Agra",
    "Bannerghatta Road",
    "Madivala",
    "Ejipura",
    "Wilson Garden",
    "Chandapura",
    "BTM Layout",
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-4xl font-bold text-[#0A1733]">
          Service Areas
        </h2>

        <p className="mt-4 text-gray-600">
          Doorstep pet grooming across Bangalore.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {areas.map((area) => (
            <div
              key={area}
              className="rounded-full bg-[#F3EFE3] px-5 py-3 text-[#0A1733]"
            >
              {area}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
