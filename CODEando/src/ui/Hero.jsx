import React from "react";

const Hero = ({
  title = "Tu título aquí",
  subtitle = "Tu subtítulo aquí",
  backgroundImageUrl,
  heightClass = "h-[70vh]",
}) => {
  return (
    <section
      className={`relative w-full ${heightClass} flex items-center justify-center`}
      style={{
        backgroundImage: backgroundImageUrl
          ? `url(${backgroundImageUrl})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-4xl px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg md:text-2xl text-gray-200">{subtitle}</p>
        )}
      </div>
    </section>
  );
};

export default Hero;
