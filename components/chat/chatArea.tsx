import MessageBubble from "./messageBubble";

const ChatArea = () => {
  return (
    <section className="flex-1 overflow-y-auto px-6 py-6 space-y-5 bg-[#f8fafc]">
      <MessageBubble
        message="Hello bro, kaisa ho?"
        time="2:40 PM"
      />

      <MessageBubble
        message="Main theek hoon bhai, tum batao?"
        time="2:41 PM"
        isSender
      />

      <MessageBubble
        message="Project kaisa chal raha hai?"
        time="2:42 PM"
      />

      <MessageBubble
        message="Perfect Chal Raha hai "
        time="2:43 PM"
        isSender
      />
    </section>
  );
};

export default ChatArea;