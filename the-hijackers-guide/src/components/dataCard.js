import CardColumn from "../components/cardColumn";

function DataCard(props) {
  return (
    <div className="card data-card">
      <h4 className="card-header">{props.hashtagName}</h4>
      <div
        className="column-container"
        style={{ borderBottom: "1px var(--grey) solid" }}
      >
        <CardColumn
          color={props.color}
          title="ORIGINAL HASHTAG"
          date={props.originalDate}
          users={props.originalUsers}
          aim={props.originalAim}
        />
        <CardColumn
          color={props.color}
          title={"HASHTAG\nHIJACK"}
          date={props.hijackDate}
          users={props.hijackUsers}
          aim={props.hijackAim}
        />
      </div>
      <div className="card-info">
        <div className="card-info-column">
          <div className="card-info-label-container">
            <div className="card-info-label">N. of posts</div>
          </div>
          <p style={{ color: props.color }}>{props.postCount}</p>
        </div>
        <div className="card-info-column">
          <div className="card-info-label-container">
            <div className="card-info-label">platforms</div>
          </div>
          <p style={{ color: props.color }}>{props.platforms}</p>
        </div>
        <div className="card-info-column">
          <div className="card-info-label-container">
            <div className="card-info-label">time range</div>
          </div>
          <p style={{ color: props.color }}>{props.timeRange}</p>
        </div>
        <div className="card-info-column" style={{ borderRightWidth: 0 }}>
          <div className="card-info-label-container">
            <div className="card-info-label">tactic</div>
          </div>
          <p style={{ color: props.color }}>{props.tactic}</p>
        </div>
      </div>
    </div>
  );
}

export default DataCard;
