import React from "react";

const NextModalComponent = ({ setNextModal }) => {
  return (
    <div className="next-modal">
      <div className="next-modal-content">
        <div className="next-modal-header">
          <span className="close" onClick={() => setNextModal(false)}>
            &times;
          </span>
          <h2>Modal Header</h2>
        </div>
        <div className="next-modal-body">
          <p>Some text in the Modal Body</p>
          <p>Some other text...</p>
        </div>
        <div className="next-modal-footer">
          <h3>Modal Footer</h3>
        </div>
      </div>
    </div>
  );
};
export default NextModalComponent;
