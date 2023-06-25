import "./index.css";
import Triangle from "./components/Triangle";
import triangle1 from "./imgs/Polygon 10.svg";
import triangle2 from "./imgs/Polygon 8.svg";
import triangle3 from "./imgs/Polygon 9.svg";
import { useState } from "react";

function App() {
  const [rotate, setRotate] = useState(-1);

  return (
    <div className="App">
      <div className="circle">
        <h1>R: {rotate}</h1>
      </div>
      <Triangle img={triangle1} setRotate={() => setRotate(rotate + 1)} />
      <Triangle img={triangle2} setRotate={() => setRotate(rotate + 1)} />
      <Triangle img={triangle3} setRotate={() => setRotate(rotate + 1)} />
    </div>
  );
}

export default App;
