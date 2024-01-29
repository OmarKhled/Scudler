import { json, type V2_MetaFunction } from "@remix-run/node";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { styled } from "styled-components";

import Button from "@components/Button";
import Schedules from "@components/Schedules/Schedules";
import SearchBar from "@components/SearchBar/SearchBar";
import SelectedCourses from "@components/SelectedCourses/SelectedCourses";
import { BACKEND_URL } from "@constants/endpoints";
import { SPACINGS } from "@constants/spacing";
import Loading, { Spinner } from "@components/Loading/Loading";
import ErrorModal from "@components/ErrorModal/ErrorModal";
import Footer from "@components/Footer";
import Modes from "@components/Modes";
import {
  course,
  modes,
  schedule,
  scheduleCourse,
  schedulesGroup,
} from "remix.env";
import Rooms from "@components/Rooms";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Scudler" },
    { name: "description", content: "A time saver courses scheduler" },
  ];
};

export default function Index() {
  const [courses, setCourses] = useState<course[]>([]);
  const [rooms, setRooms] = useState<
    { map: scheduleCourse[][][]; name: string }[]
  >([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [componentsLoading, setComponentsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [down, setDown] = useState<boolean>(false);

  const [selectedCourses, setSelectedCourses] = useState<course[]>([]);
  const [schedules, setSchedules] = useState<schedulesGroup[]>([]);
  const [empty, setEmpty] = useState<boolean>(false);
  const [mode, setMode] = useState<modes>("schedules");
  const [selectedChoice, setSelectedChoice] = useState<string>();

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

  useEffect(() => {
    setComponentsLoading(true);
    (async () => {
      switch (mode) {
        case "rooms":
          try {
            const { rooms } = await (
              await fetch(`${BACKEND_URL}/api/rooms`, { method: "GET" })
            ).json();
            setRooms(rooms);
            setComponentsLoading(false);
          } catch (error) {
            console.log(error);
            setComponentsLoading(false);
            setDown(true);
          }
          break;

        default:
          setComponentsLoading(false);
          break;
      }
    })();
  }, [mode]);

  useEffect(() => {
    console.log(selectedChoice);
    if (selectedChoice) {
      switch (mode) {
        case "schedules":
          if (
            !selectedCourses
              .map((course) => course.courseName)
              .includes(selectedChoice)
          ) {
            const newCourse = courses.find(
              (course) => course.courseName === selectedChoice
            );

            if (newCourse) {
              setSelectedCourses((state: course[]) => [newCourse, ...state]);
            }
          }

          break;
        case "courses":
          console.log("courses");
        default:
          break;
      }
    }
  }, [selectedChoice]);

  const fetchSchedules = async () => {
    if (selectedCourses.length > 0) {
      try {
        setComponentsLoading(true);
        const {
          groupedSchedules,
        }: { schedules: schedule[]; groupedSchedules: schedulesGroup[] } =
          await (
            await fetch(`${BACKEND_URL}/api/schedules`, {
              method: "POST",
              body: JSON.stringify({
                courses: selectedCourses,
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
        setComponentsLoading(false);
      } catch (error) {
        console.log(error);
        setComponentsLoading(false);
        setError("Failed to load schedules");
      }
    } else {
      alert("Add some Courses");
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
            <Description>
              System update in progress. We'll be back shortly.
            </Description>
          </>
        ) : (
          <>
            <Footer />
            <Description>A time saver courses scheduler</Description>

            <Modes mode={mode} setMode={setMode} />
            {mode !== "rooms" ? (
              <>
                <SearchBar
                  courses={courses}
                  setSelectedChoice={setSelectedChoice}
                  selectedCourses={selectedCourses}
                />
                <AnimatePresence>
                  {mode === "schedules" && (
                    <>
                      <SelectedCourses
                        key={"selectedCourses"}
                        selectedCourses={selectedCourses}
                        setSelectedCourses={setSelectedCourses}
                      />
                    </>
                  )}
                </AnimatePresence>
                {mode === "schedules" && (
                  <>
                    <SubmitButton
                      schedules={schedules}
                      layout={"position"}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      key={"generateButton"}
                      // layout={"position"}
                      onClick={fetchSchedules}
                    >
                      Generate Schedules
                    </SubmitButton>

                    {!componentsLoading ? (
                      <Schedules schedules={schedules} empty={empty} />
                    ) : (
                      <Spinner />
                    )}
                  </>
                )}
              </>
            ) : (
              <>{!componentsLoading ? <Rooms rooms={rooms} /> : <Spinner />}</>
            )}
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
