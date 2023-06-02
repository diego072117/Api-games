import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./DetailsGame.scss";

const MAX_CHARACTERS_TITLE = 11;

export const DetailsGame = ({ detailsData }) => {
  const [openDetails, setOpenDetails] = useState(false);

  const contentClassName = openDetails
    ? "content-details open"
    : "content-details";

  const titleCharacters =
    detailsData.title.length > MAX_CHARACTERS_TITLE
      ? detailsData.title.slice(0, MAX_CHARACTERS_TITLE) + "..."
      : detailsData.title;

  const handleClick = () => {
    setOpenDetails(!openDetails);
  };

  return (
    <>
      <div className="container-details">
        <nav className={contentClassName}>
          <div className="button" onClick={handleClick}>
            Overview
          </div>
          <div className="container-content">
            <div className="title-game">
              <p>
                <i className="fa-solid fa-gamepad"></i> {titleCharacters}
              </p>
            </div>
            <div className="content-two">
              <p>
                <span className="title-details">Genre:</span>{" "}
                {detailsData.genre}
              </p>
              <p>
                <span className="title-details">Plataform:</span>{" "}
                {detailsData.platform}
              </p>
              <p>
                <span className="title-details">Publisher:</span>{" "}
                {detailsData.publisher}
              </p>
              <p>
                <span className="title-details">Developer:</span>{" "}
                {detailsData.developer}
              </p>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
