/* eslint-disable @typescript-eslint/no-confusing-void-expression -- temperory disabled*/
'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';

import { cn } from '~/utils/cn';

import Logo from '~/assets/svgs/tacDesign.svg';

const navLinks = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About Us',
    href: '/about-us',
  },
  {
    label: 'Our Work',
    href: '/our-work',
  },
  {
    label: 'Achievements',
    href: '/achievements',
  },
  {
    label: 'Services',
    href: '/services',
  },
  {
    label: 'Contact Us',
    href: '/contact-us',
  },
] as const;

function Header() {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropDownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isBrowser = typeof window !== 'undefined';

  const handleMobileDropdownClick = () => {
    if (isBrowser && window.innerWidth < 768) {
      setIsDropDownOpen((prev) => !prev);
    }
  };

  const handleDropdownHover = (isHovered: boolean) => {
    if (isBrowser && window.innerWidth >= 768) {
      setIsDropDownOpen(isHovered);
    }
  };

  return (
    <nav className="sticky start-0 top-0 z-20 w-full bg-[#420C03] md:h-auto">
      <div className="mx-auto flex flex-wrap items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="flex h-[50px] w-[50px] items-center bg-surface-500"
        >
          <Logo width={50} height={50} />
        </Link>

        {mounted && (
          <div className="flex space-x-3 md:order-2 md:hidden md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 focus:outline-none"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="stroke-surface-500" size={24} />
            </button>
          </div>
        )}

        <div
          className={cn(
            'fixed inset-0 hidden h-screen w-screen translate-x-full items-center justify-between transition-all ease-out md:relative md:order-1 md:flex md:h-auto md:w-auto md:translate-x-0',
            { 'flex translate-x-0': mounted && isMenuOpen },
          )}
        >
          <ul className="flex h-screen w-full flex-col overflow-scroll bg-[#420C03] p-4 font-medium md:mt-0 md:h-full md:flex-row md:space-x-8 md:overflow-visible md:border-0 md:p-0 rtl:space-x-reverse">
            {mounted && (
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="md:hidden"
              >
                <X size={34} className="my-4 ml-auto stroke-accent-500" />
              </button>
            )}

            {navLinks.map((link) => (
              <li key={link.href}>
                <NavLink
                  text={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                />
              </li>
            ))}

            <li
              ref={dropdownRef}
              className="group relative"
              onMouseEnter={() => handleDropdownHover(true)}
              onMouseLeave={() => handleDropdownHover(false)}
              onClick={handleMobileDropdownClick}
            >
              <div className="flex w-full cursor-pointer items-center space-x-2 rounded px-3 py-3 font-primary text-2xl font-bold text-gray-100 transition-colors md:py-2 md:text-base md:hover:text-gray-300">
                <span>More</span>
                <ChevronDown
                  className={cn(
                    'text-lg transition-transform duration-200',
                    { 'rotate-180': isDropDownOpen },
                    'md:transition-all md:group-hover:rotate-180',
                  )}
                />
              </div>

              {mounted && (
                <ul
                  className={cn(
                    'absolute top-full w-full rounded-md bg-[#420C03] px-3 py-3 transition-all md:-left-24 md:min-w-[200%] md:py-2',
                    'invisible opacity-0 md:group-hover:visible md:group-hover:opacity-100',
                    { 'visible opacity-100': isDropDownOpen },
                  )}
                >
                  <DropdownNavLink
                    text="Our Process"
                    href="/our-process"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsDropDownOpen(false);
                    }}
                  />
                  <DropdownNavLink
                    text="Our Team"
                    href="/our-team"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsDropDownOpen(false);
                    }}
                  />
                  <DropdownNavLink
                    text="Blogs"
                    href="/blogs"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsDropDownOpen(false);
                    }}
                  />
                  <DropdownNavLink
                    text="Career"
                    href="/career"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsDropDownOpen(false);
                    }}
                  />
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function NavLink({
  text,
  href,
  onClick,
}: {
  text: string;
  href: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}) {
  return (
    <Link
      href={href}
      className="relative my-2 block rounded px-3 py-3 font-primary text-2xl font-bold text-gray-100 transition-colors hover:text-gray-300 md:my-auto md:p-0 md:py-2 md:text-base"
      onClick={onClick}
    >
      {text}
    </Link>
  );
}

function DropdownNavLink({
  text,
  href,
  onClick,
}: {
  text: string;
  href: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}) {
  return (
    <Link
      href={href}
      className="relative my-2 block rounded px-3 py-3 font-primary text-2xl font-bold text-gray-100 transition-colors hover:text-gray-300 md:p-0 md:py-2 md:text-base"
      onClick={onClick}
    >
      {text}
    </Link>
  );
}

export default Header;
