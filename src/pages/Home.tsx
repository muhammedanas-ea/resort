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
      <div className="h-[30rem] w-full">
        <video
          src="https://cdn.pixabay.com/video/2024/05/08/211152_tiny.mp4"
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
          aria-label="Background video"
        />
      </div>
      <Facilities />
     
      <Testimonials/>
      <Destination />
      <Footer />
    </div>
  );
};

export default Home;
