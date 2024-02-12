import React, { useEffect, useState } from 'react'
import svg1 from '../images/Vector 1.svg'
import svg2 from '../images/Vector 2.svg'
import svg3 from '../images/Vector 3.svg'

function Login() {

    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [error, setError] = useState('')
    const [msg, setMsg] = useState('')

    useEffect(() => {
        let login = localStorage.getItem('login')
        console.log(login);
    }, [])

    const loginUser = async (e) => {
        e.preventDefault()

        if (username !== '' && password !== '') {
            const response = await fetch('http://localhost/mywebsite/api/users/loginUser.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                })
            })

            const data = await response.json()

            if (data === "You're in") {
                setError("")
                setMsg("You're in ! Redirecting...")
                localStorage.setItem('login', true)
                localStorage.setItem('loginUsername', username)
                setTimeout(() => {
                    window.location.href = '/main';
                }, 1000)
            } else if (data === "wrong password") {
                setError("wrong password")
            } else if (data === "User not found.") {
                setError("User not found.")
            }
        } else {
            setError('All fields are required !')
        }
    }

    return (
        <div className='Login login_form'>
            <div className="background">
                <div className="round1"></div>
                <div className="round2"></div>
                <div className="round3"></div>
                <div className="round4"></div>
                <div className="round5"></div>
                <div className="round6"></div>
                <div className="round7"></div>
                <div className="round8"></div>
                <div className="round9"></div>
                <div className="round10"></div>
                <div className="round11"></div>
                <div className="round12"></div>
            </div>
            <form onSubmit={loginUser}>
                <h1>Sign in</h1>
                {
                    <>
                        <p style={error !== '' ? { display: 'block' } : { display: 'none' }}>{error}</p>
                        <p style={msg !== '' ? { display: 'block' } : { display: 'none' }}>{msg}</p>
                    </>
                }
                <label className='form__input'>
                    <input
                        type="text"
                        name='username'
                        placeholder='Username'
                        value={username}
                        onChange={e => setusername(e.target.value)} />
                    <input
                        type="password"
                        name='password'
                        placeholder='Password'
                        value={password}
                        onChange={e => setpassword(e.target.value)} />
                </label>
                <div className="bottom">
                    <a className='form__href' href="/login/registration">Register now</a>
                    <input className='form__button' type="submit" value='Submit' />
                </div>
            </form>
        </div>
    )
}

export default Login