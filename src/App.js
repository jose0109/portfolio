import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Features from "./Components/Features/Features";
import Work from "./Components/Work/Work";
import Courses from "./Components/Courses/Courses";
import Testimonials from "./Components/Testimonials/Testimonials";
import CTA from "./Components/CTA/CTA";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About
        title="Hi, I'm Jose"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet
          posuere nunc. Morbi rutrum tortor mi, a vulputate nisi finibus in.
          Nullam fermentum, ipsum vitae tristique tincidunt, metus metus sodales
          elit, ac viverra justo sem sit amet quam."
      />
      <Features />
      <Work />
      <About
        title="Courses Taken"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet
          posuere nunc. Morbi rutrum tortor mi, a vulputate nisi finibus in.
          Nullam fermentum, ipsum vitae tristique tincidunt, metus metus sodales
          elit, ac viverra justo sem sit amet quam."
      />
      <Courses />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
