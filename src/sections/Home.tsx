"use client";

import { motion } from "framer-motion";
import { HiOutlineChevronDown } from "react-icons/hi";

import { Section } from "../components/Section";
import { fadeGrowIn } from "../util/animations";

type HomeSectionProps = {
  id?: string;
};

export const HomeSection: React.FunctionComponent<HomeSectionProps> = ({
  id,
}) => (
  <Section
    id={id}
    className="relative flex h-[90vh] flex-col items-center justify-center px-12 text-center lg:h-[70vh]"
  >
    <motion.h1 {...fadeGrowIn} className="variable-color text-6xl uppercase">
      Car{" "}
      <span className="font-semibold italic">
        W<span className="tracking-tighter">ra</span>pping
      </span>{" "}
      done correctly
    </motion.h1>
    <motion.h2
      {...fadeGrowIn}
      transition={{ duration: 0.5 }}
      className="text-4xl"
    >
      Want to learn more?
    </motion.h2>

    <div className="absolute bottom-0 flex flex-col items-center text-center">
      <h3>Keep scrolling</h3>
      <HiOutlineChevronDown className="mt-2 animate-bounce text-4xl" />
    </div>
  </Section>
);
