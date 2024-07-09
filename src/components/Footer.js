import logo from "../img/logo.png";

const Footer = () => {
  return (
    <footer>
      <img className="logo logo-footer" src={logo} alt="Logo" />

      <div className="footer-info">
        <ul className="list">
          <li>Horaire</li>
          <li>Lundi: Fermé</li>
          <li>Mardi: Fermé</li>
          <li>Mercredi: 12h - 17h</li>
          <li>Jeudi: 12h - 17h</li>
          <li>Vendredi: 12h - 17h</li>
          <li>Samedi: Fermé</li>
          <li>Dimanche: Fermé</li>
        </ul>

        <div className="footer-info_right">
          <p>
            Tel: 04/388 39 99
            <br />
            Mail: infos@cidj-liege.be
          </p>
          <p>
            Adresse:
            <br />
            Rue Sainte-Marguerite 82,
            <br />
            4000 Liège
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
