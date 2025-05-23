import Contact from "@/components/Contact";
import Banner from "../components/Banner"
import BestFlowers from "../components/BestFlowers";
import DoOrder from "../components/DoOrder";
import Footer from "../components/Footer";
import IconWhatsApp from "@/components/IconWhatsApp";

function Home() {
  return (
    <>
      <Banner />
      <DoOrder />
      <BestFlowers />
      <Contact />
      <IconWhatsApp />
      <Footer />
    </>
  );
}

export default Home