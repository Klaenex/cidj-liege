import React from "react";

function Contact({ data }) {
  const { information, mapEmbedUrl } = data.main;

  return (
    <main>
      <h2>Contact</h2>
      <p>
        <span>Où ?</span> {information.address}
      </p>
      <p>
        <span>Quand ?</span> {information.openingHours}
      </p>
      <p>
        <span>Tel:</span> {information.phone}
      </p>
      <p>
        <span>email :</span> {information.email}
      </p>

      <iframe
        title="maps cidj"
        src={mapEmbedUrl}
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </main>
  );
}

export default Contact;
