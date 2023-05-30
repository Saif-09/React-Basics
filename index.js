/* JAVASCRIPT */

// const heading = document.createElement("h2");
// heading.textContent = "Hello world";
// heading.className = "header";
// document.getElementById("root").append(heading);
// console.log("JavaScript element:", heading);



/* REACT */

const reactHeading = React.createElement("h1",{className: "head"},"Hello React!");
console.log("React element:", reactHeading);

ReactDOM.createRoot(document.getElementById("root")).render(reactHeading)
