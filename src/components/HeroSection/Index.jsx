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

const HeroSection = () => {
  return (
    <HeroSectionWrapper>
      <HeroSectionContent>
        <Title>{heroSectionContent.title}</Title>
        <Subtitle>{heroSectionContent.subtitle}</Subtitle>
        <Description>{heroSectionContent.descripion}</Description>
        <Anchor>
          <CTAButton>{heroSectionContent.ctaButton}</CTAButton>
        </Anchor>
      </HeroSectionContent>
      <HeroSectionImage src={heroSectionContent.hero_image} />
    </HeroSectionWrapper>
  );
};

export default HeroSection;
