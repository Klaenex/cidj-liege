import React from "react";
import imageAccueil1 from "../img/accueil.png";
import imageAccueil2 from "../img/accueil_2.png";

function Home({ data }) {
  const { welcome, domains, engagement } = data.main;

  return (
    <main>
      <div className="wrapper wrapper--title">
        <div className="wrapper wrapper--text">
          <h2 className="title title-big">{welcome.title}</h2>
          <p>{welcome.content}</p>
        </div>
        <img src={imageAccueil1} alt="Cidj de Liege" />
      </div>

      <h3 className="title title-big">{domains.title}</h3>
      <div className="wrapper wrapper--title">
        <ul className="list">
          {domains.items.map((item, index) => (
            <li className="list_item" key={index}>
              <h4 className="title title-list">{item.title}</h4>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
        <img src={imageAccueil2} alt="Cidj de Liege" />
      </div>
      <div>
        <h3 className="title title-big">{engagement.title}</h3>
        {engagement.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </main>
  );
}

export default Home;
