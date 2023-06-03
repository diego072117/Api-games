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

  const handleClick = () => {
    setOpenDetails(!openDetails);
  };

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

  const backgroundStyle = rotateBackgroundImage(detailsData.screenshots);

  console.log(detailsData);

  return (
    <>
      <div className="container-details" style={backgroundStyle}>
        <div className="container-exit">
          <NavLink to="/" className="icon-exit">
            <i class="fa-solid fa-chevron-left"></i>
          </NavLink>
          <NavLink
            to={detailsData.game_url}
            className="icon-download"
            target="_blank"
          >
            <i class="fa-solid fa-download"></i>
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
              <p>
                <i class="fa-solid fa-screwdriver-wrench"></i> requirements
              </p>
              <div className="content-requirements">
                <p>
                  <span className="title-details">Memory:</span>{" "}
                  {detailsData.minimum_system_requirements.memory}
                </p>
                <p>
                  <span className="title-details">Os:</span>{" "}
                  {detailsData.minimum_system_requirements.os}
                </p>
                <p>
                  <span className="title-details">Storage:</span>
                  <br />
                  {detailsData.minimum_system_requirements.storage}
                </p>
                <p>
                  <span className="title-details">Graphics:</span>
                  <br />
                  {detailsData.minimum_system_requirements.graphics}
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
