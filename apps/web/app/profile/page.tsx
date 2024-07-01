"use server"
import React from 'react'
import Navbar from '@repo/ui/Navbar'
import EditProfile from '@repo/ui/editprofile';
import UpdatePassword from '@repo/ui/updatepassword'
import Footer from '@repo/ui/footer';
import ProfileLinks from '@repo/ui/profilelinks'
import {fetchUser} from '@repo/actions/fetchUser'


export default async function page() {
  const user = await fetchUser();
  return (
    <>
    <div id='profilescroll' className="h-dvh w-dvw bg-slate-50 overflow-y-auto">
     <Navbar/>
      <div className="relative top-[60px] h-calc">
        <div className="flex flex-col">
        <div className='flex h-full px-2 md:px-8'>
        <div className='flex-1 pt-10 justify-end hidden slg:flex relative'>
          <div className="flex h-full flex-col w-[300px] fixed">
            <div className='flex flex-col items-center'>
            <input className='rounded-full h-32 w-32' type="image" src={user?.image !== "" ? user?.image : "https://i.pravatar.cc/150?u=a042581f4e29026704d"} alt="H" />
            <span className='mt-5 text-sm font-bold'>{user?.username}</span>
            </div>
            <ProfileLinks/>
          </div>
        </div>
        <div className='flex-[2] py-10 px-5 md:px-10'>
          <section id='account'>
            <div className='text-4xl md:text-5xl font-bold pb-4 border-b border-black/20'>Account</div>
            <div className="flex bg-gray-200 mt-10 h-48 md:h-44 p-5 rounded-xl justify-between flex-col items-start md:flex-row md:items-center">
              <div className="flex flex-col gap-3">
              <h2 className='text-xl font-bold'>Edit Profile</h2>
              <span className='max-w-[400px] line-clamp-3'>Update your basic details like name, email, phonenumber</span>
              </div>
              <div className='flex w-full justify-end'><EditProfile/></div>
            </div>
            <div className="flex bg-gray-200 mt-10 h-48 md:h-44 p-5 rounded-xl items-center justify-between">
              <div className="flex flex-col gap-3">
              <h2 className='text-xl font-bold'>Data Sharing</h2>
              <span className='max-w-[400px] line-clamp-3'>No details shared with any third parties</span>
              </div>
            </div>
          </section>
          <section id='appeareance' className='mt-[150px]'>
          <div className='text-4xl md:text-5xl font-bold pb-4 border-b border-black/20'>Appeareance</div>
            <div className="flex bg-gray-200 mt-10 h-48 md:h-44 p-5 rounded-xl items-center justify-between">
              <div className="flex flex-col gap-3">
              <h2 className='text-xl font-bold'>Themes</h2>
              <span className='max-w-[500px] line-clamp-3'>We're currently working on developing our themes to make your experience even better. Stay tuned for updates!</span>
            </div>
          </div>
          </section>
          <section id='updatepassword' className='mt-[150px]'>
          <div className='text-4xl md:text-5xl font-bold pb-4 border-b border-black/20'>Password</div>
            <div className="flex bg-gray-200 mt-10 h-48 md:h-44 p-5 rounded-xl justify-between flex-col items-start md:flex-row md:items-center">
              <div className="flex flex-col gap-3">
              <h2 className='text-xl font-bold'>Update Password</h2>
              <span className='max-w-[350px] line-clamp-3'>Forgot your password or update password? Do it here</span>
            </div>
            <div className='flex w-full justify-end'><UpdatePassword/></div>
          </div>
          </section>
        </div>
        </div>
        <Footer/>
        </div>
      </div>
    </div>
    </>
  )
}
