import React, {useState} from 'react';
import './App.css';
import VideoCard from './components/VideoCard'
import Div100vh from 'react-div-100vh'

const videos = [
  {
    src: 'https://v16m.tiktokcdn.com/d55a015207db464f79fdf856191268c2/5f2ef406/video/tos/useast2a/tos-useast2a-ve-0068c004/0441af15c6a74c94911b9e629de12013/?a=1233&br=1602&bt=801&cr=0&cs=0&dr=0&ds=3&er=&l=2020080618504501019021808851366F14&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M2U5O2xmeXlmdTMzZjczM0ApaDdnPDk5NDwzNztnaWZpZGdibmVna2BrbG9fLS0wMTZzczQwYzUtMmJeXy4xYy9hMi06Yw%3D%3D&vl=&vr=',
    user: {
      name: 'jorge_cars',
      img: 'https://p16-va-tiktok.ibyteimg.com/img/musically-maliva-obj/1652511381647366~c5_720x720.jpeg'
    },
    description: '#hotwheels #historiasdeautos #autosdeportivos #hotwheelstrack #hotwheelschallenge #parati #juguete #pistahotwheels',
    likes: 204600,
    comments: 1124,
    shares: 400,
    audio: {
      ownerImg: 'https://p16-va-tiktok.ibyteimg.com/img/musically-maliva-obj/1652511381647366~c5_720x720.jpeg',
      title: 'sonido original - jorge_cars'
    }
  },
  {
    src: 'https://v16m.tiktokcdn.com/dfeb67146104496d9e6b8d03cae89aaa/5f2ef406/video/tos/useast2a/tos-useast2a-pve-0068/71d9d7833d424b0eaefbbf560b3dc5ef/?a=1233&br=1552&bt=776&cr=0&cs=0&dr=0&ds=2&er=&l=2020080618504501019021808851366F14&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=anZvZGtuanR1djMzNDczM0ApZzc4NTxoNTw0NzM7aDplNWctazI1NmtvLzZfLS0vMTZzcy8tNGIvNDRfYTFgMzFhNmI6Yw%3D%3D&vl=&vr=',
    user: {
      name: 'mollymcphaul',
      img: 'https://p16-va-tiktok.ibyteimg.com/img/musically-maliva-obj/5199110cd17d67b2cb2da954f7bb0142~c5_720x720.jpeg'
    },
    description: 'pls don’t let it flop dis took quite a while #fyp #mrbrightside #guitar',
    likes: 12200,
    comments: 239,
    shares: 136,
    audio:{
      ownerImg: 'https://p16-va-tiktok.ibyteimg.com/img/musically-maliva-obj/5199110cd17d67b2cb2da954f7bb0142~c5_720x720.jpeg',
      title: 'sonido original - mollymcphaul'
    }
  },
  {
    src: 'https://v16m.tiktokcdn.com/a04a2769b42dd719f86de64edd0925e3/5f2ef406/video/tos/useast2a/tos-useast2a-ve-0068c002/651e27c6bfb44a8e938c98e624292c7d/?a=1233&br=2150&bt=1075&cr=0&cs=0&dr=0&ds=3&er=&l=2020080618504501019021808851366F14&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=ajU8ZTZrbzpxdTMzNjczM0ApZjw8OjQ8ZGU3Nzs6aDQzZWduLi01cHFsZy9fLS0yMTZzczMwL2EtL2MuMmA2MzAwXzI6Yw%3D%3D&vl=&vr=',
    user: {
      name: '8ayosoy',
      img: 'https://p16-va-tiktok.ibyteimg.com/img/musically-maliva-obj/a07ac9f53dd8decdc471c5dad51043fc~c5_720x720.jpeg'
    },
    description: '',
    likes: 162800,
    comments: 657,
    shares: 4083,
    audio:{
      ownerImg: 'https://p16-va-tiktok.ibyteimg.com/img/musically-maliva-obj/1659719661507590~c5_720x720.jpeg',
      title: 'sonido original - elbetillo'
    }
  },
  {
    src: 'https://v16m.tiktokcdn.com/ddabdc2752ae96a7f3b79d9665213ace/5f2ef406/video/tos/useast2a/tos-useast2a-ve-0068c001/68f21d71ce6e4dba825a57cf205a1933/?a=1233&br=2960&bt=1480&cr=0&cs=0&dr=0&ds=3&er=&l=2020080618504501019021808851366F14&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M2lzdWlwdjl5djMzNDczM0ApOWlmZjtkZWQzNzw6Ozc4NmdqbnJfZS1iX2ZfLS00MTZzcy8yYS9hYjQ0YzZjMDEwYF46Yw%3D%3D&vl=&vr=',
    user: {
      name: 'liizabs',
      img: 'https://p16-va-tiktok.ibyteimg.com/img/musically-maliva-obj/2cc58931e2c27365f86d5bf4c697a2c3~c5_720x720.jpeg'
    },
    description: 'No se parecen caramba v: Responder a @thedarkcrackyt #respondiendocomentarios #vozdegoogle',
    likes: 41600,
    comments: 1065,
    shares: 94,
    audio:{
      ownerImg: 'https://p16-va-tiktok.ibyteimg.com/img/musically-maliva-obj/2cc58931e2c27365f86d5bf4c697a2c3~c5_720x720.jpeg',
      title: 'sonido original - liizabs'
    }
  },
]

function App() {

  const [muted, setMuted] = useState(true)

  const handleMute = () => {
    setMuted(true)
  }

  const handleUnmute = () => {
    setMuted(false)
  }

  return (
    <div className="app">
      <div className='app_video'>
      <Div100vh>
        {videos.map((video, index) => (
          <VideoCard 
            key={index + video.user.name}
            onMute={handleMute} 
            onUnmute={handleUnmute} 
            muted={muted} 
            user={video.user} 
            desc={video.description} 
            src={video.src}
            likes={video.likes}
            comments={video.comments}
            shares={video.shares}
            audio={video.audio}
            />
        ))}
      </Div100vh>
      </div>
    </div>
  );
}

export default App;
