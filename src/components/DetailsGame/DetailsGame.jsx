import { useEffect, useState } from "react";
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

  const rotateBackgroundImage = (screenshots) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % screenshots.length
        );
      }, 10000);

      return () => clearInterval(interval);
    }, [screenshots.length]);

    return {
      backgroundImage: `url(${screenshots[currentImageIndex].image})`,
    };
  };

  const handleClick = () => {
    setOpenDetails(!openDetails);
  };

  const backgroundStyle = rotateBackgroundImage(detailsData.screenshots);
  const requeriments = detailsData.minimum_system_requirements;

  return (
    <>
      <div className="container-details" style={backgroundStyle}>
        <div className="container-exit">
          <NavLink to="/" className="icon-exit">
            <i className="fa-solid fa-chevron-left"></i>
          </NavLink>
          <NavLink
            to={detailsData.game_url}
            className="icon-download"
            target="_blank"
          >
            <i className="fa-solid fa-download"></i>
          </NavLink>
        </div>

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
            <div className="requirements">
              <p className="title-game">
                <i className="fa-solid fa-screwdriver-wrench"></i> requirements
              </p>

              <div className="content-requirements">
                <p>
                  <span className="title-details">Memory:</span>{" "}
                  {requeriments ? requeriments.memory : "N/A"}
                </p>
                <p>
                  <span className="title-details">Os:</span>{" "}
                  {requeriments ? requeriments.os : "N/A"}
                </p>
                <p>
                  <span className="title-details">Storage:</span>
                  <br />
                  {requeriments ? requeriments.storage : "N/A"}
                </p>
                <p>
                  <span className="title-details">Graphics:</span>
                  <br />
                  {requeriments ? requeriments.graphics : "N/A"}
                </p>
              </div>
            </div>
            <div className="content-three">
              <p>{detailsData.short_description}</p>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
