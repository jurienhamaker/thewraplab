import { Section } from "../components/Section";
import { HomeSection } from "../sections/Home";
import { HowSection } from "../sections/How";
import { TestsSection } from "../sections/Tests";
import { WhatSection } from "../sections/What";

export default function Home() {
  return (
    <>
      <HomeSection id="home" />
      <WhatSection id="wat" />
      <HowSection id="hoe" />
      <TestsSection id="waar" />
      <Section id="contact" className="h-[80vh]"></Section>
    </>
  );
}
