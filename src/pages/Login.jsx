import React , {useState} from 'react'

function Login() {

    const [username, setusername] = useState('testsd')
    const [password, setpassword] = useState('test')

    const loginUser = async (e) => {
        e.preventDefault()
        const response = await fetch('http://localhost/mywebsite/api/users/loginUser.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'appliaction/json'
            },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        })

        const data = await response.json()
        alert(data);

    }
    return (
        <div className='Login login_form'>
            <form onSubmit={loginUser}>
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