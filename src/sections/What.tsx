"use client";

import { motion } from "framer-motion";

import { Feature } from "../components/Feature";
import { Section } from "../components/Section";
import { fadeGrowIn } from "../util/animations";

import { GiPapers } from "react-icons/gi";
import { TbTruck, TbWallpaper } from "react-icons/tb";

type WhatSectionProps = {
  id?: string;
};

export const WhatSection: React.FunctionComponent<WhatSectionProps> = ({
  id,
}) => (
  <Section id={id} className="pb-5">
    <div className="container flex flex-col items-center text-center">
      <motion.h2 className="text-semibold text-4xl" {...fadeGrowIn}>
        Wat wij voor jou kunnen betekenen
      </motion.h2>
      <motion.h3
        className="text-xl italic"
        {...fadeGrowIn}
        transition={{ duration: 0.5 }}
      >
        Met de beste wrap materialen beschikbaar!
      </motion.h3>

      <div className="mt-24 grid w-full grid-cols-1 gap-y-12 gap-x-4 text-neutral-900 xl:grid-cols-3  xl:gap-x-12">
        <Feature
          title="CAR WRAPPING"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lobortis felis tristique, posuere nulla ac, vehicula tortor. Vestibulum vulputate metus id mauris dignissim fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus et pulvinar urna, sed placerat enim. Nulla ornare orci id tempor vehicula. Aliquam commodo risus eleifend, accumsan eros luctus, maximus lectus. Duis tempor feugiat arcu non convallis"
          Icon={GiPapers}
        />
        <Feature
          title="PAINT PROTECTION"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lobortis felis tristique, posuere nulla ac, vehicula tortor. Vestibulum vulputate metus id mauris dignissim fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus et pulvinar urna, sed placerat enim. Nulla ornare orci id tempor vehicula. Aliquam commodo risus eleifend, accumsan eros luctus, maximus lectus. Duis tempor feugiat arcu non convallis"
          Icon={TbWallpaper}
        />
        <Feature
          title="AUTO BELETTERING"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lobortis felis tristique, posuere nulla ac, vehicula tortor. Vestibulum vulputate metus id mauris dignissim fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus et pulvinar urna, sed placerat enim. Nulla ornare orci id tempor vehicula. Aliquam commodo risus eleifend, accumsan eros luctus, maximus lectus. Duis tempor feugiat arcu non convallis"
          Icon={TbTruck}
        />
      </div>
    </div>
  </Section>
);
