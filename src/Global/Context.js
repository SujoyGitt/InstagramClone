import React, { createContext, useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import { auth, db, storage } from "../config";
export const contextprovider = createContext();

export const Context = ({ children }) => {
  let [model, setmodel] = useState(false);
  const [user, setuser] = useState(null);
  const [loader, setloader] = useState(true);
  const [showcreate, setshowcreate] = useState(false);
  const [posts, setposts] = useState([]);
  let showpostform = () => {
    setshowcreate(true);
  };
  let closepostform = () => {
    setshowcreate(false);
  };
  let openModel = () => {
    setmodel(true);
  };
  let closeModel = () => {
    setmodel(false);
  };
  let register = async (user) => {
    const { username, email, password, name } = user;
    try {
      let response = await auth.createUserWithEmailAndPassword(
        email,
        password,
        name,
        username
      );
      response.user.updateProfile({ displayName: username });
      setmodel(false);
    } catch (error) {
      console.log(error);
    }
  };
  let login = async (user) => {
    let { email, password } = user;
    await auth.signInWithEmailAndPassword(email, password);
    setmodel(false);
  };
  let logout = (user) => {
    auth
      .signOut()
      .then(() => {
        setuser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const create = (data) => {
    let { title, img } = data;
    const upload = storage.ref(`images/${img.name}`).put(img);
    upload.on(
      "state_changed",
      (snapshot) => {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
      },
      (err) => {
        console.log(err);
      },
      () => {
        //success or complete function
        storage
          .ref("images")
          .child(img.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").add({
              title,
              img: url,
              username: user.displayName,
              currentTime: firebase.firestore.FieldValue.serverTimestamp(),
            });
          });
      }
    );
  };
  const publishcomment = (data) => {
    let { id, comment } = data;
    db.collection("posts").doc(id).collection("comments").add({
      comment,
      username: user.displayName,
      currentTime: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setuser(user);
      setloader(false);
    });

    //fetch posts from firebase
    db.collection("posts")
      .orderBy("currentTime", "desc")
      .onSnapshot((snp) => {
        setposts(
          snp.docs.map((doc) => ({
            id: doc.id,
            title: doc.data().title,
            image: doc.data().img,
            username: doc.data().username,
          }))
        );
      });
  }, []);

  return (
    <contextprovider.Provider
      value={{
        model,
        openModel,
        closeModel,
        register,
        login,
        user,
        loader,
        logout,
        showpostform,
        showcreate,
        closepostform,
        create,
        posts,
        publishcomment,
      }}>
      {children}
    </contextprovider.Provider>
  );
};
