'use client'
import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react';
import Login from './Login';

type CurrentPage = "login" | "register" | "forgot-password";


type Props = {
    extraClass?: string;
    children: any;
};
const AuthForm: React.FC<Props> = ({ extraClass, children }) => {
  const [currentPage, setCurrentPage] = useState<CurrentPage>("login");
  const [open, setOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  let modalBox: JSX.Element;
  if (currentPage === "login") {
    modalBox = (
        <Login
          onRegister={() => setCurrentPage("register")}
          onForgotPassword={() => setCurrentPage("forgot-password")}
          errorMsg={errorMsg}
          setErrorMsg={setErrorMsg}
          setSuccessMsg={setSuccessMsg}
        />
      );
    }
  
    function closeModal() {
        setOpen(false);
        setErrorMsg("");
        setTimeout(() => {
          setSuccessMsg("profile");
        }, 100);
    }
    
    function openModal() {
        setOpen(true);
    }
    return (
        <>
            <div className={`${extraClass}`}>
                <button
                    type="button"
                    onClick={openModal}
                    aria-label="Account"
                    className={`${extraClass}`}
                >
                    {children}
                </button>
            </div>
            <Transition show={open} as={Fragment}>
                <Dialog
                   as="div"
                   className="fixed inset-0 z-10 overflow-y-auto"
                   style={{ zIndex: 99999 }}
                   static
                   open={open}
                   onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-600 opacity-50" />
                        </Transition.Child>
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                        >
                            <div className="relative inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl">
                                <button
                                    type="button"
                                    className="absolute right-5 top-2 outline-none focus:outline-none text-2xl"
                                    onClick={closeModal}
                                >
                                    &#10005;
                                </button>
                               
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default AuthForm
