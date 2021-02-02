function CardColumn(props) {
  return (
    <div
      className="column card-column"
      style={{ borderRight: "1px var(--grey) solid" }}
    >
      <h5 style={{ whiteSpace: "pre-wrap" }}>{props.title}</h5>
      {props.date}
      <br />
      <div className="card-label" style={{ backgroundColor: props.color }}>
        USERS
      </div>{" "}
      <br />
      {props.users} <br />
      <div className="card-label" style={{ backgroundColor: props.color }}>
        OBJECTIVE
      </div>{" "}
      <br />
      {props.aim}
    </div>
  );
}

export default CardColumn;
