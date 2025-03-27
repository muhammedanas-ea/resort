import React from "react";

interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  overlayOpacity?: number;
  minHeight?: string;
  children?: React.ReactNode;
}

const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  overlayOpacity = 0.7,
  minHeight = "20rem",
  children,
}) => {
  return (
    <section
      aria-label={title}
      className="relative w-full bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, ${overlayOpacity}), rgba(0, 0, 0, ${overlayOpacity})), url('${backgroundImage}')`,
      }}
    >
      <div className={`container mx-auto px-4 lg:px-8 py-12 md:py-16`}>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center`}
          style={{ minHeight }}
        >
          <div className="flex flex-col justify-end h-full md:text-left">
            <h1 className="text-3xl playfair text-white font-normal leading-[1.15] md:text-4xl md:leading-[1.15] max-w-lg">
              {subtitle}
            </h1>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
