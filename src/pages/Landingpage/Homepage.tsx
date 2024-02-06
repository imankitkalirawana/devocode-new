import Banner from "./Banner";
import Contact from "./Contact";
import Features from "./Features";
import Footer from "./Footer";
import Pricing from "./Pricing";
// import LogoCloud from "./LogoCloud";
import Stats from "./Stats";
import Testimonial from "./Testimonial";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Features />
      <Stats />
      <Testimonial />
      {/* <LogoCloud /> */}
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
