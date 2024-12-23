import { servicesContent } from "../../data/constants";
import {
  OurExpertiseWrapper,
  Title,
  Span,
  ServicesContainer,
  Service,
  ServiceContent,
  ServiceTitle,
  ServiceSubtitle,
  ServiceDescription,
  ServiceImageLeft,
  ServiceImageRight,
} from "./Styles";

const OurExpertise = ({ servicesRef }) => {
  return (
    <OurExpertiseWrapper id="services" ref={servicesRef}>
      <Title>
        <Span>Our</Span> Expertise
      </Title>
      <ServicesContainer>
        {servicesContent.services.map((service, index) => {
          if (index % 2 === 0) {
            return (
              <Service key={index} className="content-right">
                <ServiceImageLeft src={service.image} />
                <ServiceContent>
                  <ServiceTitle>{service.title}</ServiceTitle>
                  <ServiceSubtitle>{service.subtitle}</ServiceSubtitle>
                  <ServiceDescription>{service.description}</ServiceDescription>
                </ServiceContent>
              </Service>
            );
          }
          return (
            <Service key={index}>
              <ServiceContent>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceSubtitle>{service.subtitle}</ServiceSubtitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceContent>
              <ServiceImageRight src={service.image} />
            </Service>
          );
        })}
      </ServicesContainer>
    </OurExpertiseWrapper>
  );
};

export default OurExpertise;
