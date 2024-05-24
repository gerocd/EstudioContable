import CardTeam1 from "./CardsTeam/CardTeam1";

import "./OurAwesomeTeam.css";

const OurAwesomeTeam = () => {
  return (
    <div className="our-awesome-team" id="nuestro-equipo">
      <div className="our-awesome-team-wrapper">
        <h1 className="our-awesome-team1">Equipo de trabajo</h1>
      </div>
      <div className="card-team-01-parent">
         <CardTeam1
          TeamMemberImage={"/lorena.jpeg"}
          TeamMemberName={"Lorena Jerez"}
          TeamMemberRole={"Contadora/Dueña"}
        />
          <CardTeam1
          TeamMemberImage={"/mariano.jpeg"}
          TeamMemberName={"Daruich Mariano"}
          TeamMemberRole={"Contador"}
        />
         <CardTeam1
          TeamMemberImage={"/aliende.jpeg"}
          TeamMemberName={"Leandro Marcelo Aliende"}
          TeamMemberRole={"Secretario"}
        />
           <CardTeam1
          TeamMemberImage={"/geronimo.png"}
          TeamMemberName={"Cordoba Geronimo"}
          TeamMemberRole={"Developer"}
        />
        <CardTeam1
          TeamMemberImage={"/osvaldo.jpeg"}
          TeamMemberName={"Osvaldo Muruaga"}
          TeamMemberRole={"Ing. Informatico"}
        />
      </div>
    </div>
  );
};

export default OurAwesomeTeam;
