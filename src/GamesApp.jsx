import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";

export const GamesApp = () => {
  
  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  );
};
