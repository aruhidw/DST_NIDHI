import DSTNavbar from "../../components/DST_COE/DSTNavbar";
import PageBanner from "../../components/DST_COE/PageBanner";
import DSTFooter from "../../components/DST_COE/DSTFooter";

const mentorSections = [
  {
    department: "Department of Biological Sciences & Bioengineering",
    mentors: [
      {
        name: "Dr. Nitin Mohan",
        role: "Assistant Professor (Microscopy and Imaging)",
        email: "nitinm@iitk.ac.in",
        profile: "https://www.iitk.ac.in/bsbe/nitin-mohan",
      },
      {
        name: "Dr. Arjun Ramakrishnan",
        role: "Assistant Professor (EEG devices, neuro-imaging and decision making)",
        email: "arjunr@iitk.ac.in",
        profile: "https://www.iitk.ac.in/bsbe/arjun-ramakrishnan",
      },
      {
        name: "Dr. Santosh Mishra",
        role: "Assistant Professor (Novel Diagnostic development)",
        email: "skmisra@iitk.ac.in",
        profile: "https://www.iitk.ac.in/bsbe/santosh-misra",
      },
      {
        name: "Prof. R. Sankararamakrishnan",
        role: "Professor (Bioinformatics)",
        email: "rsankar@iitk.ac.in",
        profile: "https://www.iitk.ac.in/new/dr-r-sankararamakrishnan",
      },
      {
        name: "Prof. Jonaki Sen",
        role: "Professor (Brain development)",
        email: "jonaki@iitk.ac.in",
        profile: "https://iitk.ac.in/bsbe/jonaki-sen",
      },
      {
        name: "Dr. Nitin Gupta",
        role: "Associate Professor (Neuroscience)",
        email: "guptan@iitk.ac.in",
        profile: "https://www.iitk.ac.in/bsbe/nitin-gupta",
      },
      {
        name: "Dr. Debanjan Dasgupta",
        role: "Assistant Professor (Neuroscience, Dementia)",
        email: "debanjand@iitk.ac.in",
        profile: "https://www.iitk.ac.in/bsbe/debanjan-dasgupta",
      },
      {
        name: "Dr. Nikunj Bhagat",
        role: "Assistant Professor (Neural & Bio-signal processing, Medical Instrumentation, Brain-machine interfaces, Functional Electrical Stimulation, and Rehabilitation Engineering)",
        email: "nbhagat@iitk.ac.in",
        profile: "https://www.iitk.ac.in/new/nikunj-arunkumar-bhagat",
      },
    ],
  },

  {
    department: "Department of Mechanical Engineering",
    mentors: [
      {
        name: "Prof. Bishakh Bhattacharya",
        role: "Professor, Cognitive and Biomedical robotics, Point of care devices, Orthopaedics and Prosthetics",
        email: "bishakh@iitk.ac.in",
        profile: "https://home.iitk.ac.in/~bishakh/",
      },
      {
        name: "Prof. Niraj Sinha",
        role: "Professor, Additive manufacturing, prosthetic devices, scaffolds/implants, drug delivery",
        email: "nsinha@iitk.ac.in",
        profile: "https://www.iitk.ac.in/new/niraj-sinha",
      },
      {
        name: "Prof. Pankaj Wahi",
        role: "Professor, Nonlinear Dynamics, Vibrations and Controls, Engineering Design and Graphics, Mechanics of machining",
        email: "wahi@iitk.ac.in",
        profile: "https://home.iitk.ac.in/~bishakh/",
      },
    ],
  },

  {
    department: "Department of Electrical Engineering",
    mentors: [
      {
        name: "Dr. Shilpi Gupta",
        role: "Assistant Professor, Photonics, Plasmonics, Quantum Optics",
        email: "shilpig@iitk.ac.in",
        profile: "https://www.iitk.ac.in/new/shilpi-gupta",
      },
      {
        name: "Dr. Vipul Arora",
        role: "Assistant Professor, Machine learning for audio signal processing",
        email: "vipular@iitk.ac.in",
        profile: "https://vipular.github.io/",
      },
      {
        name: "Dr. Soumya Ranjan Sahoo",
        role: "Associate Professor, Biomedical robotics and point-of-care healthcare devices",
        email: "srsahoo@iitk.ac.in",
        profile: "https://home.iitk.ac.in/~srsahoo/",
      },
      {
        name: "Dr. Ketan Rajawat",
        role: "Associate Professor, Artificial Intelligence, wireless sensor networks",
        email: "ketan@iitk.ac.in",
        profile: "https://home.iitk.ac.in/~ketan/",
      },
    ],
  },

  {
    department: "Department of Computer Science",
    mentors: [
      {
        name: "Dr. Ashutosh Modi",
        role: "Assistant Professor, Natural Language Processing (NLP), Machine Learning (ML), and Artificial Intelligence (AI)",
        email: "ashutoshm@cse.iitk.ac.in",
        profile: "https://ashutosh-modi.github.io/",
      },
      {
        name: "Dr. Nisheeth Srivastava",
        role: "Associate Professor, Computational cognitive science, human factors in computing",
        email: "nsinha@iitk.ac.in",
        profile: "https://www.cse.iitk.ac.in/users/nsrivast/",
      },
    ],
  },

  {
    department: "Department of Material Sciences Engineering",
    mentors: [
      {
        name: "Dr. Shikhar Krishn Jha",
        role: "Assistant Professor, Bio-inspired designs, bio-medical devices, composites, material science and processing",
        email: "skjha@iitk.ac.in",
        profile: "https://home.iitk.ac.in/~skjha/",
      },
      {
        name: "Dr. Kantesh Balani",
        role: "Professor, Hydroxyapatite and Bioglass based biocomposites for bone replacement",
        email: "kbalani@iitk.ac.in",
        profile: "https://home.iitk.ac.in/~kbalani/",
      },
      {
        name: "Dr. Vivek Verma",
        role: "Professor, Protein patterning, cellulose, biodegradable composites, drug delivery",
        email: "nsinha@iitk.ac.in",
        profile: "https://www.iitk.ac.in/new/vivek-verma",
      },
    ],
  },

  {
    department: "Department of Chemistry",
    mentors: [
      {
        name: "Dr. Nagma Parveen",
        role: "Assistant Professor, Soft Matter, Biomimetic Nanoparticles, Virus-like Particles",
        email: "nagma@iitk.ac.in",
        profile: "https://iitk.ac.in/new/nagma-parveen",
      },
      {
        name: "Dr. Dharmaraja Allimuthu",
        role: "Assistant Professor, Chemical biology, Organic synthesis, Targeted covalent therapeutics",
        email: "atdharma@iitk.ac.in",
        profile: "https://www.iitk.ac.in/new/dharmaraja-allimuthu",
      },
    ],
  },

  {
    department: "Department of Chemical Engineering",
    mentors: [
      {
        name: "Dr. Sri Siva Kumar",
        role: "Professor, Lanthanide-doped nanodevices, Multifunctional nanomaterials for drug delivery and bio-imaging applications, Nanocatalysts",
        email: "srisiva@iitk.ac.in",
        profile: "https://iitk.ac.in/che/faculty/srisiva/",
      },
      {
        name: "Prof. Siddharth Panda",
        role: "Professor, Chemical sensors, microfluidics, micro-nanofabrication",
        email: "spanda@iitk.ac.in",
        profile: "https://www.iitk.ac.in/new/dharmaraja-allimuthu",
      },
    ],
  },

  {
    department: "Department of Physics",
    mentors: [
      {
        name: "Dr. Harshawardhan Wanare",
        role: "Professor, Lasers and Photonics",
        email: "hwanare@iitk.ac.in",
        profile: "https://home.iitk.ac.in/~hwanare/",
      },
      {
        name: "Dr. Aditya Kelkar",
        role: "Assistant Professor, Low and medium energy heavy ion collisions with atomic/molecular and cluster targets, Fullerenes, Accelerator physics",
        email: "akelkar@iitk.ac.in",
        profile: "https://www.iitk.ac.in/new/dr-aditya-h-kelkar",
      },
    ],
  },

  {
    department: "Department of Design",
    mentors: [
      {
        name: "Dr. J. Ramkumar",
        role: "Professor, Micro/Nano Manufacturing and New product/process development, Tribology, composite, Manufacturing Process modelling",
        email: "jrkumar@iitk.ac.in",
        profile: "https://www.iitk.ac.in/new/dr-j-ramkumar",
      },
    ],
  },
];

