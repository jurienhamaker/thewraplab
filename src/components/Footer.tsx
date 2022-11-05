import Link from "next/link";
import { HiHeart } from "react-icons/hi";
import { Section } from "./Section";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Section className="light no-bubble pb-12">
      <div className="flex w-full items-center justify-center gap-4 text-xs uppercase mix-blend-difference">
        <span>The Wrap Lab © {year}</span>
        <span>|</span>
        <Link
          href="https://jurien.dev"
          target="_BLANK"
          className="flex items-center gap-2"
        >
          With <HiHeart className="text-cyan-400" /> by jurien.dev
        </Link>
      </div>
    </Section>
  );
}
