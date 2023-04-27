import React, { useContext, useEffect, useState } from "react";
import { contextprovider } from "../../Global/Context";
import { db } from "../../config";
export const Comments = ({ id }) => {
  let { loader, user, publishcomment } = useContext(contextprovider);
  const [inputValue, setInputValue] = useState("");
  let [comment, setcomment] = useState([]);
  let postcomment = (e) => {
    e.preventDefault();
    publishcomment({ id: id, comment: inputValue });
    setInputValue("");
  };
  useEffect(() => {
    db.collection("posts")
      .doc(id)
      .collection("comments")
      .orderBy("currentTime", "desc")
      .onSnapshot((snp) => {
        setcomment(snp.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <div className="comments pt-2 col-12">
      {comment.map((currentval) => {
        return (
          <div className="comments_container ms-3  col-12  d-flex align-items-center" key={currentval.id}>
            <div className="comments_container-name ">{currentval.username} </div>
            <div className="comments_container-message ms-2">{currentval.comment} </div>
          </div>
        );
      })}

      {!loader && user ? (
        <form onSubmit={postcomment} className="mt-3">
          <div className="comments_section">
            <label htmlFor="">😄</label>
            <input
              type="text"
              placeholder="Add a comment..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              required
            />
            <button type="submit">Post</button>
          </div>
        </form>
      ) : (
        ""
      )}
    </div>
  );
};
