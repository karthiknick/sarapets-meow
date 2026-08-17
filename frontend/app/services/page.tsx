import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ServicePlans from "@/components/ServicePlans/ServicePlans";

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <ServicePlans />
        </div>
      </main>

      <Footer />
    </>
  );
}
