const Cards = ({ icon, title, description }) => {
  return (
    <div className="relative group h-full">
      {/* Main Card */}
      <div
        className="relative h-full bg-white/85 backdrop-blur-xl px-5 py-6 rounded-2xl shadow-sm border border-neutral-100
       transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-blue-200 flex flex-col items-center text-center gap-5 z-10"
      >
        {/* Icon Section */}
        <div className="relative flex-shrink-0">
          <div className="relative rounded-xl flex items-center justify-center ">
            <div className="text-7xl text-blue-700 bg-gradient-to-r from  blue-800 to  blue-600 drop-shadow-lg flex items-center justify-center">
              {icon}
            </div>
          </div>
        </div>

        {/* Title */} 
        <h4 className="font-bold text-xl text-neutral-900 transition">
          {title}
        </h4>

        {/* Description */}
        <p className="text-neutral-700 leading-relaxed transition">
          {description}
        </p>

        {/* Corner Effect */}
        {/* <div className="absolute bottom-0 right-0 w-28 h-28 bg-gradient-to-tl from-purple-50 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition"></div> */}
      </div>
    </div>
  );
};

export default Cards;
