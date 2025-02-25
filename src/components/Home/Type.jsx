import React from "react";
import { Typewriter } from "react-simple-typewriter";

function Type() {
  return (
    <span>
      <Typewriter
        words={[
          "IoT Engineer",
          "Software Developer",
          "Data Analyst",
          "Web Developer",
        ]}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </span>
  );
}

export default Type;
