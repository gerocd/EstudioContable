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
          imagePlaceholder="/imageplaceholder@2x.png"
          shooTharMien="Shoo Thar Mien"
          seniorUXDesigner="Senior UX Designer"
        />
        <CardTeam1
          imagePlaceholder="/imageplaceholder-1@2x.png"
          shooTharMien="Shoo Prat Mhan"
          seniorUXDesigner="Senior IxD"
        />
        <CardTeam
          imagePlaceholder="/imageplaceholder-2@2x.png"
          shooYhanTho="Shoo Yhan Tho"
          creativeDirector="Creative Director"
        />
        <CardTeam1
          imagePlaceholder="/imageplaceholder-3@2x.png"
          shooTharMien="Shoo Bro Tho"
          seniorUXDesigner="Motion Designer"
        />
        <CardTeam1
          imagePlaceholder="/imageplaceholder-4@2x.png"
          shooTharMien="Shoo Mhar No"
          seniorUXDesigner="Illustrator"
        />
        <CardTeam
          imagePlaceholder="/image-placeholder@2x.png"
          shooYhanTho="Shoo Mhan Tho"
          creativeDirector="Senior UX Researcher"
        />
      </div>
    </div>
  );
};

export default OurAwesomeTeam;
