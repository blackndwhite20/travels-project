import { useState } from "react";
import Modal from "./Modal";
import BackdropGrey from "./BackdropGrey";

function Trip(props) {
  const [currentState, setState] = useState(false);

  function deleteHandler() {
    // console.log("Clicked " + props.name);
    setState(true);
  }

  function closeModal() {
    setState(false);
  }

  return (
    <div className="card">
      <h3>{props.name}</h3>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {currentState === true ? (
        <Modal onCancel={closeModal} onConfirm={closeModal} />
      ) : null}
      {currentState === true ? <BackdropGrey onClick={closeModal} /> : null}
    </div>
  );
}

export default Trip;
