import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const ABOUT_PATHS = ["/COEs/DST/about", "/COEs/DST/board-members", "/COEs/DST/mentors"];
const FACILITY_PATHS = ["/COEs/DST/prototype", "/COEs/DST/research"];
const NEWS_PATHS = ["/COEs/DST/upcoming-events", "/COEs/DST/news-and-events"];

const DSTNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [facilityOpen, setFacilityOpen] = useState(false);
  const [newsOpen, setNewsOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = (path) => pathname === path;
  const isGroupActive = (paths) => paths.includes(pathname);

  const linkClass = (path) =>
    `transition hover:text-blue-600 ${
      isActive(path)
        ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-0.5"
        : ""
    }`;

  const dropdownParentClass = (paths) =>
    `flex items-center gap-1 hover:text-blue-600 transition ${
      isGroupActive(paths) ? "text-blue-600 font-semibold" : ""
    }`;

  const dropdownItemClass = (path) =>
    `block px-4 py-2 hover:bg-gray-100 transition ${
      isActive(path) ? "text-blue-600 font-semibold bg-blue-50" : ""
    }`;

  const mobileLinkClass = (path) =>
    `py-3 border-b transition ${isActive(path) ? "text-blue-600 font-semibold" : ""}`;

  const mobileDropdownItemClass = (path) =>
    `py-2 transition ${isActive(path) ? "text-blue-600 font-semibold" : ""}`;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="w-full px-2 sm:px-3 lg:px-4">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-shrink-0 pl-1">
            <Link to="/COEs/DST/Home">
              <img
                src="/DST/MedTech_CoE_logo.png"
                alt="medtech"
                className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain cursor-pointer"
              />
            </Link>

            <Link to="/COEs/DST/Home">
              <img
                src="/DST/dst-logo.png"
                alt="dst"
                className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain cursor-pointer"
              />
            </Link>

            <Link to="/COEs/DST/Home">
              <img
                src="/DST/siic_logo_.png"
                alt="siic"
                className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain cursor-pointer"
              />
            </Link>
          </div>

          <nav className="hidden xl:flex items-center gap-6 2xl:gap-8 font-medium text-gray-700 text-sm">
            <Link to="/COEs/DST/Home" className={linkClass("/COEs/DST/Home")}>
              Home
            </Link>

            <div className="relative group">
              <button className={dropdownParentClass(ABOUT_PATHS)}>
                About <ChevronDown size={16} />
              </button>
              <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-md w-56 py-2">
                <Link to="/COEs/DST/about" className={dropdownItemClass("/COEs/DST/about")}>
                  About Us
                </Link>
                <Link to="/COEs/DST/board-members" className={dropdownItemClass("/COEs/DST/board-members")}>
                  Board Of Directors
                </Link>
                <Link to="/COEs/DST/mentors" className={dropdownItemClass("/COEs/DST/mentors")}>
                  Mentors
                </Link>
              </div>
            </div>

            <div className="relative group">
              <button className={dropdownParentClass(FACILITY_PATHS)}>
                Facilities <ChevronDown size={16} />
              </button>
              <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-md w-64 py-2">
                <Link to="/COEs/DST/prototype" className={dropdownItemClass("/COEs/DST/prototype")}>
                  Prototype Facilities
                </Link>
                <Link to="/COEs/DST/research" className={dropdownItemClass("/COEs/DST/research")}>
                  Research Facilities
                </Link>
              </div>
            </div>

            <Link to="/COEs/DST/startups" className={linkClass("/COEs/DST/startups")}>
              Startups
            </Link>

            <Link to="/COEs/DST/incubation" className={linkClass("/COEs/DST/incubation")}>
              Incubation
            </Link>

            <Link to="/COEs/DST/stories" className={linkClass("/COEs/DST/stories")}>
              Success Stories
            </Link>

            <div className="relative group">
              <button className={dropdownParentClass(NEWS_PATHS)}>
                News & Events <ChevronDown size={16} />
              </button>
              <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-md w-56 py-2">
                <Link to="/COEs/DST/upcoming-events" className={dropdownItemClass("/COEs/DST/upcoming-events")}>
                  Upcoming Events
                </Link>
                <Link to="/COEs/DST/news-and-events" className={dropdownItemClass("/COEs/DST/news-and-events")}>
                  Past Events
                </Link>
              </div>
            </div>
          </nav>

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

        <div className="flex flex-col p-4 text-gray-700 overflow-y-auto">
          <Link
            to="/COEs/DST/Home"
            className={mobileLinkClass("/COEs/DST/Home")}
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>

          <button
            onClick={() => setAboutOpen(!aboutOpen)}
            className={`flex justify-between items-center py-3 border-b ${
              isGroupActive(ABOUT_PATHS) ? "text-blue-600 font-semibold" : ""
            }`}
          >
            About
            <ChevronDown
              size={18}
              className={`transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""}`}
            />
          </button>

          {aboutOpen && (
            <div className="pl-4 flex flex-col">
              <Link
                to="/COEs/DST/about"
                className={mobileDropdownItemClass("/COEs/DST/about")}
                onClick={() => setMobileOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/COEs/DST/board-members"
                className={mobileDropdownItemClass("/COEs/DST/board-members")}
                onClick={() => setMobileOpen(false)}
              >
                Board Of Directors
              </Link>
              <Link
                to="/COEs/DST/mentors"
                className={mobileDropdownItemClass("/COEs/DST/mentors")}
                onClick={() => setMobileOpen(false)}
              >
                Mentors
              </Link>
            </div>
          )}

          <button
            onClick={() => setFacilityOpen(!facilityOpen)}
            className={`flex justify-between items-center py-3 border-b ${
              isGroupActive(FACILITY_PATHS) ? "text-blue-600 font-semibold" : ""
            }`}
          >
            Facilities
            <ChevronDown
              size={18}
              className={`transition-transform duration-200 ${facilityOpen ? "rotate-180" : ""}`}
            />
          </button>

          {facilityOpen && (
            <div className="pl-4 flex flex-col">
              <Link
                to="/COEs/DST/prototype"
                className={mobileDropdownItemClass("/COEs/DST/prototype")}
                onClick={() => setMobileOpen(false)}
              >
                Prototype Facilities
              </Link>
              <Link
                to="/COEs/DST/research"
                className={mobileDropdownItemClass("/COEs/DST/research")}
                onClick={() => setMobileOpen(false)}
              >
                Research Facilities
              </Link>
            </div>
          )}

          <Link
            to="/COEs/DST/startups"
            className={mobileLinkClass("/COEs/DST/startups")}
            onClick={() => setMobileOpen(false)}
          >
            Startups
          </Link>

          <Link
            to="/COEs/DST/incubation"
            className={mobileLinkClass("/COEs/DST/incubation")}
            onClick={() => setMobileOpen(false)}
          >
            Incubation
          </Link>

          <Link
            to="/COEs/DST/stories"
            className={mobileLinkClass("/COEs/DST/stories")}
            onClick={() => setMobileOpen(false)}
          >
            Success Stories
          </Link>

          <button
            onClick={() => setNewsOpen(!newsOpen)}
            className={`flex justify-between items-center py-3 border-b ${
              isGroupActive(NEWS_PATHS) ? "text-blue-600 font-semibold" : ""
            }`}
          >
            News & Events
            <ChevronDown
              size={18}
              className={`transition-transform duration-200 ${newsOpen ? "rotate-180" : ""}`}
            />
          </button>

          {newsOpen && (
            <div className="pl-4 flex flex-col">
              <Link
                to="/COEs/DST/upcoming-events"
                className={mobileDropdownItemClass("/COEs/DST/upcoming-events")}
                onClick={() => setMobileOpen(false)}
              >
                Upcoming Events
              </Link>
              <Link
                to="/COEs/DST/news-and-events"
                className={mobileDropdownItemClass("/COEs/DST/news-and-events")}
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
