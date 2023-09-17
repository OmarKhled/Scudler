import { SPACINGS } from "@constants/spacing";
import { Dialog, DialogContent, DialogOverlay } from "@reach/dialog";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { X } from "feather-icons-react";
import { clamp } from "@utils/clamp";
import { DAYS, TIMES } from "@constants/slots";
interface props {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  course: scheduleCourse;
}

function CourseModal({ showModal, setShowModal, course }: props) {
  const close = () => setShowModal(false);

  return (
    course && (
      <AnimatePresence>
        <DialogOverlay
          isOpen={showModal}
          onDismiss={close}
          as={motion.div}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1, backdropFilter: "blur(7px)" }}
          key="dialog-overlay"
        >
          <AnimatePresence>
            <Modal
              forwardedAs={motion.div}
              initial={{ opacity: 0, y: 70 }}
              exit={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              key="dialog"
            >
              <Header>
                <CourseName>
                  {course.name.split(" ").slice(0, -4).join(" ")}
                </CourseName>
                <CloseIcon onClick={close} />
              </Header>
              <Description>
                {" "}
                Subtype: {course.subtype} Section: {course.prefix}
              </Description>
              <Head>Instructors</Head>
              {course.instructor.split(",").map((instructor) => (
                <Instructor>{instructor}</Instructor>
              ))}
              <Head>Schedule</Head>
              {course.slots.map((slot) => (
                <SlotInfo>
                  <SlotDay>
                    <span>
                      {TIMES[slot.slot[0]]}
                      {" - " +
                        (slot.slot.length > 1
                          ? TIMES[slot.slot[slot.slot.length - 1] + 1]
                          : TIMES[slot.slot[0] + 1])}
                    </span>
                    <span>{DAYS[slot.day]}</span>
                    <span>{slot.builduing}</span>
                  </SlotDay>
                </SlotInfo>
              ))}
            </Modal>
          </AnimatePresence>
        </DialogOverlay>
      </AnimatePresence>
    )
  );
}

const Modal = styled(DialogContent)`
  border-radius: ${SPACINGS.lg};
  height: fit-content;
  width: min(${clamp(500, 750)}, 90%) !important;
`;
const Header = styled.div`
  padding: 0 0 ${SPACINGS.md} 0;
  border-bottom: 1px solid #bdbdbd;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CloseIcon = styled(X)`
  cursor: pointer;
`;
const CourseName = styled.h6`
  font-weight: 700;
`;
const Description = styled.small`
  font-size: ${clamp(12, 14)};
  color: #505050;
  display: block;
  margin-top: ${SPACINGS.sm};
`;
const Head = styled.p`
  font-weight: 600;
  margin: 0;
  margin-top: ${SPACINGS.md};
`;
const Instructor = styled.div`
  border-radius: ${SPACINGS.xs};
  font-size: ${clamp(14, 16)};
  border: 1px solid #bdbdbd;
  padding: ${SPACINGS.md} ${SPACINGS.md};
  margin-top: ${SPACINGS.sm};
  background-color: #fafafa;
`;
const SlotInfo = styled.div`
  border-radius: ${SPACINGS.xs};
  border: 1px solid #bdbdbd;
  padding: ${SPACINGS.md} ${SPACINGS.md};
  margin-top: ${SPACINGS.sm};
  background-color: #fafafa;
`;
const SlotDay = styled.p`
  font-size: ${clamp(14, 16)};
  font-weight: 400;
  display: grid;
  grid-template-columns: auto auto auto;
`;

export default CourseModal;
