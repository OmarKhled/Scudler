import { SPACINGS } from "@constants/spacing";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { modes } from "remix.env";
import styled from "styled-components";

const MODES: modes[] = [
  "schedules",
  //  "courses",
  //  "rooms"
];

interface props {
  mode: modes;
  setMode: Dispatch<SetStateAction<modes>>;
}

const Modes = ({ mode, setMode }: props) => {
  return (
    <Wrapper>
      {MODES.map((tabMode) => (
        <Mode onClick={() => setMode(tabMode)} key={tabMode}>
          {mode === tabMode && (
            <Active
              layoutId="bubble"
              transition={{ type: "spring", bounce: 0.2, duration: 1 }}
            />
          )}

          <ModeLabel className={`${mode === tabMode ? "active" : ""}`}>
            {tabMode.charAt(0).toUpperCase() + tabMode.slice(1)}
          </ModeLabel>
        </Mode>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #ebecf5;
  width: fit-content;
  margin: auto;
  padding: ${SPACINGS.rg} ${SPACINGS.sm};

  margin-top: ${SPACINGS.md};
  border-radius: ${SPACINGS.sm};
`;

const Mode = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  width: fit-content;
  margin: 0 ${SPACINGS.sm};
  padding: ${SPACINGS.xs} ${SPACINGS.md};
  border-radius: ${SPACINGS.xs};
  position: relative;
  cursor: pointer;
`;

const ModeLabel = styled.span`
  position: relative;
  color: inherit;
  z-index: 1;
  /* mix-blend-mode: overlay; */

  &.active {
    /* color: #fff; */
  }
`;

const Active = styled(motion.span)`
  position: absolute;
  background: #e0e2f0;
  color: #fff;
  inset: 0;
  border-radius: ${SPACINGS.xs};
  z-index: 0;
`;

export default Modes;
