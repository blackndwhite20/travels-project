function Trip(props) {
  return (
    <div className="card">
      <h3>{props.name}</h3>
      <div className="actions">
        <button className="btn">Delete</button>
      </div>
    </div>
  );
}

export default Trip;
