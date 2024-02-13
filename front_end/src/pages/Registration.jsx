import React, { useState } from 'react'

function Registration() {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [fullname, setfullname] = useState('')
    const [error, setError] = useState('')
    const [msg, setMsg] = useState('')

    const registerUser = async (e) => {
        e.preventDefault()

        if (username !== '' && password !== '' && fullname !== '') {
            console.log(true);
            const response = await fetch('http://localhost/mywebsite/api/users/registerUser.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'appliaction/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    fullname: fullname,
                })
            })

            const data = await response.json();

            if (data === 'Registered successfully !') {
                setError("")
                setMsg("Registered successfully !")
                setTimeout(() => {
                    window.location.href = '/';
                }, 1000)
            } else if (data === "Registration failed !") {
                setError("Registration failed !")
            } else if (data === "This username already been declaired") {
                setError("This username already been declaired")
            }
        } else {
            setError('All fields are required !')
        }

    }
    return (
        <div className='Registration login_form'>
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
            </div>
            <form onSubmit={registerUser}>
                <h1>Sign up</h1>
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
                        placeholder='username'
                        value={username}
                        onChange={e => setusername(e.target.value)} />
                    <input
                        type="password"
                        name='password'
                        placeholder='password'
                        value={password}
                        onChange={e => setpassword(e.target.value)} />
                    <input
                        type="text"
                        name='fullname'
                        placeholder='fullname'
                        value={fullname}
                        onChange={e => setfullname(e.target.value)} />
                </label>
                <div className="bottom">
                    <a className='form__href' href="/">Already have an account ?</a>
                    <input className='form__button' type="submit" value='Sign Up' />
                </div>
            </form>
        </div>
    )
}

export default Registration