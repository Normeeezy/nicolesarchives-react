import "./App.css";
import Header from "./components/Header"
import Hero from "./components/Hero"
import Tiles from "./components/tiles"

import img1 from "./assets/Nicole_Pfp.JPG";

import premiereLogo from "./assets/framework_logos/premiere_pro_logo.png";
import afterEffectsLogo from "./assets/framework_logos/after_effects_icon.png";
import adobe_illustrator_logo from "./assets/framework_logos/adobe_illustrator_logo.png";
import canva_logo from "./assets/framework_logos/canva.jpg";

import linkedin_logo from "./assets/LinkedIn_icon.png";
import instagram_logo from "./assets/Instagram_logo.png";

import branding_img1 from "./assets/branding_graphics/branding_1.png";
import branding_img2 from "./assets/branding_graphics/branding_2.png";
import branding_img3 from "./assets/branding_graphics/branding_3.png";


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
        <section id="branding" className="section branding-section">
        <h2>Branding</h2>
        <div className="branding-photos">
          <img src={branding_img1} alt="Graphic 1" />
          <img src={branding_img2} alt="Graphic 2" />
        </div>
      </section>

        {/* VIDEOS */}
        <section id="videos" className="section">
          <h2>Videos</h2>
          <p>This is where your videos will go.</p>
        <br/>
          
        </section>

        {/* ABOUT */}
        <section id="about" className="section about-section">
          <h1 className="about-header">ABOUT ME</h1>

          <div className="about-layout">
            <div className="about-left">
              <img className="about-photo" src={img1} alt="Nicole" />

              <div className="about-tools">
                <img src={premiereLogo} alt="Premiere Pro" />
                <img src={afterEffectsLogo} alt="After Effects" />
                <img src={adobe_illustrator_logo} alt="Adobe Illustrator" />
                <img src={canva_logo} alt="Canva" />
              </div>
            </div>

            <div className="about-right">
              <p className="about-description">
                Hello! I am Nicole Aros, an undergraduate student at the University of California,
                Berkeley, originally from the vibrant city of Los Angeles. Growing up in a low-income
                community shaped the way I view the world and taught me the importance of diversity,
                resilience, and pride in my identity as a Latina. For much of my life, I felt limited
                by a lack of resources and representation, but I found comfort and determination
                through academics, which ultimately led me to Berkeley. My experiences have inspired
                me to create spaces where inclusivity and cultural backgrounds are celebrated, while
                encouraging others to believe that their circumstances do not define the
                possibilities ahead of them.
                <br />
                <br />
                During the pandemic, I discovered a passion for storytelling and video editing
                through the rise of online fandom communities. As a non-traditional student entering
                the world of entertainment and media, I became drawn to the power of visual
                storytelling and creative expression. Through my work, I hope to continue giving
                back to the communities that shaped me while highlighting stories that inspire
                connection, representation, and opportunity.
              </p>

              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/nicole-aros/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin_logo} alt="LinkedIn" />
                </a>
                <a
                  href="https://www.instagram.com/n._nickell/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instagram_logo} alt="Instagram" />
                </a>
              </div>
            </div>
          </div>
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