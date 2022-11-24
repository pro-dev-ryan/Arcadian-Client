import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";
import { createContext } from "react";
import { useEffect, useState } from "react";
import { app } from "../../Authentication/FireBase/Firebase.config";

export const ContextAuthentication = createContext({});

const AuthContext = ({ children }) => {
  const [user, setUser] = useState();
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const signUpEP = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signUpGoogly = () => {
    return signInWithPopup(auth, provider);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(user);
    });
    return () => unsubscribe();
  }, []);

  const updateInfo = (name, url) => {
    return updateProfile(user, { displayName: name, photoURL: url });
  };

  const contents = {
    signUpEP,
    signUpGoogly,
    login,
    updateInfo,
    user,
  };

  return (
    <ContextAuthentication.Provider value={contents}>
      {children}
    </ContextAuthentication.Provider>
  );
};

export default AuthContext;
