import React from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

import SurveyGraph from "./SurveyGraph";

class SurveyList extends React.Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      // reverse() so the newest survey is at the top
      return (
        <div className="col xl4 l4 m6 s12" key={survey._id}>
          <div className="card small blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{survey.title}</span>
              <p>{survey.body}</p>
              <p className="right">
                Sent on: {new Date(survey.dateSent).toLocaleDateString()}
              </p>
              <p className="right">
                Latest response:{" "}
                {survey.lastResponded
                  ? new Date(survey.lastResponded).toLocaleDateString()
                  : "None"}
              </p>
            </div>
            <SurveyGraph yes={survey.yes} no={survey.no} />
            <div className="card-action">
              <a href="#">Yes: {survey.yes}</a>
              <a href="#">No: {survey.no}</a>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="row">{this.renderSurveys()}</div>;
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(
  mapStateToProps,
  { fetchSurveys }
)(SurveyList);
