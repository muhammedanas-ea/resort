import ChembraPeak from "../../assets/images/ChembraPeak.jpg";
import EdakkalCaves from "../../assets/images/EdakkalCaves.webp";
import BanasuraSagar from "../../assets/images/BanasuraSagar.webp";
import SoochiparaFalls from "../../assets/images/SoochiparaFalls.webp";
import PookodeLake from "../../assets/images/PookodeLake.webp";
import WildlifeSanctuary from "../../assets/images/WildlifeSanctuary.webp";

const Destination = () => {
  const destinations = [
    {
      id: 1,
      title: "Chembra Peak",
      image: ChembraPeak,
      rating: 4.9,
      duration: "Full day experience",
      location: "Wayanad, Kerala",
      description:
        "Iconic trek featuring the legendary heart-shaped lake with panoramic views of the Western Ghats. A must-visit for adventure seekers and nature lovers.",
    },
    {
      id: 2,
      title: "Banasura Sagar Dam",
      image: BanasuraSagar,
      rating: 4.8,
      duration: "Half day excursion",
      location: "Wayanad, Kerala",
      description:
        "India's largest earthen dam offering spectacular views of mist-covered mountains and lush landscapes. Ideal for photography and leisurely walks.",
    },
    {
      id: 3,
      title: "Edakkal Caves",
      image: EdakkalCaves,
      rating: 4.7,
      duration: "Half day exploration",
      location: "Wayanad, Kerala",
      description:
        "Archaeological wonder featuring 6,000-year-old petroglyphs. A UNESCO heritage site that offers a glimpse into prehistoric human civilization.",
    },
    {
      id: 4,
      title: "Soochipara Falls",
      image: SoochiparaFalls,
      rating: 4.8,
      duration: "Half day adventure",
      location: "Wayanad, Kerala",
      description:
        "Majestic three-tiered waterfall surrounded by dense forests. Perfect for swimming, rappelling, and experiencing the raw beauty of nature.",
    },
    {
      id: 5,
      title: "Pookode Lake",
      image: PookodeLake,
      rating: 4.6,
      duration: "Half day retreat",
      location: "Wayanad, Kerala",
      description:
        "Pristine freshwater lake offering pedal boating amidst tranquil surroundings. A peaceful escape with opportunities for birdwatching.",
    },
    {
      id: 6,
      title: "Wayanad Wildlife Sanctuary",
      image: WildlifeSanctuary,
      rating: 4.7,
      duration: "Full day safari",
      location: "Wayanad, Kerala",
      description:
        "Protected reserve housing elephants, tigers, and rare avian species. Jeep safaris available for wildlife enthusiasts and photographers.",
    },
  ];

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 lg:px-8 py-16 flex flex-col md:flex-row md:justify-between md:items-end gap-6">
        <h1 className="text-4xl md:text-5xl max-w-lg playfair font-medium text-gray-800">
          Discover Wayanad's Premier Attractions
        </h1>
        <p className="text-gray-600 text-base max-w-full md:max-w-[31rem] leading-relaxed">
          As guests of Boska Resort, you'll enjoy privileged access to Wayanad's
          most spectacular natural wonders. Our concierge can arrange bespoke
          experiences at these iconic locations.
        </p>
      </div>

      <div className="relative">
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent z-10"></div>

        <div className="flex overflow-x-auto hide-scrollbar relative z-0">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="flex-shrink-0 w-80 mx-[3px] first:ml-0 last:mr-0 "
            >
              <div className="relative h-[480px] group overflow-hidden rounded-t-lg">
                <div className="absolute inset-0  bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 z-10"></div>
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-8 left-6 z-20 w-full pr-12">
                  <h3 className="text-2xl playfair font-semibold text-white">
                    {destination.title}
                  </h3>
                  <div className="flex items-center mt-3 text-white">
                    <span className="text-sm font-medium mr-2">
                      {destination.rating}
                    </span>
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="text-xs ml-2 opacity-80">
                      ({Math.floor(Math.random() * 100) + 50} reviews)
                    </span>
                  </div>
                  <p className="text-white text-sm mt-2 font-medium">
                    {destination.duration} • {destination.location}
                  </p>
                  <p className="text-gray-200 text-sm mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed">
                    {destination.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destination;
