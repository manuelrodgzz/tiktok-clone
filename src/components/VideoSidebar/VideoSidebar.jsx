import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite'
import CommentIcon from '@material-ui/icons/Comment'
import ReplyIcon from '@material-ui/icons/Reply'
import VolumeOffIcon from '@material-ui/icons/VolumeOff'
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import './VideoSidebar.css'

const VideoSidebar = ({videoPlaying, muted, user, likes, comments, shares, audioOwnerImg, onUnmute, onMute}) => {

    //Cuando se de click en el icono de mute o unmute envio el evento para poder evitar la propagacion de click al video

    const handleUnmute = (e) => {
        onUnmute(e)
    }

    const handleMute = (e) => {
        onMute(e)
    }

    return(
        <div className='video_sidebar'>
            <div className='sidebar_button'>
                <img src={user.img} alt='user-img' className='user_img'/>
                <div className='plus_icon'>+</div>
            </div>
            <div className='sidebar_button'>
                <FavoriteIcon fontSize='large'/>
                {likes > 10000 ? `${Math.round((likes/1000) * 10) / 10} K` : likes}
            </div>
            <div className='sidebar_button'>
                <CommentIcon fontSize='large'/>
                {comments > 10000 ? `${Math.round((comments/1000) * 10) / 10} K` : comments}
            </div>
            <div className='sidebar_button'>
                <ReplyIcon fontSize='large' className='flip'/>
                {shares > 10000 ? `${Math.round((shares/1000) * 10) / 10} K` : shares}
            </div>
            <div className='sidebar_button'>
                <div className={`cd_icon`}>
                    <img className={!videoPlaying ? 'animation_pause' : ''} src={audioOwnerImg} alt='audio-owner'/>
                </div>
            </div>
            <div className='sidebar_button'>
                {muted ? <VolumeOffIcon fontSize='large' onClick={handleUnmute}/> : <VolumeUpIcon fontSize='large' onClick={handleMute}/> }
            </div>
        </div>
    )
}


export default VideoSidebar