import React from "react";
// import videojs from "video.js";
import VideoPlayer from "./VideoPlayer";

function Movie(props) {
    // useEffect(() => {
    //     const player = videojs(videoNode, props, function onPlayerReady() {
    //         console.log("onPlayerReady", props);
    //     });
    //     return player.dispose();
    // }, []);
    return (
        <div>
            <VideoPlayer />
        </div>
    );
}

export default Movie;
