import React from 'react';

function VideosComponent() {
    return (
    <div>
        <div className='videos-title'>
            <h1>Video Gallery</h1>
        </div>

        <div className='videos-container'>
            <div className = "video-card">
                <div className='video-title'>
                    <h2>Haneen Chor & Abo Gabi Live</h2>
                </div>
                <div className='video-frame'>
                    <iframe width='100%'
                            height='100%'
                            src="https://www.youtube.com/embed/9kPQIzh1JhQ?si=pQL7I3iYWejLAlSw"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen>
                    </iframe>
                </div>
            </div>
            <div className = "video-card">
                <div className='video-title'>
                    <h2>SONG AUS DER SYRISCHEN KULTUR</h2>
                </div>
                <div className='video-frame'>
                    <iframe
                            width='100%'
                            height='100%'
                            src="https://www.youtube.com/embed/zuFLN64cuiM?si=j2NKQw2TmkqKjFxb"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen>
                    </iframe>
                </div>
            </div>
            <div className = "video-card">
                <div className='video-title'>
                    <h2>SAADO & AGOONE & RAMI</h2>
                </div>
                <div className='video-frame'>
                    <iframe
                            width='100%'
                            height='100%'
                            src="https://www.youtube.com/embed/75KkSudMnyA?si=H2M8RXxSJvbu1IKK"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen>
                    </iframe>
                </div>
            </div>
        </div>
    </div>
    );
}

export default VideosComponent;