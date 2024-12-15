import React from 'react';
import { Circle, Clock5, Mail, MapPin, Phone, Plus, X } from 'lucide-react';
import Image, { getImageProps } from 'next/image';
import Link from 'next/link';

import footerBackground from '~/assets/images/footer-background.png';
import logo from '~/assets/images/logo.png';

// import Facebook from '~/assets/svgs/facebook-logo.svg';
// import Instagram from '~/assets/svgs/instagram-logo.svg';
// import Youtube from '~/assets/svgs/youtube-logo.svg';

function Footer() {
  const {
    props: { src },
  } = getImageProps({
    src: footerBackground.src,
    alt: 'Background image',
    width: footerBackground.width,
    height: footerBackground.height,
  });

  return (
    <footer>
      <section
        className="mx-auto flex w-full max-w-screen-xl flex-col bg-[#420C03] bg-blend-soft-light sm:flex-row sm:items-stretch"
        style={{ backgroundImage: `url(${src})` }}
      >
        <div className="flex h-auto w-fit flex-row items-stretch space-x-4">
          <div className="flex h-full flex-col items-center p-4 md:py-12">
            <Link
              href="/"
              className="mb-4 flex w-fit items-center space-x-3 bg-surface-500 sm:mb-0"
            >
              <Image src={logo} width={100} height={100} alt="Flowbite Logo" />
            </Link>
            <h4 className="mt-6 font-primary text-5xl font-normal text-slate-50">
              TAC Design LAB
            </h4>
            <div className="mt-6 flex flex-row space-x-5">
              <a
                href="https://facebook.com"
                className="rounded-full bg-slate-50 p-2.5"
              >
                {/* <Facebook className="stroke-slate-100 text-[30px]" /> */}
                <Plus size={30} className="stroke-primary-500" />
              </a>
              <a
                href="https://youtube.com"
                className="rounded-full bg-slate-50 p-2.5"
              >
                {/* <Youtube className="stroke-slate-100 text-[30px]" /> */}
                <X size={30} className="stroke-primary-500" />
              </a>

              <a
                href="https://instagram.com "
                className="rounded-full bg-slate-50 p-2.5"
              >
                {/* <Instagram className="stroke-slate-100 text-[30px]" /> */}
                <Circle size={30} className="stroke-primary-500" />
              </a>
            </div>
          </div>

          <div
            id="vr"
            className="border-r-2 border-dashed border-surface-500"
          ></div>
        </div>

        <ul className="grid w-full flex-1 grid-cols-2 gap-5 px-8 pb-9 pt-12">
          <li>
            <div className="flex space-x-4">
              <MapPin size={28} className="stroke-[#DAD84C]" />
              <h5 className="font-primary text-2xl font-bold text-white">
                Address
              </h5>
            </div>
            <p className="font-primary text-2xl font-normal text-white">
              Tc 14/445, Leela’s, Tharagini, opposite to Nikunjam,
              Kesavadasapuram, Thiruvananthapuram, Kerala 695004
            </p>
          </li>

          <li>
            <div className="flex space-x-4">
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

          <li>
            <div className="flex space-x-4">
              <Phone size={28} className="stroke-[#DAD84C]" />
              <h5 className="font-primary text-2xl font-bold text-white">
                Phone
              </h5>
            </div>
            <div className="space-x-2 font-primary text-2xl font-normal text-white">
              <a href="tel:+91 99999999">+91 99999999</a>
              <span>/</span>
              <a href="tel:88888888">88888888</a>
            </div>
          </li>

          <li>
            <div className="flex space-x-4">
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
        <p className="bg-gray-950 py-9 text-center font-primary text-base text-slate-50">
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
