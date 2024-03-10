import React from "react";
import PropTypes from "prop-types"; 
import ReusableForm from "./ReusableForm";

function NewInputForm(props){

  function handleNewInputFormSubmission(event) {
    event.preventDefault();
    props.onNewInputCreation({
      names: event.target.names.value,
      location: event.target.location.value,
      issue: event.target.issue.value,
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewInputFormSubmission}
        buttonText="Help!" />
    </React.Fragment>
  );
}

NewInputForm.propTypes = {
  onNewInputCreation: PropTypes.func
};

export default NewInputForm;