import { motion } from "framer-motion";
import { Section } from "../components/Section";
import { fadeGrowIn, slideInLeft } from "../util/animations";

import { HiOutlineMail, HiOutlinePhoneIncoming } from "react-icons/hi";

type ContactSectionProps = {
  id?: string;
};

export const ContactSection: React.FunctionComponent<ContactSectionProps> = ({
  id,
}) => (
  <Section id={id} className="pb-5">
    <div className="flex flex-col items-center px-4 text-center lg:px-12 xl:px-32">
      <motion.h2 className="text-semibold text-4xl" {...fadeGrowIn}>
        Let&apos;s Talk!
      </motion.h2>

      <div className="flex w-full flex-col items-center justify-center gap-6 py-12">
        <motion.a
          className="group !flex flex-nowrap items-center gap-4"
          href="tel:+31629069925"
          {...slideInLeft}
        >
          <HiOutlinePhoneIncoming className="group-hover:animate-bounce" />
          <span>+31 6 290 699 25</span>
        </motion.a>
        <motion.a
          className="group !flex flex-nowrap items-center gap-4"
          href="mail:info@the-wraplab.com"
          {...slideInLeft}
        >
          <HiOutlineMail className="group-hover:animate-bounce" />
          <span>info@the-wraplab.com</span>
        </motion.a>
      </div>

      <motion.p className="px-12 text-base font-light" {...fadeGrowIn}>
        Bel, whatsapp of e-mail voor vragen, een strakke offerte of om een kopje
        koffie te drinken
      </motion.p>
    </div>
  </Section>
);
