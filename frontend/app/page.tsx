// import Navbar from "@/components/Navbar/Navbar";
// import Hero from "@/components/Hero/Hero";
// import WhyChoose from "@/components/WhyChoose/WhyChoose";
// import Services from "@/components/Services/Services";
// import Trainers from "@/components/Trainers/Trainers";
// import Gallery from "@/components/Gallery/Gallery";
// import Footer from "@/components/Footer/Footer";

// export default function Home() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <WhyChoose />
//       <Services />
//       <Trainers />
//       <Gallery />
//       <Footer />
//     </>
//   );
// }


import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import WhyChoose from "@/components/WhyChoose/WhyChoose";
import Testimonials from "@/components/Testimonials/Testimonials";
import Gallery from "@/components/Gallery/Gallery";
import Team from "@/components/Team/Team"
import Contact from "@/components/Contact/Contact"
import Footer from "@/components/Footer/Footer"
import ServiceAreas from "@/components/ServiceAreas/ServiceAreas"

export default function Home() {
  return (
    <main className="pt-24">
      <Navbar />
      <Hero />
      <Services />
      <WhyChoose />
      <Gallery />
      <Team />
      <Testimonials />
      <ServiceAreas />
      <Contact />
      <Footer />
    </main>
  );
}