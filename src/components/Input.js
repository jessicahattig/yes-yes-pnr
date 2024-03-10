import React from "react";
import PropTypes from "prop-types";

function Input(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenInputClicked(props.id)}>
        <h3>{props.names} - {props.location}</h3>
        <p><em>{props.issue}</em></p>
        <hr />
      </div>
    </React.Fragment>
  );
}

Input.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string,
  id: PropTypes.string,
  whenInputClicked: PropTypes.func
}

export default Input;
