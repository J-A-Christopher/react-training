import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import { useState } from "react";
import Modal from "./Modal";

export default function PostsList() {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeBodyHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  let modalContent;
  if (modalIsVisible) {
    modalContent = (
      <Modal onClose={hideModalHandler}>
        <NewPost
          onBodyChange={changeBodyHandler}
          enteredBody={enteredBody}
          onAuthorChange={authorChangeBodyHandler}
        />
      </Modal>
    );
  }
  return (
    <>
      {modalContent}

      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Kingston" body="Coding is great" />
      </ul>
    </>
  );
}
 