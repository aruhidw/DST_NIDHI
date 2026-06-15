import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { ChevronRight } from "lucide-react";

const DSTFooter = () => {
  return (
    <footer className="bg-[#081B33] text-white">
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* LEFT */}
          <div>
            {/* BROCHURE BUTTON */}
            <div className="mb-8">
              <a
                href="/DST/Medtech_Brochure.pdf"
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  
                  border border-blue-400
                  rounded-full

                  px-6 py-3

                  text-sm sm:text-base
                  font-medium

                  text-white

                  hover:bg-blue-600
                  hover:border-blue-600

                  transition-all duration-300
                "
              >
                <ChevronRight size={18} className="text-blue-400" />
                Brochure
              </a>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-5">
                Quick Links
              </h3>

              <div className="flex flex-col gap-3 text-gray-300 text-sm sm:text-base">
                <a href="/COEs/DST" className="hover:text-white transition">
                  Home
                </a>

                <a
                  href="/COEs/DST/about"
                  className="hover:text-white transition"
                >
                  About Us
                </a>

                <a
                  href="/COEs/DST/startups"
                  className="hover:text-white transition"
                >
                  Startups
                </a>

                <a
                  href="/COEs/DST/success"
                  className="hover:text-white transition"
                >
                  Success Stories
                </a>

                <a
                  href="/COEs/DST/contact"
                  className="hover:text-white transition"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col justify-between">
            <div>
              <p
                className="
                  text-gray-300
                  text-sm
                  sm:text-base
                  md:text-lg
                  leading-7
                "
              >
                Diamond Jubilee Academia Complex (DJAC),
                <br />
                Near New Core Labs, IIT Kanpur
              </p>

              <a
                href="mailto:medtech.coe@iitkfirst.com"
                className="
                  inline-block
                  mt-4

                  text-blue-300
                  text-sm
                  sm:text-base

                  hover:text-white
                  transition
                "
              >
                medtech.coe@iitkfirst.com
              </a>

              {/* SOCIAL ICONS */}
              <div className="flex items-center gap-4 mt-5">
                {/* FACEBOOK */}
                <a
                  href="https://www.facebook.com/IncubatorIITK/"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    h-10 w-10
                    rounded-full
                    border border-white

                    flex
                    items-center
                    justify-center

                    text-white

                    hover:bg-[#1877F2]
                    hover:text-white

                    shadow-md
                    hover:scale-110

                    transition-all duration-300
                  "
                >
                  <FaFacebookF size={18} />
                </a>

                {/* YOUTUBE */}
                <a
                  href="https://www.youtube.com/channel/UCrbWiYfjO4s0LrzISmcM_8g"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    h-10 w-10
                    rounded-full
                    border border-white

                    flex
                    items-center
                    justify-center

                    text-white

                    hover:bg-[#FF0000]
                    hover:text-white

                    shadow-md
                    hover:scale-110

                    transition-all duration-300
                  "
                >
                  <FaYoutube size={18} />
                </a>

                {/* INSTAGRAM */}
                <a
                  href="https://www.instagram.com/incubatoriitk/"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    h-10 w-10
                    rounded-full
                    border border-white

                    flex
                    items-center
                    justify-center

                    text-white

                    shadow-md
                    hover:scale-110

                    transition-all duration-300
                  "
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "linear-gradient(135deg,#F58529,#DD2A7B,#8134AF,#515BD4)";
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#ec4899";
                  }}
                >
                  <FaInstagram size={18} />
                </a>

                {/* LINKEDIN */}
                <a
                  href="https://www.linkedin.com/company/incubatoriitk"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    h-10 w-10
                    rounded-full
                    border border-white

                    flex
                    items-center
                    justify-center

                    text-white

                    hover:bg-[#0A66C2]
                    hover:text-white

                    shadow-md
                    hover:scale-110

                    transition-all duration-300
                  "
                >
                  <FaLinkedinIn size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div
        className="
          border-t border-white/10

          py-5 px-4

          text-center

          text-xs sm:text-sm

          text-gray-400
        "
      >
        © 2024 Nidhi DST CoE Powered by SIIC
        <span className="ml-2 text-gray-500">Powered by SGCC</span>
      </div>
    </footer>
  );
};

export default DSTFooter;
