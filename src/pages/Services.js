import React from "react";
import imageService from "../img/services.png";
import imageService2 from "../img/services_2.png";
import imageService3 from "../img/services_3.png";

function Services({ data }) {
  const { introduction, offers } = data.main;

  return (
    <main>
      <div>
        <h2>{introduction.title}</h2>
        <p>{introduction.content}</p>
      </div>
      <img src={imageService} alt="" srcSet="" />
      <h3>{offers.title}</h3>
      <div>
        <ul>
          {offers.items.slice(0, 2).map((item, index) => (
            <li key={index}>
              <h4>{item.title}</h4>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
        <img src={imageService2} alt="" srcSet="" />
      </div>
      <div>
        <ul>
          {offers.items.slice(2).map((item, index) => (
            <li key={index}>
              <h4>{item.title}</h4>
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
