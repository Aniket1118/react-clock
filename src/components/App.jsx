import React, { useState } from "react";

function App() {
  setInterval(timer, 1000);

  const [time, updateTime] = useState(0);
  let updatedtime = new Date().toLocaleTimeString();

  function timer() {
    updateTime(updatedtime);
  }
  // setInterval(timer ,1000)

  return (
    <div className="container">
      <h1>{time}</h1>
      {/* <button >Get Time</button> */}
    </div>
  );
}

export default App;
