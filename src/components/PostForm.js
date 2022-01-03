import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../actions/post.action";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();

    if (title && content) {
      const data = {
        title,
        content,
        author: user[0].pseudo,
        likes: 0,
      };
      dispatch(addPost(data));
      setTitle("");
      setContent("");
    }
  };
  return (
    <div className="form-container">
      <form onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Titre du poste"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <textarea
          placeholder="Postez vos pensées...app"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        ></textarea>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default PostForm;
