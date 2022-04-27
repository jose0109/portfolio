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
    <div className="wrapper">
      <div className="App">
        <Navbar />
        <Hero />
        <About
          title="Hi, it's Jose here"
          content="I'm a freelance front-end web developer, I really enjoy programming user interfaces and I try to learn something new every day, I always try to put in practice what I learn since I consider it's the best way to continuously improve my skills."
        />
        <Features />
        <Work />
        <About
          title="My Latest Courses"
          content="These are among the latest courses I've taken, I try to keep myself busy all the time, specially given that there's always something new to learn in web development."
        />
        <Courses />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}

export default App;
