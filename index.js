/* JAVASCRIPT */

// const heading = document.createElement("h2");
// heading.textContent = "Hello world";
// heading.className = "header";
// document.getElementById("root").append(heading);
// console.log("JavaScript element:", heading);



/* REACT with JS*/

// const reactHeading = React.createElement("h1",{className: "head"},"Hello React!");
// console.log("React element:", reactHeading);

/* REACT with JSX */

const jsxHeading = (
  <React.Fragment>
    <h1 className="head">Hello JSX </h1>
    <p>This is created using JSX</p>
  </React.Fragment>
);

ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading);
