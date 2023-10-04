import Link from 'next/link';
import React, { FC, useEffect, useRef, useState } from 'react';

interface SlideProps {
  id: number;
  titleFirst: string;
  titleSecond: string;
  description: string;
  descriptionSecond?: string;
  image: string;
  background: string;
  align: string;
  buttonText?: string;
  imageCaption?: string;
}

interface BannerProps {
  slides: SlideProps[];
}

export const Banner: FC<BannerProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<string | null>(null);

  const [shouldRenderContent, setShouldRenderContent] = useState(false);

  const renderContent = (slide: SlideProps) => {
    return (
      <>
        <h1
          className={`sm:text-[4vw] text-4xl font-light font-acto leading-tight text-white`}
        >
          {slide.titleFirst}
          <br />
          {slide.titleSecond}
        </h1>

        <p
          className={`sm:text-[1.8vw] text-md font-lato mt-[10px] ${'text-white'} leading-tight sm:w-[30vw]`}
        >
          {slides[currentSlide].description}
          <br />
          {slides[currentSlide].descriptionSecond}
        </p>

        {slide.buttonText && (
          <a href="#nuestros-programas">
            <button className="bg-primary px-[12px] py-[7px] rounded-md mt-[12px] text-white hover:bg-pink hover:text-white sm:text-[1.1vw] text-sm shadow-md font-lato-bold">
              {slides[currentSlide].buttonText}
            </button>
          </a>
        )}
      </>
    );
  };

  const nextSlide = () => {
    setDirection('next');
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection('prev');
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const getAnimationClass = (index: number) => {
    if (index === currentSlide) {
      return direction === 'next' ? 'slide-enter-next' : 'slide-enter-prev';
    }
    return direction === 'next' ? 'slide-leave-next' : 'slide-leave-prev';
  };

  const getTextColor = (color: string) => {
    switch (color) {
      case 'white':
        return 'text-white';
      case 'black':
        return 'text-black';
      default:
        return 'text-white';
    }
  };

  const getAlign = (align: string) => {
    switch (align) {
      case 'left':
        return 'items-start text-left';
      case 'right':
        return 'absolute left-1/2 top-0 text-left';
      default:
        return 'items-center';
    }
  };

  return (
    <div className="w-full">
      <div className="overflow-hidden relative h-[calc(100vh-140px)] w-screen  ">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${getAnimationClass(index)} smallScreenMaxWidth
          flex  flex-row items-center justify-center w-screen absolute bg-cover
        `}
            style={{
              backgroundImage: `url(${slides[currentSlide].image})`,
              backgroundPosition: 'left center', // Adjusted this line
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              height: '100vh',
              width: '100vw',
              maxHeight: 'calc(100vh - 120px)',
              transform: `translateX(${
                index === currentSlide
                  ? '0'
                  : index > currentSlide
                  ? '100%'
                  : '-100%'
              })`,
              transition:
                'transform 0.5s ease-in-out, background-image 0.5s ease-in-out', // Adjusted this line
            }}
          >
            <div className="sm:max-w-[5vw] w-[10vw] flex justify-center">
              <button className="" onClick={prevSlide}>
                <svg
                  width="17"
                  height="35"
                  viewBox="0 0 17 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 18.0107L15 32.5107"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                  />
                  <path
                    d="M15 3L2 17.5"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
            </div>
            <div className="sm:w-[95vw] w-[80vw]">
              <div
                className={`flex flex-col gap-4 sm:px-20 justify-center sm:w-[50vw] w-11/12 sm:text-left h-full`}
              >
                {renderContent(slide)}
              </div>
            </div>
            <div className="sm:max-w-[5vw] w-[10vw] flex justify-center">
              <button className="rotate-180" onClick={nextSlide}>
                <svg
                  width="17"
                  height="35"
                  viewBox="0 0 17 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 18.0107L15 32.5107"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                  />
                  <path
                    d="M15 3L2 17.5"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
        <div className="flex gap-2 justify-center items-end w-full absolute bottom-8">
          <div
            className={`w-4 h-4 rounded-full cursor-pointer border border-white ${
              currentSlide === 0 && 'bg-white'
            }`}
            onClick={() => setCurrentSlide(0)}
          ></div>
          <div
            className={`w-4 h-4 rounded-full cursor-pointer border border-white ${
              currentSlide === 1 && 'bg-white'
            }`}
            onClick={() => setCurrentSlide(1)}
          ></div>
          <div
            className={`w-4 h-4 rounded-full cursor-pointer border border-white ${
              currentSlide === 2 && 'bg-white'
            }`}
            onClick={() => setCurrentSlide(2)}
          ></div>
          <div
            className={`w-4 h-4 rounded-full cursor-pointer border border-white ${
              currentSlide === 3 && 'bg-white'
            }`}
            onClick={() => setCurrentSlide(3)}
          ></div>
          <div
            className={`w-4 h-4 rounded-full cursor-pointer border border-white ${
              currentSlide === 4 && 'bg-white'
            }`}
            onClick={() => setCurrentSlide(4)}
          ></div>
        </div>
      </div>
    </div>
  );
};
