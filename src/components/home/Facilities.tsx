import { Wifi, Tv, UtensilsCrossed, Car, Wind } from "lucide-react";
import { GiPoolDive } from "react-icons/gi";

const Facilities = () => {
  const facilities = [
    {
      icon: <Wifi className="w-6 h-6" />,
      name: "High-Speed WiFi",
      description: "Complimentary internet throughout",
    },
    {
      icon: <Tv className="w-6 h-6" />,
      name: "Smart TV",
      description: "With streaming services",
    },
    {
      icon: <UtensilsCrossed className="w-6 h-6" />,
      name: "BBQ Area",
      description: "Outdoor cooking facilities",
    },
    {
      icon: <GiPoolDive className="w-6 h-6" />,
      name: "Swimming Pool",
      description: "Refreshing water feature",
    },
    {
      icon: <Car className="w-6 h-6" />,
      name: "Parking",
      description: "Secure vehicle space",
    },
    {
      icon: <Wind className="w-6 h-6" />,
      name: "AC Rooms",
      description: "Climate controlled comfort",
    },
  ];

  return (
    <section
      className="container mx-auto px-4 lg:px-8 py-16  lg:py-24"
      aria-labelledby="facilities-heading"
    >
      <div className="mb-10 w-24 border-t-2 border-black/20" />

      <h2 className="mb-6 text-lg uppercase tracking-[0.3em] text-gray-600">
        World-Class Facilities at Boska Resort
      </h2>

      <h1 className="mb-12 text-3xl md:text-4xl playfair font-normal leading-[1.15] md:leading-[1.15] max-w-6xl">
        Experience unparalleled comfort with our curated selection of luxury
        amenities designed to enhance your stay in Wayanad
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {facilities.map((facility, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-lg border border-[#B59D71] hover:border-[#9D8460] transition-colors text-center hover:shadow-md"
          >
            <div className=" text-[#B59D71] w-12 h-12 flex items-center justify-center mx-auto mb-4">
              {facility.icon}
            </div>
            <h3 className="font-medium text-gray-800 mb-2 text-lg">
              {facility.name}
            </h3>
            <p className="text-sm text-gray-600 hidden md:block">
              {facility.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Facilities;
