import React from "react";
import ReactDOM from "react-dom";
import Callopse from "./component/Callopse";
import Card from "./component/Card";

const App = () => {
  return (
    <div>
      <div className="card-group">
        <Callopse href="#callopseExample1">
          <Card
            cardTitle="trabzonspor"
            cardText="Lorem Ipsum Text I"
            updatedTime="Last Updated 1 min"
            image="https://picsum.photos/id/1/200/300"
          />
        </Callopse>

        <Callopse href="#callopseExample2">
          <Card
            cardTitle="beşiktaş"
            cardText="Lorem Ipsum Text II"
            updatedTime="Last Updated 2 min"
            image="https://picsum.photos/id/10/200/300"
          />
        </Callopse>

        <Callopse href="#callopseExample3">
          <Card
            cardTitle="fenerbahçe"
            cardText="Lorem Ipsum Text III"
            updatedTime="Last Updated 3 min"
            image="https://picsum.photos/id/100/200/300"
          />
        </Callopse>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
