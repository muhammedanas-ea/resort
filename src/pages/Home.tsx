import About from "../components/home/About";
import Hero from "../components/home/Hero";
import Facilities from "../components/home/Facilities";
import Destination from "../components/home/Destination";
import Testimonials from "../components/home/Testimonials";
import Gallery from "../components/home/Gallery";
import FAQ from "../components/home/FAQ";

const Home = () => {
  return (
    <>
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
      <Testimonials />
      <Gallery />
      <Destination />
      <FAQ />
    </>
  );
};

export default Home;
