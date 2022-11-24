import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  getAuth,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { createContext } from "react";
import { useEffect, useState } from "react";
import { app } from "../../Authentication/FireBase/Firebase.config";

export const ContextAuthentication = createContext({});

const AuthContext = ({ children }) => {
  const [user, setUser] = useState({});
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const signUpEP = (email, password) => {
    console.log("working");
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signUpGoogly = () => {
    return signInWithPopup(auth, provider);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (User) => {
      setUser(User);
    });
    return () => unsubscribe();
  }, []);

  const updateInfo = (name, url) => {
    console.log("update profile", name, url);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: url,
    });
  };

  const logout = () => signOut(auth);

  const test = { name: "test1" };
  const contents = {
    signUpEP,
    signUpGoogly,
    login,
    updateInfo,
    user,
    logout,
    test,
  };

  return (
    <ContextAuthentication.Provider value={contents}>
      {children}
    </ContextAuthentication.Provider>
  );
};

export default AuthContext;
