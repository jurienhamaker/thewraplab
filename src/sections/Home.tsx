"use client";

import { motion } from "framer-motion";
import { HiOutlineChevronDown } from "react-icons/hi";

import { Section } from "../components/Section";
import { fadeGrowIn, slideInRight } from "../util/animations";

import Image from "next/image";

type HomeSectionProps = {
  id?: string;
};

export const HomeSection: React.FunctionComponent<HomeSectionProps> = ({
  id,
}) => (
  <Section id={id} className="relative flex h-[95vh] lg:h-[80vh]">
    <div className="h-80vh mx-auto flex items-center justify-center gap-4 px-4 md:max-w-[100vw] md:gap-14 lg:mt-0 lg:max-w-[90vw] lg:gap-0 xl:max-w-[80vw]">
      <div className="flex flex-col-reverse items-center justify-center lg:flex-row lg:pl-16 xl:pl-24">
        <motion.div
          {...slideInRight}
          className="mt-12 mr-0 max-w-[80vw] md:max-w-[60vw] lg:mt-0 lg:-mr-16 xl:-mr-24"
        >
          <Image
            src="/images/car.png"
            width={600}
            height={600}
            alt="Yellow car"
          />
        </motion.div>

        <div className="flex flex-col items-center text-center  lg:items-start lg:text-start">
          <motion.h1
            {...fadeGrowIn}
            className=" text-vw-9xl uppercase drop-shadow-lg md:text-vw-8xl lg:text-vw-7xl xl:text-vw-6xl"
          >
            <span className="variable-color font-semibold italic">
              W<span className="tracking-tighter">ra</span>pping
            </span>{" "}
            done correctly
          </motion.h1>
          <motion.h2
            {...fadeGrowIn}
            transition={{ duration: 0.5 }}
            className="text-vw-7xl font-light tracking-wide text-neutral-200 drop-shadow-md md:text-vw-6xl lg:text-vw-4xl xl:text-vw-4xl"
          >
            With the latest techniques your car <br />
            could look the best it&apos;s ever been.
          </motion.h2>

          <div className="mt-4 flex items-center gap-12 md:mt-8">
            <button className="ghost ghost-light text-xs sm:text-base md:text-lg lg:text-base xl:text-lg">
              Contact now
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 transform flex-col items-center text-center mix-blend-difference">
      <p>Keep scrolling</p>
      <HiOutlineChevronDown className="mt-2 animate-bounce text-4xl" />
    </div>
  </Section>
);
