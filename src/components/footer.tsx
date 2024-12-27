import React from 'react';
import { Clock5, Mail, MapPin, Phone } from 'lucide-react';
import Image, { getImageProps } from 'next/image';
import Link from 'next/link';

import { cn } from '~/utils/cn';

import Facebook from '~/assets/svgs/facebook-logo.svg';
import Instagram from '~/assets/svgs/instagram-logo.svg';
import Youtube from '~/assets/svgs/youtube-logo.svg';

import footerBackground from '~/assets/images/footer-background.png';
import logo from '~/assets/images/logo.png';

function Footer({ className }: Readonly<{ className?: string }>) {
  const {
    props: { src },
  } = getImageProps({
    src: footerBackground.src,
    alt: 'Background image',
    width: footerBackground.width,
    height: footerBackground.height,
  });

  return (
    <footer className={cn('', className)}>
      <section
        className="mx-auto flex w-full flex-col bg-[#420C03] bg-blend-soft-light sm:flex-row sm:items-stretch"
        style={{ backgroundImage: `url(${src})` }}
      >
        <div className="flex h-auto w-full flex-col items-stretch space-y-8 md:w-fit md:flex-row md:space-x-4 md:space-y-0">
          <div className="flex h-full flex-col items-center py-11 md:p-12 md:py-12">
            <Link
              href="/"
              className="mb-4 flex w-fit items-center space-x-3 bg-surface-500 sm:mb-0"
            >
              <Image src={logo} width={100} height={100} alt="Flowbite Logo" />
            </Link>
            <h4 className="mt-6 text-center font-primary text-5xl font-normal text-slate-50">
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

          <div
            id="vr"
            className="w-full border-b-2 border-dashed border-surface-500 md:w-fit md:border-r-2"
          ></div>
        </div>

        <ul className="mb-10 grid w-full flex-1 grid-cols-1 gap-8 px-8 pb-9 pt-12 @container md:grid-cols-2 md:px-16">
          <li className="@3xl:w-2/3">
            <div className="mb-4 flex space-x-4">
              <MapPin size={28} className="stroke-[#DAD84C]" />
              <h5 className="font-primary text-2xl font-bold text-white">
                Address
              </h5>
            </div>
            <p className="font-primary text-2xl font-normal text-white">
              Tc 14/4455, Leela's, (Near Kerala Bank) Kesavadasapuram,
              Thiruvananthapuram, Kerala 695004
            </p>
          </li>

          <li className="@3xl:w-2/3">
            <div className="mb-4 flex space-x-4">
              <Mail size={28} className="stroke-[#DAD84C]" />
              <h5 className="font-primary text-2xl font-bold text-white">
                Email Us
              </h5>
            </div>
            <a
              href="mailto:tacdesignlab@gmail.com"
              className="font-primary text-2xl font-normal text-white underline"
            >
              tacdesignlab@gmail.com
            </a>
          </li>

          <li className="@3xl:w-2/3">
            <div className="mb-4 flex space-x-4">
              <Phone size={28} className="stroke-[#DAD84C]" />
              <h5 className="font-primary text-2xl font-bold text-white">
                Phone
              </h5>
            </div>
            <div className="space-x-2 font-primary text-2xl font-normal text-white">
              <a href="tel:+91 90720 62086">+91 90720 62086</a>
            </div>
          </li>

          <li className="@3xl:w-2/3">
            <div className="mb-4 flex space-x-4">
              <Clock5 size={28} className="stroke-[#DAD84C]" />
              <h5 className="font-primary text-2xl font-bold text-white">
                Working Hours
              </h5>
            </div>
            <p className="font-primary text-2xl font-normal text-white">
              Monday to Friday: 9AM – 5PM Saturday: 9AM – 12:30PM Sunday, Second
              Saturday & Other Public Holidays: Closed
            </p>
          </li>
        </ul>
      </section>

      <section>
        <p className="bg-gray-950 py-4 text-center font-primary text-base text-slate-50">
          COPYRIGHT © 2024{' '}
          <Link href="/" className="hover:underline">
            TACDESIGNLAB
          </Link>
          - ALL RIGHTS RESERVED
        </p>
      </section>
    </footer>
  );
}

export default Footer;
