import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./DetailsGame.scss";

export const DetailsGame = ({ detailsData }) => {
  const [openDetails, setOpenDetails] = useState(false);

  const contentClassName = openDetails
    ? "content-details open"
    : "content-details close";

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
          {/* <div className="content-one">
            <p>digital illustration</p>
          </div> */}
        </nav>
      </div>
    </>
  );
};
