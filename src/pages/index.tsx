import { ContactSection } from "../sections/Contact";
import { HomeSection } from "../sections/Home";
import { HowSection } from "../sections/How";
import { PartnersSection } from "../sections/Partners";
import { WhatSection } from "../sections/What";

export default function Home() {
  return (
    <>
      <HomeSection id="home" />
      <WhatSection id="what" />
      <HowSection id="how" />
      <PartnersSection id="partners" />
      <ContactSection id="contact" />
    </>
  );
}
