import About from "../components/home/About";
import Hero from "../components/home/Hero";
import Navbar from "../components/Navbar";
import Facilities from "../components/home/Facilities";
import Destination from "../components/home/Destination";
import Footer from "../components/Footer";
// import Testimonials from "../components/home/Testimonials";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Facilities />
      <div className="relative h-[40rem] w-full overflow-hidden bg-[#ffffffb0]">
        <video
          src="https://v1.pinimg.com/videos/mc/720p/ea/36/83/ea36831aa23769a2f59d34497b00c76b.mp4"
          autoPlay
          muted
          loop
          className="w-full h-full object-cover scale-y-95"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.2) 5%, rgba(0, 0, 0, 0.8) 15%, black 25%, black 75%, rgba(0, 0, 0, 0.8) 85%, rgba(0, 0, 0, 0.2) 95%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.2) 5%, rgba(0, 0, 0, 0.8) 15%, black 25%, black 75%, rgba(0, 0, 0, 0.8) 85%, rgba(0, 0, 0, 0.2) 95%, transparent 100%)",
          }}
          aria-label="Background video"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white opacity-40 pointer-events-none" />
      </div>
      {/* <Testimonials/> */}
      <Destination />
      <Footer />
    </div>
  );
};

export default Home;
