import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";

interface props {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  course: scheduleCourse;
}

function CourseModal({ showModal, setShowModal }: props) {
  const close = () => setShowModal(false);

  return (
    <Dialog isOpen={showModal} onDismiss={close}>
      <button className="close-button" onClick={close}>
        <span aria-hidden>×</span>
      </button>
      <p>Hello there. I am a dialog</p>
    </Dialog>
  );
}

export default CourseModal;
