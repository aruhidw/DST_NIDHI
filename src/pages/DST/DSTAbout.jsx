// src/pages/COEs/DST/About.jsx
import DSTNavbar from "../../components/DST_COE/DSTNavbar";
import PageBanner from "../../components/DST_COE/PageBanner";
import DSTFooter from "../../components/DST_COE/DSTFooter";

const objectives = [
  {
    title: "Identify and Support Innovators",
    description:
      "Scout and support innovators in the MedTech sector, guiding them from idea conception through commercialization.",
  },
  {
    title: "Develop and Commercialize New MedTech Products",
    description:
      "Support innovators to develop new MedTech products and provide relevant mentorship support for commercialization of developed products.",
  },
  {
    title: "Provide Infrastructure and Resources",
    description:
      "Provide cutting-edge lab facilities and resources for the development and testing of implantable medical devices and other MedTech innovations.",
  },
  {
    title: "Undertake Capacity Building",
    description:
      "Organize workshops, boot camps, and training sessions to build capacity and enhance the skill sets of entrepreneurs and innovators.",
  },
  {
    title: "Facilitate Healthcare Industry Connections",
    description:
      "Facilitate connections between startups and multiple stakeholders including healthcare providers, distributors, and investors.",
  },
  {
    title: "Offer Regulatory and Market Access",
    description:
      "Assist innovators in navigating through complex regulatory landscape to ensure compliance and facilitate faster market entry.",
  },
];

