'use client'

import { login } from './action'
import { useFormState } from 'react-dom'

const Login = () => {
    const initState = {
        message: ''
    }

    const [state, formAction] = useFormState(login, initState)

    return (
        <div className='m-5 p-5 bg-blue-900 rounded-md font-mono'>
            <form className='text-bage-100 grid justify-center gap-y-2'
                action={formAction}
            >
                <div className='flex justify-between'>
                    Email  <input className='rounded-md text-blue-950' type='text' name="email" />
                </div>
                <div className='flex justify-between gap-x-10'>
                    Password  <input className='rounded-md text-blue-950' type='password' name="password" />
                </div>
                <div className='justify-self-center mt-3 font-black'>
                    {state.message === 'Login Success' ? (
                        <div className='text-lime-500'>
                            {state.message}
                        </div>
                    ) : (
                        <div className='text-red-500'>
                            {state.message}
                        </div>
                    )}
                </div>
                <p className='text-center'>abc@abc.com 1234</p>
                <button className='mt-3 p-1 bg-bage-100 text-blue-900 rounded-md'>Login</button>
            </form>
        </div>
    )
}

export default Login