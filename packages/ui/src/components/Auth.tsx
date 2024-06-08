import Quote from './Quote'
import Link from 'next/link'
import AuthWrapper from './AuthWrapper'
import Button from './Button'


export default function Auth({type}: {type: "Login" | "Signup"}) {
  return (
    <>
    <div className='h-dvh w-dvw flex bg-white'>
      <div className="flex h-full flex-1 justify-center">
        <div className="flex justify-center">
          <div className="flex flex-col justify-center">
          <div className="text-3xl font-extrabold text-center">
            {type === 'Signup' ? `Create an account`: 'Login to account'}
          </div>
          <div className='text-center text-slate-400 mt-2'>
          {type === 'Signup' ? `Already have an account?`: "Don't have an account?"} <Link href={`${type ==='Login' ? '/signup': '/login'}`} className='pl-2 underline'>{type ==='Login'? 'Signup': 'Login'}</Link>
          </div>
          <AuthWrapper type = {type} />
          <Button type = {type}/>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex flex-1 bg-slate-200 ">
        <Quote/>
      </div>
    </div>
    </>
  )
}