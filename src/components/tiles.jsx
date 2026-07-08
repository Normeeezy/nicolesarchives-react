import React, { useState } from "react";
import vid_placeholder from "../assets/video_placeholders.jpeg";
import vid_placeholder2 from "../assets/vid_placeholder2.jpeg";
import vid_placeholder3 from "../assets/vid_placeholder3.jpeg";
import ce3_full_logo from "../assets/ce3_full_logo.jpg";
import caltv_logo from "../assets/caltv_logo.png";
import bwib_logo from "../assets/bwib_logo.png";


const tiles = [
  {
    name: "CE3",
    logo: ce3_full_logo,
    content: (
      <div className="video-layout">
        <div className="video-logo">
          <div className="ce3-logo">
          <img src={ce3_full_logo} alt="CE3 logo" />
        </div>
        </div>
        <div className="video-grid video-grid-ce3">
          <div className="video-cell vid-1">
            <iframe
              src="https://www.instagram.com/reel/DQIbOLtj7w1/embed/"
              title="Instagram reel"
              allow="autoplay; encrypted-media"
              allowFullScreen
              scrolling="no"
            />
            <div className="video-description">
              <div className="video-role">
                Role: Produced & Edited
              </div>
              Ari's story highlights the story of a first-generation, low-income student and her journey at Cal.
            </div>
          </div>
          <div className="video-cell vid-2">
            <iframe
              src="https://www.instagram.com/reel/DVce8t9jUST/embed/"
              title="Instagram reel"
              allow="autoplay; encrypted-media"
              allowFullScreen
              scrolling="no"
            />
            <div className="video-description">
              <div className="video-role">
                Role: Produced, Filmed & Edited
              </div>
              Student Interview
            </div>
          </div>
          <div className="video-cell vid-3">
          <iframe 
            src="https://www.youtube.com/embed/Ntgi-cnRFFM"
            title="CE3 Video 3"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
            <div className="video-description">
              <div className="video-role">
                Role: Produced & Edited
              </div>
              Collaboration with filming and motion graphics

            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "CalTV",
    logo: caltv_logo,
    content: (
      <div className="video-layout">
        <div className="video-logo">
          <div className="caltv-logo">
          <img src={caltv_logo} alt="CalTV logo" className="caltv-tile-logo"/>
        </div>
        </div>
        <div className="video-grid-caltv">
          <div className="video-cell vid-1">
            <iframe
              src="https://www.instagram.com/reel/DHEtbgbS6w4/embed/"
              title="Instagram reel"
              allow="autoplay; encrypted-media"
              allowFullScreen
              scrolling="no"
            />
            <div className="video-description">
              <div className="video-role">
                Role: Produced & Edited
              </div>
              Cal Oskis Promo Video
            </div>
          </div>
          <div className="video-cell vid-2">
            <iframe
              src="https://www.instagram.com/reel/DN6LcmTEpcm/embed/"
              title="Instagram reel"
              allow="autoplay; encrypted-media"
              allowFullScreen
              scrolling="no"
            />
            <div className="video-description">
              <div className="video-role">
                Role: Produced & Edited
              </div>
              CalTV Recruitment Reel
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "BWIB",
    logo: bwib_logo,
    content: (
      <div className="video-layout">
        <div className="video-logo">
          <div className="bwib-logo">
            <img src={bwib_logo} alt="BWIB logo" />
          </div>
        </div>
        <div className="bwib-grid">
          <div className="video-cell bwib-horizontal">
            <iframe
              src="https://www.youtube.com/embed/0d3UbsPIVKM"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="video-description">
              <div className="video-role">
                Role: Filmed
              </div>
              Professor Interview
            </div>
          </div>
          <div className="video-cell bwib-vertical">
            <iframe
              src="https://www.instagram.com/reel/DCiK-FJO8KK/embed/"
              title="Instagram reel"
              allow="autoplay; encrypted-media"
              allowFullScreen
              scrolling="no"
            />
            <div className="video-description">
              <div className="video-role">
                Role: Filmed, Produced & Edited
              </div>
              Berkeley Women in Business, Photoshoot Day

            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function Tiles() {
  const [openTile, setOpenTile] = useState(null);

  return (
    <>
      <section className="tiles">
        {tiles.map((t) => (
          <button
            key={t.name}
            className="tile"
            onClick={() => setOpenTile(t)}
          >
            <img
              src={t.logo}
              alt={t.name}
              className={`tile-logo ${t.name === "CalTV" ? "caltv-tile-logo" : ""}`}

            />
          </button>
        ))}
      </section>

      {openTile && (
        <div className="modal-overlay" onClick={() => setOpenTile(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setOpenTile(null)}
              aria-label="Close"
            >
              ×
            </button>
            <p className="modal-subtitle">{openTile.subtitle}</p>
            <div className="modal-body">{openTile.content}</div>
          </div>
        </div>
      )}
    </>
  );
}
