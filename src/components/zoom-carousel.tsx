'use client';

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { cn } from '~/utils/cn';

import type {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from 'embla-carousel';
import type { EmblaViewportRefType } from 'embla-carousel-react';
import type { PropsWithChildren } from 'react';

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
    loop = true, // Ensure looping is enabled
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
      <div className={cn('relative', className)}>
        {children}

        <div className="mt-4 flex items-center justify-between">
          {/* Left Arrow */}
          <button
            className="absolute left-0 top-1/2 z-10 -translate-y-full rounded-full bg-white p-1 shadow-lg transition-transform duration-300"
            onClick={() => emblaApi?.scrollPrev()}
          >
            <ChevronLeft size={28} className="text-primary-500" />
          </button>

          {/* Right Arrow */}
          <button
            className="absolute right-0 top-1/2 z-10 -translate-y-full rounded-full bg-white p-1 shadow-lg transition-transform duration-300"
            onClick={() => emblaApi?.scrollNext()}
          >
            <ChevronRight size={28} className="text-primary-500" />
          </button>
        </div>
      </div>
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
    <div
      className="mx-auto overflow-hidden px-7 lg:mx-0"
      ref={context?.carouselRef}
    >
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
        'mt-4 flex-shrink-0 basis-[100%] lg:basis-[50%]', // `aspect-square` ensures a square container
        className,
      )}
    >
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { 'data-slide-content': '' });
      })}
    </div>
  );
}
