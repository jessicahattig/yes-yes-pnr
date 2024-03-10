import React from "react";
// import { v4 } from 'uuid';
import PropTypes from "prop-types"; 
import ReusableForm from "./ReusableForm";
import { serverTimestamp } from "firebase/firestore";

function NewImportForm(props){

  function handleNewInputFormSubmission(event) {
    event.preventDefault();
    props.onNewInputCreation({
      names: event.target.names.value, 
      location: event.target.location.value, 
      issue: event.target.issue.value,
      // timeOpen: serverTimestamp() 
      // id: v4()
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