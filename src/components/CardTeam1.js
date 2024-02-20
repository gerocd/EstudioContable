import "./CardTeam1.css";

const CardTeam1 = ({ imagePlaceholder, shooTharMien, seniorUXDesigner }) => {
  return (
    <div className="card-team-01">
      <img
        className="image-placeholder-icon"
        loading="eager"
        alt=""
        src={imagePlaceholder}
      />
      <div className="frame-container">
        <div className="hi-my-name">Hola! Mi nombre es</div>
        <h3 className="shoo-thar-mien">{shooTharMien}</h3>
        <div className="senior-ux-designer">{seniorUXDesigner}</div>
      </div>
    </div>
  );
};

export default CardTeam1;
