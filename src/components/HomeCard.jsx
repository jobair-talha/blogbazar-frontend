import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineLike } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import Style from "../sass/HomeCard.module.scss";

function HomeCard({ blog }) {
  const { title, image, description, likes, tags, comments, user } = blog;
  console.log(blog);

  return (
    <div className={`d-flex ${Style.contents} shadow my-4 bg-white`}>
      <img
        src={`${process.env.REACT_APP_PROXY}/files/${image}`}
        alt="blog title"
      />
      <div className={Style.content}>
        <h3>{title}</h3>
        <p>{`${description.slice(0, 300)}...`}</p>
        <div className="d-flex align-items-center">
          <div className="me-3">
            <span className="p-1">
              <AiOutlineLike />
            </span>
            {likes.length}
          </div>
          <div className="me-3">
            <span className="p-1">
              <BiComment />
            </span>
            {comments.length}
          </div>
          <p className="mb-0">
            Post by <strong>{user.userName}</strong>
          </p>
        </div>

        {tags && tags.map((tag) => <Link>{tag}</Link>)}
      </div>
    </div>
  );
}

export default HomeCard;
