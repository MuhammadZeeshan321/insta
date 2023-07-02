import React from 'react'
import post from '../../assets/main/post.jpg';
import account from '../../assets/main/account.jpg';
import scndpost from '../../assets/main/post-2.jpg';





const Main_header = () => {
  return (
    <>
    <div className='flex space-x-10 h-24 pt-4 border-b border-gray'>
      <img className='hover:scale-110 transition-all duration-300 w-14 h-14 rounded-full border-2 border-red-300' src={post} alt='Post Image'></img>
      <img className='hover:scale-110 transition-all duration-300 w-14 h-14 rounded-full border-2 border-red-300' src={account} alt='Post Image'></img>
      <img className='hover:scale-110 transition-all duration-300 w-14 h-14 rounded-full border-2 border-red-300' src={scndpost} alt='Post Image'></img>
      <img className='hover:scale-110 transition-all duration-300 w-14 h-14 rounded-full border-2 border-red-300' src={post} alt='Post Image'></img>
      <img className='hover:scale-110 transition-all duration-300 w-14 h-14 rounded-full border-2 border-red-300' src={account} alt='Post Image'></img>
      <img className='hover:scale-110 transition-all duration-300 w-14 h-14 rounded-full border-2 border-red-300' src={scndpost} alt='Post Image'></img>
      <img className='hover:scale-110 transition-all duration-300 w-14 h-14 rounded-full border-2 border-red-300' src={post} alt='Post Image'></img>
      <img className='hover:scale-110 transition-all duration-300 w-14 h-14 rounded-full border-2 border-red-300' src={scndpost} alt='Post Image'></img>

    </div>
    </>
  )
}

export default Main_header;