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


//This is the method of creating a component in react, naming convention of component should be like first letter will be capital

function Name(){
  return(
    <>
    <p>JSX is JavaScript XML</p>
    </>
  )
}


  const App = ()=>  (
      <>
        <h1 className="head">Hello JSX </h1>
        <p>This is created using JSX</p>
      </>
    )
  


ReactDOM.createRoot(document.getElementById("root")).render(<><App/><Name/></>);//for using more than one component we give parent root then in that parent we give both components
