import React from "react";
import imageService from "../img/services.png";
import imageService2 from "../img/services_2.png";
import imageService3 from "../img/services_3.png";

function Services({ data }) {
  const { introduction, offers } = data.main;

  return (
    <main>
      <div className="wrapper wrapper--title">
        <div className="wrapper wrapper--text">
          <h2 className="title title-big">{introduction.title}</h2>
          <p>{introduction.content}</p>
        </div>
        <img src={imageService} alt="" srcSet="" />
      </div>

      <h3 className="title title-big">{offers.title}</h3>
      <div className="wrapper wrapper--title">
        <ul className="list">
          {offers.items.slice(0, 2).map((item, index) => (
            <li className="list_item" key={index}>
              <h4 className="title title-list">{item.title}</h4>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
        <img src={imageService2} alt="" srcSet="" />
      </div>
      <div className="wrapper wrapper--title">
        <ul className="list">
          {offers.items.slice(2).map((item, index) => (
            <li className="list_item" key={index}>
              <h4 className="title title-list">{item.title}</h4>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
        <img src={imageService3} alt="" srcSet="" />
      </div>
    </main>
  );
}

export default Services;
