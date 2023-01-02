"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { Section } from "../components/Section";
import { fadeGrowIn, slideInRight } from "../util/animations";

type HowSectionProps = {
  id?: string;
};

export const HowSection: React.FunctionComponent<HowSectionProps> = ({
  id,
}) => (
  <Section id={id} className="pb-5">
    <div className="flex flex-col items-center px-4 text-center lg:px-12 xl:px-32">
      <motion.h2 className="text-semibold text-4xl" {...fadeGrowIn}>
        Hoe wij te werk gaan
      </motion.h2>
      <motion.h3
        className="text-xl italic"
        {...fadeGrowIn}
        transition={{ duration: 0.5 }}
      >
        Wist je dat het gemiddeld 3 dagen duurt om een auto te wrappen?
      </motion.h3>

      <div className="mt-12 flex flex-col items-center gap-12 lg:flex-row">
        <motion.div {...fadeGrowIn} initial={{ opacity: 0, scale: 0.2 }}>
          <Image
            className="splatter-mask-1 -mb-36 max-w-xs sm:-mb-32 md:-mb-32 xl:-mb-44 xl:max-w-md"
            alt="Wrapping petra's car"
            src="/images/petra.jpg"
            width="500"
            height="500"
          />
        </motion.div>

        <motion.p
          {...slideInRight}
          className="max-w-xl flex-1 text-center text-lg xl:text-left"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lobortis
          felis tristique, posuere nulla ac, vehicula tortor. Vestibulum
          vulputate metus id mauris dignissim fringilla. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Vivamus et pulvinar urna, sed
          placerat enim. Nulla ornare orci id tempor vehicula. Aliquam commodo
          risus eleifend, accumsan eros luctus, maximus lectus. Duis tempor
          feugiat arcu non convallis
        </motion.p>
      </div>
    </div>
  </Section>
);
