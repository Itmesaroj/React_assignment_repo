import React, { useEffect, useState } from "react";

const TimerComponent = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <p>Timer: {seconds} seconds</p>;
};

const ScrollEvent = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <p>Scroll position: {scroll}px</p>;
};

export { TimerComponent, ScrollEvent };
