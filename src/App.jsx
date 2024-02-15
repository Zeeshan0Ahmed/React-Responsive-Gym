import "./App.css";
import Hero from "./Components/Hero/Hero";
import Plans from "./Components/Plans/Plans";
import Programs from "./Components/Programs/Programs";
import Reasons from "./Components/Reasons/Reasons";
import Testimonial from "./Components/Testimonial/Testimonial";
import Join from "./Components/Join/Join";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonial />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
