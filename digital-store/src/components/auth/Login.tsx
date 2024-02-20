import { Dialog } from "@headlessui/react";
import React, { useState } from "react";
import Input from "../Input/Input";
import Button from "../Buttons/Button";

type Props = {
    onRegister: () => void;
    onForgotPassword: () => void;
    errorMsg: string;
    setErrorMsg: React.Dispatch<React.SetStateAction<string>>;
    setSuccessMsg: React.Dispatch<React.SetStateAction<string>>;
};
const Login: React.FC<Props> = ({
    onRegister,
    onForgotPassword,
    errorMsg,
    setErrorMsg,
    setSuccessMsg,
  }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
  }
  return (
    <>
      <Dialog.Title
        as="h3"
        className="text-4xl text-center my-8 font-medium leading-6 text-gray-900"
      >
        Login
      </Dialog.Title>
      <form onSubmit={handleSubmit} className="mt-2">
      <Input
          type="email"
          placeholder="Email address"
          name="email"
          required
          extraClass="w-full focus:border-gray500"
          border="border-2 border-gray300 mb-4"
          onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
          value={email}
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          required
          extraClass="w-full focus:border-gray500 mb-4"
          border="border-2 border-gray300"
          onChange={(e) => setPassword((e.target as HTMLInputElement).value)}
          value={password}
        />
         {errorMsg !== "" && (
          <div className="text-red text-sm mb-4 whitespace-nowrap">
              error
          </div>
        )}
        <div className="flex justify-between mb-4">
            <div className="flex items-center text-gray400 focus:outline-none">
                <input
                type="checkbox"
                id="remember"
                name="remember"
                className="w-4 h-4 mb-0 mr-2"
                />
                <label htmlFor="remember" className="text-sm">
                    remember me
                </label>
            </div>
            <span
                onClick={onForgotPassword}
                className="text-gray400 text-sm hover:text-gray500 focus:outline-none focus:text-gray500"
            >
                forgot password
            </span>
        </div>

        <Button
          type="submit"
          value="login"
          extraClass="w-full text-center text-xl mb-4"
          size="lg"
        />
        <div className="text-center text-gray-400">
            <span
             onClick={onRegister}
             className="text-gray500 focus:outline-none focus:underline cursor-pointer"
            >
                Register
            </span>
        </div>
      </form>
    </>
  )
}

export default Login
