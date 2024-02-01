import React, { useState } from 'react'

function Registration() {
    const [username, setusername] = useState()
    const [password, setpassword] = useState()
    const [fullname, setfullname] = useState()

    const registerUser = async (e) => {
        e.preventDefault()
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

        const data = await response.json()
        alert(data);

    }
    return (
        <div className='Registration login_form'>
            <form onSubmit={registerUser}>
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
                <label className='form__input'>fullname
                    <input
                        type="text"
                        name='fullname'
                        placeholder='fullname'
                        value={fullname}
                        onChange={e => setfullname(e.target.value)} />
                </label>
                <input className='form__button' type="submit" value='Sign Up' />
                <a className='form__href' href="/login/login">Already have an account ?</a>
            </form>
        </div>
    )
}

export default Registration