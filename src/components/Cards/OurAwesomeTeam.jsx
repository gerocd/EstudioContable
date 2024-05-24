import CardTeam1 from "./CardsTeam/CardTeam1";
import CardTeam from "./CardsTeam/CardTeam"
import "./OurAwesomeTeam.css";

const OurAwesomeTeam = () => {
  return (
    <div className="our-awesome-team" id="nuestro-equipo">
      <div className="our-awesome-team-wrapper">
        <h1 className="our-awesome-team1">Equipo de trabajo</h1>
      </div>
      <div className="card-team-01-parent">
        <CardTeam1
          TeamMemberImage={"/imageplaceholder@2x.png"}
          TeamMemberTittle={"Shoo Thar Mien"}
          TeamMemberName={"Shoo Thar Mien"}
          TeamMemberRole={"Senior UX Designer"}
        />
          <CardTeam1
          TeamMemberImage={"/imageplaceholder@2x.png"}
          TeamMemberTittle={"Shoo Thar Mien"}
          TeamMemberName={"Shoo Thar Mien"}
          TeamMemberRole={"Senior UX Designer"}
        />


      </div>
    </div>
  );
};

export default OurAwesomeTeam;
