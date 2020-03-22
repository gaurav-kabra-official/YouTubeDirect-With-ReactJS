import React from 'react';
import '../style/Video.css';

const VideoItem = ({video , handleVideoSelect}) => {
    return (
        <div onClick={ () => handleVideoSelect(video)} className=' video-item item'>
            <img className='ui image' src={video.snippet.thumbnails.medium.url}/>
            <div className='header'>{video.snippet.title}</div>
        </div>
    )
};
export default VideoItem;