import React from 'react'
import './VideoFooter.css'

const VideoFooter = ({desc, user}) => {

    const arrayDesc = desc.split(' ')

    return(
        <div className='video_footer'>
            <strong>@{user}</strong>
            <p>
                {arrayDesc.map((word, index) => {
                if(word[0] === '#' || word[0] === '@')
                    return (<strong key={index + word}>{`${word} `}</strong>)
                else
                    return (word + ' ')

                })}
            </p>
        </div>
    )
}

export default VideoFooter