import { json, type V2_MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import { styled } from "styled-components";

import Button from "@components/Button";
import Schedules from "@components/Schedules/Schedules";
import SearchBar from "@components/SearchBar/SearchBar";
import SelectedCourses from "@components/SelectedCourses/SelectedCourses";
import { BACKEND_URL } from "@constants/endpoints";
import { SPACINGS } from "@constants/spacing";
import Loading from "@components/Loading/Loading";
import ErrorModal from "@components/ErrorModal/ErrorModal";
import Footer from "@components/Footer";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Scudler" },
    { name: "description", content: "A time saver courses scheduler" },
  ];
};

export default function Index() {
  const [courses, setCourses] = useState<course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();
  const [down, setDown] = useState<boolean>(false);

  const [selectedCourses, setSelectedCourses] = useState<courseSelection[]>([]);
  const [schedules, setSchedules] = useState<schedulesGroup[]>([]);
  const [empty, setEmpty] = useState<boolean>(false);

  useEffect(() => {
    (async function () {
      try {
        const { courses } = await (
          await fetch(`${BACKEND_URL}/api/courses`, { method: "GET" })
        ).json();
        setCourses(courses);
        setLoading(false);
        setDown(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setDown(true);
      }
    })();
  }, []);

  // useEffect(() => {
  //   courses.forEach((course) => {
  //     const codes = new Set();
  //     course.body.forEach((section) => {
  //       codes.add(section.lecture.professor);
  //     });
  //     if (codes.size > 1) {
  //       console.log(course.courseName, codes);
  //     }
  //   });

  //   console.log({ selectedCourses });
  // }, [courses]);

  const fetchSchedules = async () => {
    const finalCourses = selectedCourses
      .map((course) => {
        return {
          ...course.course,
          body: course.course.body.filter((section) =>
            course.professors
              .filter((professor) => professor.selected)
              .map((professor) => professor.name)
              .includes(section.lecture.professor)
          ),
        };
      })
      .filter((course) => course.body.length > 0);

    if (finalCourses.length > 0) {
      try {
        setLoading(true);
        const {
          schedules,
          groupedSchedules,
        }: { schedules: schedule[]; groupedSchedules: schedulesGroup[] } =
          await (
            await fetch(`${BACKEND_URL}/api/schedules`, {
              method: "POST",
              body: JSON.stringify({
                courses: finalCourses,
                options: {
                  sortUponFreeDays: true,
                },
              }),
              headers: {
                "Content-Type": "application/json",
              },
            })
          ).json();
        setSchedules(groupedSchedules);
        if (groupedSchedules.length == 0) {
          setEmpty(true);
        } else {
          setEmpty(false);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError("Failed to load schedules");
      }
    } else {
      alert("Add some Courses & Make sure some professors are selected");
    }
  };

  if (loading && courses.length == 0) {
    return <Loading loading={loading} />;
  } else {
    return (
      <>
        <ErrorModal error={error} setError={setError} />
        <Loading loading={loading} />
        <Header>Scudler</Header>

        {down ? (
          <>
            <Description>Some Error occured, please check again.</Description>
          </>
        ) : (
          <>
            <Footer />
            <Description>A time saver courses scheduler</Description>
            <SearchBar
              courses={courses}
              setSelectedCourses={setSelectedCourses}
              selectedCourses={selectedCourses}
            />
            {/* <LayoutGroup> */}
            <SelectedCourses
              key={"selectedCourses"}
              selectedCourses={selectedCourses}
              setSelectedCourses={setSelectedCourses}
            />
            <SubmitButton
              schedules={schedules}
              key={"generateButton"}
              layout={"position"}
              onClick={fetchSchedules}
            >
              Generate Schedules
            </SubmitButton>
            {/* </LayoutGroup> */}
            <Schedules schedules={schedules} empty={empty} />
          </>
        )}
      </>
    );
  }
}

const Header = styled.h2`
  text-align: center;
  font-weight: 900;
`;
const Description = styled.p`
  text-align: center;
  /* font-weight: 400; */
  margin-top: ${SPACINGS.rg};
`;
const SubmitButton = styled(Button)<{ schedules: schedulesGroup[] }>`
  margin: auto;
  margin-top: ${({ schedules: { length } }) =>
    length > 0 ? SPACINGS.md : SPACINGS.super};
  margin-bottom: ${SPACINGS.super};
`;

const Error = styled.h6`
  text-align: center;
  font-weight: 600;
`;
