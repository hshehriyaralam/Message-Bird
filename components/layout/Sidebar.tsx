import Link from "next/link";
import {MessageCircle, Search}from 'lucide-react'
import userAvatar  from '@/public/gamer.png'
import Image from "next/image";



export default function SideBar() {

const navigations = [
  {
    id : 1,
    label : "Sign Up",
    link : '/signup'
  },
    {
    id : 2,
    label : "Login",
    link : '/login'
  },
    {
    id : 3,
    label : "Forgot password ",
    link : '/forgotPassword'
  },
    {
    id : 4,
    label : "Reset Password",
    link : '/resetPassword'
  },
   {
    id : 5,
    label : "Home",
    link : '/'
  },

]

const allUsers = [
  {
    id : 1,
    name : 'Ahmad',
    profilePic : userAvatar,
    message : 'ahmad is here'
  },
    {
    id : 2,
    name : 'Zain',
    profilePic : userAvatar,
    message : 'ahmad is here'

  },
    {
    id : 3,
    name : 'Daniyal',
    profilePic : userAvatar,
    message : 'ahmad is here'
    
  },
    {
    id : 4,
    name : 'Uzair',
    profilePic : userAvatar,
    message : 'ahmad is here'

  },
    {
    id : 5,
    name : 'Umair',
    profilePic : userAvatar,
    message : 'ahmad is here'

  },
]

  return (
    <div
       className={` flex w-80 flex-col border-r  bg-white `}
    >

      <div  className="flex items-center    py-4 px-4  ">
        <MessageCircle className="w-8 h-8 text-primary"  />
       <h2 className="font-quicksand text-3xl px-1   font-semibold  text-primary tracking-wide ">
         Message Bird
        </h2>
      </div>

      <div  className="w-[90%]   h-12 rounded-xl flex items-center justify-between px-4  mx-auto p-2  border border-gray-200 ">
        <input
         type="text" 
          className="h-8 font-quicksand p-2  outline-none"
          placeholder="Search..."
         />
         <Search  className="w-5 h-5 text-gray-200" />
      </div>



      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          <div  className="mb-4">
            <div className="space-y-0.5  cursor-pointer  ">
              { allUsers?.map((user:any) => (
                  <div  key={user.id}
                  className=" rounded-xl my-4 border flex   px-4  mx-auto p-2">
                    <div  className="w-10 h-10 rounded-full border border-gray-200">
                    <Image
                    src={user.profilePic}
                    alt="User Profile "
                    width={50}
                    height={50}
                    />
                    </div>
                    <div  className="mx-2">
                      <p  className="text-gray-600 font-quicksand font-medium text-[16px] -mb-1">{user?.name}</p>
                      <p  className="font-normal text-gray-500 text-sm font-quicksand ">{user.message}</p>
                      </div>
              
                    </div>
                ))}
            </div>


            <div>

            </div>
          </div>
      </nav>
    </div>
  );
}