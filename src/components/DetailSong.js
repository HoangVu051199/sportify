import React, {useContext} from 'react'
import { Songs } from '../Context'

export default function DetailSong() {
  const {song} = useContext(Songs)
  return (
    <div className='col-span-1 p-3'>
      <h2 className='text-cyan-500 font-bold'>Now playing</h2>
      <h2 className='text-neutral-400 text-2xl'>{song.name}</h2>
      <div className='flex items-center justify-center mt-16'>
        <img className='w-64' src={song.links.images[0].url} alt="avatar"/>
      </div>
      <div className='flex justify-evenly items-center h-24'>
        <img className='w-16 rounded-full' src={song.links.images[1].url} alt="avatar"/>
        <span className='text-xl text-white'>{song.author}</span>
      </div>
    </div>
  )
}