const Mentor = () => {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <DSTNavbar />

      <PageBanner
        className="bg-black/50"
        title="Mentors"
        image="/DST/board-members_banner.png"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {mentorSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-16">
            
            <h2 className="text-3xl font-bold text-slate-900 mb-8 border-l-4 border-blue-600 pl-4">
              {section.department}
            </h2>

            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.mentors.map((mentor, index) => (
                <div
                  key={index}
                  className="
                    bg-white
                    rounded-3xl
                    border border-slate-200
                    shadow-md
                    hover:shadow-2xl
                    hover:-translate-y-2
                    transition-all
                    duration-300
                    p-8
                    flex
                    flex-col
                    justify-between
                    min-h-[280px]
                  "
                >
                  <div>
                   
                    <a
                      href={mentor.profile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        text-2xl
                        font-bold
                        text-slate-900
                        hover:text-blue-700
                        transition-colors
                        leading-snug
                      "
                    >
                      {mentor.name}
                    </a>

                    
                    <p
                      className="
                        mt-4
                        text-slate-600
                        leading-7
                        text-[15px]
                      "
                    >
                      {mentor.role}
                    </p>
                  </div>

                  
                  <a
                    href={`mailto:${mentor.email}`}
                    className="
                      mt-6
                      inline-block
                      text-blue-600
                      hover:text-blue-800
                      font-medium
                      break-all
                    "
                  >
                    {mentor.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <DSTFooter />
    </div>
  );
};

export default Mentor;