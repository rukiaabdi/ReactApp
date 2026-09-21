import { useState } from "react";

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <button onClick={toggle}>
        {isOn ? "ON" : "OFF"}
      </button>

      {isOn && <p>The button is ON</p>}

      {!isOn && <p>The button is OFF</p>}
    </div>
  );
};

export default ToggleButton;