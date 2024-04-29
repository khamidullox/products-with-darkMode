import { BiLogoGoogle } from "react-icons/bi";
import { Link } from "react-router-dom";

import auth from "../firebase/frirebaseConfing";
//context
import { useContext } from "react";
import { GlobalContext } from "../context/useGlobal";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function Login() {
  let { dispetch } = useContext(GlobalContext);
  const provider = new GoogleAuthProvider();
  let hadlesingup = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        dispetch({ type: "LOG_IN", paylod: user });
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div className="place-content-center grid min-h-screen  ">
      <button onClick={hadlesingup} type="button" className="btn btn-success">
        <BiLogoGoogle /> Login
      </button>
    </div>
  );
}

export default Login;
