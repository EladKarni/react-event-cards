import React from "react";
import { render } from "react-dom";
import CalendarCards from "../../lib";
import "./styles.css";

function Demo() {
  return (
    <div>
      <h1>React Calendar Cards</h1>
      <CalendarCards
        gAPI="1kl8atmma4oppshf1ffa2h6do4"
        bColor="red"
        tColor="black"
        cards="2"
      />
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
