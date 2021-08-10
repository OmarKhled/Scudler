import React from "react";

const Tutorials = ({ courseIndex, sectionIndex, tutorials }) => {
  return (
    <div>
      <h2>Tutorials</h2>
      {tutorials.map((tutorial, index) => (
        <div key={index} className="p-3 jumbutron-dark my-3">
          <h2>tut</h2>
        </div>
      ))}
      <button className="link">Add tutorials?</button>
    </div>
  );
};

export default Tutorials;
