import "./CardTeam1.css";

const CardTeam1 = ({ TeamMemberImage, TeamMemberName, TeamMemberRole }) => {
  return (
    <div className="card-team-01">
      <img
        className="image-placeholder-icon"
        loading="eager" 
        alt=""
        src={ TeamMemberImage}
      />
      <div className="frame-container">
        <h3 className="team-member-name">{TeamMemberName}</h3>
        <div className="team-member-role">{TeamMemberRole}</div>
      </div>
    </div>
  );
};

export default CardTeam1;
