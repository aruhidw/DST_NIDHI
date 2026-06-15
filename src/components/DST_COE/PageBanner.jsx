const PageBanner = ({
  title,
  image,
  className = "",
}) => {
  return (
    <section
      className="
        relative
        w-full
        h-[220px]
        sm:h-[280px]
        md:h-[350px]
        lg:h-[420px]
        overflow-hidden
      "
    >
      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div
        className={`absolute inset-0 ${className}`}
      ></div>

      {/* TITLE */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1
          className="
            text-white
            text-3xl
            sm:text-4xl
            md:text-5xl
            font-bold
            text-center
            drop-shadow-2xl
          "
        >
          {title}
        </h1>
      </div>
    </section>
  );
};

export default PageBanner;