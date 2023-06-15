import React, { useState } from "react";
import ModalComponent from "../modal/ModalComponent";
import NextModalComponent from "../next-modal/NextModalComponent";
import { connect } from "react-redux";
import { CHANGE_NAME, CHANGE_LANG } from "../../redux/action";
import Typewriter from "typewriter-effect";

const DefaultComponent = (props) => {
  const [modal, setModal] = useState(false);
  const [nextModal, setNextModal] = useState(false);
  const { myname, mylang, changeName, changeLang } = props;

  return (
    <div className="home-container">
      <h1 className="hightlight"> {myname} </h1>
      <button
        type="button"
        onClick={() => {
          changeName("Harry");
        }}
      >
        Update Name
      </button>
      <h1>language :- {mylang}</h1>
      <br />
      <button
        type="button"
        onClick={() => {
          changeLang("Tamil");
        }}
      >
        Update language
      </button>

      <h1 className="tagline">
        The paragraph tags are used and after,
        <Typewriter
          options={{
            strings: ["Mobile", "Tablet", "Desktop"],
            autoStart: true,
            loop: true,
            cursorClassName: "text-primary Typewriter__cursor",
          }}
        />
        before and after the paragraph.
      </h1>
      <br />

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry...
      </p>
      <button type="button" onClick={() => setModal(true)}>
        {" "}
        Learn React
      </button>
      {modal && <ModalComponent setModal={setModal} />}
      <br />
      <button type="button" onClick={() => setNextModal(true)}>
        Next
      </button>
      {nextModal && <NextModalComponent setNextModal={setNextModal} />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myname: state.name,
    mylang: state.lang,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeName: (data) => {
      dispatch({ type: CHANGE_NAME, payload: data });
    },
    changeLang: (data) => {
      dispatch({ type: CHANGE_LANG, payload: data });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DefaultComponent);
