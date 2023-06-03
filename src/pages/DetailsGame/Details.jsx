import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGameById } from "../../data/Api";
import { DetailsGame } from "../../components/DetailsGame/DetailsGame";
import { CustomLoading } from "../../Loading/CustomLoading"
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

  if (!gameDetails) return <CustomLoading />;

  return (
    <>
      <DetailsGame detailsData={gameDetails} />
    </>
  );
};
