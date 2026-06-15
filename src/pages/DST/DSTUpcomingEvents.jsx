import DSTNavbar from "../../components/DST_COE/DSTNavbar";
import PageBanner from "../../components/DST_COE/PageBanner";
import DSTFooter from "../../components/DST_COE/DSTFooter";

const upcomingEvents = [
  // Uncomment when events are available

  /*
  {
    title:
      "Talk on “Entrepreneurs Paradise Synergy between Medicine and Engineering- Where are we heading?”",
    date: "December 13, 2024",
    image: "/DST/Events/Upcoming1.png",
    description:
      "Speaker: Prof. N.N. Khanna (Senior Consultant in Cardiology & Coordinator of Vascular Services, Indraprastha Apollo Hospital, New Delhi)",
    location: "MFCEM Seminar Room, IIT Kanpur",
  },
  */
];

const DSTUpcomingEvents = () => {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <DSTNavbar />

      <PageBanner
        title="Upcoming Events"
        image="/DST/upcoming_banner.png"
        className="bg-black/60"
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* HEADING */}
          <div className="mb-14">
            <h2 className="text-4xl font-bold text-gray-900">
              Upcoming Events
            </h2>

            <div className="w-24 h-1 bg-blue-600 mt-4 rounded-full"></div>
          </div>

          {/* NO EVENTS */}
          {upcomingEvents.length === 0 && (
            <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-10 text-center">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
                No events scheduled at the moment.
              </h3>

              <p className="text-gray-600 text-lg mt-4">
                Stay tuned for upcoming updates and announcements.
              </p>
            </div>
          )}

          {/* EVENTS */}
          <div className="space-y-12">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="
                  bg-white
                  rounded-3xl
                  shadow-xl
                  overflow-hidden
                  border
                  border-gray-200
                  grid
                  grid-cols-1
                  lg:grid-cols-5
                "
              >
                {/* IMAGE */}
                <div className="lg:col-span-2">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      min-h-[300px]
                    "
                  />
                </div>

                {/* CONTENT */}
                <div className="lg:col-span-3 p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-blue-700 leading-snug">
                    {event.title}
                  </h3>

                  <p className="text-xl text-gray-500 mt-5 font-medium">
                    Date: {event.date}
                  </p>

                  <p className="text-lg text-gray-700 leading-8 mt-6">
                    {event.description}
                  </p>

                  <p className="text-lg text-gray-700 mt-4">
                    <span className="font-semibold">Location:</span>{" "}
                    {event.location}
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

export default DSTUpcomingEvents;