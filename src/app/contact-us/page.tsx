import React from 'react';
import Image from 'next/image';

import { getOptimizedBackgroundImage } from '~/utils/background-image-optimizer';

import Address from '~/assets/svgs/address.svg';
import Clock from '~/assets/svgs/clock.svg';
import Email from '~/assets/svgs/email.svg';
import FacebookLogo from '~/assets/svgs/facebook.svg';
import InstagramLogo from '~/assets/svgs/instagram.svg';
import Logo from '~/assets/svgs/logo.svg';
import Phone from '~/assets/svgs/phone.svg';
import YoutubeLogo from '~/assets/svgs/youtube.svg';

import contactPlace from '~/assets/images/contact-image.jpeg';
import contactUsBg from '~/assets/images/contact-us-bg.png';

const ContactUsPage = () => {
  const optimizedContactUsPageBackground = getOptimizedBackgroundImage({
    src: contactUsBg.src,
    width: contactUsBg.width,
    height: contactUsBg.height,
  });
  return (
    <div
      className="bg-[#EDD7C3] p-9 font-primary md:px-24 md:py-20"
      style={{ backgroundImage: optimizedContactUsPageBackground }}
    >
      <div className="flex grow flex-col gap-7">
        <h1 className="text-[28px] font-bold leading-10 text-primary-500 md:text-5xl">
          Let’s Build Something Sustainable Together
        </h1>
        <p className="text-lg text-[#173552] md:text-2xl">
          We’re here to bring your vision to life while treading lightly on the
          planet. Reach out to us to discuss your project or for any inquiries.
        </p>
      </div>

      <div className="flex flex-col justify-between gap-2 md:flex-row">
        <div className="mt-5 flex flex-col gap-8 md:min-w-[450px] md:gap-14">
          <>
            {/* MARK: Email Section */}
            <div className="flex flex-col gap-2 md:gap-3">
              <div className="flex items-center gap-4">
                <Email />
                <h2 className="text-2xl font-bold text-accent-500 md:text-3xl">
                  Email
                </h2>
              </div>
              <a
                href="mailto:tacdesignlab@gmail.com"
                className="text-lg text-[#173552] md:text-2xl"
              >
                tacdesignlab@gmail.com
              </a>
            </div>

            {/* MARK: Phone Section */}
            <div className="flex flex-col gap-2 md:gap-3">
              <div className="flex items-center gap-4">
                <Phone />
                <h2 className="text-2xl font-bold text-accent-500 md:text-3xl">
                  Phone
                </h2>
              </div>
              <a
                href="tel:+919072062086"
                className="text-lg text-[#173552] md:text-2xl"
              >
                +91 90720 62086
              </a>
            </div>

            {/* MARK: Address Section */}
            <div className="flex flex-col gap-2 md:gap-3">
              <div className="flex items-center gap-4">
                <Address />
                <h2 className="text-2xl font-bold text-accent-500 md:text-3xl">
                  Address
                </h2>
              </div>
              <p className="max-w-[530px] text-lg text-[#173552] md:text-2xl">
                Tc 14/4455, Leela&apos;s, (Near Kerala Bank) Kesavadasapuram
                Thiruvananthapuram, Kerala 695004
              </p>
            </div>

            {/* MARK: Working Hours Section */}
            <div className="flex flex-col gap-2 md:gap-3">
              <div className="flex items-center gap-4">
                <Clock />
                <h2 className="text-2xl font-bold text-accent-500 md:text-3xl">
                  Working Hours
                </h2>
              </div>
              <p className="flex flex-col gap-2 text-lg text-[#173552] md:text-2xl">
                <span>Monday to Friday: 9:30 AM – 5:00 PM</span>
                <span>Saturday: 9:30 AM – 01:00 PM</span>
                <span>Sunday, Second Saturday & Other</span>
                <span>Public Holidays: Closed</span>
              </p>
            </div>
          </>
        </div>
        <div className="mt-4 flex max-w-3xl flex-col items-center gap-9 self-end">
          <Image
            className="aspect-video w-full rounded-[20px] border-4 border-surface-500 object-cover [boxShadow:0px_4px_4px_0px_#00000040]"
            src={contactPlace}
            alt="Contact Us"
          />
          <div className="flex items-center gap-2">
            <div className="h-11 w-11 object-cover md:h-16 md:w-16">
              <Logo className="h-full w-full" />
            </div>
            <h1 className="text-3xl text-primary-500 md:text-5xl">
              TAC Design LAB
            </h1>
          </div>

          <p className="text-center text-lg text-[#173552] md:text-2xl">
            Stay connected with us and explore our journey towards
            sustainability. Follow us on our social hubs for updates, projects,
            and inspiration!
          </p>

          {/* Social Handles */}
          <div className="flex w-72 items-center justify-between rounded-3xl border-4 border-white bg-[#EDD7C3] px-5 py-3 shadow-[0px_4px_4px_0px_#00000040] backdrop-blur-lg md:w-[460px] md:px-12 md:py-6">
            <a
              href="https://www.facebook.com/people/TAC-Design-LAB/100090743003401/"
              target="blank"
              className="transition-transform duration-300 hover:scale-105"
            >
              <FacebookLogo className="scale-75 md:scale-100" />
            </a>
            <a
              href="https://www.instagram.com/tacdesignlab?igsh=MWF2cXBxdWU0YTA0NA=="
              target="blank"
              className="transition-transform duration-300 hover:scale-105"
            >
              <InstagramLogo className="scale-75 md:scale-100" />
            </a>
            <a
              href="https://youtube.com/@tacdesignlab?si=tt1qKMFM3MHopeXa"
              target="blank"
              className="transition-transform duration-300 hover:scale-105"
            >
              <YoutubeLogo className="scale-75 md:scale-100" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
