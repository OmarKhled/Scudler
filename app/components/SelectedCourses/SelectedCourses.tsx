import { SPACINGS } from "@constants/spacing";
import * as React from "react";
import styled from "styled-components";
import { clamp } from "@utils/clamp";
import { Trash2, ChevronDown } from "feather-icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import SelectedCourse from "@components/SelectedCourse";

interface props {
  selectedCourses: courseSelection[];
  setSelectedCourses: React.Dispatch<React.SetStateAction<courseSelection[]>>;
}

function SelectedCourses({ selectedCourses, setSelectedCourses }: props) {
  const unselectCourse = (courseName: string) => {
    setSelectedCourses((oldState) =>
      oldState.filter((course) => course.course.courseName !== courseName)
    );
  };

  const toggleProfessor = (courseName: string, professorName: string) => {
    const newSelectedCourses = selectedCourses.map((course) => {
      if (course.course.courseName != courseName) {
        return course;
      } else {
        return {
          ...course,
          professors: course.professors.map((professor) => ({
            name: professor.name,
            selected:
              professor.name == professorName
                ? !professor.selected
                : professor.selected,
          })),
        };
      }
    });

    setSelectedCourses(newSelectedCourses);
  };
  return (
    <Wrapper layout>
      <TableWrapper>
        {/* <AnimatePresence> */}
        {selectedCourses.map((course) => (
          <SelectedCourse
            toggleProfessor={toggleProfessor}
            unselectCourse={unselectCourse}
            course={course}
          />
        ))}
        {/* </AnimatePresence> */}
      </TableWrapper>
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)`
  width: min(${clamp(680, 500)}, 100%);
  margin: auto;
  margin-top: ${SPACINGS.lg};
  padding-left: ${SPACINGS.lg};
  height: fit-content;
`;
const TableWrapper = styled.div`
  width: 100%;
  margin-top: ${SPACINGS.sm};
`;

export default SelectedCourses;
