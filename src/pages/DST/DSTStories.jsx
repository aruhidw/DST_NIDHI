import React, { useEffect, useState } from "react";
import DSTNavbar from "../../components/DST_COE/DSTNavbar";
import PageBanner from "../../components/DST_COE/PageBanner";
import DSTFooter from "../../components/DST_COE/DSTFooter";

const stories = [
  {
    image: "/DST/success0.png",
  },
  {
    image: "/DST/success1.png",
  },
  {
    image: "/DST/success2.png",
  },
  {
    image: "/DST/success3.png",
  },
];

const DSTStories = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === stories.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? stories.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <DSTNavbar />

      <PageBanner
        title="Success Stories"
        image="/DST/SUCCESS_STORIES.png"
        
      />

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">

        
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {stories.map((story, index) => (
                <div
                  key={index}
                  className="min-w-full"
                >
                  <img
                    src={story.image}
                    alt={`Success Story ${index + 1}`}
                    className="
                      w-full
                      object-contain
                    "
                  />
                </div>
              ))}
            </div>

          
            <button
              onClick={prevSlide}
              className="
                absolute
                top-1/2
                left-4
                -translate-y-1/2
                bg-white/80
                hover:bg-white
                text-black
                w-12
                h-12
                rounded-full
                shadow-lg
                flex
                items-center
                justify-center
                text-2xl
                transition-all
              "
            >
              ❮
            </button>

         
            <button
              onClick={nextSlide}
              className="
                absolute
                top-1/2
                right-4
                -translate-y-1/2
                bg-white/80
                hover:bg-white
                text-black
                w-12
                h-12
                rounded-full
                shadow-lg
                flex
                items-center
                justify-center
                text-2xl
                transition-all
              "
            >
              ❯
            </button>
          </div>
        </div>
      </section>

      <DSTFooter />
    </div>
  );
};

export default DSTStories;