import { useState } from "react";
import Country from "./components/Country";
import "./styles.css";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="App">
      <h1>Hello world</h1>
      {/* <Counter /> */}
      <button className='gral-btn' onClick={() => setIsVisible(!isVisible)}>Show / hide</button>
      {isVisible && <Country />}
    </div>
  );
}

export default App;
