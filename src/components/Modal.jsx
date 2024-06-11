import classes from "./Modal.module.css";
import { useNavigate } from "react-router-dom";

export default function Modal({ children }) {
  const navigate = useNavigate();

  function closeHandler(event) {
    const isClickedOutsideModal = !event.target.closest(`.${classes.modal}`);
    if (isClickedOutsideModal) {
      navigate("..");
    }
  }

  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler}>
        <dialog open={true} className={classes.modal}>
          {children}
        </dialog>
      </div>
    </>
  );
}
