import { aboutUsContent } from "../../data/constants.jsx";
import {
  AboutUsWrapper,
  AboutUsContent,
  Title,
  Subtitle,
  Description,
  Anchor,
  CTAButton,
  AboutUsImage,
} from "./Styles.jsx";

const AboutUs = ({ aboutRef }) => {
  return (
    <AboutUsWrapper id="about" ref={aboutRef}>
      <AboutUsContent>
        <Title>{aboutUsContent.title}</Title>
        <Subtitle>{aboutUsContent.subtitle}</Subtitle>
        <Description>{aboutUsContent.descriptionPara1}</Description>
        <Description>{aboutUsContent.descriptionPara2}</Description>
      </AboutUsContent>
      <AboutUsImage src={aboutUsContent.about_image} />
    </AboutUsWrapper>
  );
};

export default AboutUs;
