import React from 'react'
import account from '../../assets/main/account.jpg';


const Accounts = () => {
  return (
    <>
      <div className='sticky top-0'>

        <div className='flex h-14 pt-4 border-none'>
          <img className='hover:scale-110 transition-all duration-300 w-14 h-14 rounded-full' src={account} alt='Post Image'></img>

          <p className='py-4 px-2 text-sm font-bold'>Zeeshan321</p>
          <p className='py-4 px-2 text-sm font-bold ml-auto text-sky-400'>Switch</p>

        </div>

        <div className='flex h-6 py-10 px-1'>
          <p className='font-bold text-gray-600 text-sm'>Suggested for you</p>
          <p className='px-1 text-sm font-bold ml-auto'>see All</p>

        </div>
        <div className='flex'>
          <img className='w-10 h-10 rounded-full' src={account} alt='Post Image'></img>
          <p className='py-2 px-2 text-sm'>hassanabid991 <span style={{ color: 'gray' }}>.8m</span></p>
          <p className='px-1 text-sm font-bold ml-auto text-sky-400'>Follow</p>

        </div>

        <div className='flex py-4'>
          <img className='w-10 h-10 rounded-full' src={account} alt='Post Image'></img>
          <p className='py-2 px-2 text-sm'>hassanabid991 <span style={{ color: 'gray' }}>.8m</span></p>
          <p className='px-1 text-sm font-bold ml-auto text-sky-400'>Follow</p>
        </div>

        <div className='flex py-4'>
          <img className='w-10 h-10 rounded-full' src={account} alt='Post Image'></img>
          <p className='py-2 px-2 text-sm'>hassanabid991 <span style={{ color: 'gray' }}>.8m</span></p>
          <p className='px-1 text-sm font-bold ml-auto text-sky-400'>Follow</p>
        </div>

        <div className='flex py-4'>
          <img className='w-10 h-10 rounded-full' src={account} alt='Post Image'></img>
          <p className='py-2 px-2 text-sm'>hassanabid991 <span style={{ color: 'gray' }}>.8m</span></p>
          <p className='px-1 text-sm font-bold ml-auto text-sky-400'>Follow</p>
        </div>

        <div className='flex py-4'>
          <img className='w-10 h-10 rounded-full' src={account} alt='Post Image'></img>
          <p className='py-2 px-2 text-sm'>hassanabid991 <span style={{ color: 'gray' }}>.8m</span></p>
          <p className='px-1 text-sm font-bold ml-auto text-sky-400'>Follow</p>
        </div>

        <div className='flex py-4'>
          <img className='w-10 h-10 rounded-full' src={account} alt='Post Image'></img>
          <p className='py-2 px-2 text-sm'>hassanabid991 <span style={{ color: 'gray' }}>.8m</span></p>
          <p className='px-1 text-sm font-bold ml-auto text-sky-400'>Follow</p>
        </div>

      </div>
    </>

  )
}

export default Accounts;