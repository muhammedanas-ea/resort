import { Building2, Users, Award, HeartHandshake } from "lucide-react";
import PageHero from "../components/common/PageHero";

const About = () => {
  return (
    <div>
      <PageHero
        subtitle="Where Tradition Meets Modern Luxury"
        backgroundImage="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      />

      {/* About Section */}
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-16 lg:gap-24">
          {/* Left Column - Content */}
          <div className="space-y-8 relative grid md:grid-cols-2">
            <div>
              <div className="mb-10 w-24 border-t-2 border-[#B59D71]" />

              <h2 className="mb-6 text-lg uppercase tracking-[0.3em] text-[#B59D71]">
                Our Heritage
              </h2>

              <h1 className="mb-12 text-3xl md:text-4xl playfair font-normal leading-[1.15] md:leading-[1.15]">
                Crafting Unforgettable Experiences Since 1992
              </h1>
            </div>

            <div className="space-y-8">
              <p className="text-gray-600 leading-relaxed">
                Founded in the heart of Bali, Boska Group began as a single
                boutique resort and has grown into a collection of 18 luxury
                properties across Southeast Asia. Our philosophy blends
                authentic local culture with contemporary elegance.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Founded in the heart of Bali, Boska Group began as a single
                boutique resort and has grown into a collection of 18 luxury
                properties across Southeast Asia. Our philosophy blends
                authentic local culture with contemporary elegance.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Each Boska property reflects our commitment to sustainable
                luxury, personalized service, and architectural beauty that
                honors its surroundings.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
        </div>
      </div>
      <div className="bg-white h-[25rem] rounded-lg shadow-[0px_10px_30px_rgba(181,157,113,0.1)] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          alt="Boska Resort"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Services Section */}
      <div className="pb-16 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <div className="mb-10 w-24 border-t-2 border-[#B59D71] mx-auto" />
            <h2 className="mb-6 text-lg uppercase tracking-[0.3em] text-[#B59D71]">
              Our Services
            </h2>
            <h1 className="mb-6 text-3xl md:text-4xl playfair font-normal">
              Exceptional Hospitality Offerings
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <HeartHandshake className="w-10 h-10 text-[#B59D71] mb-4 mx-auto" />
                ),
                title: "Personalized Concierge",
                description:
                  "Tailored experiences and exclusive access to local treasures",
              },
              {
                icon: (
                  <Building2 className="w-10 h-10 text-[#B59D71] mb-4 mx-auto" />
                ),
                title: "Luxury Accommodations",
                description:
                  "Villas and suites blending traditional design with modern comfort",
              },
              {
                icon: (
                  <Users className="w-10 h-10 text-[#B59D71] mb-4 mx-auto" />
                ),
                title: "Event Planning",
                description:
                  "Memorable weddings and corporate retreats in paradise",
              },
              {
                icon: (
                  <Award className="w-10 h-10 text-[#B59D71] mb-4 mx-auto" />
                ),
                title: "Wellness Retreats",
                description:
                  "Holistic programs combining spa, yoga, and nutrition",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg border border-[#B59D71] hover:border-[#9D8460]  text-center"
              >
                {service.icon}
                <h3 className="text-xl playfair font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
