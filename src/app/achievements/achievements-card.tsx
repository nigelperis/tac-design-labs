import React from 'react';
import { ChevronRight } from 'lucide-react';
import { type StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '~/utils/cn';

import achievementsStyles from './achievements-card-style.module.css';

interface AchievementCardProps {
  title: string;
  description: string;
  image: string | StaticImport;
  buttonText: string;
  href: string;
}

function AchievementCard(
  props: AchievementCardProps & { isMobileFill?: boolean },
) {
  const { title, description, image, buttonText, href, isMobileFill } = props;

  return (
    <li className={cn(achievementsStyles.achievement_card)}>
      <h3 className={cn(achievementsStyles.achievement_card_title)}>{title}</h3>
      <Image
        src={image}
        alt="Achievement photo"
        className={cn(
          achievementsStyles.achievement_card_image,
          'aspect-video',
        )}
        placeholder="blur"
        style={{
          objectFit: isMobileFill ? 'fill' : 'cover',
          objectPosition: isMobileFill ? 'center' : 'center',
        }}
      />
      <p className={cn(achievementsStyles.achievement_card_description)}>
        {description}
      </p>
      <Link
        href={href}
        target="blank"
        className={cn(achievementsStyles.achievement_card_link)}
      >
        {buttonText} <ChevronRight className="text-[7px]" />
      </Link>
    </li>
  );
}

export default AchievementCard;
