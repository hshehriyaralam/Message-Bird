import {
  SendHorizontal,
  Paperclip,
  ImageIcon,
  Mic,
} from "lucide-react";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form"
import { useChatStore } from "@/store/useChatStore";
import { useAuthStore } from "@/store/useAuthStore";
import { sendMessage } from "@/lib/helper/sendMessage";

const MessageInput = () => {
    const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const {conversationId} = useChatStore()
  const {currentUserId,} = useAuthStore()
  


  const onSubmit = async (data: any) => {
  if (!conversationId || !currentUserId) return;
  const message = data?.message;
  await sendMessage(
    conversationId,
    currentUserId,
    message
  );
  reset();
}


  return (
    <section className="w-full bg-white border-t p-4">
      <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-center gap-3 rounded-2xl border
       border-slate-200 bg-white px-4 py-3 shadow-sm">


        <input
        {...register("message", { required: true })}
          type="text"
          autoComplete="off"
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

        <Button
        type="submit"
        className="h-12 w-12 rounded-2xl shadow-md  cursor-pointer">
          <SendHorizontal  className="text-gray-200" size={24} />
        </Button>
      </form>
    </section>
  );
};

export default MessageInput;


