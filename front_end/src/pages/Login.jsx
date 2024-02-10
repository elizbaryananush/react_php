import React, { useEffect, useState } from 'react'

function Login() {

    const [username, setusername] = useState('test')
    const [password, setpassword] = useState('test')
    const [error, setError] = useState()
    const [msg, setMsg] = useState()

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
                localStorage.setItem('loginUsername' , username)
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
            <form onSubmit={loginUser}>
                {
                    <>
                        <p>{error}</p>
                        <p>{msg}</p>
                    </>
                }
                <label className='form__input'>username
                    <input
                        type="text"
                        name='username'
                        placeholder='username'
                        value={username}
                        onChange={e => setusername(e.target.value)} />
                </label>
                <label className='form__input'>password
                    <input
                        type="password"
                        name='password'
                        placeholder='password'
                        value={password}
                        onChange={e => setpassword(e.target.value)} />
                </label>
                <input className='form__button' type="submit" value='Sign In' />
                <a className='form__href' href="/login/registration">Register now</a>
            </form>
        </div>
    )
}

export default Login