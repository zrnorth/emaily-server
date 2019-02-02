import React from "react";
import { PieChart } from "react-easy-chart";

class SurveyGraph extends React.Component {
  render() {
    if (!this.props.yes && !this.props.no) {
      return <div />;
    }
    return (
      <div className="row">
        <div className="survey-graph col s4 offset-s4">
          <PieChart
            labels
            size={80}
            data={[
              { key: "yes", value: this.props.yes, color: "#6e79ee" },
              { key: "no", value: this.props.no, color: "#ee6e73" }
            ]}
            styles={{
              ".chart_text": {
                fontSize: "1em",
                fill: "#fff"
              }
            }}
          />
        </div>
      </div>
    );
  }
}

export default SurveyGraph;
