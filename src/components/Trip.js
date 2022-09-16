function Trip(props) {
  function deleteHandler() {
    console.log("Clicked " + props.name);
  }

  return (
    <div className="card">
      <h3>{props.name}</h3>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Trip;
