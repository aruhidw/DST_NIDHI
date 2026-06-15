import DSTNavbar from "../../components/DST_COE/DSTNavbar";
import PageBanner from "../../components/DST_COE/PageBanner";
import DSTFooter from "../../components/DST_COE/DSTFooter";

const startups = [
  {
    title: "Jeevatva",
    image: "/DST/Jeevatva_1.png",
    description:
      "Working on Microbiome-Based Therapeutics for Metabolic Reprogramming, Insulin Resensitization, and Reducing Inflammation. Their innovative approach aims to enhance patient health and well-being through targeted microbiome solutions.",
  },

  {
    title: "Neuroclinical Innovative Solutions",
    image: "/DST/Neuroclinical.png",
    description:
      "Developing a non-invasive electroencephalography-based solution to assess the effectiveness of medications for mental health conditions. This approach reduces the time required to evaluate drug effectiveness and allows doctors to modify prescriptions more effectively.",
  },

  {
    title: "Eywa Neuro",
    image: "/DST/eywa.png",
    description:
      "The startup is developing and testing processes such as Polyimide Manufacturing, Polyimide Microelectrodes, and Custom Printed Circuit Boards for ECoG or EMG applications. They aim to create a neuro-connected future using MEMS technology and ultra-flexible polymer thin films.",
  },
];

const DSTStartups = () => {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <DSTNavbar />

      <PageBanner
        title="Startups"
        image="/DST/ABOUT_PAGE_BANNER.png"
        
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          
          <div className="mb-20">
            <div className="mb-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Our Startups
              </h2>

             
              <div className="w-20 h-1 bg-blue-600 mt-3 rounded-full"></div>
            </div>

            <p className="text-lg text-gray-700 leading-8">
              Here are some of the innovative startups we are proud to incubate.
            </p>
          </div>

         
          <div className="space-y-24">
            {startups.map((startup, index) => (
              <div
                key={index}
                className="
                  grid
                  grid-cols-1
                  lg:grid-cols-2
                  gap-14
                  items-center
                "
              >
                
                <div className={`${index % 2 !== 0 ? "lg:order-2" : ""}`}>
                  <img
                    src={startup.image}
                    alt={startup.title}
                    className="
                      w-full
                      rounded-3xl
                      shadow-2xl
                      object-contain
                      max-h-[350px]
                      hover:scale-[1.02]
                      transition-all
                      duration-500
                    "
                  />
                </div>

               
                <div className={`${index % 2 !== 0 ? "lg:order-1" : ""}`}>
                  
                
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-gray-900">
                      {startup.title}
                    </h3>

                    
                    <div className="w-16 h-1 bg-blue-600 mt-3 rounded-full"></div>
                  </div>

                 
                  <p className="text-gray-700 text-lg leading-8">
                    {startup.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DSTFooter />
    </div>
  );
};

export default DSTStartups;