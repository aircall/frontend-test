import React from "react";
import Redirect from "react-router-dom";

export default class ArchiveCall extends React.Component {
  constructor(props) {
    super();
    this.archiveCall = this.archiveCall.bind(this);
  }

  archiveCall() {
    const { id } = this.props;

    fetch(`https://aircall-job.herokuapp.com/activities/${id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ is_archived: true })
    })
      .then(function(res) {
        window.location = "/";
      })
      .catch(function(res) {
        console.log("error");
        console.log(res);
        alert(
          "There was an error archiving this call. Please try again later."
        );
      });
  }

  render() {
    const { disabled } = this.props;
    return (
      <button onClick={this.archiveCall} disabled={disabled}>
        Archive Call
      </button>
    );
  }
}
