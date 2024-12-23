import { MainWrapper } from "./Styles";
import HeroSection from "../HeroSection/Index";
import AboutUs from "../AboutUs/Index";
import OurExpertise from "../OurExpertise/Index";
import ContactUs from "../ContactUs/Index";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Main = ({ setActiveSection }) => {
  const selectionOptions = {
    threshold: 0.5,
  };

  const handleSelectionChange = (section) => {
    setActiveSection(section);
  };

  const { ref: homeRef, inView: homeInView } = useInView(selectionOptions);
  const { ref: aboutRef, inView: aboutInView } = useInView(selectionOptions);
  const { ref: servicesRef, inView: servicesInView } = useInView({
    threshold: 0.2,
  });
  const { ref: contactRef, inView: contactInView } =
    useInView(selectionOptions);

  useEffect(() => {
    if (homeInView) {
      handleSelectionChange("home");
    } else if (aboutInView) {
      handleSelectionChange("about");
    } else if (servicesInView) {
      handleSelectionChange("services");
    } else if (contactInView) {
      handleSelectionChange("contact");
    }
  }, [homeInView, aboutInView, servicesInView, contactInView]);

  return (
    <MainWrapper>
      <HeroSection homeRef={homeRef} />
      <AboutUs aboutRef={aboutRef} />
      <OurExpertise servicesRef={servicesRef} />
      <ContactUs contactRef={contactRef} />
    </MainWrapper>
  );
};

export default Main;
