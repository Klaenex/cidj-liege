// src/pages/Home.js
import React from "react";

function Home({ data }) {
  return (
    <div>
      <h1>{data.nom}</h1>
      <p>{data.description}</p>

      <h2>Horaires</h2>
      <ul>
        {Object.entries(data.horaires).map(([jour, horaire]) => (
          <li key={jour}>
            {jour.charAt(0).toUpperCase() + jour.slice(1)}: {horaire}
          </li>
        ))}
      </ul>

      <h2>Services</h2>
      <ul>
        {data.services.map((service, index) => (
          <li key={index}>
            <h3>{service.nom}</h3>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>

      <h2>Contact</h2>
      <p>Téléphone : {data.contact.telephone}</p>
      <p>
        Email :{" "}
        <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
      </p>
      <p>Adresse : {data.adresse}</p>
    </div>
  );
}

export default Home;
