import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
    let login = localStorage.getItem('login')
    useEffect(() => {
        console.log(login);
    }, [])

    function logout() {
        localStorage.clear()
        navigate('/')
    }
    return (
        <div className='Home'>
            Home
            {
                login ? <>
                    <form onSubmit={logout}>
                        <input type="submit" value={'logout'} />
                    </form>
                </> : <>
                    <div className="">
                        <a href="/">Sign in</a>
                        <a href="/login/registration">Sign Up</a>
                    </div>
                </>
            }
        </div>
    )
}

export default Home