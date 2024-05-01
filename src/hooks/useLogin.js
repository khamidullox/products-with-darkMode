import { useActionData } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/useGlobal";
import toast from "react-hot-toast";
function useLogin() {
  let { dispetch } = useContext(GlobalContext);
  let actionData = useActionData();
  useEffect(() => {
    if (actionData) {
      handleLogin();
    }
  }, [actionData]);
  let handleLogin = () => {
    const auth = getAuth();
    if (actionData) {
      signInWithEmailAndPassword(auth, actionData.email, actionData.password)
        .then((userCredential) => {
          const user = userCredential.user;
          // updateProfile(auth.currentUser, {
          //   displayName: actionData.name,
          //   photoURL: actionData.url,
          // });
          dispetch({ type: "LOG_IN", paylod: user });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorMessage);
        });
    }
  };
  return { handleLogin };
}

export default useLogin;
