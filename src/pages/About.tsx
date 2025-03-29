import { FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import PageHero from "../components/common/PageHero";

const About = () => {
  // Team members data
  const teamMembers = [
    {
      name: "Sarah Johnson",
      position: "General Manager",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Made Winarno",
      position: "Head Chef",
      image:
        "https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "David Chen",
      position: "Spa Director",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Ayu Dewi",
      position: "Guest Relations Manager",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="bg-white">
      <PageHero
        subtitle="Experience Authentic Balinese Luxury"
        backgroundImage="https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      />

      {/* Our Story Section */}
      <section className="container mx-auto px-4 lg:px-8 pt-16 lg:pt-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="w-full md:w-1/2 text-left">
            <div className="w-24 border-t-2 border-[#B59D71] mb-8" />
            <h2 className="text-lg uppercase tracking-[0.3em] text-[#B59D71] mb-4">
              Our Story
            </h2>
            <h1 className="text-3xl md:text-4xl playfair font-normal leading-tight mb-8">
              A Sanctuary of Luxury in Ubud's Heart
            </h1>
            <div className="space-y-6 text-gray-600">
              <p className="leading-relaxed">
                Nestled among the lush rainforests and rice terraces of Ubud,
                our resort combines traditional Balinese architecture with
                modern luxury amenities to create an unforgettable experience
                for our guests.
              </p>
              <p className="leading-relaxed">
                Our resort features spacious villas, each with private pools and
                panoramic views of the surrounding landscape.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6 text-right">
            <p className="leading-relaxed text-gray-600">
              What began as a family dream has evolved into one of Bali's most
              celebrated luxury destinations, while still maintaining the
              intimate and personal touch that makes our property so special.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-6 bg-[#F8F5F0]">
                <h3 className="text-3xl text-[#B59D71] font-light mb-2">12+</h3>
                <p className="text-sm uppercase tracking-wider">
                  Years of Excellence
                </p>
              </div>
              <div className="text-center p-6 bg-[#F8F5F0]">
                <h3 className="text-3xl text-[#B59D71] font-light mb-2">98%</h3>
                <p className="text-sm uppercase tracking-wider">
                  Guest Satisfaction
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 mb-16">
          <div className="w-full md:w-1/2 text-left">
            <div className="w-24 border-t-2 border-[#B59D71] mb-8" />
            <h2 className="text-lg uppercase tracking-[0.3em] text-[#B59D71] mb-4">
              Meet Our Team
            </h2>
            <h1 className="text-3xl md:text-4xl font-normal playfair leading-tight">
              The People Behind Your Perfect Stay
            </h1>
          </div>
          <div className="w-full md:w-1/2 text-right">
            <p className="text-gray-600 leading-relaxed">
              Our dedicated team of professionals brings together years of
              experience in luxury hospitality with authentic Balinese warmth
              and culture.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group rounded-lg overflow-hidden"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {[FiInstagram, FiTwitter, FiLinkedin].map((Icon, i) => (
                    <button
                      key={i}
                      className="p-2 bg-white text-[#B59D71] rounded-full hover:bg-[#B59D71] hover:text-white transition-colors duration-300"
                    >
                      <Icon size={16} />
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-2 bg-white text-start">
                <h3 className="text-xl playfair font-medium mb-1">
                  {member.name}
                </h3>
                <p className="text-[#B59D71] uppercase tracking-wider text-sm">
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
