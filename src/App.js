import React, {useState} from 'react';
import './App.css';
import VideoCard from './components/VideoCard'
import Div100vh from 'react-div-100vh'

const videos = [
  {
    src: '/media/pepsi.mp4',
    user: {
      name: 'm4nueldeleon',
      img: 'https://p16-amd-va.tiktokcdn.com/img/musically-maliva-obj/e47e4ed478bf48135142e1c934f1a9a2~c5_100x100.jpeg'
    },
    description: '#pepsi #marketingdigital #ecommerce #manueldeleon',
    likes: 73300,
    comments: 574,
    shares: 2507,
    audio: {
      ownerImg: 'http://p16.tiktokcdn.com/aweme/200x200/tos-alisg-i-0000/ca58f6b52562484db49db014f0fa60d6.jpeg',
      title: 'Funky Town - The Dance Queen Group'
    }
  },
  {
    src: '/media/mr-brightside.mp4',
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
    src: '/media/mario.mp4',
    user: {
      name: 'christian_relikia',
      img: 'https://p16-amd-va.tiktokcdn.com/img/musically-maliva-obj/1658397758120966~c5_100x100.jpeg'
    },
    description: 'Misterio de Mario Bros! #mario #mariobros #levelup #mariomusic #nintendo #mushroom #supermario #flstudio',
    likes: 77000,
    comments: 865,
    shares: 6263,
    audio:{
      ownerImg: 'https://p16-amd-va.tiktokcdn.com/img/musically-maliva-obj/1658397758120966~c5_100x100.jpeg',
      title: 'sonido original - christianrelikia'
    }
  },
  {
    src: '/media/godin.mp4',
    user: {
      name: 'caudillovlogs',
      img: 'https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/6822ac6734ac61fd46bfb4ec7cfcc50a~c5_100x100.jpeg?x-expires=1599566400&x-signature=XPHRd%2BHKC3vu9nISpCr%2Bj5mZdv0%3D'
    },
    description: 'lo que callamos los de sistemas #fyp #fotos2020 #biral #godin #sistemas #office #hsbc',
    likes: 4696,
    comments: 77,
    shares: 214,
    audio:{
      ownerImg: 'https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/6822ac6734ac61fd46bfb4ec7cfcc50a~c5_100x100.jpeg?x-expires=1599566400&x-signature=XPHRd%2BHKC3vu9nISpCr%2Bj5mZdv0%3D',
      title: 'sonido original - caudillovlogs'
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
