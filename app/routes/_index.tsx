import { json, type V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { styled } from "styled-components";

import Button from "@components/Button";
import Schedules from "@components/Schedules/Schedules";
import SearchBar from "@components/SearchBar/SearchBar";
import SelectedCourses from "@components/SelectedCourses/SelectedCourses";
import { BACKEND_URL } from "@constants/endpoints";
import { SPACINGS } from "@constants/spacing";
import Loading from "@components/Loading/Loading";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Scudler" },
    { name: "description", content: "A time saver courses scheduler" },
  ];
};

// export const loader = async () => {
//   const { courses } = await (
//     await fetch(`${BACKEND_URL}/api/courses`, { method: "GET" })
//   ).json();

//   return json({ courses });
// };

export default function Index() {
  // const { courses } = useLoaderData();
  const [courses, setCourses] = useState<course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async function () {
      try {
        const { courses } = await (
          await fetch(`${BACKEND_URL}/api/courses`, { method: "GET" })
        ).json();
        setCourses(courses);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    })();
  }, []);

  const [selectedCourses, setSelectedCourses] = useState<course[]>([]);
  const [schedules, setSchedules] = useState<schedulesGroup[]>([]);
  const [empty, setEmpty] = useState<boolean>(false);

  const fetchSchedules = async () => {
    if (selectedCourses.length > 0) {
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
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
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
        <Loading loading={loading} />
        <Header>Scudler</Header>
        <Description>A time saver courses scheduler</Description>
        <SearchBar
          courses={courses}
          setSelectedCourses={setSelectedCourses}
          selectedCourses={selectedCourses}
        />
        <AnimatePresence>
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
        </AnimatePresence>
        <Schedules schedules={schedules} empty={empty} />
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
