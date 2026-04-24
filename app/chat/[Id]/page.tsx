'use client'
import ChatArea from '@/components/chat/chatArea'
import ChatHeader from '@/components/chat/chatHeader'
import { useParams } from 'next/navigation'



const Chats = () => {
    const params = useParams()

  return (
    <div  className='p-2'>
       <ChatHeader />
       <ChatArea />
    </div>
  )
}

export default Chats
