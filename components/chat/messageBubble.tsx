import type {MessageBubbleProps} from '@/types/chat'


const MessageBubble = ({
  message,
  isSender,
  time,
}: MessageBubbleProps) => {
  return (
    <div
      className={`w-full flex ${ isSender ? "justify-end" : "justify-start" }`}>
      <div
        className={`max-w-[70%] rounded-2xl px-4 py-3 ${
          isSender
            ? "bg-primary text-white rounded-br-sm"
            : "bg-muted rounded-bl-sm"
        }`}
      >
        <p className="text-sm font-medium">{message}</p>

        <p className="text-[11px] mt-2 opacity-70 text-right">
          {time}
        </p>
      </div>
    </div>
  );
};

export default MessageBubble;