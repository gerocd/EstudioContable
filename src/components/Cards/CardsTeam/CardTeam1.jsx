import "./CardTeam1.css";

const CardTeam1 = ({ TeamMemberImage, TeamMemberTittle, TeamMemberName, TeamMemberRole }) => {
  return (
    <div className="card-team-01">
      <img
        className="image-placeholder-icon"
        loading="eager" 
        alt={`Imagen de ${TeamMemberName}`}
        src={ TeamMemberImage}
      />
      <div className="frame-container">
        <div className="hi-my-name">{TeamMemberTittle}</div>
        <h3 className="team-member-name">{TeamMemberName}</h3>
        <div className="team-member-role">{TeamMemberRole}</div>
      </div>
    </div>
  );
};

export default CardTeam1;
