"use client";

import { Section } from "../components/Section";

type TestsSectionProps = {
  id?: string;
};

export const TestsSection: React.FunctionComponent<TestsSectionProps> = ({
  id,
}) => (
  <Section id={id} className=" flex flex-col items-center text-center">
    <h1>The fox jumps the fence</h1>
    <h2>The fox jumps the fence</h2>
    <h3>The fox jumps the fence</h3>
    <h4>The fox jumps the fence</h4>
    <h5>The fox jumps the fence</h5>
    <h6>The fox jumps the fence</h6>
    <p>The fox jumps the fence</p>

    <hr className="my-12 w-[90vw] border border-t border-t-neutral-400 drop-shadow-md" />

    <p className="flex gap-2">
      Screen:
      <span className="font-semibold">
        <span className="block sm:hidden">XS</span>
        <span className="hidden sm:block md:hidden">SM</span>
        <span className="hidden md:block lg:hidden">MD</span>
        <span className="hidden lg:block xl:hidden">LG</span>
        <span className="hidden xl:block 2xl:hidden">XL</span>
        <span className="hidden 2xl:block">2XL</span>
      </span>
    </p>
  </Section>
);
