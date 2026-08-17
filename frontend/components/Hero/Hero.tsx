export default function Hero() {
  return (
    <section className="bg-[#F3EFE3] px-4 py-6 md:px-12 lg:px-20 lg:py-12">
      <div className="mx-auto grid max-w-6xl items-center gap-6 lg:grid-cols-2 lg:gap-12">

        {/* LEFT SIDE */}
        <div className="max-w-xl">

          <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            Happy Pets,
            <br />
            Groomed with{" "}
            <span className="text-green-600">Love</span>
          </h1>

          <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-600 md:text-lg">
            Professional grooming for your furry friends. Clean, happy and
            healthy pets are just a booking away.
          </p>

          {/* BUTTONS */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-lg bg-green-600 px-5 py-3 text-white font-semibold hover:bg-green-700"
            >
              Book Now
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-green-600 px-5 py-3 text-green-600 font-semibold hover:bg-green-50"
            >
              Call Us
            </a>
          </div>

          {/* BENEFITS */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            <div>
              <p className="font-semibold text-slate-900">✓ Experienced</p>
              <p className="mt-1 text-xs md:text-sm text-slate-500">
                Groomers
              </p>
            </div>

            <div>
              <p className="font-semibold text-slate-900">✓ Pet Safe</p>
              <p className="mt-1 text-xs md:text-sm text-slate-500">
                Products
              </p>
            </div>

            <div>
              <p className="font-semibold text-slate-900">✓ Stress Free</p>
              <p className="mt-1 text-xs md:text-sm text-slate-500">
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
            className="w-[85%] max-w-[280px] md:max-w-[420px] object-contain"
          />
        </div>

      </div>
    </section>
  );
}
