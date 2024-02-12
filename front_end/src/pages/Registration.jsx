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
                <svg className='round1' xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" id="eK64i5G1OFD1" viewBox="0 0 300 300" text-rendering="geometricPrecision">
                    <path d="M277.058824,21.176471h-154.588236q-7.058824,18.35294,0,37.411764c7.058824,19.058824-59.294119,62.82353-33.882354,72.705883s70.588235-31.764707,61.411764,4.941175-55.058825,53.64706-27.529413,64.941177s25.411764,4.235293,15.529411,33.17647s65.647057-8.470587,42.35294,14.82353-30.352942,33.882352-12.000001,42.35294q18.352941,8.470588,98.117646-18.352941l46.588235-20.470589L277.058824,21.176471Z" transform="translate(28.235303-21.176471)" />
                </svg>

                <svg className='round2' xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" id="eFN7zZXMiHK1" viewBox="0 0 300 300" shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
                    <path d="M12.352941,300q7.058824-78.352942,31.764706-53.647059t50.117647-3.529413q20.470588-22.588236,25.411764-68.470589c4.941176-45.882353,49.411764-44.47059,64.235293-15.529413q14.823529,28.941177,14.823529,28.941177q16.941177,44.470587,16.941177,67.058823c0,22.588236,15.529412,41.64706,39.529412,4.235295q24-37.411765,39.529411,40.941179h-282.352939Z" transform="translate(.000002 0.000003)" />
                </svg>

                <svg className='round3' xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" id="egAjFBwIPEh1" viewBox="0 0 300 300" shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
                    <path d="M-0.000002,149.999997q19.411767,58.941179,99.882355,34.235297c80.470588-24.705882-45.882355-95.294119,28.941175-87.529413s64.235295-50.117647,102.352942-40.235294q38.117647,9.882353,46.588235-2.117647q22.235293-27.529413,22.235293-54.352942t-300-.000001v150Z" transform="translate(.000002 0.000003)" stroke-width="0.6" />
                </svg>
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