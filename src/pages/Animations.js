import React from "react";
import imageAnimation from "../img/animations.png";
import imageAnimation2 from "../img/animations_2.png";
import imageAnimation3 from "../img/animations_3.png";

function Animations({ data }) {
  const { introduction, recentActivities, upcomingActivities, additionalInfo } =
    data.main;

  // Tableau d'images à utiliser
  const images = [imageAnimation, imageAnimation2, imageAnimation3];

  return (
    <main className="main--anim">
      <div className="wrapper wrapper--center">
        <h2 className="title title-big">{introduction.title}</h2>
        <p>{introduction.content}</p>
      </div>
      <ul className="list list--services">
        {recentActivities.items.map((item, index) => (
          <li className="list_services" key={index}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
            <img
              src={images[index % images.length]}
              alt={`Animation ${index + 1}`}
            />
          </li>
        ))}
      </ul>
      <p className="text--center">{recentActivities.text}</p>

      <h3>{upcomingActivities.title}</h3>
      <ul>
        {upcomingActivities.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {additionalInfo.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </main>
  );
}

export default Animations;
