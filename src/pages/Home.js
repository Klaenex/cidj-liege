import React from "react";
import imageAccueil1 from "../img/accueil.png"; // Importez votre image
import imageAccueil2 from "../img/accueil_2.png";

function Home({ data }) {
  const { welcome, domains, engagement } = data.main;

  return (
    <main>
      <div>
        <h2>{welcome.title}</h2>
        <p>{welcome.content}</p>
      </div>
      <img src={imageAccueil1} alt="Cidj de Liege" />
      <h3>{domains.title}</h3>
      <ul>
        {domains.items.map((item, index) => (
          <li key={index}>
            <h4>{item.title}</h4>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
      <img src={imageAccueil2} alt="Cidj de Liege" />
      <h3>{engagement.title}</h3>
      {engagement.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </main>
  );
}

export default Home;
