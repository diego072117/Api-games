import { useEffect, useState } from "react";
import { Api } from "../../data/Api";

export const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchDataFromAPI = async () => {
      const responseData = await Api();
      setData(responseData);
    };

    fetchDataFromAPI();
  }, []);

  // async function fetchData() {
  //   const data = await Api()
  //   console.log('datos', data);
  // }
  
  // fetchData()

  return (
    <>
      <h1>hola</h1>
    </>
  );
};
