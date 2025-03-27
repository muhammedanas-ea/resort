import { Mail, MapPin, Phone } from "lucide-react";
import PageHero from "../components/common/PageHero";

const Contact = () => {
  return (
    <div>
      <PageHero
        title="Contact Us"
        subtitle="Budget-Friendly Luxury Amidst Nature"
        backgroundImage="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      />
      <div className="container mx-auto px-4 lg:px-8 py-16  lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div className="mb-10 w-24 border-t-2 border-[#B59D71]" />

            <h2 className="mb-6 text-lg uppercase tracking-[0.3em] text-[#B59D71]">
              Contact Us
            </h2>

            <h1 className="mb-12 text-3xl md:text-4xl playfair font-normal leading-[1.15] md:leading-[1.15] max-w-6xl">
              Get in Touch with Our Team
            </h1>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-amber-600" />
                </div>
                <span className="text-gray-600">
                  Jl. Raya Ubud 101, Bali, Indonesia
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-amber-600" />
                </div>
                <span className="text-gray-600">(+62)-822-3434-1212</span>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-amber-600" />
                </div>
                <span className="text-gray-600">luxeliving@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-lg p-8">
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 text-white py-4 rounded-lg font-semibold hover:bg-amber-600 transition-colors"
              >
                BOOK NOW
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="h-[400px] w-full overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15779.067639917384!2d115.25457770781247!3d-8.506650299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23d739f22c9c3%3A0x54c2ea0306f55940!2sUbud%2C%20Gianyar%20Regency%2C%20Bali%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1647881760889!5m2!1sen!2sus"
          width="100%"
          height="100%"
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
