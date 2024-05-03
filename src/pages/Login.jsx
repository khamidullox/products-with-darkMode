import { Link } from "react-router-dom";
import { BiLogoGoogle } from "react-icons/bi";
import { Form } from "react-router-dom";
import InputSingup from "../components/InputSingup";
import { useActionData } from "react-router-dom";
import { useEffect } from "react";
import useLogin from "../hooks/useLogin";
export let action = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let password = formData.get("password");
  return { password, email };
};

function Login() {
  let { handleLogin } = useLogin();
  let actionData = useActionData();

  return (
    <div className="place-content-center grid min-h-screen ">
      <div className=" p-10 pt-4  bg-slate-50  rounded-2xl w-96">
        <Form method="post">
          <InputSingup label="Email" name="email" type="email" />
          <InputSingup label="password" name="password" type="password" />
          <button
            onClick={handleLogin}
            className="btn btn-accent w-full mb-3 mt-3"
          >
            Login
          </button>
        </Form>
        <Link to="/singup" type="button" className="btn btn-success w-full">
          <BiLogoGoogle />
          Singup
        </Link>
      </div>
    </div>
  );
}

export default Login;
