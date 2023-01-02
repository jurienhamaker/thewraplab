"use client";

import { motion } from "framer-motion";

import { Feature } from "../components/Feature";
import { Section } from "../components/Section";
import { fadeGrowIn } from "../util/animations";

import { HiOutlineHome } from "react-icons/hi";

type WhatSectionProps = {
  id?: string;
};

export const WhatSection: React.FunctionComponent<WhatSectionProps> = ({
  id,
}) => (
  <Section id={id} className="pb-5">
    <div className="container flex flex-col items-center text-center">
      <motion.h2 className="text-semibold text-4xl" {...fadeGrowIn}>
        What we can do for you
      </motion.h2>
      <motion.h3
        className="text-xl italic"
        {...fadeGrowIn}
        transition={{ duration: 0.5 }}
      >
        Did you know we use the best wrapping material?
      </motion.h3>

      <div className="mt-12 grid w-full grid-cols-1 gap-y-12 gap-x-4 text-neutral-900 xl:grid-cols-3  xl:gap-x-12 ">
        <Feature
          title="Window blinding"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lobortis felis tristique, posuere nulla ac, vehicula tortor. Vestibulum vulputate metus id mauris dignissim fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus et pulvinar urna, sed placerat enim. Nulla ornare orci id tempor vehicula. Aliquam commodo risus eleifend, accumsan eros luctus, maximus lectus. Duis tempor feugiat arcu non convallis"
          Icon={HiOutlineHome}
        />
        <Feature
          title="Window blinding"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lobortis felis tristique, posuere nulla ac, vehicula tortor. Vestibulum vulputate metus id mauris dignissim fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus et pulvinar urna, sed placerat enim. Nulla ornare orci id tempor vehicula. Aliquam commodo risus eleifend, accumsan eros luctus, maximus lectus. Duis tempor feugiat arcu non convallis"
          Icon={HiOutlineHome}
        />
        <Feature
          title="Window blinding"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lobortis felis tristique, posuere nulla ac, vehicula tortor. Vestibulum vulputate metus id mauris dignissim fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus et pulvinar urna, sed placerat enim. Nulla ornare orci id tempor vehicula. Aliquam commodo risus eleifend, accumsan eros luctus, maximus lectus. Duis tempor feugiat arcu non convallis"
          Icon={HiOutlineHome}
        />
      </div>
    </div>
  </Section>
);
