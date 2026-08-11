export default function Navbar() {
  return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F3EFE3]/95 backdrop-blur-md shadow-sm">
          <div className="mx-auto max-w-7xl px-8 lg:px-12">
            <div className="flex h-20 items-center justify-between">

              {/* LOGO */}
              <div className="w-64">
                <a
                  href="#"
                  className="text-3xl font-bold tracking-tight text-slate-900"
                >
                  Sara <span className="text-green-600">Pet.Meow</span>
                </a>
              </div>

        {/* NAVIGATION */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-sm text-slate-800 hover:text-green-600">
            Home
          </a>

          <a href="#services" className="text-sm text-slate-800 hover:text-green-600">
            Services
          </a>

          <a href="#why-choose-us" className="text-sm text-slate-800 hover:text-green-600">
            Why Choose Us?
          </a>

          <a href="#gallery" className="text-sm text-slate-800 hover:text-green-600">
            Gallery
          </a>

          <a href="#testimonials" className="text-sm text-slate-800 hover:text-green-600">
            Testimonials
          </a>

          <a href="#team" className="text-sm text-slate-800 hover:text-green-600">
            Our Team
          </a>

          <a href="#contact" className="text-sm text-slate-800 hover:text-green-600">
            Contact Us
          </a>

        </div>

        {/* LOGIN */}
      <div className="w-64 flex justify-end">
        <button className="rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-700">
          Login
        </button>
      </div>

    </div>
  </div>
</nav>
  );
}