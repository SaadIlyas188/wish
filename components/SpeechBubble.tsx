interface SpeechBubbleProps {
  text: string
  emoji: string
}

export default function SpeechBubble({ text, emoji }: SpeechBubbleProps) {
  return (
    <div className="relative inline-block">
      <div className="bg-white text-black px-6 py-4 rounded-3xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] animate-bounce-slow">
        <span className="text-2xl mr-2">{emoji}</span>
        <span className="font-bold text-lg">{text}</span>
      </div>
      {/* Comic tail */}
      <div className="absolute -bottom-4 left-8 w-0 h-0 border-l-8 border-r-8 border-t-16 border-transparent border-t-black" />
      <div className="absolute -bottom-3 left-9 w-0 h-0 border-l-6 border-r-6 border-t-12 border-transparent border-t-white" />
    </div>
  )
}
