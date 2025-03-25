import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "Boska Resort redefined luxury for us. The attention to detail and the harmony with nature was beyond anything we've experienced.",
    author: "Sarah & Michael Johnson",
  },
  {
    id: 2,
    quote:
      "The perfect blend of Kerala tradition and modern comfort. Waking up to misty mountain views was magical every morning.",
    author: "Rajesh Menon",
  },
  {
    id: 3,
    quote:
      "Our family vacation was perfect thanks to the wonderful staff and amazing facilities. The kids loved the pool and nature walks!",
    author: "The Chen Family",
  },
  {
    id: 4,
    quote:
      "The spa treatments were exceptional and the food was divine. We'll definitely be returning next year!",
    author: "Emily Rodriguez",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-24 bg-stone-50" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2
            id="testimonials-heading"
            className="text-3xl font-light playfair text-stone-800 mb-4"
          >
            Guest Experiences
          </h2>
          <div className="w-20 h-px bg-stone-300 mx-auto"></div>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div className="flex">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="max-w-2xl mx-auto">
                      <Quote className="text-stone-300 w-12 h-12 mx-auto mb-8" />
                      <p className="text-lg text-stone-700 text-center leading-relaxed mb-8">
                        {testimonial.quote}
                      </p>
                      <p className="text-center text-stone-500 font-light">
                        {testimonial.author}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-stone-400 hover:text-stone-600 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-stone-400 hover:text-stone-600 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center mt-12 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentIndex === index
                    ? "bg-stone-400"
                    : "bg-stone-200 hover:bg-stone-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;