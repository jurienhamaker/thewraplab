import Link from "next/link";
import { HiHeart } from "react-icons/hi";
import { Section } from "./Section";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Section className="light no-bubble pb-12 ">
      <div className="flex w-full items-center justify-center gap-4 text-xs uppercase ">
        <span>The Wrap Lab © {year}</span>
        <span>|</span>
        <Link
          href="https://jurien.dev"
          target="_BLANK"
          className="group !flex items-center gap-2 whitespace-nowrap"
        >
          With{" "}
          <HiHeart className="text-variable transition-colors group-hover:text-red-600" />{" "}
          by jurien.dev
        </Link>
      </div>
    </Section>
  );
}
