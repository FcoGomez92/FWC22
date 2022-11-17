import styles from "./Modal.module.css";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Modal = ({ show, onClose, children }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);
  const handleCloseClick = () => {
    onClose();
  };

  const modalContent = show ? (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <div className={styles.modalBody}>{children}</div>
        <button className={styles.modalCTA} onClick={handleCloseClick}>
          <p>X</p>
        </button>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export default Modal;
