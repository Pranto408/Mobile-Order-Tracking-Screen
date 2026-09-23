import { RefreshCw, WifiOff } from "lucide-react";

export function LoadingSkeleton() {
  return (
    <div className="flex flex-col gap-4 animate-pulse">
      <div className="rounded-2xl bg-[#EDEBE6] h-[150px]" />
      <div className="rounded-2xl bg-[#EDEBE6] h-[110px]" />
      <div className="rounded-2xl bg-[#EDEBE6] h-[160px]" />
      <div className="rounded-xl bg-[#EDEBE6] h-12" />
    </div>
  );
}

export function ErrorState({ onRetry }) {
  return (
    <div className="rounded-2xl bg-white border border-[#E4E1DA] px-5 py-10 flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-full bg-[#FBEAE9] flex items-center justify-center">
        <WifiOff size={22} className="text-[#B3261E]" />
      </div>
      <h2 className="font-heading text-[15.5px] font-semibold text-[#1C1A17] mt-3">
        Couldn't load this order
      </h2>
      <p className="text-[13px] text-[#6B675F] mt-1 max-w-[260px] leading-snug">
        Check your connection and try again.
      </p>
      <button
        onClick={onRetry}
        className="mt-5 h-11 px-5 rounded-xl bg-[#1F3A52] text-white text-[13.5px] font-medium flex items-center gap-2 active:bg-[#17293C]"
      >
        <RefreshCw size={15} />
        Retry
      </button>
    </div>
  );
}
