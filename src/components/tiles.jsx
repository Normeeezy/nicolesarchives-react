import React, { useState } from "react";
import vid_placeholder from "../assets/video_placeholders.jpeg";
import vid_placeholder2 from "../assets/vid_placeholder2.jpeg";
import vid_placeholder3 from "../assets/vid_placeholder3.jpeg";
import ce3_full_logo from "../assets/ce3_full_logo.jpg";
import caltv_logo from "../assets/caltv_logo.jpg";
import bwib_logo from "../assets/bwib_logo.png";


const tiles = [
  {
    name: "CE3",
    content: (
      <div className="video-layout">
        <div className="video-logo">
          <img src={ce3_full_logo} alt="CE3 logo" />
        </div>
        <div className="video-grid">
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
                Student Interview: Produced & Edited
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
                Role: Produced & Edited
              </div>
              Description for video 2 goes here.
            </div>
          </div>
          <div className="video-cell vid-3">
            <iframe
              src="https://www.youtube.com/embed/Ntgi-cnRFFM"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="video-description">
              <div className="video-role">
                Role: Produced & Edited
              </div>
              Description for video 3 goes here.
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "CalTV",
    content: (
      <div className="video-layout">
        <div className="video-logo">
          <div className="caltv-logo">
          <img src={caltv_logo} alt="CalTV logo" />
        </div>
        </div>
        <div className="video-grid">
          <div className="video-cell vid-3">
            <img src={vid_placeholder3} alt="Vid 3" />
            <div className="video-description">
              <div className="video-role">
                Role: Produced & Edited
              </div>
              Description for video 3 goes here.
            </div>
          </div>
          <div className="video-cell vid-1">
            <img src={vid_placeholder} alt="Vid 1" />
            <div className="video-description">
              <div className="video-role">
                Role: Produced & Edited
              </div>
              Description for video 1 goes here.
            </div>
          </div>
          <div className="video-cell vid-2">
            <img src={vid_placeholder2} alt="Vid 2" />
            <div className="video-description">
              <div className="video-role">
                Role: Produced & Edited
              </div>
              Description for video 2 goes here.
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "BWIB",
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
                Role: Produced & Edited
              </div>
              YouTube video description goes here.
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
                Role: Produced & Edited
              </div>
              Instagram reel description goes here.
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Personal",
    subtitle: "My work aside",
    content: <p>Personal content goes here.</p>,
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
            <span className="tile-name">{t.name}</span>
            <span className="tile-subtitle">{t.subtitle}</span>
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
            <h2 className="modal-title">{openTile.name}</h2>
            <p className="modal-subtitle">{openTile.subtitle}</p>
            <div className="modal-body">{openTile.content}</div>
          </div>
        </div>
      )}
    </>
  );
}
