'use client';

import React, {
  Children,
  cloneElement,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import { cn } from '~/utils/cn';

import type {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from 'embla-carousel';
import type { EmblaViewportRefType } from 'embla-carousel-react';
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

interface EmblaCarouselContextType {
  carouselRef: EmblaViewportRefType;
  emblaApi?: EmblaCarouselType;
}

const EmblaCarouselContext = createContext<EmblaCarouselContextType | null>(
  null,
);

interface EmblaCarouselProps extends PropsWithChildren<EmblaOptionsType> {
  className?: string;
  tweenFactorBase?: number;
}

export function ZoomCarousel(props: EmblaCarouselProps) {
  const {
    className,
    children,
    tweenFactorBase = 0.22,
    loop = true,
    ...rest
  } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop, ...rest }, []);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<(HTMLElement | undefined)[]>([]);

  function numberWithinRange(number: number, min: number, max: number): number {
    return Math.min(Math.max(number, min), max);
  }

  const setTweenNodes = useCallback((carouselApi: EmblaCarouselType): void => {
    tweenNodes.current = carouselApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector('[data-slide-content]') as
        | HTMLElement
        | undefined;
    });
  }, []);

  const setTweenFactor = useCallback(
    (carouselApi: EmblaCarouselType) => {
      tweenFactor.current =
        tweenFactorBase * carouselApi.scrollSnapList().length;
    },
    [tweenFactorBase],
  );

  const tweenScale = useCallback(
    (carouselApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = carouselApi.internalEngine();
      const scrollProgress = carouselApi.scrollProgress();
      const slidesInView = carouselApi.slidesInView();
      const isScrollEvent = eventName === 'scroll';

      carouselApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const scale = numberWithinRange(tweenValue, 0, 1).toString();
          const tweenNode = tweenNodes.current[slideIndex];
          if (!tweenNode) return;
          tweenNode.style.transform = `scale(${scale})`;
        });
      });
    },
    [],
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenScale)
      .on('scroll', tweenScale)
      .on('slideFocus', tweenScale);
  }, [emblaApi, tweenScale, setTweenFactor, setTweenNodes]);
  return (
    <EmblaCarouselContext.Provider value={{ carouselRef: emblaRef, emblaApi }}>
      <div className={cn('mx-auto', className)}>{children}</div>
    </EmblaCarouselContext.Provider>
  );
}

interface ZoomCarouselContainerProps extends PropsWithChildren {
  className?: string;
}

export function ZoomCarouselContainer(props: ZoomCarouselContainerProps) {
  const { className, children } = props;
  const context = useContext(EmblaCarouselContext);
  return (
    <div className="overflow-hidden" ref={context?.carouselRef}>
      <div className={cn('flex touch-pan-y touch-pinch-zoom', className)}>
        {children}
      </div>
    </div>
  );
}

interface ZoomCarouselItemProps {
  className?: string;
  children: JSX.Element;
}

export function ZoomCarouselSlide(props: ZoomCarouselItemProps) {
  const { className, children } = props;
  return (
    <div
      className={cn(
        'w-full min-w-0 flex-shrink-0 flex-grow-0 basis-[68%] pl-4',
        className,
      )}
    >
      {Children.map(children, (child) => {
        return cloneElement(child, { 'data-slide-content': '' });
      })}
    </div>
  );
}

export function ZoomCarouselPrevButton(
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

export function ZoomCarouselNextButton(
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

export function ZoomCarouselIndicator(props: {
  children: (activeIndex?: number) => JSX.Element;
}) {
  const { children } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const context = useContext(EmblaCarouselContext);

  useEffect(() => {
    if (!context?.emblaApi) return;

    const onSelect = () => {
      if (!context.emblaApi) return;
      setActiveIndex(context.emblaApi.selectedScrollSnap());
    };

    context.emblaApi
      .on('init', () => {
        if (!context.emblaApi) return;
        setActiveIndex(context.emblaApi.selectedScrollSnap());
      })
      .on('reInit', () => {
        if (!context.emblaApi) return;
        setActiveIndex(context.emblaApi.selectedScrollSnap());
      })
      .on('select', onSelect);

    return () => {
      context.emblaApi?.off('select', onSelect);
    };
  }, [context?.emblaApi]);

  if (!context?.emblaApi) return null;

  return children(activeIndex);
}
