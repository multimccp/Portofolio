import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import SectionWrapper from "./components/SectionWrapper";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/resume";
import Portfolio from "./components/portofolio";

const sections = {
  about: <About />,
  resume: <Resume />,
  projects: <Projects />,
  portfolio: <Portfolio />, 
};

export default function App() {
  const [active, setActive] = useState("about");

  return (
    <div className="grid-container">
      <Sidebar />
      <main className="main-column">
        <Navbar active={active} onChange={setActive} />
        <SectionWrapper key={active}>{sections[active]}</SectionWrapper>
      </main>
    </div>
  );
}
