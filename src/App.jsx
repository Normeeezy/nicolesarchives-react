import "./App.css";
import Header from "./components/Header"
import Hero from "./components/Hero"

import img1 from "./assets/Nicole_Pfp.JPG";
import img2 from "./assets/Norman_and_Nicole.JPG";

export default function App() {
  return (
    <>
      <Header />

      {/* Hero Section (video background) */}
      <Hero />

      {/* Page Content */}
      <div className="page">

        {/* ABOUT */}
        <section id="about" className="section">
          <h1>Nicole Aros</h1>
          <p className="subtitle">Media Studies Major</p>
          <p>Welcome to my portfolio website.</p>
          <p>
            If you are here right now, just know that this is currently a work in
            progress. In the mean time, enjoy my linked in profile pic and a
            picture of me and my bebe ;)
          </p>

          <img className="photo" src={img1} alt="Nicole" />
          <img className="photo" src={img2} alt="Nicole and bebe" />
        </section>

        {/* BRANDING */}
        <section id="branding" className="section">
          <h2>Branding</h2>
          <p>This is where your branding work will go.</p>
        </section>

        {/* VIDEOS */}
        <section id="videos" className="section">
          <h2>Videos</h2>
          <p>This is where your videos will go.</p>
        </section>

        {/* CONNECT */}
        <section id="connect" className="section">
          <h2>Connect</h2>
          <p>Links, socials, contact info here.</p>
        </section>

      </div>
    </>
  );
}