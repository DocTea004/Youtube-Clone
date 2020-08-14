import React from 'react'
import "./RecomendedVideos.css"
import Video from "./Video";

function RecomendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>

            <div className="recommendedVideos_videos">
                <Video   />
            </div>

        </div>
    )
}

export default RecomendedVideos
