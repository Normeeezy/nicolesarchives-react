import React, { useState } from "react";

const tiles = [
  {
    name: "CE3",
    subtitle: "Center for Educational Equity & Excellence",
    content: <p>CE3 content goes here.</p>,
  },
  {
    name: "CalTV",
    subtitle: "ASUC Premier Media Org",
    content: <p>CalTV content goes here.</p>,
  },
  {
    name: "BWIB",
    subtitle: "Berkeley Women in Business",
    content: <p>BWIB content goes here.</p>,
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
