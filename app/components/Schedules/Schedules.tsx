import CourseModal from "@components/CourseModal/CourseModal";
import Schedule from "@components/Schedule";
import { useState } from "react";

interface props {
  schedules: schedulesGroup[];
}

const PER_PAGE = 10;

function Schedules({ schedules }: props) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedCourse, setSelectedCourse] = useState<scheduleCourse>();
  const [page, setPage] = useState<number>(1);

  const openCourseDetails = (course: scheduleCourse) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  return (
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
  );
}

export default Schedules;
