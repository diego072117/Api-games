import axios from "axios";
const { VITE_RAPID_API_KEY } = import.meta.env;

const headers = {
  "X-RapidAPI-Key": VITE_RAPID_API_KEY,
  "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
};

export const getAllGames = async () => {
  try {
    const { data } = await axios.get(
      "https://free-to-play-games-database.p.rapidapi.com/api/games",
      { headers }
    );
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getGameById = async (id) => {
  try {
    const { data } = await axios.get(
      "https://free-to-play-games-database.p.rapidapi.com/api/game",
      {
        headers,
        params: {
          id: id,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
