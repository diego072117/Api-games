import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGameById } from "../../data/Api";
import { DetailsGame } from "../../components/DetailsGame/DetailsGame";
import "./DetailsStyle.scss";
import { PacmanLoader } from "react-spinners";

export const Details = () => {
  const { id } = useParams();
  const [gameDetails, setGameDetails] = useState(null);

  useEffect(() => {
    const gameDetails = async () => {
      const details = await getGameById(id);
      setGameDetails(details);
    };

    gameDetails();
  }, [id]);

  if (!gameDetails) {
    return (
      <div className="loader-container">
        <PacmanLoader color="#fd814a" />
      </div>
    );
  }

  console.log(gameDetails);

  return (
    <>
      <DetailsGame detailsData={gameDetails} />
    </>
  );
};
