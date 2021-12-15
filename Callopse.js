import React from "react";
import { render } from "react-dom";

class Callopse extends React.Component {
  constructor() {
    super();
    this.state = {
      showContent: "true",
    };
    // this.showMore=this.showMore.bind(this)
  }

  showMore = () => {
    // console.log(this);
    this.setState({ showContent: !this.state.showContent });
  };

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.showMore}>
          Link with href
        </button>

        {this.state.showContent ? (
          <div className="callopse">{this.props.children}</div>
        ) : null}
      </div>
    );
  }
}
export default Callopse;
