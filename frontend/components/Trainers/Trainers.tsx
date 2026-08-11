export default function Trainers() {
  return (
    <section
      id="trainers"
      className="py-20 bg-gray-100"
    >
      <h2 className="text-4xl font-bold text-center">
        Meet Our Trainers
      </h2>

      <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-3 gap-8">
        {[1,2,3].map((trainer) => (
          <div
            key={trainer}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="h-64 bg-gray-300"></div>

            <div className="p-6">
              <h3 className="font-bold text-xl">
                Trainer Name
              </h3>

              <p className="text-gray-600">
                Certified Dog Behavior Specialist
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}