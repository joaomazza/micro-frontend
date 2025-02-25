import React, { useEffect, useRef } from "react";
import RemoteButton from "remoteApp/Button";

const AngularWidget = React.lazy(() => import("remoteAngular/AngularWidget"));

const App = () => {
  const angularContainer = useRef(null);

  useEffect(() => {
    if (angularContainer.current) {
      const script = document.createElement("script");
      script.src = "http://localhost:4201/main.js";
      script.onload = () => {
        window['remoteAngular'].bootstrap(angularContainer.current);
      };
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div>
      <h1>Aplicação Principal (Host)</h1>
      <RemoteButton />
      <h2>Micro Frontend Angular:</h2>
      <div ref={angularContainer}></div>
    </div>
  );
};

export default App;