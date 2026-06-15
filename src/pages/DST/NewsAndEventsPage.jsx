import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DSTNavbar from "../../components/DST_COE/DSTNavbar";
import PageBanner from "../../components/DST_COE/PageBanner";
import DSTFooter from "../../components/DST_COE/DSTFooter";

// Explicit array mapping all 4 required dynamic carousel media references
const slides = [
  { type: "image", src: "/DST/past_banner1.png" },
  { type: "image", src: "/DST/past_banner2.png" },
  { type: "image", src: "/DST/past_banner3.png" },
  { type: "image", src: "/DST/past_banner4.png" },
];

// Clean structured array of your exact 13 page event rows
const pastEventsData = [
  {
    title: "Talk on “Entrepreneurs Paradise Synergy between Medicine and Engineering- Where are we heading?”",
    date: "December 13, 2024",
    image: "/DST/Upcoming1.png",
    description: "In this talk, Prof. Khanna highlighted key concepts such as collaborative design in healthcare and engineering applications in medical devices, showcasing cutting-edge solutions in the med-tech domain. Prof. N.N. Khanna also interacted with the IITK startups where he discussed the current challenges in their work. Esteemed guests, including Dr. Vinay Krishna, Ex-Director LPS Institute of Cardiology Kanpur, and Dr. Neena Gupta, HOD Obstetrics & Gynecology Dept., GSVM Kanpur, enriched the event with their contributions."
  },
  {
    title: "Webinar on “Regulatory Requirements for Medical Devices and Diagnostics in India”",
    date: "November 25, 2024",
    image: "/DST/event13.png",
    description: "The webinar session was led by a distinguished expert, Dr. Muthu Dhandapani, who provided an in-depth overview of MedTech regulations, certification processes, global testing standards, and best practices. Participants engaged in insightful discussions on these critical topics, gaining valuable knowledge for navigating the regulatory landscape.\n\nThe event witnessed remarkable participation by MedTech startups, aspiring innovators, students, and faculty members across various institutes and universities. It also served as an excellent platform for knowledge sharing and capacity building, empowering innovators and entrepreneurs with the essential tools and expertise to navigate the regulatory complexities and thrive in the rapidly expanding MedTech sector."
  },
  {
    title: "Outreach Event",
    date: "October 19, 2024",
    image: "/DST/event12.png",
    description: "SIIC, IIT Kanpur successfully conducted an outreach event for the DST-NIDHI MedTech CoE at Chhatrapati Shahu Ji Maharaj University (CSJMU), Kanpur. The event, organized in collaboration with the School of Life Sciences & Biotechnology and CSJM Innovation Foundation, featured esteemed speakers including Dr. Shilpa Kaistha, Dean (Innovation) at CSJMU, Prof. Varsha Gupta, Director of the School of Life Sciences and Biotechnology at CSJMU, and Dr. Deepti Chugh, Senior Manager at SIIC.\n\nThe event highlighted the MedTech innovation ecosystem at IIT Kanpur, showcasing the cutting-edge facilities and funding opportunities available to support MedTech startups. The event fostered fruitful engagement with students, inspiring them to explore entrepreneurial paths in the MedTech sector."
  },
  {
    title: "Outreach Event",
    date: "October 18, 2024",
    image: "/DST/event11.png",
    description: "An outreach event was organized at Harcourt Butler Technical University (HBTU), Kanpur. The online session witnessed active participation by the graduate and postgraduate students, faculty members and young innovators."
  },
  {
    title: "Workshop on “CAD for MedTech manufacturing\"",
    date: "September 26, 2024",
    image: "/DST/event10.png",
    description: "A Hands-on workshop on CAD Design was successfully organized at IIT Kanpur on September 26, 2024. This workshop featured a comprehensive overview of engineering drawings and practical demonstrations using AutoDesk Inventor. Participants from the SIB SHInE Biodesign program and the wider medtech community were enthusiastic about the workshop, gaining valuable insights and inspiration for their innovative projects."
  },
  {
    title: "Workshop on “Navigating GeM”",
    date: "September 19, 2024",
    image: "/DST/event9.png",
    description: "A hybrid workshop on “Navigating GeM” was successfully organized at IIT Kanpur Outreach Center, Noida on September 19, 2024. This workshop provided a great opportunity to the startups currently navigating to enter the government procurement ecosystem via GeM."
  },
  {
    title: "MoU Signing",
    date: "September 6, 2024",
    image: "/DST/event8.png",
    description: "SIIC, IIT Kanpur has joined hands with K.D. Medical College Hospital and Research center, Mathura to nurture startups in promising sectors like healthcare, Medtech and pharmaceuticals. The MoU aims to create a thriving entrepreneurial ecosystem by fostering collaboration for incubatees through joint incubation initiatives, knowledge sharing, and policy development."
  },
  {
    title: "MoU Signing",
    date: "August 30, 2024",
    image: "/DST/event7.png",
    description: "SIIC, IIT Kanpur has joined hands with KLE Academy of Higher Education and Research Incubation & Innovation Center (KAHER), Belgavi to nurture startups in promising sectors like healthcare, medtech, pharmaceuticals, agritech, and agri-processing. An MoU was signed on August 30th to facilitate joint incubation initiatives, knowledge sharing, and policy development. This collaboration aims to create a vibrant ecosystem for entrepreneurship and innovation. Shri M.B. Patil, Honourable Minister, Large & Medium Industries and Infrastructure Development, Government of Karnataka, Dr. Nitin Gangane, Vice Chancellor, KAHER, Dr. Prabhakar Kore, Chancellor, KAHER, and Chairman, KLE Society attended the signing ceremony."
  },
  {
    title: "Talk by Dr. Arijit Bhattacharjee on “Driving Academic Innovations”",
    date: "August 29, 2024",
    image: "/DST/event6.png",
    description: "This talk was organized at Banaras Hindu University on August 29, 2024, as a part of Outreach event."
  },
  {
    title: "MoU Signing",
    date: "August 27, 2024",
    image: "/DST/event5.png",
    description: "SIIC, IIT Kanpur has signed an MoU with the Innovation and Incubation Centre for Entrepreneurship (IICE), Indian Institute of Science Education and Research (IISER) Bhopal. This partnership aims to create a thriving entrepreneurship ecosystem by fostering collaboration between startups incubated at both institutions."
  },
  {
    title: "Talk by Prof. Amitabha Bandyopadhyay on “Fostering Innovation in Academia: Perspectives from IIT Kanpur” at IISER Bhopal",
    date: "August 27, 2024",
    image: "/DST/event3.png",
    description: "The focus of the talk was to acquaint the audience with the crucial role academia plays in fostering innovation, emphasizing how research, collaboration, and knowledge dissemination in academic settings drive technological advancements and societal progress. This talk was organized as a part of outreach event under NIDHI-CoE program."
  },
  {
    title: "Roundtable Panel Discussion on MedTech Sector",
    date: "July 20, 2024",
    image: "/DST/event2.png",
    description: "A panel discussion was organized at IIT Kanpur engaging a team of clinicians, academicians, and entrepreneurs to discuss the current challenges and opportunities in the MedTech sector."
  },
  {
    title: "Talk on Biomedical Device Development: The Travails & Solutions, by Prof. Sanjay Behari, Director of Sree Chitra Tirunal Institute for Medical Sciences and Technology",
    date: "July 20, 2024",
    image: "/DST/event1.png",
    description: "In this talk, Prof. Behari delved into the complexities of medical device development, discussing challenges, phases, funding, industrial collaborations, and the crucial role of clinical immersion. Esteemed guests, including Mr Prabal Chakraborty, Mr Sanjay Banerjee, Dr. Anant Bhan, Dr. Gaurav Singh, and Dr. Abhishek Mehta, enriched the event with their contributions."
  }
];

