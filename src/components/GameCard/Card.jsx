import "./CardStyle.scss";

export const Card = ({ data }) => {
  return (
    <>
      <div className="cards-container">
        {data.map((game) => (
          <div className="card" key={game.id}>
            <img src={game.thumbnail} className="img-card" alt="Imagen" />
            <div className="content-container">
              <div className="title-game">
                {game.title}
              </div>
              <div className="card-icon">
                <i className="fa-solid fa-square-plus"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
