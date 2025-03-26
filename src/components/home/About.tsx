import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="flex items-center justify-center  py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8 text-start">
        {/* Decorative Line */}
        <div className="mb-10 w-24 border-t-2 border-black/20" />

        <h2 className="mb-6 text-lg uppercase tracking-[0.3em] text-gray-600">
          What We Offer
        </h2>

        <h1 className="mb-12 text-3xl playfair font-normal leading-[1.15] md:text-4xl md:leading-[1.15] max-w-6xl">
          Luxury resorts, private tours and VIP transfers, carefully hand-picked
          based on your tastes and style
        </h1>

        {/* New CTA Button */}
        <button className="rounded-lg px-8 py-4 text-sm uppercase tracking-widest bg-[#B59D71] text-white hover:bg-[#9D8460] transition-colors duration-300 flex items-center  gap-3">
          Explore Services
          <ArrowRight className="w-4 h-4 stroke-[2]" />
        </button>
      </div>
    </div>
  );
};
export default About;
