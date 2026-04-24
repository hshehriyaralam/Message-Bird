import Image from 'next/image'
import React from 'react'
import userAvatar  from '@/public/gamer.png'


const ChatHeader = () => {
  return (
    <section  className='w-full h-20 border-b  '>
      <div  className='p-2  flex items-center justify-start  gap-4'>
        <div className='w-16 h-16 rounded-full border  '>
            <Image
              src={userAvatar}
              alt="User Profile "
              width={64}
              height={64}
              />
        </div>

        <div  className=' '>
          <p  className='text-xl font-semibold  font-quicksand text-primary'>Danyal</p>
          <p  className='text-sm font-normal text-green-900  font-quicksand '>2:50 pm</p>
        </div>
      </div>
    </section>
  )
}

export default ChatHeader
