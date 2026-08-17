import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ServicePlans from "@/components/ServicePlans/ServicePlans";

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-center mb-4">
            Grooming Packages
          </h1>

          <p className="text-center text-gray-600 mb-12">
            Choose the perfect grooming package for your furry friend.
          </p>

          <ServicePlans />
        </div>
      </main>

      <Footer />
    </>
  );
}
