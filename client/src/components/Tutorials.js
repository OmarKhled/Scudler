import React from "react";
import Tutorial from "./Tutorial";

import { useDispatch, useSelector } from "react-redux";
import { addTutorial } from "../redux/courses/coursesActions";

const Tutorials = ({ courseIndex, sectionIndex, tutorials }) => {
  const dispatch = useDispatch();

  if (!tutorials) {
    tutorials = [];
  }

  const { sectionNumber } = useSelector((state) => state.courses).courses[
    courseIndex
  ].body[sectionIndex];

  const onAddTutorial = () => {
    dispatch(addTutorial(sectionIndex, courseIndex, sectionNumber));
  };
  return (
    <div>
      {tutorials.length > 0 && <h2>Tutorials</h2>}
      {tutorials.map((tutorial, index) => (
        <Tutorial
          key={index}
          {...{ tutorial, tutorialIndex: index, courseIndex, sectionIndex }}
        />
      ))}
      {tutorials.length < 4 && (
        <button className="link" onClick={onAddTutorial}>
          Add tutorial?
        </button>
      )}
    </div>
  );
};

export default Tutorials;
