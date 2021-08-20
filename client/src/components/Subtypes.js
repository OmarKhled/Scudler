import React from "react";
import Subtype from "./Subtype";

import { useDispatch, useSelector } from "react-redux";
import { addTutorial, addLab } from "../redux/courses/coursesActions";

const Subtypes = ({ courseIndex, sectionIndex, subtypes, type }) => {
  const dispatch = useDispatch();

  switch (type) {
    case "tutorial":
      break;

    case "lab":
      break;

    default:
      break;
  }

  const { sectionNumber } = useSelector((state) => state.courses).courses[
    courseIndex
  ].body[sectionIndex];

  const onAddSubtype = () => {
    switch (type) {
      case "tutorial":
        dispatch(addTutorial(sectionIndex, courseIndex, sectionNumber));
        break;

      case "lab":
        dispatch(addLab(sectionIndex, courseIndex, sectionNumber));
        break;

      default:
        break;
    }
  };
  return (
    <div>
      {subtypes.length > 0 && (
        <h2>{type === "tutorial" ? "Tutorials" : type === "lab" && "Labs"}</h2>
      )}
      {subtypes.map((subtype, index) => (
        <Subtype
          key={index}
          {...{ subtype, subtypeIndex: index, courseIndex, sectionIndex, type }}
        />
      ))}
      {subtypes.length < 4 && (
        <button className="link" onClick={onAddSubtype}>
          Add {type}?
        </button>
      )}
    </div>
  );
};

export default Subtypes;
