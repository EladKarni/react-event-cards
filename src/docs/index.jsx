import React from "react";
import { render } from "react-dom";
import CalendarCards from "../../lib";
import "./styles.css";

function Demo() {
  return (
    <div>
      <h1>React Event Cards Demo</h1>

      <h2>Default behavior</h2>
      <CalendarCards
        calID="1kl8atmma4oppshf1ffa2h6do4"
        gAPI="AIzaSyBzI4ZiGVQ-sSX8_R6uwEuz6o30fKogczI"
        cards="1" />
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
