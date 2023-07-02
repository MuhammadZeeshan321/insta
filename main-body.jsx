import React from 'react'
import post from '../../assets/main/post.jpg';
import scndpost from '../../assets/main/post-2.jpg';


const Main_body = () => {
  return (
    <>

      {/* 1st post start */}
      <div className='pt-4'>
        <div className='flex px-24'>
          <img className='w-10 h-10 rounded-full' src={post} alt='Post Image'></img>
          <p className='py-2 px-2 text-sm'>hassanabid991 <span style={{ color: 'gray' }}>.8m</span></p>
        </div>

        <div className='flex justify-center items-center py-2'>
          <img className='w-3/4' src={post} alt='Post Image'></img>
        </div>
      </div>

      {/* 1st post end */}


      {/* 2nd post start */}
      <div className='py-6'>
        <div className='flex px-24'>
          <img className='w-10 h-10 rounded-full' src={scndpost} alt='Post Image'></img>
          <p className='py-2 px-2 text-sm'>hassanabid991 <span style={{ color: 'gray' }}>.8m</span></p>
        </div>

        <div className='flex justify-center items-center py-2'>
          <img className='w-3/4' src={scndpost} alt='Post Image'></img>
        </div>
      </div>

      {/* 2nd post end */}
    </>
  )
}

export default Main_body;