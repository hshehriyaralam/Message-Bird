"use client";
import Image from "next/image";
import userAvatar from "@/public/gamer.png";


const ChatHeader = ({Name} : {Name: string}) => {
  return (
    <section className="w-full h-20 border-b bg-white/90 backdrop-blur-md shadow-sm">
      <div className="h-full px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md">
              <Image
                src={userAvatar}
                alt="User Profile"
                width={56}
                height={56}
                className="object-cover"
              />
            </div>

            <span className="absolute bottom-1 right-0 w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-white" />
          </div>
          <div>
            <p className="text-lg font-semibold font-quicksand text-slate-800">
              {Name}
            </p>
            <p className="text-sm text-green-600 font-medium">
              Active now
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatHeader;