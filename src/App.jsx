import "./App.css";
import Header from "./components/Header"
import Hero from "./components/Hero"
import Tiles from "./components/tiles"

import img1 from "./assets/Nicole_Pfp.JPG";
import img2 from "./assets/Norman_and_Nicole.JPG";

export default function App() {
  return (
    <>
      <Header />

      {/* Hero Section (video background) */}
      <Hero />

      {/* Tiles Section */}
      <Tiles />

      {/* Page Content */}
      <div className="page">

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

        {/* ABOUT */}
        <section id="about" className="section">
          <h1>ABOUT</h1>
          <h2>Nicole Aros</h2>
          <p className="subtitle">Media Studies Major</p>
          <p>Welcome to my portfolio website.</p>
          <p>
            If you are here right now, just know that this is currently a work in
            progress. 
            )
          </p>
          <img className="photo" src={img1} alt="Nicole" />
        </section>

        {/* CONNECT */}
        <section id="connect" className="section contact-section">
          <h2 className="contact-title">Connect</h2>
          <form
            className="contact-form"
            onSubmit={async (e) => {
              e.preventDefault();
            
              const form = e.currentTarget;
            
              const formData = {
                name: form.name.value,
                email: form.email.value,
                message: form.message.value,
              };
            
              try {
                const response = await fetch("/api/contact", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(formData),
                });
            
                if (!response.ok) {
                  throw new Error("Failed to send");
                }
            
                alert("Thank you, your message has been sent!");
                form.reset();
              } catch (error) {
                alert("Something went wrong. Please try again.");
              }
            }}
          >
            <label className="contact-label">
              Name *
              <input
                type="text"
                name="name"
                placeholder="Your Name..."
                required
              />
            </label>

            <label className="contact-label">
              Email Address *
              <input
                type="email"
                name="email"
                placeholder="Your Email Address..."
                required
              />
            </label>

            <label className="contact-label">
              Message *
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message..."
                required
              />
            </label>

            <button type="submit" className="contact-submit">
              Submit
            </button>
          </form>
        </section>

      </div>
    </>
  );
}