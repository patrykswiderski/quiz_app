import React, { useEffect, useState } from "react";

function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    setTimeout(onTimeout, timeout);
  }, [timeout, onTimeout]);

  useEffect(() => {
    setInterval(() => {
      setRemainingTime((pervRemainingTime) => pervRemainingTime - 100);
    }, 100);
  }, []);

  return (
    <progress id="question-time" max={timeout} value={remainingTime}></progress>
  );
}

export default QuestionTimer;
