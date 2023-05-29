import "./CardStyle.scss";

export const Card = ({ data }) => {
  return (
    <>
      <div className="cards-container">
        {data.map((game) => (
          <div className="card" key={game.id}>
            <img src={game.thumbnail} className="img-card" alt="Imagen" />
            <div>
              <p>{game.title}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
