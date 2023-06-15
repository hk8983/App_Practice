import React from "react";
import { Link } from "react-router-dom";

function ModalComponent({ setModal }) {
  return (
    <div className="modal">
      <div className="modal-body">
        <h2>
          Simple paragraph{" "}
          <Link to={"/"} className="close" onClick={() => setModal(false)}>
            &times;
          </Link>
        </h2>
        <p>
          A simple paragraph is comprised of three major components. The first
          sentence, which is often a declarative sentence, is called the “topic
          sentence.” It introduces the topic of the paragraph, setting its tone
          and mood. The next few sentences elaborate, explain, and exemplify the
          topic introduced in it.
        </p>
        <button type="button">Simple</button>
      </div>
    </div>
  );
}
export default ModalComponent;
