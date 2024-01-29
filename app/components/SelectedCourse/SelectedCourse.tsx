import { SPACINGS } from "@constants/spacing";
import * as React from "react";
import styled from "styled-components";
import { clamp } from "@utils/clamp";
import { Trash2, ChevronDown } from "feather-icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface props {
  unselectCourse: (courseName: string) => void;
  toggleProfessor: (courseName: string, professorName: string) => void;
  course: courseSelection;
}

function SelectedCourse({ toggleProfessor, course, unselectCourse }: props) {
  const [opened, setOpened] = useState(false);

  return (
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      key={course.course.courseName + " Course Selection"}
      layout="position"
    >
      <Header>
        <p>{course.course.courseName}</p>
        <ActionButtons>
          <ActionButton
            whileHover={{ translateY: -1 }}
            transition={{ type: "spring", damping: 14 }}
            animate={{ rotate: !opened ? 0 : 180 }}
            onClick={() => setOpened((opened) => !opened)}
          >
            <ChevronDown size={28} />
          </ActionButton>

          <ActionButton
            whileHover={{ rotateZ: [0, -8, 0, 8] }}
            transition={{ type: "spring", damping: 2 }}
            onClick={() => unselectCourse(course.course.courseName)}
          >
            <Trash2 />
          </ActionButton>
        </ActionButtons>
      </Header>
      <AnimatePresence>
        {opened && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: {
                  duration: 0.4,
                },
                opacity: {
                  duration: 0.25,
                  delay: 0.15,
                },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: {
                  duration: 0.4,
                },
                opacity: {
                  duration: 0.25,
                },
              },
            }}
          >
            <Porfessors>
              {course.professors.map((professor) => (
                <Porfessor>
                  <ProfessorStatus
                    type="checkbox"
                    name={professor.name}
                    checked={professor.selected}
                    onClick={() =>
                      toggleProfessor(course.course.courseName, professor.name)
                    }
                  />
                  <ProfessorName>{professor.name}</ProfessorName>
                </Porfessor>
              ))}
            </Porfessors>
          </motion.div>
        )}
      </AnimatePresence>
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)`
  padding: ${SPACINGS.rg} ${SPACINGS.sm};
  border-bottom: 3px solid #ebecf5;
`;
const ActionButtons = styled.div`
  display: flex;
  gap: ${SPACINGS.sm};
  justify-content: flex-end;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${SPACINGS.rg};
`;
const ActionButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;
  margin: 0;
  background: none;
  border: none;
  cursor: pointer;
`;
const Porfessors = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${SPACINGS.xs};
  margin-top: ${SPACINGS.xs};
  padding-left: ${SPACINGS.rg};
  margin-left: ${SPACINGS.xs};
  border-left: 2px #f2f3f8 solid;
`;
const Porfessor = styled.label`
  display: flex;
  gap: ${SPACINGS.rg};
  align-items: center;
`;
const ProfessorStatus = styled.input``;
const ProfessorName = styled.p``;

export default SelectedCourse;
