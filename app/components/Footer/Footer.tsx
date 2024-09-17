import { SPACINGS } from "@constants/spacing";
import { clamp } from "@utils/clamp";
import ReactDOM from "react-dom";
import styled from "styled-components";

function Footer() {
  return ReactDOM.createPortal(
    <Wrapper>
      <Logo src="/images/logo.png"></Logo>
      <Portfolio target="_blank" href="https://omarkhled.me">
        <PortfolioImage src="/images/portfolio.png" />
      </Portfolio>
    </Wrapper>,
    document.querySelector("body") as HTMLBodyElement
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 0.4rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  backdrop-filter: blur(7px);
  padding: ${SPACINGS.sm} ${SPACINGS.md};
  font-size: 14px;
  font-weight: 100;
  align-items: center;
  border-top: #dcdde4 solid 2px;
  font-weight: 500;
  justify-content: space-between;
  color: #172d54;
`;

const Portfolio = styled.a`
  text-transform: uppercase;
  font-weight: 900;
  text-decoration: none;
  letter-spacing: 0.1rem;
  font-size: 18px;
`;
const PortfolioImage = styled.img`
  width: ${clamp(30, 40)};
`;

const Logo = styled.img`
  width: ${clamp(40, 50)};
`;

export default Footer;
