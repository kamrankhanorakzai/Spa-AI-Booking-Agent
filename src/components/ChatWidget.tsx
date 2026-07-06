import { MessageCircle } from "lucide-react";

/**
 * Floating chat widget button — placeholder.
 *
 * Placeholder onClick handler. This button will be wired up to an external
 * n8n RAG chatbot for FAQ support in a later integration step. Do not add
 * business logic here — replace the onClick body with the chatbot trigger
 * (e.g. open widget, POST to n8n webhook, etc.) when connecting.
 */
export function ChatWidget() {
  const handleClick = () => {
    // TODO: connect to n8n RAG chatbot webhook for FAQ support.
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Ask us anything"
      className="group fixed right-5 bottom-5 z-50 flex items-center gap-3 rounded-full bg-jade-deep px-5 py-4 text-ivory shadow-luxe transition-all duration-500 hover:bg-gold hover:text-jade-deep sm:right-8 sm:bottom-8"
    >
      <span className="grid h-6 w-6 place-items-center">
        <MessageCircle size={20} />
      </span>
      <span className="text-[0.72rem] uppercase tracking-[0.22em]">Ask us anything</span>
      <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-gold ring-2 ring-ivory shimmer" />
    </button>
  );
}
