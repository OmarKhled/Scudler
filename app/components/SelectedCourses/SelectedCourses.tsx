import { SPACINGS } from "@constants/spacing";
import * as React from "react";
import styled from "styled-components";
import { clamp } from "@utils/clamp";
import { X } from "feather-icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { course } from "remix.env";

interface props {
  selectedCourses: course[];
  setSelectedCourses: React.Dispatch<React.SetStateAction<course[]>>;
}

function SelectedCourses({ selectedCourses, setSelectedCourses }: props) {
  const unselectCourse = (courseName: string) => {
    setSelectedCourses((oldState) =>
      oldState.filter((course) => course.courseName !== courseName)
    );
  };
  return (
    <Wrapper layout>
      <TableWrapper>
        {/* <AnimatePresence> */}
        {selectedCourses.map((course) => (
          <SelectedCourse
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={course.courseName + " Course Selection"}
          >
            <p>{course.courseName}</p>
            <RemoveButton
              whileHover={{ rotateZ: [0, -8, 0, 8] }}
              transition={{ type: "spring", damping: 2 }}
              onClick={() => unselectCourse(course.courseName)}
            >
              <X />
            </RemoveButton>
          </SelectedCourse>
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
const SelectedCourse = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  padding: ${SPACINGS.rg} ${SPACINGS.sm};
  border-bottom: 3px solid #ebecf5;
`;
const RemoveButton = styled(motion.button)`
  padding: 0;
  margin: 0;
  background: none;
  border: none;
  cursor: pointer;
`;

export default SelectedCourses;
