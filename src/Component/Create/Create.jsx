import React, { useContext, useState } from "react";
import "./Create.css";
import { contextprovider } from "../../Global/Context";
import CloseIcon from "@material-ui/icons/Close";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
export const Create = () => {
  let { showcreate, closepostform, create } = useContext(contextprovider);
  const [title, settitle] = useState("");
  const [img, setimg] = useState("");
  let handleimg = (e) => {
    setimg(e.target.files[0]);
  };
  let createpost = (e) => {
    e.preventDefault();
    create({ title, img });
    settitle("");
    setimg("");
  };
  return (
    <>
     { showcreate ? (
        <div className="Createbody">
          <div className="closepost" onClick={closepostform}>
            <CloseIcon />
          </div>
          <form action="" className="form p-4" onSubmit={createpost}>
            <div className="row justify-content-center">
              <div className="col-11">
                <textarea
                  type="text"
                  className="form-control"
                  name="image"
                  placeholder="What is your mind..."
                  onChange={(e) => settitle(e.target.value)}
                  value={title}
                  required
                />
              </div>
            </div>
            <div className="row text-center px-3 justify-content-between mt-4">
              <div className="upload col text-start">
                <label htmlFor="camera">
                  <CameraAltIcon />
                </label>
                <input
                  type="file"
                  accept="file_extension|audio/*|video/*|image/*|media_type"
                  name="file"
                  id="camera"
                  className="d-none"
                  onChange={handleimg}
                  required
                />
              </div>
              <div className="post col text-end ">
                <button className="btn" type="submit">
                  Post
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : null}
    </>
  );
};
