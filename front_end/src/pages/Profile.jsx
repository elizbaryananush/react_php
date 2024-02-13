import React, { useEffect, useState } from 'react'
import SideBar from '../Components/SideBar'

function Profile() {
    const username = localStorage.getItem('loginUsername')
    const [userData, setUserData] = useState()

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
    return (
        <div className='Profile'>
            <SideBar />
            {
                userData ? <div className="rightPart">
                    <div className="top">
                        <img src={userData.pfp_url} className='pfp' />
                        <div className="text">
                            <p></p>
                            <p></p>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="posts">

                        </div>
                    </div>
                </div> : null
            }

        </div>
    )
}

export default Profile