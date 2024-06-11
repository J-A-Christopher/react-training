import classes from "./Modal.module.css";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Modal({ children, onClose }) {
  const navigate = useNavigate();
  function closeHandler() {
    navigate("..");
  }

  const modalRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler}>
        <dialog open={true} className={classes.modal} ref={modalRef}>
          {children}
        </dialog>
      </div>
    </>
  );
}
