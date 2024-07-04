"use client"
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button , useDisclosure} from "@nextui-org/react";
import Field from "./Field";
import { useRecoilValue } from "recoil";
import { UserState } from "@repo/store/userstate";
import { UpdateUser } from "@repo/zod/updateUser";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {storage} from '@repo/firebase/db'
import { ChangeEvent, useState } from "react";


export default function EditProfile({profile}: {profile: string}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [image, setImage] = useState(profile);
  const user = useRecoilValue(UserState);
  const notifysuccess = (message: string) => {
    toast.success(message, {
      autoClose: 1500
    });
  }
  const notifyfailure = (err: string) => toast.error(err);

  const uploadPicture = async(e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.target.files;
    const file = files && files[0];
    const response = await fetch('/api/auth/fetchId', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    });
    const json = await response.json();
    const id = json.id;
    const storageRef = ref(storage, id);
    if(file){
      await uploadBytesResumable(storageRef, file).then(async() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          setImage(downloadURL);
        })})
    }
  }

  const handleUpdate = async({username, mobile}: UpdateUser) => {
    const response = await fetch('/api/update', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({username, mobile})
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
      <button onClick={onOpen} className="bg-[#111827] group text-sm flex items-center px-6 py-2 rounded-md gap-1 shadow-sm hover:bg-[#111827]/90 vvsm:justify-center">
            <span className="text-white">Edit Profile</span>
      </button>
      <Modal isOpen={isOpen} 
        placement={"auto"}
        onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Edit Profile</ModalHeader>
              <ModalBody>
                <div className="flex justify-center">
                <input type="file" className="hidden" name="userpic" id="userpic" accept="image/*" onChange={uploadPicture}  />
                <label htmlFor="userpic" className="relative">
                  <img className="h-32 w-32 rounded-full opacity-70 object-cover" src={image} alt="M" />
                  <img className="h-8 w-8 absolute translate-x-[-50%] opacity-70 translate-y-[-50%] left-[50%] top-[50%]" src="https://www.freepnglogos.com/uploads/camera-logo-png/red-circle-camera-logo-cliparts-14.png" alt="M" />
              </label>
                </div>
                <div className="flex items-center flex-col gap-3 mt-2 mb-5">
                <Field type='text' name='username' label='Username' placeholder='Enter username' />
                <Field type='text' name='mobile' label='Mobile' placeholder='Enter mobile number' />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <button className="text-white bg-[#111827] group text-sm flex items-center px-5 py-2 rounded-xl gap-1 shadow-sm hover:bg-[#111827]/90 vvsm:justify-center" onClick={async() => {
                   const {username, mobile} = user;
                   handleUpdate({username, mobile})
                   onClose();
                }} >Update</button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <ToastContainer/>
    </>
  )
}
