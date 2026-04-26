import {
  SendHorizontal,
  Paperclip,
  ImageIcon,
  Mic,
} from "lucide-react";
import { Button } from "../ui/button";

const MessageInput = () => {
  return (
    <section className="w-full bg-white border-t p-4">
      <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">


        <input
          type="text"
          placeholder="Write your message..."
          className="flex-1 h-14 bg-transparent outline-none text-md font-medium text-slate-700 placeholder:text-slate-400"
        />

        <label>
          <input
            type="file"
            accept="image/*,video/*"
            hidden
          />
          <Button
            variant="ghost"
            size="icon"
            className="rounded-xl cursor-pointer hover:bg-slate-100"
            asChild
          >
            <span>
              <ImageIcon size={24} />
            </span>
          </Button>
        </label>

        <label>
          <input
            type="file"
            hidden
          />
          <Button
            variant="ghost"
            size="icon"
            className="rounded-xl cursor-pointer hover:bg-slate-100"
            asChild
          >
            <span>
              <Paperclip size={24} />
            </span>
          </Button>
        </label>

        <Button
          variant="ghost"
          size="icon"
          className="rounded-xl hover:bg-slate-100"
        >
          <Mic size={24} />
        </Button>

        <Button className="h-12 w-12 rounded-2xl shadow-md">
          <SendHorizontal  className="text-gray-200" size={24} />
        </Button>
      </div>
    </section>
  );
};

export default MessageInput;