import axios from "axios";
const { VITE_RAPID_API_KEY } = import.meta.env;

export const Api = async () => {
  try {
    const { data } = await axios.get(
      "https://free-to-play-games-database.p.rapidapi.com/api/games",
      {
        headers: {
          "X-RapidAPI-Key": VITE_RAPID_API_KEY,
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      }
    );
    console.log("datosApi:", data);
    return data 
  } catch (error) {
    console.log(error);
    return [];
  }
};
