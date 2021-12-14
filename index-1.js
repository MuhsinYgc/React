import React from "react";
import ReactDOM from "react-dom";

// class App2 extends React.Component {
//   render() {
//     return <h1>Follow the white rabbit..</h1>;
//   }
// }

////JSX

// const names = ["Elis", "Şebnem", "Şevval", "Ebrar"];

// function App() {
//   return (
//     <div>
//       {names.map((name) => (
//         <h1>{name}</h1>
//       ))}
//     </div>
//   );
// }

function App() {
  //   const buttonValue = "My Button";
  const str1 = "Click ";
  const str2 = "Me";
  return (
    <div>
      <button
        tabIndex={3}
        className="jsxbutton"
        type="button"
        style={{
          padding: "10px",
          backgroundColor: "blue",
          color: "white",
          border: "2px solid yellow",
        }}
      >
        {str1.concat(str2)}
      </button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
