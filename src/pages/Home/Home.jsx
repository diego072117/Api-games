import { useEffect, useState } from "react";
import { Api } from "../../data/Api";
import { Card } from "../../components/GameCard/Card";
import { Nav } from "../../components/Nav/Nav";

export const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const dataFromAPI = async () => {
      const responseData = await Api();
      setData(responseData);
    };

    dataFromAPI();
  }, []);

  return (
    <>
      {/* {data.map((game) =>(
        <p key={game.id}>{game.title}</p>
      ))} */}
      <Card data={data}/>
      <Nav />
    </>
  );
};
