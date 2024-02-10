import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SideBar from '../Components/SideBar';

function Home() {
    const navigate = useNavigate();
    let login = localStorage.getItem('login');
    let loginUsername = localStorage.getItem('loginUsername')
    const [postStyle, setPostStyle] = useState('none');

    useEffect(() => {
        console.log(login);
    }, []);

    function logout() {
        localStorage.clear();
        navigate('/');
    }

    const togglePostDisplay = () => {
        // Toggle between 'none' and 'block'
        setPostStyle(postStyle === 'none' ? 'block' : 'none');
    };

    return (
        <div className='Home'>
            {/* <Post username={loginUsername} display={postStyle}/> */}
            <SideBar />
            {/* {
                login ? <>
                    <form onSubmit={logout}>
                        <input type="submit" value={'logout'} />
                    </form><br />
                    <button onClick={togglePostDisplay} className="post">Togleg Post</button>
                </> : <>
                    <div className="">
                        <a href="/">Sign in</a>
                        <a href="/login/registration">Sign Up</a>
                    </div>
                </>
            } */}
        </div>
    );
}

export default Home;
