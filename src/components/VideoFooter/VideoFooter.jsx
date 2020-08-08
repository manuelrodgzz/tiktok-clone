import React from 'react'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import './VideoFooter.css'

const VideoFooter = ({desc, user, audioTitle}) => {

    const arrayDesc = desc.split(' ')

    return(
        <div className='video_footer'>
            <div className='user'>
            <strong>@{user}</strong>
            </div>
            <div className='video_description'>
                <p>
                    {arrayDesc.map((word, index) => {
                    if(word[0] === '#' || word[0] === '@')
                        return (<strong key={index + word}>{`${word} `}</strong>)
                    else
                        return (word + ' ')

                    })}
                </p>
            </div>
            <div className='sound_caroussel'>
                <MusicNoteIcon fontSize='small' />
                <div className='sound_title_container'>
                    <div className='sound_title_1'>
                        {audioTitle}
                    </div>
                    <div className='sound_title_2'>
                        {audioTitle}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoFooter