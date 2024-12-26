'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '~/utils/cn';

import logo from '~/assets/images/logo.png';

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
    label: 'Achievements',
    href: '/achievements',
  },
  {
    label: 'Contact Us',
    href: '/contact-us',
  },
  {
    label: 'Our Process',
    href: '/our-process',
  },
  {
    label: 'Team',
    href: '/team',
  },
  {
    label: 'Our Work',
    href: '/our-work',
  },
] as const satisfies { label: string; href: string }[];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="sticky start-0 top-0 z-20 w-full bg-[#420C03]">
      <div className="mx-auto flex flex-wrap items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="flex h-[50px] w-[50px] items-center bg-surface-500"
        >
          <Image src={logo} alt="logo" width={50} height={50} />
        </Link>
        <div className="flex space-x-3 md:order-2 md:hidden md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 focus:outline-none"
            aria-expanded="false"
            onClick={() => {
              setIsMenuOpen((prev) => !prev);
            }}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="stroke-surface-500" size={24} />
          </button>
        </div>
        <div
          id="navbar-content"
          className={cn(
            'fixed inset-0 hidden h-screen w-screen translate-x-full items-center justify-between transition-all ease-out md:relative md:order-1 md:flex md:h-auto md:w-auto md:translate-x-0',
            { 'flex translate-x-0': isMenuOpen },
          )}
        >
          <ul
            className={cn(
              'flex h-full w-full flex-col bg-[#420C03] p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse',
            )}
          >
            <button
              type="button"
              onClick={() => {
                setIsMenuOpen(false);
              }}
              className="md:hidden"
            >
              <X size={34} className="my-4 ml-auto stroke-accent-500" />
            </button>
            {navLinks.map((link) => {
              return (
                <li key={link.href}>
                  <NavLink text={link.label} href={link.href} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;

function NavLink({ text, href }: { text: string; href: string }) {
  return (
    <Link
      href={href}
      className="relative block rounded px-3 py-2 font-primary text-2xl font-bold text-gray-100 hover:underline md:p-0 md:text-base md:hover:bg-transparent"
    >
      {text}
    </Link>
  );
}
