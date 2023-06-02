

  function App(){
    let name = "JSX"
    return (
        <>
      <h1 className="head">Let's learn {name}! </h1>
    </>
    )
  }



ReactDOM.createRoot(document.getElementById("root")).render(<App/>)