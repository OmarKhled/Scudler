import styled from "styled-components";
import { clamp } from "@utils/clamp";
import { motion } from "framer-motion";

const Button = styled(motion.div)`
  display: grid;
  align-items: center;
  text-align: center;
  color: #fff;
  background-color: var(--primary);
  padding: ${clamp(12, 16)} ${clamp(20, 30)};
  box-shadow: var(--box-shadow-md);
  border: var(--border-md);
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  transition: all 500ms ease;
  font-size: ${clamp(16, 18)};
  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
  @media (hover: hover) and (pointer: fine) {
    &:hover:enabled {
      transform: translateY(-2px);
      background-color: var(--primary-450);
    }
  }
  width: fit-content;
`;

export default Button;
