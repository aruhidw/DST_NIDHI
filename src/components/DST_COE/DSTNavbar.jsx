import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const DSTNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [aboutOpen, setAboutOpen] = useState(false);
  const [facilityOpen, setFacilityOpen] = useState(false);
  const [newsOpen, setNewsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="w-full px-2 sm:px-3 lg:px-4">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          <div
            className="
              flex items-center
              gap-2 sm:gap-3 md:gap-4
              flex-shrink-0
              pl-1
            "
          >
            <Link to="/COEs/DST/Home">
              <img
                src="/DST/MedTech_CoE_logo.png"
                alt="medtech"
                className="
                  h-8
                  sm:h-10
                  md:h-12
                  lg:h-14
                  w-auto
                  object-contain
                  cursor-pointer
                "
              />
            </Link>

            <Link to="/DST">
              <img
                src="/DST/dst-logo.png"
                alt="dst"
                className="
                  h-8
                  sm:h-10
                  md:h-12
                  lg:h-14
                  w-auto
                  object-contain
                  cursor-pointer
                "
              />
            </Link>

            <Link to={"/"}>
              <img
                src="/DST/siic_logo_.png"
                alt="siic"
                className="
                  h-8
                  sm:h-10
                  md:h-12
                  lg:h-14
                  w-auto
                  object-contain
                  cursor-pointer
                "
              />
            </Link>
          </div>

          <div className="hidden xl:flex items-center gap-6 2xl:gap-8 font-medium text-gray-700 text-sm">
            <Link
              to="/COEs/DST/Home"
              className="hover:text-blue-600 transition"
            >
              Home
            </Link>

            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-blue-600">
                About <ChevronDown size={16} />
              </button>

              <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-md w-56 py-2">
                <Link
                  to="/COEs/DST/about"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  About Us
                </Link>

                <Link
                  to="/COEs/DST/board-members"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Board Of Directors
                </Link>

                <Link
                  to="/COEs/DST/mentors"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Mentors
                </Link>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-blue-600">
                Facilities <ChevronDown size={16} />
              </button>

              <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-md w-64 py-2">
                <Link
                  to="/COEs/DST/prototype"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Prototype Facilities
                </Link>

                <Link
                  to="/COEs/DST/research"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Research Facilities
                </Link>
              </div>
            </div>

            <Link
              to="/COEs/DST/startups"
              className="hover:text-blue-600 transition"
            >
              Startups
            </Link>

            <Link
              to="/COEs/DST/incubation"
              className="hover:text-blue-600 transition"
            >
              Incubation
            </Link>

            <Link
              to="/COEs/DST/stories"
              className="hover:text-blue-600 transition"
            >
              Success Stories
            </Link>

            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-blue-600">
                News & Events <ChevronDown size={16} />
              </button>

              <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-md w-56 py-2">
                <Link
                  to="/COEs/DST/upcoming-events"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Upcoming Events
                </Link>

                <Link
                  to="/DST/past"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Past Events
                </Link>
              </div>
            </div>
          </div>

          <button className="xl:hidden" onClick={() => setMobileOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </div>

      <div
        className={`
          fixed top-0 right-0 h-full w-[280px]
          bg-white shadow-2xl z-[100]
          transform transition-transform duration-300
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-bold text-lg">Menu</h2>

          <button onClick={() => setMobileOpen(false)}>
            <X size={28} />
          </button>
        </div>

        <div className="flex flex-col p-4 text-gray-700">
          <Link
            to="/DST"
            className="py-3 border-b"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>

          <button
            onClick={() => setAboutOpen(!aboutOpen)}
            className="flex justify-between items-center py-3 border-b"
          >
            About
            <ChevronDown size={18} />
          </button>

          {aboutOpen && (
            <div className="pl-4 flex flex-col">
              <Link
                to="/DST/about"
                className="py-2"
                onClick={() => setMobileOpen(false)}
              >
                About Us
              </Link>

              <Link
                to="/DST/board"
                className="py-2"
                onClick={() => setMobileOpen(false)}
              >
                Board Of Directors
              </Link>

              <Link
                to="/DST/mentors"
                className="py-2"
                onClick={() => setMobileOpen(false)}
              >
                Mentors
              </Link>
            </div>
          )}

          <button
            onClick={() => setFacilityOpen(!facilityOpen)}
            className="flex justify-between items-center py-3 border-b"
          >
            Facilities
            <ChevronDown size={18} />
          </button>

          {facilityOpen && (
            <div className="pl-4 flex flex-col">
              <Link
                to="/DST/prototype"
                className="py-2"
                onClick={() => setMobileOpen(false)}
              >
                Prototype Facilities
              </Link>

              <Link
                to="/DST/research"
                className="py-2"
                onClick={() => setMobileOpen(false)}
              >
                Research Facilities
              </Link>
            </div>
          )}

          <Link
            to="/DST/startups"
            className="py-3 border-b"
            onClick={() => setMobileOpen(false)}
          >
            Startups
          </Link>

          <Link
            to="/DST/incubation"
            className="py-3 border-b"
            onClick={() => setMobileOpen(false)}
          >
            Incubation
          </Link>

          <Link
            to="/DST/success"
            className="py-3 border-b"
            onClick={() => setMobileOpen(false)}
          >
            Success Stories
          </Link>

          <button
            onClick={() => setNewsOpen(!newsOpen)}
            className="flex justify-between items-center py-3 border-b"
          >
            News & Events
            <ChevronDown size={18} />
          </button>

          {newsOpen && (
            <div className="pl-4 flex flex-col">
              <Link
                to="/DST/upcoming"
                className="py-2"
                onClick={() => setMobileOpen(false)}
              >
                Upcoming Events
              </Link>

              <Link
                to="/DST/past"
                className="py-2"
                onClick={() => setMobileOpen(false)}
              >
                Past Events
              </Link>
            </div>
          )}
        </div>
      </div>

      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </header>
  );
};

export default DSTNavbar;
