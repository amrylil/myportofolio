import { useRef } from "react";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Portofolio from "./pages/portofolio";
import Navbar from "./components/layouts/Navbar";

function App() {
  const aboutRef = useRef(null);
  const homeRef = useRef(null);
  const portofolioRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      {/* PERUBAHAN ADA DI DIV INI */}
      <div
        className="h-screen overflow-y-auto no-scrollbar scroll-snap-y 
                   bg-slate-900 text-slate-200
                   bg-[image:linear-gradient(to_right,rgba(51,65,85,0.4)_1px,transparent_1px),linear-gradient(rgba(51,65,85,0.4)_1px,transparent_1px)] 
                   bg-[size:120px_120px]"
      >
        <Navbar
          onClickAbout={() => {
            aboutRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
          onClickHome={() => {
            homeRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
          onClickPortofolio={() => {
            portofolioRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
          onClickContact={() => {
            contactRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
        />
        <div ref={homeRef} className="min-h-screen snap-center">
          <Home />
        </div>

        <div ref={aboutRef} className="min-h-screen snap-end pt-20 pb-20">
          <About />
        </div>
        <div ref={portofolioRef} className="snap-end pt-10 no-scrollbar">
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
