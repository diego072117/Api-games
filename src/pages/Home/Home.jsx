// import { useEffect, useState } from "react";
// import { Api } from "../../data/Api";
import { Nav } from "../../components/Nav/Nav";

export const Home = () => {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   const dataFromAPI = async () => {
  //     const responseData = await Api();
  //     setData(responseData);
  //   };

  //   dataFromAPI();
  // }, []);

  return (
    <>
      {/* {data.map((game) =>(
        <p key={game.id}>{game.title}</p>
      ))} */}
      <Nav />
    </>
  );
};
