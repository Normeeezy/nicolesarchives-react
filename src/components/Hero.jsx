import React from "react";
import heroVid from "../assets/placeholder_video.MOV";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-media">
        
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={heroVid} type="video/mp4" />
        </video>

        <div className="hero-overlay"></div>

        <div className="hero-text">
          <h1>Nicole</h1>
          <p>CREATIVE PORTFOLIO</p>
          <h1>Aros</h1>
        </div>

      </div>
    </section>
  );
}