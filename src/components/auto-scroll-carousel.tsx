'use client';

import React, {
  Children,
  cloneElement,
  createContext,
  useContext,
} from 'react';
import AutoScroll from 'embla-carousel-auto-scroll';
import useEmblaCarousel from 'embla-carousel-react';

import { cn } from '~/utils/cn';

import type { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';
import type {
  AutoScrollOptionsType,
  AutoScrollType,
} from 'embla-carousel-auto-scroll';
import type { EmblaViewportRefType } from 'embla-carousel-react';
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

interface EmblaCarouselContextType {
  carouselRef: EmblaViewportRefType;
  emblaApi?: EmblaCarouselType;
}

const EmblaCarouselContext = createContext<EmblaCarouselContextType | null>(
  null,
);

interface EmblaCarouselProps
  extends PropsWithChildren<EmblaOptionsType>,
    Pick<
      AutoScrollOptionsType,
      | 'playOnInit'
      | 'speed'
      | 'stopOnMouseEnter'
      | 'stopOnInteraction'
      | 'stopOnFocusIn'
    > {
  className?: string;
  autoScrollDirection?: 'forward' | 'backward';
}

export function AutoScrollCarousel(props: EmblaCarouselProps) {
  const {
    className,
    children,
    loop = true,
    dragFree = true,
    playOnInit = true,
    speed = 1,
    stopOnMouseEnter = true,
    stopOnInteraction = false,
    stopOnFocusIn,
    autoScrollDirection,
    ...rest
  } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop, dragFree, ...rest }, [
    AutoScroll({
      playOnInit,
      speed,
      stopOnMouseEnter,
      stopOnInteraction,
      stopOnFocusIn,
      direction: autoScrollDirection,
    }),
  ]);

  return (
    <EmblaCarouselContext.Provider value={{ carouselRef: emblaRef, emblaApi }}>
      <div className={cn('relative mx-auto', className)}>{children}</div>
    </EmblaCarouselContext.Provider>
  );
}

interface AutoScrollCarouselContainerProps extends PropsWithChildren {
  className?: string;
}

export function AutoScrollCarouselContainer(
  props: AutoScrollCarouselContainerProps,
) {
  const { className, children } = props;
  const context = useContext(EmblaCarouselContext);
  return (
    <div className="overflow-hidden" ref={context?.carouselRef}>
      <div className={cn('touch-pinch-autoscroll flex touch-pan-y', className)}>
        {children}
      </div>
    </div>
  );
}

interface AutoScrollCarouselItemProps {
  className?: string;
  children: JSX.Element;
}

export function AutoScrollCarouselSlide(props: AutoScrollCarouselItemProps) {
  const { className, children } = props;
  return (
    <div
      className={cn(
        'w-full min-w-0 flex-shrink-0 flex-grow-0 basis-[67%] pl-4 md:basis-[37%]',
        className,
      )}
    >
      {Children.map(children, (child) => {
        return cloneElement(child, { 'data-slide-content': '' });
      })}
    </div>
  );
}

export function AutoScrollCarouselPrevButton(
  props: ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren,
) {
  const { children, className, onClick, disabled, ...rest } = props;
  const context = useContext(EmblaCarouselContext);

  return (
    <button
      className={cn(
        'z-10 m-0 flex aspect-square cursor-pointer touch-manipulation items-center justify-center rounded-full border-0 border-none bg-transparent p-0 outline-none disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      disabled={context?.emblaApi?.canScrollPrev() === false || disabled}
      onClick={(e) => {
        if (context?.emblaApi) {
          const autoScroll = context.emblaApi.plugins()
            .autoScroll as unknown as AutoScrollType | undefined;

          if (!autoScroll) return;
          autoScroll.options.stopOnInteraction === false
            ? autoScroll.reset()
            : autoScroll.stop();
          context.emblaApi.scrollPrev();
        }
        onClick?.(e);
      }}
      {...rest}
    >
      {children}
    </button>
  );
}

export function AutoScrollCarouselNextButton(
  props: ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren,
) {
  const { children, className, onClick, disabled, ...rest } = props;
  const context = useContext(EmblaCarouselContext);

  return (
    <button
      className={cn(
        'z-10 m-0 flex aspect-square cursor-pointer touch-manipulation items-center justify-center rounded-full border-0 border-none bg-transparent p-0 outline-none disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      disabled={context?.emblaApi?.canScrollNext() === false || disabled}
      onClick={(e) => {
        if (context?.emblaApi) {
          const autoScroll = context.emblaApi.plugins()
            .autoScroll as unknown as AutoScrollType | undefined;
          if (!autoScroll) return;
          autoScroll.options.stopOnInteraction === false
            ? autoScroll.reset()
            : autoScroll.stop();
          context.emblaApi.scrollNext();
        }

        onClick?.(e);
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
