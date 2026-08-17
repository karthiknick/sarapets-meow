import Image from "next/image";

const gallery = [
  "/gallery/dog1.jpg",
  "/gallery/dog2.jpg",
  "/gallery/dog3.jpg",
  "/gallery/dog4.jpg",
  "/gallery/dog5.jpg",
  "/gallery/dog6.jpg",
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#F7F5F0] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#0A1733]">
            Pet Makeovers
          </h2>

          <p className="mt-4 text-gray-600">
            See the transformation our grooming experts create.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {gallery.map((image, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl"
            >
              <Image
                src={image}
                alt="Pet Grooming"
                width={600}
                height={600}
                className="h-80 w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