const DSTAbout = () => {
  return (
    <div className="w-full overflow-x-hidden bg-white">
      {/* NAVBAR */}
      <DSTNavbar />

      {/* BANNER */}
      <PageBanner
        title="About Us"
        subtitle="DST NIDHI MedTech CoE"
        image="/DST/ABOUT_PAGE_BANNER.png"
      />

      {/* OVERVIEW */}
      <section
        className="
          max-w-7xl mx-auto

          px-4
          sm:px-6
          md:px-8
          lg:px-10

          py-12
          sm:py-16
          md:py-20
          lg:py-24
        "
      >
        <div className="max-w-5xl">
          <h2
            className="
              font-bold
              text-slate-900

              text-3xl
              sm:text-4xl
              md:text-5xl

              mb-5
              sm:mb-6
              md:mb-8
            "
          >
            Overview
          </h2>

          <p
            className="
              text-slate-700
              leading-8
              sm:leading-9
              md:leading-10

              text-base
              sm:text-lg
              md:text-xl
            "
          >
            The DST NIDHI MedTech CoE at IIT Kanpur is on a mission to
            tackle the complex issues plaguing Indian healthcare. Our
            approach centers around fostering an ecosystem for indigenous
            solutions—truly embracing the ‘Make in India’ ethos.
            The vision is clear: to rapidly develop and deploy homegrown
            innovations that directly impact real-world scenarios.
            By streamlining testing, validation, and commercialization
            processes, the center aims to improve lives and contribute
            significantly to the healthcare landscape.
          </p>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section
        className="
          max-w-7xl mx-auto

          px-4
          sm:px-6
          md:px-10
          lg:px-10

          pb-16
          sm:pb-20
          md:pb-24

          space-y-16
          sm:space-y-20
          md:space-y-28
        "
      >
        {/* VISION */}
      {/* VISION */}
<div
  className="
    grid
    lg:grid-cols-2
    gap-10
    xl:gap-16
    items-center
  "
>
  {/* IMAGE */}
<div className="w-full">
  <img
    src="/DST/DSTvision.png"
    alt="Vision"
    className="
      w-full
      mr-auto

      h-[260px]
      sm:h-[320px]
      md:h-[400px]
      lg:h-[480px]

      object-cover

      rounded-2xl
      sm:rounded-3xl

      shadow-xl
    "
  />
</div>

  {/* CONTENT */}
  <div className="w-full">
    <h2
      className="
        font-bold
        text-slate-900

        text-3xl
        sm:text-4xl
        md:text-5xl

        mb-5
        sm:mb-6
      "
    >
      Vision
    </h2>

    <p
      className="
        text-slate-700

        text-base
        sm:text-lg
        md:text-xl

        leading-8
        sm:leading-9
        md:leading-10
      "
    >
      To be a global leader in fostering and translating
      cutting-edge medical technology innovations into impactful
      healthcare solutions, thereby enhancing the quality of life
      and setting new benchmarks in the MedTech industry.
    </p>
  </div>
</div>

        {/* MISSION */}
    
<div
  className="
    grid
    lg:grid-cols-2
    gap-10
    xl:gap-16
    items-center
  "
>
  {/* CONTENT */}
  <div className="order-2 lg:order-1">
    <h2
      className="
        font-bold
        text-slate-900

        text-3xl
        sm:text-4xl
        md:text-5xl

        mb-5
        sm:mb-6
      "
    >
      Mission
    </h2>

    <p
      className="
        text-slate-700

        text-base
        sm:text-lg
        md:text-xl

        leading-8
        sm:leading-9
        md:leading-10
      "
    >
      Our mission is to drive innovation-driven R&D by cultivating
      a dynamic research environment and encouraging
      interdisciplinary collaboration. We are dedicated to
      transforming cutting-edge scientific research into
      commercially successful MedTech products by offering
      technical mentorship, networking opportunities with
      industrial experts and investors, and state-of-the-art
      MedTech infrastructure.
    </p>
  </div>

  {/* IMAGE */}
<div className="order-1 lg:order-2 w-full">
  <img
    src="/DST/DSTmission.png"
    alt="Mission"
    className="
      w-full
      mr-auto

      h-[260px]
      sm:h-[320px]
      md:h-[400px]
      lg:h-[480px]

      object-cover

      rounded-2xl
      sm:rounded-3xl

      shadow-xl
    "
  />
</div>
</div>
      </section>

      {/* OBJECTIVES */}
      <section
        className="
          bg-slate-50

          py-16
          sm:py-20
          md:py-24

          px-4
          sm:px-6
          md:px-8
        "
      >
        <div className="max-w-7xl mx-auto">
          {/* HEADING */}
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
            <p
              className="
                text-blue-600
                font-semibold
                uppercase
                tracking-[3px]

                text-xs
                sm:text-sm
              "
            >
              Our Goals
            </p>

            <h2
              className="
                mt-4
                font-bold
                text-slate-900

                text-3xl
                sm:text-4xl
                md:text-5xl
              "
            >
              Objectives
            </h2>

            <p
              className="
                mt-5
                text-slate-600

                text-base
                sm:text-lg
                md:text-xl

                leading-8
              "
            >
              Driving innovation and entrepreneurship in MedTech.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {objectives.map((item, index) => (
              <div key={index} className="relative group h-full">
                <div
                  className="
                    relative h-full

                    bg-white/90
                    backdrop-blur-xl

                    px-6
                    sm:px-7
                    py-8
                    sm:py-10

                    rounded-3xl
                    shadow-md
                    border border-slate-100

                    transition-all duration-300
                    hover:-translate-y-2
                    hover:shadow-2xl
                    hover:border-blue-200

                    text-center
                  "
                >
                  <div
                    className="
                      h-16 w-16
                      mx-auto

                      rounded-2xl
                      bg-blue-100

                      flex items-center justify-center

                      text-blue-700
                      text-2xl
                      font-bold
                    "
                  >
                    {index + 1}
                  </div>

                  <h3
                    className="
                      mt-7

                      font-bold
                      text-slate-900
                      leading-snug

                      text-xl
                      sm:text-2xl
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-5
                      text-slate-600

                      leading-7
                      sm:leading-8

                      text-sm
                      sm:text-base
                    "
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
<DSTFooter />
    </div>
  );
};

export default DSTAbout;