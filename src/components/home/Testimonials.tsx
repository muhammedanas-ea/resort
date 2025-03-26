import { useState, useCallback, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "Boska Resort redefined luxury for us. The attention to detail and the harmony with nature was beyond anything we've experienced.",
    author: "Sarah & Michael Johnson",
    role: "Honeymoon Guests"
  },
  {
    id: 2,
    quote:
      "The perfect blend of Kerala tradition and modern comfort. Waking up to misty mountain views was magical every morning.",
    author: "Rajesh Menon",
    role: "Business Traveler"
  },
  {
    id: 3,
    quote:
      "Our family vacation was perfect thanks to the wonderful staff and amazing facilities. The kids loved the pool and nature walks!",
    author: "The Chen Family",
    role: "Family Vacation"
  },
  {
    id: 4,
    quote:
      "The spa treatments were exceptional and the food was divine. We'll definitely be returning next year!",
    author: "Emily Rodriguez",
    role: "Wellness Retreat"
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [nextTestimonial, isAutoPlaying]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section
      aria-label="Guest testimonials"
      className="relative py-12  md:py-16 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')`,
      }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl playfair font-normal leading-[1.15] md:leading-[1.15] text-white mb-4">
              Guest Experiences
            </h1>
            <div className="w-32 h-1 bg-[#B59D71] mb-6 mx-auto md:mx-0" />
            <p className="text-stone-300 text-sm md:text-base md:max-w-md px-4 md:px-0">
              Discover what our distinguished guests have to say about their unforgettable stays at Boska Resort.
            </p>
          </div>

          <div 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="bg-stone-900/70 backdrop-blur-md rounded-lg p-6 md:p-8 shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
              <div className="overflow-hidden">
                <div
                  className="transition-transform duration-700 ease-out flex"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {testimonials.map((testimonial) => (
                    <blockquote
                      key={testimonial.id}
                      className="w-full flex-shrink-0 text-center px-4"
                      itemScope
                      itemType="https://schema.org/Review"
                    >
                      <Quote className="text-amber-400/40 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-4 md:mb-6 transform -scale-x-100" />
                      <p className="text-sm sm:text-base md:text-lg text-stone-100 leading-relaxed mb-4 md:mb-6 italic px-2 sm:px-4 md:px-0">
                        {testimonial.quote}
                      </p>
                      <footer className="space-y-2">
                        <cite className="text-[#B59D71] playfair font-semibold text-sm sm:text-base md:text-lg not-italic" itemProp="author">
                          {testimonial.author}
                        </cite>
                        <p className="text-stone-400 text-xs sm:text-sm md:text-sm" itemProp="description">
                          {testimonial.role}
                        </p>
                      </footer>
                    </blockquote>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2">
                <button
                  onClick={prevTestimonial}
                  className="p-1.5 sm:p-2 md:p-3 text-[#B59D71] hover:text-amber-300 bg-stone-900/60 hover:bg-stone-900/80 rounded-full transform transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#B59D71]"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-1.5 sm:p-2 md:p-3 text-[#B59D71] hover:text-amber-300 bg-stone-900/60 hover:bg-stone-900/80 rounded-full transform transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#B59D71]"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                </button>
              </div>

              {/* Pagination Dots */}
              <div className="flex justify-center mt-4 md:mt-6 gap-2 md:gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                      currentIndex === index
                        ? "bg-[#B59D71] scale-125"
                        : "bg-stone-400 hover:bg-stone-300"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                    aria-current={currentIndex === index ? "true" : "false"}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;