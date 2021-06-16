import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import "./App.css";
import { map } from "./assets";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>ZOOM-ABLE MAPS</h1>
      <TransformWrapper initialScale={1} velocityAnimation={{}}>
        <TransformComponent>
          <img src={map} alt="map" className="Viewer" />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};

export default App;
