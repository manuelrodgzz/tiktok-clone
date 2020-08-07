import React , {useState, useRef, useEffect}from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import VideoFooter from '../VideoFooter'
import VideoSidebar from '../VideoSidebar'
import './VideoCard.css'

const VideoCard = ({src, desc, user, muted, likes, comments, shares, audioOwnerImg, onMute, onUnmute}) => {

    const [playing, setPlaying] = useState(false)

    const player = useRef()

    const handleClick = () => {
        
        if(playing){
            setPlaying(false)
        }
        else{
            setPlaying(true)
        }
    }


    //e.stopPropagation() evita que el click llegue al reproductor de video
    const handleMute = (e) =>{
        e.stopPropagation()
        player.current.muted = true
        onMute(e)
    }

    const handleUnmute = (e) =>{
        e.stopPropagation()
        player.current.muted = false
        onUnmute(e)
    }

    useEffect(() => {

        if(playing)
            player.current.play()
        else
            player.current.pause()

    }, [playing, muted])


    return(
        <VisibilitySensor partialVisibility={true} offset={{top: 10, bottom: 10}} onChange={(isVisible) => {
            setPlaying(isVisible)
            player.current.currentTime = 0
        }}>
            <div onClick={handleClick} className='video_card'>
                <div className={`pause_screen ${playing ? 'hidden' : ''}`}>
                    <PlayArrowIcon fontSize='large' className='play_icon'/>
                </div>
                <video playsInline muted={muted} ref={player} loop className='video' src={src}/>
                <VideoFooter desc={desc} user={user.name}/>
                <VideoSidebar audioOwnerImg={audioOwnerImg} user={user} likes={likes} shares={shares} comments={comments} muted={muted} onMute={handleMute} onUnmute={handleUnmute}/>
            </div>
        </VisibilitySensor>
    )
}

export default VideoCard