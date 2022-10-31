//  @TODO2 - Create a Clock component and add tho the app.

import { useState, useEffect } from "react";

const ClockStart = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    let timmer = setInterval(setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timmer);
    };
  }, [date]);

  return (
    <div>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
};

export default ClockStart;
