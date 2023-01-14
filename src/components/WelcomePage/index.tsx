import Footer from "../Footer";
import Navbar from "../Navbar";
import HeroSection from "./heroSection";
import InfoCards from "./infoCards";
import {About, JoinUs, Story} from "./data";
import InfoSection from "./infoSection";

const WelcomePage = () => {
  return(
    <>
      <Navbar canBeTransparent={true} />
      <HeroSection />
      <InfoSection {...About} />
      <InfoCards />
      <InfoSection {...Story} />
      <InfoSection {...JoinUs} />
      <Footer />
    </>
  )
}

export default WelcomePage;