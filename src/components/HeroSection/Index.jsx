import { heroSectionContent } from "../../data/constants";
import {
  HeroSectionWrapper,
  HeroSectionContent,
  Title,
  Subtitle,
  Description,
  Anchor,
  CTAButton,
  HeroSectionImage,
} from "./Styles";

const HeroSection = ({ homeRef }) => {
  return (
    <HeroSectionWrapper id="home" ref={homeRef}>
      <HeroSectionContent>
        <Title>{heroSectionContent.title}</Title>
        <Subtitle>{heroSectionContent.subtitle}</Subtitle>
        <Description>{heroSectionContent.descripion}</Description>
        <Anchor href="#services">
          <CTAButton>{heroSectionContent.ctaButton}</CTAButton>
        </Anchor>
      </HeroSectionContent>
      <HeroSectionImage src={heroSectionContent.hero_image} />
    </HeroSectionWrapper>
  );
};

export default HeroSection;
