import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGameById } from "../../data/Api";
import "./DetailsStyle.scss";

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
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{gameDetails.title}</h2>
    </div>
  );
};
