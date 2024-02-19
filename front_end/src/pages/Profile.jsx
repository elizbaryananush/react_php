import React, { useEffect, useState } from 'react'
import SideBar from '../Components/SideBar'

function Profile() {
    const username = localStorage.getItem('loginUsername')
    const [userData, setUserData] = useState()
    const [posts, setPosts] = useState()
    const [section, setSection] = useState('')

    const getPosts = async () => {
        const response = await fetch('http://localhost/mywebsite/api/users/getUserPosts.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
            })
        })

        const data = await response.json();

        setPosts(data)

        console.log(data)
    }

    const getData = async () => {
        const response = await fetch('http://localhost/mywebsite/api/users/getUserData.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
            })
        })

        const data = await response.json();

        setUserData(data[0])

        console.log(data)
    }

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if (section === 'posts') {
            getPosts()
        }
    }, [section])
    return (
        <div className='Profile'>
            <SideBar />
            {
                userData ? <div className="rightPart">
                    <div className="top">
                        <img src={userData.pfp_url} className='pfp' />
                        <div className="side">
                            <div className="text">
                                <h2>{userData.fullname}</h2>
                                <p>{userData.status}</p>
                            </div>
                            <div className="followers">

                            </div>
                            <div className="buttons">
                                <button>Edit Profile</button>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="top">
                            <ul>
                                <li
                                    className={section === 'posts' ? 'active' : null}
                                    onClick={() => setSection('posts')}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512">
                                        <path d="M7,0H4A4,4,0,0,0,0,4V7a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V4A4,4,0,0,0,7,0ZM9,7A2,2,0,0,1,7,9H4A2,2,0,0,1,2,7V4A2,2,0,0,1,4,2H7A2,2,0,0,1,9,4Z" /><path d="M20,0H17a4,4,0,0,0-4,4V7a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V4A4,4,0,0,0,20,0Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z" /><path d="M7,13H4a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V17A4,4,0,0,0,7,13Zm2,7a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2H7a2,2,0,0,1,2,2Z" /><path d="M20,13H17a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V17A4,4,0,0,0,20,13Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z" />
                                    </svg>
                                    <p>Posts</p>
                                </li>
                                <li
                                    className={section === 'liked' ? 'active' : null}
                                    onClick={() => setSection('liked')}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512">
                                        <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z" />
                                    </svg>
                                    <p>Liked</p>
                                </li>
                                <li
                                    className={section === 'saved' ? 'active' : null}
                                    onClick={() => setSection('saved')}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512">
                                        <path d="M20.137,24a2.8,2.8,0,0,1-1.987-.835L12,17.051,5.85,23.169a2.8,2.8,0,0,1-3.095.609A2.8,2.8,0,0,1,1,21.154V5A5,5,0,0,1,6,0H18a5,5,0,0,1,5,5V21.154a2.8,2.8,0,0,1-1.751,2.624A2.867,2.867,0,0,1,20.137,24ZM6,2A3,3,0,0,0,3,5V21.154a.843.843,0,0,0,1.437.6h0L11.3,14.933a1,1,0,0,1,1.41,0l6.855,6.819a.843.843,0,0,0,1.437-.6V5a3,3,0,0,0-3-3Z" />
                                    </svg>
                                    <p>Saved</p>
                                </li>
                            </ul>
                        </div>
                        <div className="posts">
                            {
                                section === 'posts' ? posts ? <div className="posts">
                                    {
                                        posts.map(item => {
                                            let url = item.img_url.replace(`"`, '') 
                                            return <div className="box">
                                                <img src={item.img_url} />
                                            </div>
                                        })
                                    }
                                </div> : <div className="noPost">
                                    noposts
                                </div> : null
                            }
                            {/* {
                                liked ? {

                                } : null
                            }
                            {
                                saved ? {

                                } : null
                            } */}
                        </div>
                    </div>
                </div> : null
            }

        </div>
    )
}

export default Profile