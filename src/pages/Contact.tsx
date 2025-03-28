import { Mail, MapPin, Phone } from "lucide-react";
import PageHero from "../components/common/PageHero";

const Contact = () => {
  return (
    <div>
      <PageHero
        subtitle="Budget-Friendly Luxury Amidst Nature"
        backgroundImage="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      />

      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Contact Info */}
          <div className="space-y-8 relative">
            <div className="mb-10 w-24 border-t-2 border-[#B59D71]" />

            <h2 className="mb-6 text-lg uppercase tracking-[0.3em] text-[#B59D71]">
              Contact Us
            </h2>

            <h1 className="mb-12 text-3xl md:text-4xl playfair font-normal leading-[1.15] md:leading-[1.15] max-w-6xl">
              Let's Start Your Luxury Journey
            </h1>

            <div className="space-y-8">
              <div className="flex items-center space-x-6 group">
                <MapPin className="w-7 h-7 text-[#B59D71]" />
                <div>
                  <h3 className="text-lg playfair font-semibold text-gray-900 mb-2">
                    Our Location
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Jl. Raya Ubud 101
                    <br />
                    Bali, Indonesia
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <Phone className="w-7 h-7 text-[#B59D71]" />
                <div>
                  <h3 className="text-lg playfair font-semibold text-gray-900 mb-2">
                    Phone Number
                  </h3>
                  <p className="text-gray-600 hover:text-amber-600 transition-colors">
                    (+62)-822-3434-1212
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <Mail className="w-7 h-7 text-[#B59D71]" />
                <div>
                  <h3 className="text-lg playfair font-semibold text-gray-900 mb-2">
                    Email Address
                  </h3>
                  <p className="text-gray-600 hover:text-amber-600 transition-colors">
                    luxeliving@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-lg p-8 lg:p-12 shadow-[0px_10px_30px_rgba(181,157,113,0.4)] hover:shadow-[0px_15px_40px_rgba(181,157,113,0.5)] transition-shadow duration-200">
            {" "}
            <form className="space-y-8">
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="w-full px-6 py-4 border-b border-[#B59D71]/30 focus:border-[#B59D71] bg-transparent outline-none transition-colors duration-300 placeholder-gray-500"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-full px-6 py-4 border-b border-[#B59D71]/30 focus:border-[#B59D71] bg-transparent outline-none transition-colors duration-300 placeholder-gray-500"
                    required
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="w-full px-6 py-4 border-b border-[#B59D71]/30 focus:border-[#B59D71] bg-transparent outline-none transition-colors duration-300 placeholder-gray-500"
                    required
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={6}
                    className="w-full px-6 py-4 border-b border-[#B59D71]/30 focus:border-[#B59D71] bg-transparent outline-none transition-colors duration-300 placeholder-gray-500 resize-none"
                    required
                  />
                </div>
              </div>

              <button className="w-full rounded-lg px-8 py-4 text-sm uppercase tracking-widest border border-[#B59D71] text-black hover:text-white hover:bg-[#B59D71] transition-colors duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="relative h-[500px] w-full overflow-hidden bg-gray-100">
        {/* Top Fade */}
        <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-white/50 to-transparent z-10" />
        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-white/50 to-transparent z-10" />

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15779.067639917384!2d115.25457770781247!3d-8.506650299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23d739f22c9c3%3A0x54c2ea0306f55940!2sUbud%2C%20Gianyar%20Regency%2C%20Bali%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1647881760889!5m2!1sen!2sus"
          width="100%"
          height="100%"
          className="absolute inset-0"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default Contact;
