"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import { dropIn } from "../util/animations";

type FeatureProps = {
  title: string;
  description: string;
  Icon: IconType;
  className?: string;
};

export const Feature: React.FunctionComponent<FeatureProps> = ({
  Icon,
  title,
  description,
  className,
}) => (
  <motion.div
    className={`flex flex-col items-center gap-2 ${className}`}
    {...dropIn}
  >
    <div className="mb-4 rounded-full border border-neutral-200 p-4 shadow-2xl">
      <Icon className="text-4xl" />
    </div>

    <h3 className="text-2xl">{title}</h3>
    <h4 className="text-lg font-light">{description}</h4>
  </motion.div>
);
