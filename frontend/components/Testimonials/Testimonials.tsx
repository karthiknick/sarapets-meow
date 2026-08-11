export default function Testimonials() {
  const reviews = [
    {
      name: "Ananya R",
      pet: "Golden Retriever",
      review:
        "Amazing service! My dog came back clean, happy, and smelling wonderful. Highly recommended.",
    },
    {
      name: "Rahul K",
      pet: "Persian Cat",
      review:
        "The groomers were gentle and professional. My cat usually hates grooming but was very comfortable.",
    },
    {
      name: "Priya S",
      pet: "Shih Tzu",
      review:
        "Booking was easy and the service exceeded expectations. Will definitely book again.",
    },
  ];

  return (
    <section id="testimonials" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#0A1733]">
            Happy Pet Parents
          </h2>

          <p className="mt-4 text-gray-600">
            Hear what our customers say about us.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-2xl border border-gray-100 bg-[#F7F5F0] p-8 shadow-sm"
            >
              <div className="mb-4 text-2xl text-green-600">★★★★★</div>

              <p className="text-gray-700 leading-relaxed">
                "{review.review}"
              </p>

              <div className="mt-6">
                <h4 className="font-bold text-[#0A1733]">
                  {review.name}
                </h4>

                <p className="text-sm text-gray-500">
                  {review.pet}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}