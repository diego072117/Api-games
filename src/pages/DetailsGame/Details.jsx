import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGameById } from "../../data/Api";
import { DetailsGame } from "../../components/DetailsGame/DetailsGame";
import "./DetailsStyle.scss";
import { SyncLoader } from "react-spinners";

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
        <SyncLoader color="#fc5c4c" />
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
