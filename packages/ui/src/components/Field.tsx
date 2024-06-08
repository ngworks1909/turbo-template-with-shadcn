"use client"
import { UserState } from '@repo/store/userstate'
import { ChangeEvent } from 'react'
import { useSetRecoilState } from 'recoil'

type PropTypes = {
    type: string,
    name: string,
    placeholder: string,
    label: string,
    min?: number,
    max?: number
}

export default function Field({type, placeholder, name, label, min, max}: PropTypes) {
  const setUser = useSetRecoilState(UserState);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    let val = e.target.value;
    setUser(prevUser => ({...prevUser, [name]:val}));
  }
  return (
    <div className='w-[350px] sm:w-[400px]'>
        <label htmlFor={name} className="block mb-2 text-sm font-medium text-black">{label}</label>
        <input type={type} id={name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" onChange={handleChange} placeholder={placeholder} minLength={min} maxLength={max} suppressHydrationWarning required />
    </div>
  )
}
