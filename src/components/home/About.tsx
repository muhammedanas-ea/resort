const About = () => {
  return (
    <div className="lg:min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 lg:px-8 text-start">
        {/* Decorative Line */}
        <div className="mb-12 w-24 border-t-2 border-black/20" />

        <h2 className="mb-6 text-lg uppercase tracking-[0.3em] text-gray-600">
          What We Offer
        </h2>

        <h1 className="mb-12 text-4xl playfair font-normal leading-[1.15] md:text-5xl md:leading-[1.15] max-w-6xl">
          Luxury resorts, private tours and VIP transfers, carefully hand-picked
          based on your tastes and style
        </h1>

        {/* New CTA Button */}
        <button className="mb-20 rounded-lg px-8 py-4 text-sm uppercase tracking-widest bg-[#B59D71] text-white hover:bg-[#9D8460] transition-colors duration-300">
          Explore Services
        </button>
      </div>
    </div>
  );
};
export default About;