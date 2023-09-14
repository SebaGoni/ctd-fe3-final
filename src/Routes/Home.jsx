import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../utils/global.context";

const Home = () => {
  const { theme, dentistas } = useContext(ContextGlobal);

  return (
    <main className={`home ${theme}`}>
      <h1>Home</h1>
      <div className="card-grid">
        {dentistas.map((dentista) => (
          <Card
            key={dentista.id}
            id={dentista.id}
            name={dentista.name}
            username={dentista.username}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;

