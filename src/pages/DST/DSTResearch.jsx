import DSTNavbar from "../../components/DST_COE/DSTNavbar";
import PageBanner from "../../components/DST_COE/PageBanner";
import DSTFooter from "../../components/DST_COE/DSTFooter";

const researchFacilities = [
  {
    title: "Bio-incubator at SIIC IIT Kanpur",
    image: "/DST/Facilities/Bio_incubator.png",
    link: "https://www.iitk.ac.in/birac/about.php",
    description:
      "Over the years, SIIC IIT Kanpur has built a healthy Ecosystem conducive for Innovation and Incubation system with financial support from multiple government bodies including Department of Science and Technology, Department of Biotechnology.",
    description2:
      "A bio-incubator facility set-up at SIDBI Innovation & Incubation Center, IIT Kanpur provides a platform to facilitate bio-entrepreneurship and thereby to promote scientific imagination and creation.",
    fullWidth: true,
  },

  {
    title: "Analytical Lab",
    image: "/DST/Facilities/Analytical_lab.png",
    link: "https://iitk.ac.in/birac/analytical-lab.php",
    description:
      "This lab has several scientific equipments including Laminar Flow hood, Biochemical Analyzer, Ultrasonicator, Osmometer, UV-VIS spectrophotometer, Conductivity meter, Chromatography system (HPLC & FPLC), Table-top Spinner, Protein Gel electrophoresis, Gel Document system 2D, pH meter, Analytical Balance, PCR etc. This lab ensures the safety, efficacy, and quality of medical devices and diagnostics through rigorous testing and validation processes.",
  },

  {
    title: "DSP Lab",
    image: "/DST/Facilities/DSP_lab.png",
    link: "https://iitk.ac.in/birac/dsp-lab.php",
    description:
      "Targets of downstream processing are Solid/Liquid separation, Product recovery, Solvent recovery and Product purification. Range of DSP Instruments are Chromatography system with 4 degree Refigerator, High Speed Floor model refrigerated centrifuge (Sorvall), Table Top centrifuge, Filtration Unit with vacuum pump, HPLC System and many more.",
  },

  {
    title: "Microbial Lab",
    image: "/DST/Facilities/Microbial_Lab.png",
    link: "https://iitk.ac.in/birac/microbial-lab.php",
    description:
      "This lab is equipped with a variety of equipments that are essential for conducting precise and reliable microbial analyses. This includes Autoclave, Incubator, Laminar Flow Hood, Co2 incubator shaker, Microscope, Bacterial culture set-up, Spectrophotometer etc.",
  },

  {
    title: "Utility Labs",
    image: "/DST/Facilities/Utility_lab.png",
    link: "https://iitk.ac.in/birac/utility-lab.php",
    description:
      "This lab is equipped with tools and instruments essential for general support functions across various medical technology applications. Equipments including -80 degree Deep Freezer, -20 degree freezer, Liquid Nitrogen storage system, Vertical Autoclave (120 L), Horizontal Cylindrical Autoclave (220 L), incubator etc. are available commonly used during medical device development.",
  },

  {
    title: "Clean Room",
    image: "/DST/Facilities/Clean_Room.png",
    link: "https://iitk.ac.in/birac/clean-room.php",
    description:
      "Clean room Facilities exhibiting controlled environment is available to minimize contamination and maintain high levels of cleanliness for the manufacturing and testing of medical devices, pharmaceuticals, and other sensitive products.",
  },

  {
    title: "Cell-Culture Lab",
    image: "/DST/Facilities/Cell-Culture_Lab.png",
    link: "https://iitk.ac.in/birac/cell-culture-lab.php",
    description:
      "Mammalian Cell culture lab includes equipments essential for growing and studying mammalian cells in a controlled sterile environment to advance research, development, and production of medical technologies. Cryopreservation Facilities is also available enabling long-term storage and preservation of cells.",
  },
];

const DSTResearch = () => {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <DSTNavbar />

      <PageBanner
        title="Research Facilities"
        image="/DST/Facilities/Reserch_banner.png"
        className="bg-black/50"
      />

      <section
        className="py-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/DST/bg-img-3.png')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

          {researchFacilities.map((facility, index) => (
            <div
              key={index}
              className={`
                grid
                grid-cols-1
                lg:grid-cols-2
                gap-14
                items-center
              `}
            >
              {/* IMAGE */}
              <div
                className={`
                  ${index % 2 !== 0 ? "lg:order-2" : ""}
                  ${facility.fullWidth ? "hidden" : ""}
                `}
              >
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="
                    w-full
                    rounded-3xl
                    shadow-2xl
                    object-cover
                    hover:scale-[1.02]
                    transition-all
                    duration-500
                  "
                />
              </div>

              {/* CONTENT */}
              <div
                className={`
                  ${index % 2 !== 0 ? "lg:order-1" : ""}
                  ${facility.fullWidth ? "lg:col-span-2" : ""}
                `}
              >
                {/* HEADING */}
                <div className="mb-6">
                  <a
                    href={facility.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      text-3xl
                      md:text-4xl
                      font-bold
                      text-gray-900
                      hover:text-blue-700
                      transition-colors
                    "
                  >
                    {facility.title}
                  </a>

                  {/* BLUE LINE */}
                  <div className="w-20 h-1 bg-blue-600 mt-3 rounded-full"></div>
                </div>

                {/* DESCRIPTION */}
                <p className="text-gray-700 text-lg leading-8">
                  {facility.description}
                </p>

                {facility.description2 && (
                  <p className="text-gray-700 text-lg leading-8 mt-6">
                    {facility.description2}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <DSTFooter />
    </div>
  );
};

export default DSTResearch;