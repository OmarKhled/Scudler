import React from "react";
import Tutorial from "./Tutorial"

const Tutorials = ({ courseIndex, sectionIndex, tutorials }) => {
  return (
    <div>
      <h2>Tutorials</h2>
      {tutorials.map((tutorial, index) => (
        <Tutorial key={index} {...{ tutorial, tutorialIndex: index, courseIndex, sectionIndex }} />
      ))}
      <button className="link">Add tutorials?</button>
    </div>
  );
};

export default Tutorials;
