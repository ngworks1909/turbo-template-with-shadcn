"use client"
import { UserState } from "@repo/store/userstate";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useRecoilValue } from "recoil";
import {useRouter} from 'next/navigation';
import { signIn } from "next-auth/react";

export default function Button({ type }: { type: string }) {
  const {username, email, password, mobile} = useRecoilValue(UserState);
  const router = useRouter();
  const notifysuccess = (message: string) => {
    toast.success(message, {
      autoClose: 1500,
      onClose: () => {
        router.replace(`login`);
      }
    });
  }
  const notifylogsuccess = (message: string) => {
    toast.success(message, {
      autoClose: 1500,
      onClose: () => {
        router.replace(`/`);
      }
    });
  }
  const notifyfailure = (err: string) => toast.error(err);

  const handleSignup = async() => {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email, username, password, mobile})
    });
    const json = await response.json();
    if(json.success) {
        notifysuccess(json.message);
    }
    else{
      notifyfailure(json.error);
    }
  }

  return (
    <>
      <button
        type="button"
        className="text-white bg-gray-800 w-[350px] sm:w-[400px] hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-8 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        onClick={type === 'Signup'? async()=> { await handleSignup() }:async(e)=>{
          e.preventDefault(); 
          const response = await signIn('credentials', {email: email, password: password, redirect: false});
          if(response?.error){
            notifyfailure('Invalid credentials...')
          }
          else{
            notifylogsuccess('User login successful...');
          }
        }}
      >
        {type}
      </button>
      <ToastContainer/>
    </>
  );
}
