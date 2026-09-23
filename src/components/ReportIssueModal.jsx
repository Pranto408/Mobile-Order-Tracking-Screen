import { useState } from "react";
import { X, CheckCircle2 } from "lucide-react";

const REASONS_MISSING = [
  "Package wasn't at the location marked",
  "Someone else may have received it",
  "It hasn't arrived despite the delivered status",
];

const REASONS_DELAYED = [
  "It's been too long since the last update",
  "I need it by a specific date",
  "Something else",
];

export default function ReportIssueModal({ order, onClose }) {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const reasons = order.deliveredButMissing ? REASONS_MISSING : REASONS_DELAYED;
  const title = order.deliveredButMissing ? "Report missing package" : "Report a delivery issue";

  if (submitted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-black/40" onClick={onClose} />
        <div className="relative w-full max-w-[380px] bg-white rounded-2xl p-6 text-center">
          <div className="w-12 h-12 rounded-full bg-[#E9F3EC] flex items-center justify-center mx-auto">
            <CheckCircle2 size={24} className="text-[#3F7D58]" />
          </div>
          <h2 className="font-heading text-[16px] font-semibold text-[#1C1A17] mt-3">
            Report submitted
          </h2>
          <p className="text-[13px] text-[#6B675F] mt-1.5 leading-snug">
            We've opened an investigation for order {order.orderId}. You'll hear from support
            within 24 hours.
          </p>
          <button
            onClick={onClose}
            className="mt-5 w-full h-11 rounded-xl bg-[#1F3A52] text-white text-[14px] font-medium active:bg-[#17293C]"
          >
            Done
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full max-w-[430px] bg-white rounded-t-2xl px-5 pt-4 pb-6 animate-slide-up">
        <div className="w-9 h-1 bg-[#E4E1DA] rounded-full mx-auto mb-4" />
        <div className="flex items-center justify-between">
          <h2 className="font-heading text-[16px] font-semibold text-[#1C1A17]">{title}</h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="w-8 h-8 flex items-center justify-center rounded-full active:bg-[#F6F5F2]"
          >
            <X size={18} className="text-[#6B675F]" />
          </button>
        </div>
        <p className="text-[12.5px] text-[#6B675F] mt-1">What's going on with order {order.orderId}?</p>

        <div className="mt-4 flex flex-col gap-2">
          {reasons.map((reason) => (
            <label
              key={reason}
              className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer text-[13.5px] ${
                selected === reason
                  ? "border-[#1F3A52] bg-[#F6F5F2]"
                  : "border-[#E4E1DA]"
              }`}
            >
              <input
                type="radio"
                name="reason"
                className="accent-[#1F3A52]"
                checked={selected === reason}
                onChange={() => setSelected(reason)}
              />
              <span className="text-[#1C1A17]">{reason}</span>
            </label>
          ))}
        </div>

        <button
          disabled={!selected}
          onClick={() => setSubmitted(true)}
          className="mt-5 w-full h-12 rounded-xl text-[14px] font-medium text-white bg-[#B3261E] disabled:bg-[#E4E1DA] disabled:text-[#B0ABA0] active:bg-[#96201A]"
        >
          Submit report
        </button>
      </div>
    </div>
  );
}
