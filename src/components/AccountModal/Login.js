import React, { useRef, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'

export default function Login() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSumbit(e) {
        e.preventDefault()
            try {
                setError('')
                setLoading(true)
                await login(emailRef.current.value, passwordRef.current.value)
            } catch {
                setError('Failed to sign in')
            }
            setLoading(false)
    }

    return (
        <>
            <div className='modal'>
                <h2 className="text-center mb-4">Log In</h2>
                {error && <p className='error'>{error}</p>}
                <form onSubmit={handleSumbit}>
                    <div id="email">
                        <label>Email</label>
                        <input type='email' ref={emailRef} required />
                    </div>
                    <div id="password">
                        <label>Password</label>
                        <input type='password' ref={passwordRef} required />
                    </div>
                    <button disabled={loading} className="w-100" type="submit">Log In</button>
                </form>
                <div className="w-100 text-center mt-2">
                    Need an account?
                </div>
            </div>
        </>
    )
}
