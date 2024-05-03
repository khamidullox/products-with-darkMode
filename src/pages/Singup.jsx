import { BiLogoGoogle } from "react-icons/bi";
import { Form, useActionData, Link } from "react-router-dom";
import InputSingup from "../components/InputSingup";
import useSingup from "../hooks/useSingup";
import { useEffect } from "react";

export let action = async ({ request }) => {
  let formData = await request.formData();
  let name = formData.get("dispalyName");
  let email = formData.get("email");
  let url = formData.get("url");
  let password = formData.get("password");

  return { url, password, email, name };
};
function Singup() {
  let { hadlesingup, registWithEmailAndPassword } = useSingup();
  let actionData = useActionData();

  return (
    <div className="place-content-center grid min-h-screen   ">
      <div className=" p-10  bg-slate-50  rounded-2xl w-96">
        <Form method="post" className=" mb-3">
          <InputSingup label="Dispaley Name" name="dispalyName" type="text" />
          <InputSingup label="Email" name="email" type="email" />
          <InputSingup label="Image" name="url" type="url" />
          <InputSingup label="password" name="password" type="password" />
          <button
            onClick={registWithEmailAndPassword}
            type="submit"
            className="btn btn-accent w-full mt-3"
          >
            Submit
          </button>
        </Form>
        <button
          onClick={hadlesingup}
          type="button"
          className="btn btn-success w-full"
        >
          <BiLogoGoogle /> Singup
        </button>
        <Link to="/login" type="button" className="btn btn-info w-full mt-3">
          <BiLogoGoogle /> Login
        </Link>
      </div>
    </div>
  );
}

export default Singup;
