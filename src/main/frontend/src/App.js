import React, {useEffect,useState} from "react";

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("/main")
      .then(response => response.text())
      .then(message => {
        setMessage(message);
      });
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        인사말 :  {message}
      </header>
    </div>
  );
}

export default App;
