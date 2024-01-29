import CourseModal from "@components/CourseModal/CourseModal";
import Schedule from "@components/Schedule";
import { SPACINGS } from "@constants/spacing";
import { useState } from "react";
// import { schedulesGroup } from "remix.env";
import { styled } from "styled-components";

interface props {
  schedules: schedulesGroup[];
  empty: boolean;
}

const PER_PAGE = 10;

function Schedules({ schedules, empty }: props) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedCourse, setSelectedCourse] = useState<scheduleCourse>();
  const [page, setPage] = useState<number>(1);

  const openCourseDetails = (course: scheduleCourse) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  return (
    <>
      {!empty ? (
        <>
          <CourseModal
            showModal={showModal}
            setShowModal={setShowModal}
            course={selectedCourse as scheduleCourse}
          />
          {schedules
            .slice((page - 1) * PER_PAGE, PER_PAGE)
            .map((schedule, index) => (
              <Schedule
                key={index + PER_PAGE * page - 1}
                schedulesGroup={schedule}
                openCourseDetails={openCourseDetails}
              />
            ))}
        </>
      ) : (
        <>
          <NoPossibleCombinationsImage
            src="/images/404.png"
            alt="No Schedules are found"
          />
          <NoPossibleCombinationsMessage>
            Couldn't Produce Schedules for these inputs
            <br />
            <small>
              If you believe this isn't correct, please send me a mail on{" "}
              <a href="mailto:me@omarkhled.me">me@omarkhled.me</a> or text me on
              on <a href="tel:+201068405513">01068405513</a>
            </small>
          </NoPossibleCombinationsMessage>
        </>
      )}
    </>
  );
}

const NoPossibleCombinationsImage = styled.img`
  display: block;
  margin: auto;
  opacity: 0.4;
  width: 120px;
  margin-top: ${SPACINGS.lg};
`;
const NoPossibleCombinationsMessage = styled.p`
  text-align: center;
  color: #999;
  margin-top: ${SPACINGS.sm};
  font-weight: 400;
  /* width: 130px; */
`;

export default Schedules;
