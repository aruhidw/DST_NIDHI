import DSTNavbar from "../../components/DST_COE/DSTNavbar";
import PageBanner from "../../components/DST_COE/PageBanner";
import DSTFooter from "../../components/DST_COE/DSTFooter";

const facilities = [
  {
    title: "4i Labs",
    description:
      "4i laboratory is a central facility for concept design and product realisation. The processes of design, simulation and manufacturing are integrated into a digital environment. The facility also serves the professional course requirements of students of various streams. It also provides an infrastructure for sponsored research and industrial consultancy.",
    image: "/DST/Facilities/4i_labs.png",
    link: "http://imlab.in/laboratory/4-i-lab/",
  },

  {
    title: "Tinkering Labs",
    description:
      "Tinkering laboratory is a platform for creative minds to come out of their ‘Think Space’ to hands-on ‘Tinker Space’, to transform their ideas into real-time engineering objects, and eventually to products and patents.",
    image: "/DST/Facilities/Tinkering_Labs.png",
    link: "http://imlab.in/laboratory/tinkering-lab/",
  },

  {
    title: "Central Workshop",
    description:
      "The Central Workshop of the Insititute is the Central facility that provides training to undergraduate students and also facilitates startups in the fabrication of their projects and experimental setups.",
    image: "/DST/Facilities/Central_Work_shop.png",
    link: "http://imlab.in/laboratory/workshop-section/",
  },

  {
    title: "MedTech Facility",
    description:
      "The MedTech Facility at IIT Kanpur serves as a central hub for concept design and product realization. This facility is equipped with advanced machines and technologies to promote rapid prototyping of Medical products including Additive Manufacturing, Electronics Lab, and Post-processing Lab.",
    image: "/DST/Facilities/MedTech_facility.png",
    link: "https://iitk.ac.in/medtech/",
  },

  {
    title: "National Centre for Flexible Electronics (NC-FLEXE)",
    description:
      "National Centre for Flexible Electronics(NC- FLEXE) The National Centre for Flexible Electronics was established in 2014 through a grant from Ministry of Electronics and Information Technology (MeitY) and support from IIT Kanpur. The Centre conducts research and development in large area flexible electronics and serves as a bridge between the academic and the industrial ecosystems.",
    image: "/DST/Facilities/NC-FLEXE.png",
    link: "https://www.ncflexe.in/",
  },

  {
    title: "Centre for Nanosciences",
    description:
      "The Centre for Nanosciences has several state-of-art fabrication and characterization facilities such as e-beam Patterning, Maskless Lithography, FESEM, Micro-Raman, SPMs, NSOM, WXRD, Surface Profilers, Nanoimprint Lithography etc., all of which are housed in a 10000-class clean room environment with about 3000 square feet of clean spaces.",
    image: "/DST/Facilities/Centre_for_Nanosciences.png",
    link: "https://www.iitk.ac.in/nanoscience/",
  },

  {
    title: "Advanced Imaging Centre",
    description:
      "The Centre is a multi-user, multi-disciplinary facility that provides microscopy and imaging services to support research and innovation. The Centre offers world's most sophisticated instruments for sample preparation, fabrication and characterization of materials at micro and nano scales.",
    image: "/DST/Facilities/Advanced_Imaging_Centre.png",
    link: "https://www.iitk.ac.in/imaging/",
  },

  {
    title: "Advanced Centre for Material Science",
    description:
      "The Advanced Centre for Materials Science was created in 1978 with a view to make available major materials preparation and characterization facilities under one-roof. These state-of-the-art research facilities are regularly upgraded and are maintained by suitably trained competent staff. The Centre has been serving the needs of the materials community from the institute as well as other academic and industrial establishments for over thirty-five years.",
    image: "/DST/Facilities/Advanced_Centre_for_Material_Science.png",
    link: "https://www.iitk.ac.in/acms/",
  },

  {
    title: "X‐ray Diffraction Facility",
    description:
      "This lab is a specialized laboratory dedicated to determining the atomic and molecular structure of crystals using X-ray diffraction techniques and is equipped with X-ray diffractor, scintillation counter, phosphoimager etc.",
    image: "/DST/Facilities/X_ray_facility.png",
    link: "https://www.iitk.ac.in/mseold/XRD/",
  },

  {
    title: "Central Experimental Animal Facility (CEAF)",
    description:
      "This facility is dedicated to housing, caring, and managing laboratory animals crucial for performing pre-clinical validation studies. This facility has multiple rooms with individually ventilated cage system for animal rearing. Several transgenic lines are maintained in the facility.",
    image: "/DST/Facilities/Central_Experimental_Animal_Facility_(CEAF).png",
    link: "#",
  },

  {
    title: "EMI/EMC Testing Lab",
    description:
      "EMI/EMC Testing lab is the state-of-the-art facility comprising of a 3M Semi Anechoic Chamber, Control Room, and an Amplifier Room, meticulously designed to facilitate fully automated pre-compliance and full compliance EMC testing of medical electric equipment in accordance with IEC Standards.",
    image: "/DST/Facilities/EMI_EMC_Testing_Lab.png",
    link: "https://emciitk.com/about-us/",
  },
];

const DSTPrototype = () => {
  return (
    <div className="bg-white overflow-x-hidden">
      <DSTNavbar />

      <PageBanner
        title="Prototyping Facilities"
        image="/DST/Facilities/prototype_banner.png"
        className="bg-black/50"
      />

      <section
        className="py-16"
        style={{
          backgroundImage: "url('/DST/bg-img-3.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {facilities.map((facility, index) => (
            <div key={index}>
              <div
                className={`
                  grid 
                  grid-cols-1 
                  md:grid-cols-2 
                  gap-10 
                  items-center
                `}
              >
                {index % 2 === 0 ? (
                  <>
                    <div>
                      <img
                        src={facility.image}
                        alt={facility.title}
                        className="
                          w-full
                          rounded-2xl
                          shadow-xl
                          object-cover
                        "
                      />
                    </div>

                    <div>
                      <h2 className="text-3xl font-bold text-slate-900">
                        <a
                          href={facility.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue-600 transition"
                        >
                          {facility.title}
                        </a>
                      </h2>

                      <p className="mt-6 text-slate-700 leading-8 text-lg">
                        {facility.description}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <h2 className="text-3xl font-bold text-slate-900">
                        <a
                          href={facility.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue-600 transition"
                        >
                          {facility.title}
                        </a>
                      </h2>

                      <p className="mt-6 text-slate-700 leading-8 text-lg">
                        {facility.description}
                      </p>
                    </div>

                    <div>
                      <img
                        src={facility.image}
                        alt={facility.title}
                        className="
                          w-full
                          rounded-2xl
                          shadow-xl
                          object-cover
                        "
                      />
                    </div>
                  </>
                )}
              </div>

              <div className="h-24" />
            </div>
          ))}
        </div>
      </section>

      <DSTFooter />
    </div>
  );
};

export default DSTPrototype;
