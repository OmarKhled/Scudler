import { useRef, useState } from "react";
import { Search } from "feather-icons-react";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxOption,
  useComboboxContext,
  ComboboxList,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import styled from "styled-components";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";

import { clamp } from "@utils/clamp";
import { SPACINGS } from "@constants/spacing";

function SearchBar({
  courses,
  setSelectedCourses,
  selectedCourses,
}: {
  courses: course[];
  selectedCourses: course[];
  setSelectedCourses: React.Dispatch<React.SetStateAction<course[]>>;
}) {
  const controls = useAnimationControls();
  const [results, setResults] = useState<course[]>(courses);
  const [query, setQuery] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: any) => {
    setQuery(e.target.value);
    setResults(
      courses.filter(
        (course) =>
          !selectedCourses
            .map((c) => c.courseName)
            .includes(course.courseName) &&
          course.courseName
            .toLocaleLowerCase()
            .includes(e.target.value.toLocaleLowerCase())
      )
    );
  };

  const addCourse = (courseName: string) => {
    const newCourse = courses.find(
      (course) => course.courseName === courseName
    );
    if (newCourse) {
      setSelectedCourses((state: course[]) => [newCourse, ...state]);
    }
    if (inputRef.current != null) {
      console.log("object");
      inputRef.current.value = "";
    }
    setQuery("");
  };

  return (
    <Wrapper aria-labelledby="Courses Search Field" onSelect={addCourse}>
      <IconLabel
        animate={controls}
        htmlFor="courses-search"
        transition={{ type: "spring", duration: 0.8, damping: 10 }}
      >
        <SearchIcon />
      </IconLabel>
      <ComboBoxInputField
        autoComplete="off"
        forwardedAs={motion.input}
        transition={{
          type: "spring",
          duration: 2,
          damping: 10,
          boxShadow: { ease: "easeOut" },
        }}
        whileFocus={{ scale: 1.05, boxShadow: "0 1px 12px 0 #00000030" }}
        onFocus={() =>
          controls.start({
            scale: 1,
            x: `calc(${clamp(5, 15)}*-1)`,
            originX: 0.8,
          })
        }
        onBlur={() => controls.start({ scale: 1, x: 0 })}
        onChange={handleChange}
        id="courses-search"
        placeholder="Add a course"
        ref={inputRef}
        value={query}
      />

      <ComboboxPopover>
        <PopoverWrapper
          forwardedAs={motion.div}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
        >
          <AnimatePresence>
            <div>
              {results.map((result) => (
                <Option
                  key={result.courseName}
                  initial={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  forwardedAs={motion.div}
                  value={result.courseName}
                />
              ))}
            </div>
          </AnimatePresence>
        </PopoverWrapper>
      </ComboboxPopover>
    </Wrapper>
  );
}

const Wrapper = styled(Combobox)`
  margin: auto;
  width: min(${clamp(680, 500)}, 100%);
  display: flex;
  align-items: center;
`;

// const SearchWrapper = styled(motion.div)``;

const IconLabel = styled(motion.label)`
  position: relative;
  right: -44px;
  top: calc(${clamp(22, 25)} - ${clamp(5, 10)});
`;

const SearchIcon = styled(Search)`
  color: #565a85;
`;

const ComboBoxInputField = styled(ComboboxInput)`
  display: block;
  width: 100%;
  height: 80px;
  border-radius: ${SPACINGS.rg};
  border: none;
  border-bottom: solid ${clamp(6, 8)} #dcdde4;
  background: transparent;
  margin-top: ${SPACINGS.xxxlg};
  padding: ${SPACINGS.lg} ${SPACINGS.lg} ${SPACINGS.lg} ${SPACINGS.jumbo};
  font-size: 20px;
  outline: none;
  &::placeholder {
    font-size: ${clamp(15, 16)};
    color: B4B6C8;
    font-weight: 300;
  }
`;

const PopoverWrapper = styled(ComboboxList)`
  background-color: #ffffffb5;
  backdrop-filter: blur(10px);
  border-radius: ${SPACINGS.rg};
  box-shadow: 0px 2px 12px 0px #dcdde4;
  margin-top: ${SPACINGS.sm};
  /* padding: ${SPACINGS.sm} ${SPACINGS.sm}; */
  list-style: none;
  max-height: 140px;
  overflow-y: auto;
`;

const Option = styled(ComboboxOption)`
  padding: ${SPACINGS.xs} ${SPACINGS.xxxlg};
  margin: ${SPACINGS.sm} ${SPACINGS.sm};
  cursor: pointer;
  &:hover,
  &:active,
  &:focus {
    background-color: #ededf0;
    border-radius: ${SPACINGS.sm};
  }
`;

export default SearchBar;
