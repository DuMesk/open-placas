import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import FacadeShowcase from "@/components/sections/FacadeShowcase";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <FacadeShowcase />
      </main>
    </>
  );
}
