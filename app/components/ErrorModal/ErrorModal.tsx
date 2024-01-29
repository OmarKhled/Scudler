import { SPACINGS } from "@constants/spacing";
import { Dialog, DialogContent, DialogOverlay } from "@reach/dialog";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { X } from "feather-icons-react";
import { clamp } from "@utils/clamp";

interface props {
  error: string | undefined;
  setError: React.Dispatch<React.SetStateAction<string | undefined>>;
}

function ErrorModal({ error, setError }: props) {
  const close = () => setError(undefined);

  return (
    error && (
      <AnimatePresence>
        <DialogOverlay
          isOpen={error.length > 0}
          onDismiss={close}
          as={motion.div}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1, backdropFilter: "blur(7px)" }}
          key="dialog-overlay"
        >
          <AnimatePresence>
            <Modal
              forwardedAs={motion.div}
              initial={{ opacity: 0, y: 70 }}
              exit={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              key="dialog"
            >
              <Header>
                <Head>Oops, Something Happened</Head>
                <CloseIcon onClick={close} />
              </Header>
              <Description>
                An error occured: {error}, please reload and try again. <br />{" "}
                If error presists please contact us on{" "}
                <Link href="mailto:me@omarkhled.me">me@omarkhled.me</Link>
              </Description>
            </Modal>
          </AnimatePresence>
        </DialogOverlay>
      </AnimatePresence>
    )
  );
}

const Modal = styled(DialogContent)`
  border-radius: ${SPACINGS.lg};
  height: fit-content;
  width: min(${clamp(500, 750)}, 90%) !important;
  background-color: var(--error-25) !important;
  color: var(--error-700) !important;
`;
const Header = styled.div`
  padding: 0 0 ${SPACINGS.md} 0;
  border-bottom: 1px solid var(--error-700);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Link = styled.a`
  color: inherit;
  font-weight: 600;
`;
const CloseIcon = styled(X)`
  cursor: pointer;
`;
const Head = styled.h6`
  font-weight: 700;
`;
const Description = styled.div`
  margin-top: ${SPACINGS.md};
  font-size: ${clamp(14, 16)};
`;

export default ErrorModal;
