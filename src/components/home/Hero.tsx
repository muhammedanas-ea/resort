import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(-1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isNewImage, setIsNewImage] = useState(true);
  
  // SEO-optimized rotating phrases
  const phrases = [
    { word: "Luxury", suffix: "Getaways" },
    { word: "Tranquil", suffix: "Escapes" },
  ];
  
  const currentPhrase = phrases[currentWordIndex];

  // Optimized images with descriptive alt texts
  const images = [
    {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      alt: "Luxury resort pool overlooking Wayanad's misty mountains"
    },
    {
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      alt: "Elegant villa accommodation at Boska Resort with private deck"
    },
    {
      url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      alt: "Sunset view from Boska Resort's luxury suites in Wayanad"
    }
  ];

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/918157880985`, "_blank", "noopener,noreferrer");
  };

  // Letter animation effect
  useEffect(() => {
    if (currentLetterIndex < currentPhrase.word.length - 1) {
      const timer = setTimeout(() => {
        setCurrentLetterIndex(currentLetterIndex + 1);
      }, 150);
      return () => clearTimeout(timer);
    } else {
      const wordChangeTimer = setTimeout(() => {
        setCurrentLetterIndex(-1);
        setCurrentWordIndex((prev) => (prev + 1) % phrases.length);
      }, 2500);
      return () => clearTimeout(wordChangeTimer);
    }
  }, [currentLetterIndex, currentPhrase.word.length]);

  // Image rotation with performance optimization
  useEffect(() => {
    if (currentImageIndex < images.length - 1) {
      const imageInterval = setInterval(() => {
        setIsNewImage(true);
        setCurrentImageIndex((prev) => prev + 1);
      }, 8000);
      return () => clearInterval(imageInterval);
    }
  }, [currentImageIndex, images.length]);

  useEffect(() => {
    if (isNewImage) {
      const timer = setTimeout(() => setIsNewImage(false), 100);
      return () => clearTimeout(timer);
    }
  }, [isNewImage]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden" aria-label="Boska Resort Luxury Getaway">
      {/* Background Images with Lazy Loading */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === currentImageIndex ? 1 : 0,
              scale: index === currentImageIndex ? (isNewImage ? 1 : 1) : 1.2,
            }}
            transition={{
              opacity: { duration: 1.5, ease: "easeInOut" },
              scale: { duration: 7, ease: "easeOut" },
            }}
          >
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 7, ease: "easeOut" }}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
                width="2070"
                height="1380"
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Hero Content with Semantic Structure */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 pt-20 pb-10">
        <motion.p
          className="text-white font-light italic mb-4 text-xl md:text-2xl playfair"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          aria-label="Welcome message"
        >
          Experience Wayanad's Finest Luxury Retreat
        </motion.p>

        <motion.h1
          className="text-white text-4xl md:text-6xl lg:text-7xl mb-6 playfair font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Discover {currentPhrase.suffix}
        </motion.h1>

        <motion.div
          className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          aria-label="Featured experience"
        >
          <div className="h-px w-16 sm:w-24 bg-gray-200"></div>
          <div className="min-h-[4rem] md:min-h-[5rem]">
            {currentPhrase.word.split("").map((letter, index) => (
              <motion.span
                className="text-[#B59D71] text-4xl md:text-6xl lg:text-7xl playfair font-medium"
                key={`${currentWordIndex}-${index}`}
                initial={{ opacity: 0, rotateX: -90 }}
                animate={
                  index <= currentLetterIndex
                    ? { opacity: 1, rotateX: 0 }
                    : { opacity: 0, rotateX: -90 }
                }
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                }}
                aria-hidden="true"
              >
                {letter}
              </motion.span>
            ))}
          </div>
          <div className="h-px w-16 sm:w-24 bg-gray-200"></div>
        </motion.div>
      </div>

      {/* WhatsApp Floating Button */}
      <motion.div
        className="fixed bottom-16 right-3 md:right-6 z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -15, 0],
        }}
        transition={{
          opacity: { duration: 0.5, delay: 1.5 },
          scale: { duration: 0.5, delay: 1.5 },
          y: {
            duration: 2.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
        aria-label="Contact via WhatsApp"
      >
        <button 
          className="w-16 h-16 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-full"
          onClick={handleWhatsAppClick}
        >
          <img
            className="w-full h-full object-cover"
            src="https://vistararesort.com/images/watsapp-icon.webp"
            alt="Contact Boska Resort via WhatsApp"
            loading="lazy"
            width="64"
            height="64"
          />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;