const NewsAndEventsPage = () => {
  const [current, setCurrent] = useState(0);

  // Automates slide transitions over a 5000ms loop
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <DSTNavbar />

      {/* Dynamic 4-Image Adaptive Carousel Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div
          className="
            relative w-full
            h-[200px]
            sm:h-[250px]
            md:h-[350px]
            lg:h-[400px]
            xl:h-[480px]
          "
        >
          {/* Hardware Accelerated Slider Container */}
          <div
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="min-w-full h-full flex-shrink-0 relative">
                <img
                  src={slide.src}
                  alt={`MedTech Event Banner Snapshot ${index + 1}`}
                  className="w-full h-full object-cover select-none"
                />
              </div>
            ))}
          </div>

          {/* Left Navigation Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full z-10 flex items-center justify-center transition"
            aria-label="Previous event slide"
          >
            ❮
          </button>

          {/* Right Navigation Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full z-10 flex items-center justify-center transition"
            aria-label="Next event slide"
          >
            ❯
          </button>

          {/* Pagination Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  current === index ? "bg-white scale-125 px-2" : "bg-white/40"
                }`}
                aria-label={`Maps to event image slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Cards Container Selection Grid */}
      {/* <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10"> */}
            
            {/* Link Routing Node to Upcoming Events subpage */}
            {/* <Link to="/upcoming-events">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:scale-[1.02] transition duration-500 cursor-pointer h-full flex flex-col">
                <img
                  src="upcoming_banner.png"
                  alt="Upcoming Events"
                  className="w-full h-[320px] object-cover"
                />
                <div className="p-8 flex-grow">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Upcoming Events
                  </h2>
                  <p className="text-gray-600 text-lg leading-8">
                    Explore upcoming workshops, talks, conferences, and innovation events
                    organized under DST NIDHI MedTech CoE.
                  </p>
                </div>
              </div>
            </Link> */}

            {/* Link Routing Node to Past Events archive subpage */}
            {/* <Link to="/past-events"> */}
              {/* <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:scale-[1.02] transition duration-500 cursor-pointer h-full flex flex-col">
                <img
                  src="past_banner1.png"
                  alt="Past Events"
                  className="w-full h-[320px] object-cover"
                />
                <div className="p-8 flex-grow">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Past Events
                  </h2>
                  <p className="text-gray-600 text-lg leading-8">
                    Browse previous seminars, outreach activities, workshops, MoU signings,
                    and MedTech discussions.
                  </p>
                </div>
              </div>
            </Link>

          </div>
        </div> */}
      {/* </section> */}

      {/* Complete Historical Event Rows Segment */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-12 text-center tracking-tight">
            Event Highlights & Timeline Archive
          </h2>
          <div className="space-y-12">
            {pastEventsData.map((event, index) => (
              <div 
                key={index} 
                className="flex flex-col md:flex-row bg-white border border-gray-100 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Responsive Image Wrapper Container */}
                <div className="w-full md:w-[35%] min-h-[240px] md:min-h-none overflow-hidden bg-gray-50 flex-shrink-0">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Text Layout Segment Container */}
                <div className="w-full md:w-[65%] p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight leading-snug mb-2">
                    {event.title}
                  </h3>
                  <div className="inline-flex items-center text-sm font-semibold text-blue-600 mb-4 bg-blue-50 px-3 py-1 rounded-full w-max">
                    Date: {event.date}
                  </div>
                  <p className="text-gray-600 text-base leading-relaxed whitespace-pre-line">
                    {event.description}
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

export default NewsAndEventsPage;