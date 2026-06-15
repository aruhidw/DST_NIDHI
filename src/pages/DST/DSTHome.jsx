// src/pages/COEs/DST/DSTHome.jsx

import DSTNavbar from "../../components/DST_COE/DSTNavbar";
import DSTHero from "../../components/DST_COE/DSTHero";
import Cards from "../../components/DST_COE/DSTCard";
import DSTFooter from "../../components/DST_COE/DSTFooter";

import { Link } from "react-router-dom";
import {
  Building2,
  Microscope,
  FlaskConical,
  HeartPulse,
  ShieldCheck,
  Users,
  Handshake,
  BadgeDollarSign,
  TrendingUp,
} from "lucide-react";

const CARDS_DATA = [
  {
    Icon: Building2,
    title: "Dedicated Office Space",
    description:
      "Fully equipped startup spaces with collaborative innovation environment.",
  },

  {
    Icon: Microscope,
    title: "Cutting-edge MedTech Infra",
    description:
      "Access advanced MedTech labs, prototyping setups, and research infrastructure.",
  },

  {
    Icon: FlaskConical,
    title: "Preclinical Testing Facility",
    description:
      "Facilities for testing, validation, and product evaluation workflows.",
  },

  {
    Icon: HeartPulse,
    title: "Clinical Validation Support",
    description:
      "Support for clinical integration and healthcare validation processes.",
  },

  {
    Icon: ShieldCheck,
    title: "IP and Regulatory Support",
    description:
      "Guidance for patents, approvals, compliance, and regulatory pathways.",
  },

  {
    Icon: Users,
    title: "Excellent Technical Mentorship",
    description:
      "Mentorship from IIT Kanpur faculty, clinicians, and industry experts.",
  },

  {
    Icon: Handshake,
    title: "Healthcare Industry Connections",
    description:
      "Build partnerships with hospitals, healthcare providers, and industry leaders.",
  },

  {
    Icon: BadgeDollarSign,
    title: "Funding and Investment",
    description:
      "Connect with grants, investors, and startup funding opportunities.",
  },

  {
    Icon: TrendingUp,
    title: "Commercialization and Market Access",
    description:
      "Support to scale innovations into successful market-ready healthcare products.",
  },
];


const DSTHome = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* NAVBAR */}
      <DSTNavbar />

      {/* HERO */}
      <DSTHero />

      {/* APPLY BUTTON */}
      <section className="flex justify-center px-4 py-6 md:py-10">
        <a
          href="https://connect.siicincubator.com/medtech/coe2/applications"
          target="_blank"
          rel="noreferrer"
          className="
            bg-blue-600 hover:bg-blue-700
            text-white
            px-5 py-2.5
            md:px-8 md:py-4
            text-sm md:text-base
            rounded-full
            font-semibold
            shadow-lg
            transition
            text-center
          "
        >
          APPLY NOW
        </a>
      </section>

      {/* ABOUT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-20">
        <h2
          className="
            text-2xl
            sm:text-4xl
            md:text-4xl
          
            mb-5 md:mb-8
            text-left md:text-left
          "
        >
          About <b>DST NIDHI MedTech CoE</b>
        </h2>

        <div
          className="
            space-y-4 md:space-y-6
            text-gray-700
            leading-7 md:leading-8
            text-sm sm:text-base md:text-lg
          "
        >
          <p>
            The DST NIDHI-Center of Excellence (NIDHI-CoE) in MedTech
            Innovations at Startup Incubation and Innovation Center (SIIC), IIT
            Kanpur is an initiative supported by the Department of Science and
            Technology (DST), Government of India. As a CoE, SIIC aims to foster
            the growth of innovative medical technologies by offering a
            comprehensive ecosystem designed to nurture and support startups and
            innovators.
          </p>

          <p>
            The primary objective of the NIDHI-CoE is to facilitate MedTech
            development by offering excellent technical mentorship, networking
            opportunities with industrial experts and investors and
            state-of-the-art MedTech infrastructure to help innovators translate
            their technological innovations into viable market products and
            high-growth ventures, that can potentially contribute significantly
            to improving healthcare outcomes.
          </p>
        </div>
      </section>

      {/* OFFERINGS */}
<section className="bg-gray-50 py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-3xl mx-auto">

            {/* <p className="text-blue-600 font-semibold uppercase tracking-widest">
              What We Offer
            </p> */}

            <h2 className="mt-4 text-4xl font-bold text-gray-900">
              MedTech CoE Offerings
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-8">
              A complete ecosystem to help startups innovate,
              prototype, validate, and scale healthcare technologies.
            </p>

          </div>

          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

           {CARDS_DATA.map((item, index) => {
  const Icon = item.Icon;

  return (
    <div
      key={index}
      className="
        relative h-full bg-white/85 backdrop-blur-xl
        px-5 py-6 rounded-2xl shadow-sm border border-neutral-100
        transition-all duration-300 hover:shadow-lg
        hover:-translate-y-1 hover:border-blue-200
        flex flex-col items-center text-center gap-5
      "
    >
      <div className="relative flex-shrink-0">
        <div className="relative rounded-xl flex items-center justify-center">
          <div className="text-7xl text-blue-700 drop-shadow-lg flex items-center justify-center">
            <Icon className="w-10 h-10" />
          </div>
        </div>
      </div>

      <h4 className="font-bold text-xl text-neutral-900">
        {item.title}
      </h4>

      <p className="text-neutral-700 leading-relaxed">
        {item.description}
      </p>
    </div>
  );
})}
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10 md:py-16 lg:py-20">
        <div className="overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl">
          <video
            controls
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/DST/intro_vid.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* FOOTER */}
<DSTFooter />
    </div>
  );
};

export default DSTHome;
