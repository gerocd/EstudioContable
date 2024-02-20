import "./CardTeam.css";

const CardTeam = ({ imagePlaceholder, shooYhanTho, creativeDirector }) => {
  return (
    <div className="card-team-03">
      <img className="image-placeholder-icon1" alt="" src={imagePlaceholder} />
      <div className="card-team-03-inner">
        <div className="hi-my-name-parent">
          <div className="hi-my-name1">Hola! Mi nombre es</div>
          <h3 className="shoo-yhan-tho">{shooYhanTho}</h3>
          <div className="creative-director">{creativeDirector}</div>
        </div>
      </div>
    </div>
  );
};

export default CardTeam;
