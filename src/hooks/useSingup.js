import auth from "../firebase/frirebaseConfing";
//context
import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/useGlobal";
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import toast from "react-hot-toast";
import { useActionData } from "react-router-dom";
function useSingup() {
  let actionData = useActionData();
  useEffect(() => {
    if (actionData) {
      registWithEmailAndPassword();
    }
  }, [actionData]);
  let { dispetch } = useContext(GlobalContext);
  const provider = new GoogleAuthProvider();
  let hadlesingup = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        dispetch({ type: "LOG_IN", paylod: user });
        toast.success("Welcome");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        toast.error(errorMessage);
      });
  };

  let registWithEmailAndPassword = () => {
    if (actionData) {
      createUserWithEmailAndPassword(
        auth,
        actionData.email,
        actionData.password
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: actionData.name,
            photoURL: actionData.url,
          });

          dispetch({ type: "LOG_IN", paylod: user });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorMessage);

          // ..
        });
    }
  };
  return { hadlesingup, registWithEmailAndPassword };
}

export default useSingup;
