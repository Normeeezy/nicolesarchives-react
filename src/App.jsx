import "./App.css";

import img1 from "./assets/Nicole_Pfp.JPG";
import img2 from "./assets/Norman_and_Nicole.JPG";

export default function App() {
  return (
    <div className="page">
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
    </div>
  );
}
