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
    <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-24" aria-labelledby="facilities-heading">
      <div className="pb-12 flex flex-col md:flex-row md:justify-between md:items-end gap-6">
        <h1 className="text-4xl md:text-5xl max-w-lg playfair font-medium text-gray-800">
          World-Class Facilities at Boska Resort
        </h1>
        <p className="text-gray-600 text-base max-w-full md:max-w-[31rem] leading-relaxed">
          Experience unparalleled comfort with our curated selection of luxury
          amenities designed to enhance your stay in Wayanad
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {facilities.map((facility, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-lg border border-gray-300 hover:border-amber-300 transition-colors text-center hover:shadow-md"
          >
            <div className=" text-amber-300 w-12 h-12 flex items-center justify-center mx-auto mb-4">
              {facility.icon}
            </div>
            <h3 className="font-medium text-gray-800 mb-2 text-lg">{facility.name}</h3>
            <p className="text-sm text-gray-600 hidden md:block">{facility.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Facilities;