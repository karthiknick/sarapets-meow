export default function Hero() {
  return (
    <section className="bg-[#F3EFE3] px-6 py-10 md:px-12 lg:px-20 lg:py-12">
      <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-12">

        {/* LEFT SIDE */}
        <div className="max-w-xl">

          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            Happy Pets,
            <br />
            Groomed with{" "}
            <span className="text-green-600">Love</span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600 md:text-lg">
            Professional grooming for your furry friends. Clean, happy and
            healthy pets are just a booking away.
          </p>

          {/* BUTTONS */}
          <div className="mt-7 flex gap-3">

            <a
              href="#contact"
              className="rounded-lg bg-green-600 px-6 py-3 text-white font-semibold hover:bg-green-700"
            >
              Book Now
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-green-600 px-6 py-3 text-green-600 font-semibold hover:bg-green-50"
            >
              Call Us
            </a>
          </div>

          {/* BENEFITS */}
          <div className="mt-8 grid grid-cols-3 gap-5">

            <div>
              <p className="font-semibold text-slate-900">
                ✓ Experienced
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Groomers
              </p>
            </div>

            <div>
              <p className="font-semibold text-slate-900">
                ✓ Pet Safe
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Products
              </p>
            </div>

            <div>
              <p className="font-semibold text-slate-900">
                ✓ Stress Free
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Care
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center justify-center lg:justify-end">
          <img
            src="/hero-dog.png"
            alt="Sara Pet.Meow"
            className="w-full max-w-[420px] object-contain"
          />
        </div>

      </div>
    </section>
  );
}