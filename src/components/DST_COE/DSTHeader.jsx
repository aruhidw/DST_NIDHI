// src/components/DST_COE/DSTHeader.jsx

const DSTHeader = ({
  title,
  subtitle,
  image,
}) => {
  return (
    <section className="relative w-full h-[220px] sm:h-[300px] md:h-[420px] overflow-hidden">

      {/* BACKGROUND */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* CONTENT */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">

        <h1
          className="
            text-white
            text-3xl
            sm:text-5xl
            md:text-6xl
            font-extrabold
            drop-shadow-lg
          "
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className="
              mt-4
              text-gray-200
              text-sm
              sm:text-lg
              md:text-xl
              max-w-4xl
            "
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default DSTHeader;