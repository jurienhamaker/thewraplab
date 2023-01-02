import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Section } from "../components/Section";
import { fadeGrowIn } from "../util/animations";

type PartnersSectionProps = {
  id?: string;
};

const partners = [
  {
    name: "Marked & Signed",
    url: "https://markedandsigned.nl/",
    image: "/images/partners/markedandsigned.svg",
  },
  {
    name: "Marked & Signed",
    url: "https://markedandsigned.nl/",
    image: "/images/partners/markedandsigned.svg",
  },
  {
    name: "Marked & Signed",
    url: "https://markedandsigned.nl/",
    image: "/images/partners/markedandsigned.svg",
  },
  {
    name: "Marked & Signed",
    url: "https://markedandsigned.nl/",
    image: "/images/partners/markedandsigned.svg",
  },
  {
    name: "Marked & Signed",
    url: "https://markedandsigned.nl/",
    image: "/images/partners/markedandsigned.svg",
  },
  {
    name: "Marked & Signed",
    url: "https://markedandsigned.nl/",
    image: "/images/partners/markedandsigned.svg",
  },
];

export const PartnersSection: React.FunctionComponent<PartnersSectionProps> = ({
  id,
}) => (
  <Section id={id} className="pb-5">
    <div className="flex flex-col items-center px-4 text-center lg:px-12 xl:px-32">
      <motion.h2 className="text-semibold text-4xl" {...fadeGrowIn}>
        Partners
      </motion.h2>
      <motion.h3
        className="text-xl italic"
        {...fadeGrowIn}
        transition={{ duration: 0.5 }}
      >
        De geweldige mensen waar we mee samen werken
      </motion.h3>

      <div className="mt-12 grid w-4/5 grid-cols-2 items-center justify-items-center gap-6 md:w-3/4 md:grid-cols-3 xl:w-1/3">
        {partners.map((partner, i) => (
          <Link
            href={partner.url}
            key={i}
            className="group relative overflow-visible no-underline"
            target="_BLANK"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-dark-gray p-2 text-xs text-white opacity-0 transition-all duration-300 group-hover:-top-8 group-hover:opacity-100">
              {partner.name}
            </div>
            <Image
              className="opacity-50 transition-opacity duration-500 group-hover:opacity-100"
              src={partner.image}
              width={100}
              height={100}
              alt={partner.name}
            />
          </Link>
        ))}
      </div>
    </div>
  </Section>
);
