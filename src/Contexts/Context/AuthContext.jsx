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
  const [loader, setLoader] = useState(true);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const signUpEP = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signUpGoogly = () => {
    setLoader(true);
    return signInWithPopup(auth, provider);
  };

  const login = (email, password) => {
    setLoader(true);

    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (User) => {
      setUser(User);
      setLoader(false);
    });
    return () => unsubscribe();
  }, []);

  const updateInfo = (name, url) => {
    setLoader(true);

    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: url,
    });
  };

  const logout = () => {
    setLoader(true);
    localStorage.removeItem("userTicket");
    return signOut(auth);
  };

  const test = { name: "test1" };
  const contents = {
    signUpEP,
    signUpGoogly,
    login,
    updateInfo,
    user,
    logout,
    test,
    loader,
    setLoader,
  };

  return (
    <ContextAuthentication.Provider value={contents}>
      {children}
    </ContextAuthentication.Provider>
  );
};

export default AuthContext;
