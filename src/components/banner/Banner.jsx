import React, { useEffect, useState } from 'react';
import bannerData from './bannerData';
import Banner1 from "../../assets/spacex-banner1.jpg";


const Banner = () => {
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? bannerData.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === bannerData.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, 10000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <section className="relative h-[65vh] md:h-[85vh]">
      <div className="absolute z-10 w-full bg-gradient-to-b from-transparent-black to-transparent h-28" />
      <img
        src={Banner1}
        alt="Banner"
        className='h-full w-full top-0 left-0 object-cover'
      />

      <div className="container">
        <div className="absolute z-10 left-0 right-0 top-[45%] md:top-[50%] xl:top-[40%]">
          <h1 className="max-w-[250px] xl:max-w-[350px] mx-auto px-4 text-2xl font-bold tracking-wide text-center text-black-700 md:px-0 md:text-3xl xl:text-4xl">
            Not sure where to go? Go Space.
          </h1>
          <div className="text-center">
            <button className="h-16 w-16 px-2 py-2 mx-auto mt-4 text-sm font-medium text-black duration-150 rounded-full active:scale-90 text-md bg-neon md:mx-0 hover:shadow-xl md:text-3xl xl:text-4xl">
              &#8595;
            </button>
          </div>
        </div>
      </div>
    </section>
  )  
};

export default Banner;
