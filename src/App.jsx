import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Tech from "./components/Tech";
function App() {
  return (
    <div className="overflow-x-hidden text-neutral-200 antialiased ">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        </div>
      </div>
      
    <div className="container mx-auto px-8">
      <Navbar />
      <Home/>
      <About/>
      <Tech/>
      <Contact/>
    </div>
    </div>
  );
};

export default App
