import Contact from "@/components/Contact";
import Banner from "../components/Banner"
import BestFlowers from "../components/BestFlowers";
import DoOrder from "../components/DoOrder";
import Footer from "../components/Footer";
import IconWhatsApp from "@/components/IconWhatsApp";
import Testimonials from "@/components/Testimonials";
import Flowers from "@/components/Flowers";

function Home() {
  return (
    <>
      <Banner />
      <BestFlowers />
      <DoOrder />
      <Flowers />
      <Contact />
      <IconWhatsApp />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home