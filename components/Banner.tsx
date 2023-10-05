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
          className={`sm:text-[4vw] text-2xl font-light font-acto leading-tight text-white`}
        >
          {slide.titleFirst}
          <br />
          {slide.titleSecond}
        </h1>

        <p
          className={`sm:text-[1.8vw] text-md font-lato sm:mt-[10px] ${'text-white'} leading-tight sm:w-[30vw]`}
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
      <div className="overflow-hidden relative sm:h-[calc(100vh-240px)] h-[45vh] w-screen ">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${getAnimationClass(index)} smallScreenMaxWidth
          flex  flex-row items-center justify-center w-screen absolute bg-cover
          sm:h-[calc(100vh-240px)] h-[45vh] sm:w-screen
          bg-gradient-to-r from-primary from-[20%] via-blue via-[50%] to-lightBlue to-[100%] sm:bg-cover
          
        `}
            style={{
              backgroundImage: `url(${slides[currentSlide].image})`,
              backgroundPosition: 'left center', // Adjusted this line
              backgroundRepeat: 'no-repeat',
              width: '100vw',
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
            <div className="sm:w-[10vw] w-[5vw] flex justify-end">
              <button className="sm:w-5 w-3" onClick={prevSlide}>
                <svg
                  viewBox="0 0 17 35"
                  fill="none"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  className="max-w-full h-auto"
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
            <div className="sm:w-[90vw] w-[80vw] mx-4 sm:mx-0">
              <div
                className={`flex flex-col sm:gap-4 gap-2 sm:pl-8 justify-center sm:w-[50vw] w-11/12 sm:text-left h-full`}
              >
                {renderContent(slide)}
              </div>
            </div>
            <div className="sm:w-[10vw] w-[5vw] flex justify-start">
              <button
                className="rotate-180 sm:w-5 w-3"
                onClick={nextSlide}
              >
                <svg
                  viewBox="0 0 17 35"
                  fill="none"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  className="max-w-full h-auto"
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
        <div className="flex gap-2 justify-center items-end w-full absolute sm:bottom-8 bottom-2">
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
