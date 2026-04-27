"use client";
import { MessageCircle, Search } from "lucide-react";
import userAvatar from "@/public/gamer.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getAllUsers } from "@/lib/helper/getAlluser";
import Link from "next/link";
import { useAuthStore } from "@/store/useAuthStore";


export default function SideBar() {
  const [users, setUsers] = useState<any[]>([]);
  const pathname = usePathname()
  const authRoutes = ['/signup','/login','/forgotPassword','/resetPassword']
  const hiddenRoute = authRoutes.includes(pathname)
  const {currentUserId, getCurrentUser, currentUserName} = useAuthStore()


  useEffect(() => {
    getCurrentUser()
  },[])


useEffect(() => {
  if (!currentUserId) return;

  const fetchUsers = async () => {
    const userData = await getAllUsers(currentUserId);
    setUsers(userData);
  };
  fetchUsers();
}, [currentUserId]);





  return (
    <div className={` ${hiddenRoute ? 'hidden' : 'block'} flex w-80 flex-col border-r bg-white shadow-sm  `}>
      <div className="flex items-center px-6 py-5 border-b">
        <MessageCircle className="w-8 h-8 text-primary" />
        <h2 className="font-quicksand text-2xl px-2 font-bold text-slate-800">
          Message Bird
        </h2>
      </div>

      <div>
        <p  className="text-primary font-bold  text-center text-2xl  my-2">Hello! {currentUserName}</p>
      </div>

      <div className="px-4 py-4">
        <div className="h-12 rounded-2xl border bg-slate-50 flex items-center px-4">
          <input
            type="text"
            placeholder="Search chats..."
            className="flex-1 bg-transparent outline-none text-sm"
          />
          <Search className="w-5 h-5 text-slate-400" />
        </div>
      </div>

      <nav className="flex-1 px-3 pb-4 overflow-y-auto">
        {users?.map((user: any) => (

          <Link href={`/chat/${user.id}`}
            key={user.id}
            className="flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-50 cursor-pointer transition-all duration-200"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden  border flex items-center justify-center ">
                <Image
                src={ user?.avatar_url ? user.profilePic : userAvatar}
                alt="User"
                width={48}
                height={48}
              /> 
            </div>

            <div className="flex-1">
              <p className="font-semibold text-slate-800 font-quicksand">
                {user.full_name}
              </p>
              <p className="text-sm text-slate-500 truncate">
                hello kaise ho
              </p>
            </div>
            </Link>
        ))}
      </nav>
    </div>
  );
}