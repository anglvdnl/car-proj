import React, { useRef, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function AccModal({showModal, setShowModal}) {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSumbit(e) {
        e.preventDefault()

        if (passwordRef.current.value !==
            passwordConfirmRef.current.value) {
                return setError('Passwords do not match')
            }

            try {
                setError('')
                setLoading(true)
                await signup(emailRef.current.value, passwordRef.current.value)
            } catch {
                setError('Failed to create an account')
            }
            setLoading(false)
    }

    return (
        <div className='signup-wrapper'>
            <div className='modal'>
                <h2 className="text-center mb-4">Sign Up</h2>
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
                    <div id="password-confirm">
                        <label>Password Confirmation</label>
                        <input type='password' ref={passwordConfirmRef} required />
                    </div>
                    <button disabled={loading} className="w-100" type="submit">Sign Up</button>
                </form>
                <div className="w-100 text-center mt-2">
                    Already have an account? Log In
                </div>
            </div>
        </div>
    )
}
