import React from "react";
import { AiFillLike } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addLike } from "../actions/post.action";
import { addUserLike } from "../actions/user.action";

const Like = ({ post }) => {
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleLike = () => {
    const postData = {
      title: post.title,
      author: post.author,
      content: post.content,
      likes: ++post.likes,
      id: post.likes,
    };
    const userData = {
      pseudo: user[0].pseudo,
      likes: ++user[0].likes,
      id: user[0].id,
    };
    dispatch(addLike(postData));
    dispatch(addUserLike(userData));
  };

  return (
    <div onClick={handleLike}>
      <AiFillLike className="clap" />
      <span>{post.likes}</span>
    </div>
  );
};

export default Like;
