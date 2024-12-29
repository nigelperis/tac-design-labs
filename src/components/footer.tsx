import React from 'react';
import { Clock5, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import Facebook from '~/assets/svgs/facebook-logo.svg';
import Instagram from '~/assets/svgs/instagram-logo.svg';
import Logo from '~/assets/svgs/logo.svg';
import Youtube from '~/assets/svgs/youtube-logo.svg';

import footerBackground from '~/assets/images/footer-background.png';

function Footer({ className }: Readonly<{ className?: string }>) {
  return (
    <footer className={className}>
      {/* Main Footer Section */}
      <section
        className="flex flex-col bg-[#420C03] bg-blend-soft-light sm:flex-row sm:items-stretch"
        style={{
          backgroundImage: `url(${footerBackground.src})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        {/* Left Section */}
        <div className="flex h-auto w-full flex-col items-center space-y-6 px-4 py-11 sm:w-1/3 md:p-12 md:py-12">
          <Link
            href="/"
            className="flex w-fit items-center space-x-3 bg-surface-500"
          >
            <Logo className="h-24 w-24 object-contain" />
          </Link>
          <h4 className="text-center font-primary text-5xl font-normal text-slate-50">
            TAC Design LAB
          </h4>
          <div className="mt-6 flex flex-row space-x-5">
            <a
              href="https://www.facebook.com/people/TAC-Design-LAB/100090743003401/"
              className="flex items-center justify-center rounded-full bg-slate-50 p-2"
            >
              <Facebook className="text-3xl" />
            </a>
            <a
              href="https://youtube.com/@tacdesignlab?si=tt1qKMFM3MHopeXa"
              className="flex items-center justify-center rounded-full bg-slate-50 p-2"
            >
              <Youtube className="text-3xl" />
            </a>
            <a
              href="https://www.instagram.com/tacdesignlab/profilecard/?igsh=MWo5MXl0cGluajdieg==F"
              className="flex items-center justify-center rounded-full bg-slate-50 p-2"
            >
              <Instagram className="text-3xl" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div
          id="vr"
          className="w-full border-b-2 border-dashed border-surface-500 md:w-fit md:border-r-2"
        ></div>

        {/* Right Section */}
        <ul className="grid w-full flex-1 grid-cols-1 gap-8 px-8 pb-9 pt-12 md:grid-cols-2 md:px-16">
          {/* Address */}
          <li className="flex flex-col">
            <div className="mb-2 flex items-center space-x-4">
              <MapPin size={28} className="stroke-[#DAD84C]" />
              <h5 className="font-primary text-2xl font-bold text-white">
                Address
              </h5>
            </div>
            <p className="font-primary text-lg font-normal text-white md:text-2xl">
              Tc 14/4455, Leela's, (Near Kerala Bank) Kesavadasapuram,
              Thiruvananthapuram, Kerala 695004
            </p>
          </li>

          {/* Email */}
          <li className="flex flex-col">
            <div className="mb-2 flex items-center space-x-4">
              <Mail size={28} className="stroke-[#DAD84C]" />
              <h5 className="font-primary text-2xl font-bold text-white">
                Email Us
              </h5>
            </div>
            <a
              href="mailto:tacdesignlab@gmail.com"
              className="font-primary text-lg font-normal text-white underline md:text-2xl"
            >
              tacdesignlab@gmail.com
            </a>
          </li>

          {/* Phone */}
          <li className="flex flex-col">
            <div className="mb-2 flex items-center space-x-4">
              <Phone size={28} className="stroke-[#DAD84C]" />
              <h5 className="font-primary text-2xl font-bold text-white">
                Phone
              </h5>
            </div>
            <div className="font-primary text-lg font-normal text-white md:text-2xl">
              <a href="tel:+919072062086">+91 90720 62086</a>
            </div>
          </li>

          {/* Working Hours */}
          <li className="flex flex-col">
            <div className="mb-2 flex items-center space-x-4">
              <Clock5 size={28} className="stroke-[#DAD84C]" />
              <h5 className="font-primary text-2xl font-bold text-white">
                Working Hours
              </h5>
            </div>
            <p className="font-primary text-lg font-normal text-white md:text-2xl">
              Monday to Friday: 9AM – 5PM
              <br />
              Saturday: 9AM – 12:30PM
              <br />
              Sunday & Public Holidays: Closed
            </p>
          </li>
        </ul>
      </section>

      {/* Footer Bottom */}
      <section className="bg-gray-950 py-4">
        <p className="text-center font-primary text-sm text-slate-50 md:text-base">
          COPYRIGHT © 2024{' '}
          <Link href="/" className="hover:underline">
            TACDESIGNLAB
          </Link>{' '}
          - ALL RIGHTS RESERVED
        </p>
      </section>
    </footer>
  );
}

export default Footer;
