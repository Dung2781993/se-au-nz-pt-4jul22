//  @TODO2 - Create a Clock component and add tho the app.

import React from 'react';

const ClockFinished = () => {
  const [date, setDate] = React.useState(new Date());

  React.useEffect(() => {
    const timerId = setInterval(setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, [date]);

  return (
    <div>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default ClockFinished;

