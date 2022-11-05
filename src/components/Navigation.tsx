"use client";

import { useEffect, useState } from "react";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import Logo from "../assets/logo.svg";

const heightOffset = 200;

export default function Navigation() {
  const [offset, setOffset] = useState(0);
  const [navigationOpen, setNavigationOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    onScroll();

    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(`#${id}`)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <Logo
        className={`variable-color fixed z-50 transition-all duration-500 ${
          offset > heightOffset
            ? "-top-12 -left-14 h-48 md:h-52 lg:h-52"
            : "-top-12 -left-12 h-52 md:h-64 lg:h-96"
        }`}
      />
      <nav
        className={`fixed top-0 z-50 flex w-full mix-blend-difference ${
          offset > heightOffset ? "h-12" : "h-20"
        } items-center justify-end px-4 transition-all duration-300 lg:justify-center`}
      >
        <div
          className="cursor-pointerp-3 h-12 w-12  md:hidden"
          onClick={() => setNavigationOpen(!navigationOpen)}
        >
          {navigationOpen ? (
            <HiOutlineX className="h-full w-full" />
          ) : (
            <HiMenu className="h-full w-full" />
          )}
        </div>

        <div
          className={`fixed ${
            offset > heightOffset ? "top-12" : "top-16"
          } transition-all duration-300 ${
            navigationOpen ? "right-8" : "-right-full"
          } flex flex-col items-end gap-4 font-medium uppercase md:relative md:right-0 md:top-0 md:flex-row`}
        >
          <a className="cursor-pointer" onClick={() => scrollTo("home")}>
            Home
          </a>
          <a className="cursor-pointer" onClick={() => scrollTo("hoe")}>
            Hoe
          </a>
          <a className="cursor-pointer" onClick={() => scrollTo("wat")}>
            Wat
          </a>
          <a className="cursor-pointer" onClick={() => scrollTo("waar")}>
            Waar
          </a>
          <a className="cursor-pointer" onClick={() => scrollTo("contact")}>
            Contact
          </a>
        </div>
      </nav>
    </>
  );
}
