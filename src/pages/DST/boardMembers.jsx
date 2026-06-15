import DSTNavbar from "../../components/DST_COE/DSTNavbar";
import PageBanner from "../../components/DST_COE/PageBanner";
import DSTFooter from "../../components/DST_COE/DSTFooter";

const boardMembers = [
  {
    name: "Prof. Manindra Agrawal",
    role: "Chairman & Director",
    org: "IIT Kanpur",
    email: "director@iitk.ac.in",
    image: "/DST/board/Manindra_Agrawal.png",
    featured: true,
  },

  {
    name: "Prof. Deepu Philip",
    role: "Ex-officio director of FIRST, PIC Innovation and Incubation",
    org: "IIT Kanpur",
    email: "dphilip@iitk.ac.in",
    image: "/DST/board/deepuPhilip.png",
  },

  {
    name: "Prof. Soniya Nityanand",
    role: "Vice Chancellor",
    org: "King George’s Medical University, Lucknow",
    email: "vc@kgmcindia.edu",
    image: "/DST/board/Soniya_Nityanand.png",
  },

  {
    name: "Mr. R. Balamurugan",
    role: "Executive Vice President",
    org: "HCL Tech",
    email: "balamuruganrs@hcl.com",
    image: "/DST/board/S_Balamurugan.png",
  },

  {
    name: "Dr. Rajiv Nath",
    role: "Forum Coordinator",
    org: "Association of Indian Medical Device Industry (AiMeD)",
    email: "forumcoordinator@aimedindia.com",
    image: "/DST/board/Rajiv_Nath.png",
  },

  {
    name: "Dr. R.S. Sharma",
    role: "Distinguished Visiting Professor, IITK",
    org: "Former Secretary to Govt. of India Former Chairman, TRAI Former CEO, NHA",
    email: "rssharma3@gov.in",
    image: "/DST/board/rssharma_bg.png",
  },

  {
    name: "Prof. S. Behari",
    role: "Director",
    org: "Sree Chitra Tirunal Institute for Medical Sciences and Technology",
    email: "director@sctimst.ac.in",
    image: "/DST/board/Dr.SANJAY_BEHARI.png",
  },

  {
    name: "Mr. Nitin Deshmukh",
    role: "CEO and Founding Member",
    org: "Kotak Investment Advisors Ltd., Bengaluru",
    email: "nitin.deshmukh@kotak.com",
    image: "/DST/board/nitin-deskmukh.png",
  },
];

const BoardMembers = () => {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <DSTNavbar />

      <PageBanner
        className=" bg-black/50"
        title="Board of Directors"
        image="/DST/board-members_banner.png"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >
          {boardMembers.map((member, index) => (
            <div
              key={index}
              className={`
                bg-white
                rounded-3xl
                shadow-lg
                border
                border-slate-100
                p-8
                text-center
                hover:-translate-y-2
                hover:shadow-2xl
                transition-all
                duration-300

                ${
                  member.featured
                    ? "col-span-1 sm:col-span-2 lg:col-span-3 max-w-xl mx-auto w-full"
                    : ""
                }
              `}
            >
              <div className="flex justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="
                    w-32 h-32
                    sm:w-36 sm:h-36
                    object-cover
                    rounded-full
                    border-4 border-blue-100
                    shadow-md
                  "
                />
              </div>

              <h2
                className="
                  mt-6
                  text-2xl
                  font-bold
                  text-slate-900
                "
              >
                {member.name}
              </h2>

              <p
                className="
                  mt-3
                  text-blue-700
                  font-semibold
                  leading-7
                "
              >
                {member.role}
              </p>

              <p
                className="
                  mt-2
                  text-slate-600
                  leading-7
                "
              >
                {member.org}
              </p>

              <a
                href={`mailto:${member.email}`}
                className="
                  inline-block
                  mt-5
                  text-sm
                  text-blue-600
                  hover:text-blue-800
                  break-all
                "
              >
                {member.email}
              </a>
            </div>
          ))}
        </div>
      </section>

      <DSTFooter />
    </div>
  );
};

export default BoardMembers;
