import { AnimatePresence, motion } from "framer-motion";
import { clamp } from "@utils/clamp";
import * as React from "react";
import styled, { keyframes } from "styled-components";

interface props {
  loading: boolean;
}
function Loading({ loading }: props) {
  return (
    <AnimatePresence>
      {loading && (
        <Wrapper
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ backdropFilter: "blur(15px)", opacity: 1 }}
        >
          <Spinner />
          {/* <Message>Loading...</Message> */}
        </Wrapper>
      )}
    </AnimatePresence>
  );
}

const Wrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  background: hsla(0, 0%, 0%, 0.1);
`;
const spin = keyframes`
  to { -webkit-transform: rotate(360deg); }
`;
const Spinner = styled.div`
  display: inline-block;
  width: ${clamp(40, 50)};
  height: ${clamp(40, 50)};
  border: 6px solid rgba(165, 183, 245, 0.3);
  border-radius: 50%;
  border-top-color: #2500fa;
  animation: ${spin} 1s ease-in-out infinite;
`;
const Message = styled.h6`
  color: #2d2d90;
`;

export default Loading;
