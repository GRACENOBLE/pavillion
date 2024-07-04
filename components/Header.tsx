"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react'
import Logo from './Logo';
import Navigation from './Navigation';
import { Button } from './ui/button';
import Menu from './Menu';
import MobileNav from './MobileNav';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY;
    setIsScrolled(prevScrollPos > 600);
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos, isScrolled, handleScroll]);

  return (
    <header
      className={`
        ${isScrolled || pathname !== "/" ? "py-2 bg-navy-100" : "py-4 bg-white"}
        sticky top-0 w-full  shadow-sm border  z-50 transition-all duration-200 border-b-[.5px] border-gold-10/20`}
    >
      <div className="container flex">
        <div
          className={
            "flex justify-between items-center w-full border-gold-100  "
          }
        >
          <div className="flex items-center ">
            <Link href={"/"}>
              <Logo
                image={
                  isScrolled || pathname != "/"
                    ? "/svg/logo/logo-with-word-white.svg"
                    : "/svg/logo/logo-with-word-navy.svg"
                }
                className={
                  isScrolled || pathname != "/" ? "h-6 md:h-8" : "h-8 md:h-10"
                }
              />
            </Link>
          </div>

          <div className="hidden lg:flex gap-12 items-center">
            {/* <Socials pathname={pathname} sticky={isScrolled} /> */}
            <Navigation
              pathname={pathname}
              sticky={isScrolled}
            />
            <Link href={"/contact-us"}>
              <Button
                className={`${isScrolled && "py-2.5 px-4"}`}
                variant={"secondary"}
              >
                Contact Us
              </Button>
            </Link>
          </div>

          <Button
            className="lg:hidden"
            variant={"ghost"}
            size={"icon"}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu
              className={
                isScrolled || pathname != "/" ? "text-white" : "text-navy-100"
              }
            />
          </Button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <MobileNav
          pathname={pathname}
          isScrolled={isScrolled}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      )}
    </header>
  );
}

export default Header
