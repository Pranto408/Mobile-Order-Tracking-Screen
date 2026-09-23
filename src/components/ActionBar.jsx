import { MessageCircle, TriangleAlert } from "lucide-react";

export default function ActionBar({ order, onContactSupport, onReportIssue }) {
  const showReportIssue = order.deliveredButMissing || order.isDelayed;

  const primaryLabel = order.deliveredButMissing
    ? "Report missing package"
    : order.isDelayed
    ? "Contact support about this delay"
    : "Contact support";

  return (
    <div className="flex flex-col gap-2.5">
      <button
        onClick={order.deliveredButMissing ? onReportIssue : onContactSupport}
        className={`w-full h-12 rounded-xl font-medium text-[14px] flex items-center justify-center gap-2 transition-colors ${
          order.deliveredButMissing
            ? "bg-[#B3261E] text-white active:bg-[#96201A]"
            : "bg-[#1F3A52] text-white active:bg-[#17293C]"
        }`}
      >
        {order.deliveredButMissing ? (
          <TriangleAlert size={17} />
        ) : (
          <MessageCircle size={17} />
        )}
        {primaryLabel}
      </button>

      {showReportIssue && !order.deliveredButMissing && (
        <button
          onClick={onReportIssue}
          className="w-full h-12 rounded-xl font-medium text-[14px] text-[#1C1A17] border border-[#E4E1DA] bg-white active:bg-[#FAF9F7] flex items-center justify-center gap-2"
        >
          Report a delivery issue
        </button>
      )}

      {order.deliveredButMissing && (
        <button
          onClick={onContactSupport}
          className="w-full h-12 rounded-xl font-medium text-[14px] text-[#1C1A17] border border-[#E4E1DA] bg-white active:bg-[#FAF9F7] flex items-center justify-center gap-2"
        >
          <MessageCircle size={17} />
          Chat with support
        </button>
      )}
    </div>
  );
}
