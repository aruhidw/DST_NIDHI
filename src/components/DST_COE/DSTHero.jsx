import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    type: "image",
    src: "/DST/DST_header.png",
  },

  {
    type: "video",
    src: "/DST/home_page.mp4",
    title: "DST-NIDHI CoE In MedTech Innovations",
    brochure: "/DST/brochure.pdf",
  },
];

const DSTHero = () => {
  const [current, setCurrent] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative w-full overflow-hidden">
     
      <div
        className="
          relative w-full
          h-[200px]
          sm:h-[200px]
          md:h-[350px]
          lg:h-[400px]
          xl:h-[450px]
        "
      >
       
        <div
          className="
            flex h-full
            transition-transform
            duration-700
            ease-in-out
          "
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full h-full relative"
            >
              {/* IMAGE */}
              {slide.type === "image" ? (
                <img
                  src={slide.src}
                  alt="hero"
                  className="w-full h-full object-cover"
                />
              ) : (
               
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source
                    src={slide.src}
                    type="video/mp4"
                  />
                </video>
              )}

              
              {slide.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                  <div>
                    <h1
                      className="
                        text-white
                        font-bold
                        leading-tight
                        drop-shadow-lg

                        text-lg
                        sm:text-2xl
                        md:text-4xl
                        lg:text-5xl
                      "
                    >
                      DST-NIDHI CoE In MedTech Innovations
                    </h1>

                    <a
                      href="/DST/DST_NIHDI_CoE_MedTech.pdf"
                      download
                      className="
                        inline-block
                        mt-3
                        sm:mt-4
                        md:mt-6

                        px-3 py-1.5
                        sm:px-5 sm:py-2
                        md:px-6 md:py-3

                        text-xs
                        sm:text-sm
                        md:text-base

                        bg-blue-600
                        hover:bg-blue-700
                        text-white
                        rounded-md
                        transition
                      "
                     >
                      Download Brochure
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        
        <button
          onClick={prevSlide}
          className="
            absolute left-2 sm:left-4
            top-1/2 -translate-y-1/2

            bg-black/40
            hover:bg-black/60

            text-white

            w-8 h-8
            sm:w-10 sm:h-10

            rounded-full
            z-10
          "
        >
          ❮
        </button>

       
        <button
          onClick={nextSlide}
          className="
            absolute right-2 sm:right-4
            top-1/2 -translate-y-1/2

            bg-black/40
            hover:bg-black/60

            text-white

            w-8 h-8
            sm:w-10 sm:h-10

            rounded-full
            z-10
          "
        >
          ❯
        </button>

   
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`
                w-2 h-2 rounded-full transition-all
                ${
                  current === index
                    ? "bg-white scale-110"
                    : "bg-white/40"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DSTHero;