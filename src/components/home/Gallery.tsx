interface CustomImageProps {
  src: string;
  rounded?: string;
}

const CustomImage: React.FC<CustomImageProps> = ({
  src,
  rounded = "rounded-[20px]",
}) => (
  <div className={`overflow-hidden ${rounded} w-full h-full`}>
    <div
      className={`h-full w-full ${rounded} transition-transform duration-300 transform hover:scale-105 bg-no-repeat bg-cover bg-center`}
      style={{ backgroundImage: `url(${src})` }}
    />
  </div>
);

const Gallery = () => {
  const imageUrl =
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80";

  return (
    <section
      className="container mx-auto px-4 lg:px-8 pt-20"
      aria-label="Resort Gallery"
    >
      <div className="mb-12">
        <div className="mb-10 w-24 border-t-2 border-[#B59D71]" />
        <h2 className="mb-6 text-lg uppercase tracking-[0.3em] text-[#B59D71]">
          Visual Journey
        </h2>
        <h1 className="text-3xl md:text-4xl playfair font-normal leading-[1.15] md:leading-[1.15] max-w-2xl">
          Experience Boska Through Our Lens
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[40%_1fr] gap-5 w-full h-[580px] md:h-[350px] lg:h-[550px]">
        <CustomImage src={imageUrl} rounded="rounded-lg" />
        <div className="grid grid-cols-1 lg:grid-cols-[70%_1fr] gap-5 h-full">
          <div className="grid grid-rows-[1fr_60%] gap-5 h-full">
            <div className="grid grid-cols-[60%_1fr] gap-5">
              <CustomImage src={imageUrl} rounded="rounded-lg" />
              <CustomImage src={imageUrl} rounded="rounded-lg" />
            </div>
            <CustomImage src={imageUrl} rounded="rounded-lg" />
          </div>
          <div className="hidden lg:block">
            <div className="grid grid-rows-[65%_1fr] gap-5 h-full">
              <CustomImage src={imageUrl} rounded="rounded-lg" />
              <CustomImage src={imageUrl} rounded="rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
