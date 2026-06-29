import DSTNavbar from "../../components/DST_COE/DSTNavbar";
import PageBanner from "../../components/DST_COE/PageBanner";
import DSTFooter from "../../components/DST_COE/DSTFooter";
const focusAreas = [
  {
    title: "Medical Devices",
    image: "/DST/implantabledevices.png",
    points: [
      "Implants & Prosthetics",
      "Surgical Tools",
      "Wearable Medical Devices",
    ],
  },
  {
    title: "Diagnostics",
    image: "/DST/diagnostics.png",
    points: [
      "Point-of-care Diagnostics",
      "Molecular Diagnostics",
      "In-vitro Diagnostics",
    ],
  },
  {
    title: "Digital Health Technologies",
    image: "/DST/digital-health-technologies.png",
    points: [
      "Telemedicine",
      "AI/ML in Digital Health",
      "Digital Therapeutics",
    ],
  },
];

const startupRequirements = [
  "Private Limited Company (as defined in the Companies Act, 2013)",
  "Registered Partnership Firm (Regd. under section 59 of the Partnership Act, 1932)",
  "Limited Liability Partnership (under the Liability Partnership Act 2008)",
];

const DSTIncubation = () => {
  return (
    <div className="bg-white text-black">
      <DSTNavbar />

      {/* Hero Section */}
      <section
        className="relative h-[350px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url("/DST/startups_banner.png")`,
        }}
      >
        <div className="absolute inset-0 " />

        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">
            Incubation
          </h1>

          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
        </div>
      </section>

      {/* Overview */}
      <section className="container mx-auto px-6 py-16">
        <div className="mb-8">
          <h2 className="text-4xl font-bold">
            Overview
          </h2>

          <div className="w-24 h-1 bg-blue-500 mt-4 rounded-full" />
        </div>

        <p className="text-lg leading-8 text-gray-700">
          At MedTech CoE, we believe that the future of healthcare lies in the
          hands of bold, innovative minds. If you have an idea for a
          breakthrough medical device, healthcare solution, or digital health
          platform, we're here to help you turn that vision into reality.
        </p>
      </section>

      {/* Focus Areas */}
      <section className="container mx-auto px-6 pb-16">
        <div className="mb-12">
          <h2 className="text-4xl font-bold">
            Focus Areas
          </h2>

          <div className="w-24 h-1 bg-blue-500 mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <img
                src={area.image}
                alt={area.title}
                className="w-full h-[260px] object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {area.title}
                </h3>

                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {area.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Who Should Apply */}
      <section className="container mx-auto px-6 pb-20">
        <div className="mb-12">
          <h2 className="text-4xl font-bold">
            Who Should Apply?
          </h2>

          <div className="w-24 h-1 bg-blue-500 mt-4 rounded-full" />
        </div>

        <div className="bg-gray-50 rounded-2xl shadow-md p-8 md:p-10 border border-gray-100">
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Startups in the MedTech Sector
            </h3>

            <p className="text-lg text-gray-700 mb-5">
              The start-up must be incorporated as a:
            </p>

            <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
              {startupRequirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Innovative and Scalable Technology
            </h3>

            <p className="text-lg leading-8 text-gray-700">
              The startup should be working on an innovative technology in the
              MedTech sector. We support startups at all stages of product
              development ranging from Ideation, Prototyping to Scale-up.
            </p>
          </div>
        </div>
      </section>

      <DSTFooter />
    </div>
  );
};

export default DSTIncubation;