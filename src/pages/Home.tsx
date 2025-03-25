import About from "../components/home/About";
import Hero from "../components/home/Hero";
import Navbar from "../components/Navbar";
import Facilities from "../components/home/Facilities";
import Destination from "../components/home/Destination";
import Footer from "../components/Footer";
import Testimonials from "../components/home/Testimonials";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <div className="relative h-[30rem] w-full overflow-hidden bg-black">
        <video
          src="https://cdn.pixabay.com/video/2024/05/08/211152_tiny.mp4"
          autoPlay
          muted
          loop
          className="w-full h-full object-cover scale-y-100"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.2) 5%, rgba(0, 0, 0, 0.8) 15%, black 25%, black 75%, rgba(0, 0, 0, 0.8) 85%, rgba(0, 0, 0, 0.2) 95%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.2) 5%, rgba(0, 0, 0, 0.8) 15%, black 25%, black 75%, rgba(0, 0, 0, 0.8) 85%, rgba(0, 0, 0, 0.2) 95%, transparent 100%)",
          }}
          aria-label="Background video"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-10 pointer-events-none" />
      </div>
      <Facilities />
     
      <Testimonials/>
      <Destination />
      <Footer />
    </div>
  );
};

export default Home;
