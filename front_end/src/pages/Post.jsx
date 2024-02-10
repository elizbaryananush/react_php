import React, { useEffect, useState } from 'react';
import img from '../images/gallery_icon_148533.png'

function Post(props) {
    const { display } = props;
    const { username } = props;
    const [imageURL, setImageURL] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [hashtags, setHashtags] = useState()
    const [tags, setTags] = useState()
    const [location, setLocation] = useState()
    const [showPage, setShowPage] = useState(1)

    useEffect(() => {
        console.log(showPage);
    }, [showPage])

    function handleFileUpload(event) {
        setShowPage(2)

        const file = event.target.files[0];
        setSelectedFile(file);

        const url = URL.createObjectURL(file);
        setImageURL(url);
    }

    const post = async () => {

    }


    return (
        <div className='Post' style={{ display: display }}>
            <input type="file" accept="image/*" onChange={handleFileUpload} style={{ display: 'none' }} id="fileInput" />
            <div className="Post__box">
                <div className="page1 page" style={showPage === 1 ? { display: 'flex' } : { display: 'none' }}>
                    <div className="top">
                        <p>Create New Post</p>
                    </div>
                    <div className="bottom">
                        <div className="context">
                            <img src={img} />
                            <button onClick={() => document.getElementById('fileInput').click()}>Select from device</button>
                        </div>
                    </div>
                </div>
                <div className="page2 page" style={showPage === 2 || showPage === 3 ? { display: 'flex' } : { display: 'none' }}>
                    <div className="top">
                        <p onClick={() => setShowPage(showPage - 1)}>back</p>
                        <p onClick={() => setShowPage(showPage + 1)}>next</p>
                    </div>
                    <div className='bottom'>
                        <img src={imageURL} alt="Selected" />

                        <div
                            style={showPage === 3 ? { display: 'block' } : { display: 'none' }}
                            className="edit">
                            <div className="profil">
                                <img src={img} />
                                <p>{username}</p>
                            </div>

                            <textarea placeholder='Write a caption...' cols="30" rows="10"></textarea>

                            <div className="other">

                                <form action="">
                                    <label>
                                        <input type="text" placeholder={'Add Tags'}
                                            value={tags}
                                            onChange={(e) => setTags(e.target.value)} />
                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,12,10Zm6,13A6,6,0,0,0,6,23a1,1,0,0,0,2,0,4,4,0,0,1,8,0,1,1,0,0,0,2,0ZM18,8a4,4,0,1,1,4-4A4,4,0,0,1,18,8Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,18,2Zm6,13a6.006,6.006,0,0,0-6-6,1,1,0,0,0,0,2,4,4,0,0,1,4,4,1,1,0,0,0,2,0ZM6,8a4,4,0,1,1,4-4A4,4,0,0,1,6,8ZM6,2A2,2,0,1,0,8,4,2,2,0,0,0,6,2ZM2,15a4,4,0,0,1,4-4A1,1,0,0,0,6,9a6.006,6.006,0,0,0-6,6,1,1,0,0,0,2,0Z" /></svg>
                                        </button>
                                    </label>
                                </form>
                                <form>
                                    <label>
                                        <input type="text" placeholder={'add location'}
                                            value={location}
                                            onChange={(e) => setLocation(e.target.value)} />
                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M12,6a4,4,0,1,0,4,4A4,4,0,0,0,12,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,12Z" /><path d="M12,24a5.271,5.271,0,0,1-4.311-2.2c-3.811-5.257-5.744-9.209-5.744-11.747a10.055,10.055,0,0,1,20.11,0c0,2.538-1.933,6.49-5.744,11.747A5.271,5.271,0,0,1,12,24ZM12,2.181a7.883,7.883,0,0,0-7.874,7.874c0,2.01,1.893,5.727,5.329,10.466a3.145,3.145,0,0,0,5.09,0c3.436-4.739,5.329-8.456,5.329-10.466A7.883,7.883,0,0,0,12,2.181Z" /></svg>
                                        </button>
                                    </label>
                                </form>
                                <form>
                                    <label>
                                        <input type="text" placeholder={'add hashtags'}
                                            value={hashtags}
                                            onChange={(e) => setHashtags(e.target.value)} />
                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="m23.5,7h-5.382l.877-6.433c.037-.273-.154-.525-.428-.563-.276-.039-.526.154-.563.428l-.896,6.567h-8.854l.877-6.433c.037-.273-.154-.525-.428-.563-.272-.039-.525.154-.563.428l-.896,6.567H1.5c-.276,0-.5.224-.5.5s.224.5.5.5h5.609l-1.091,8H.5c-.276,0-.5.224-.5.5s.224.5.5.5h5.382l-.877,6.433c-.037.273.154.525.428.563.023.003.045.004.068.004.246,0,.461-.182.495-.433l.896-6.567h8.854l-.877,6.433c-.037.273.154.525.428.563.023.003.045.004.068.004.246,0,.461-.182.495-.433l.896-6.567h5.745c.276,0,.5-.224.5-.5s-.224-.5-.5-.5h-5.609l1.091-8h5.518c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Zm-7.618,9H7.027l1.091-8h8.854l-1.091,8Z" /></svg>
                                        </button>
                                    </label>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
