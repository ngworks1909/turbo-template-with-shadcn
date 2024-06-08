"use client"
import Field from './Field'

export default function AuthWrapper({type}: {type: 'Login' | 'Signup'}) {
  return (
    <div className="flex flex-col gap-3 mt-5">
          {type === 'Signup' && <Field type='text' name='username' label='Username' placeholder='Enter username' />}
          <Field type='email' name='email' label='email' placeholder='Enter email'/>
          <Field type='password' name='password' label='Password' placeholder='Enter password'/>
          {type === 'Signup' && <Field type='text' name='mobile' label='Mobile' placeholder='Enter mobile number' />}
          </div>
  )
}
