import { useRef } from "react";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Portofolio from "./pages/portofolio";
import Navbar from "./components/layouts/Navbar";

function App() {
  const aboutRef = useRef();
  const homeRef = useRef();
  const portofolioRef = useRef();
  const contactRef = useRef();
  return (
    <>
      <div className="h-screen overflow-y-auto no-scrollbar scroll-snap-y">
        <Navbar
          onClickAbout={() => {
            aboutRef.current.scrollIntoView({ behavior: "smooth" });
          }}
          onClickHome={() => {
            homeRef.current.scrollIntoView({ behavior: "smooth" });
          }}
          onClickPortofolio={() => {
            portofolioRef.current.scrollIntoView({ behavior: "smooth" });
          }}
          onClickContact={() => {
            contactRef.current.scrollIntoView({ behavior: "smooth" });
          }}
        />
        <div ref={homeRef} className="min-h-screen snap-center">
          <Home />
        </div>

        <div ref={aboutRef} className="min-h-screen snap-end pt-20 pb-20">
          <About />
        </div>
        <div ref={portofolioRef} className=" snap-end pt-10 no-scrollbar">
          <Portofolio />
        </div>
        <div ref={contactRef} className="min-h-screen snap-center pt-12 pb-20 ">
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
