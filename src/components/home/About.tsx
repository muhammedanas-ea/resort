import { BiLeaf } from "react-icons/bi";
import { BsHeadphones } from "react-icons/bs";
import { GiPoolDive } from "react-icons/gi";

const About = () => {
  return (
    <section className="bg-white" aria-labelledby="about-heading">
      <div className="container mx-auto px-4 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Text Section */}
          <article className="space-y-10 md:text-center lg:text-start">
            <header className="space-y-6">
              <h1 id="about-heading" className="text-4xl md:text-5xl playfair font-medium text-gray-800">
                Experience Unparalleled Comfort at Boska Resort
              </h1>
              <p className="text-gray-600 lg:max-w-lg text-base leading-relaxed">
                Nestled in the heart of Wayanad's lush landscapes, Boska Resort offers 
                a sanctuary of luxury and tranquility. With over three decades of 
                hospitality excellence, we blend Kerala's rich cultural heritage with 
                modern comforts.
              </p>
            </header>

            {/* Amenities Grid */}
            <ul className="grid grid-cols-2 gap-6">
              <li className="flex items-center md:justify-center lg:justify-start gap-4">
                <div className="p-3 bg-amber-100 rounded-lg" aria-hidden="true">
                  <GiPoolDive className="w-6 h-6 text-yellow-400" />
                </div>
                <span className="font-medium text-base">Premium Amenities</span>
              </li>

              <li className="flex items-center gap-4 md:justify-center lg:justify-start">
                <div className="p-3 bg-amber-100 rounded-lg" aria-hidden="true">
                  <BiLeaf className="w-6 h-6 text-yellow-400" />
                </div>
                <span className="font-medium text-base">Eco-Luxury Experience</span>
              </li>

              <li className="flex items-center md:justify-center lg:justify-start gap-4 md:col-span-2 lg:col-span-1">
                <div className="p-3 bg-amber-100 rounded-lg" aria-hidden="true">
                  <BsHeadphones className="w-6 h-6 text-yellow-400" />
                </div>
                <span className="font-medium text-base">24/7 Concierge Service</span>
              </li>
            </ul>

            <a 
              href="/about" 
              className="inline-block w-full lg:w-auto px-8 py-4 border rounded-full hover:bg-yellow-400 hover:text-white transition-colors text-center font-medium"
              aria-label="Learn more about Boska Resort"
            >
              Discover Our Story
            </a>
          </article>

          {/* Right Images */}
          <figure className="relative">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1582610116397-edb318620f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Luxury outdoor dining area at Boska Resort Wayanad"
                className="w-full h-[500px] object-cover lg:px-8 rounded-lg"
                loading="lazy"
                width={2070}
                height={500}
              />
              <div className="absolute top-6 right-6 lg:-right-6 bg-yellow-400 p-6 text-white rounded-md shadow-lg">
                <div className="text-4xl font-bold">33+</div>
                <div className="text-sm font-medium">Years of Excellence</div>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Luxury suite interior at Boska Resort"
              className="hidden lg:block absolute -bottom-20 -left-8 w-2/3 h-[280px] object-cover shadow-xl rounded-lg border-4 border-white"
              loading="lazy"
              width={1380}
              height={280}
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default About;