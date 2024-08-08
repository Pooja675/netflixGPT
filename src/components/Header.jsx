import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/useSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        // user signed In
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
          navigate("/browse")
        );
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/")
      }

      // Unsubscribe when components unmount
      return () => unsubscribe();
    });
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="logo"
      />
      {user && (
        <div className="flex mt-2">
          <img
            className="w-10 h-10 rounded-sm mr-1"
            src={user?.photoURL}
            alt="usericon"
          />
          <button
            onClick={handleSignOut}
            className="font-bold text-white mb-10"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
