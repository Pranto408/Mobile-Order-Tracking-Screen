import { X, MessageSquare, Phone, Mail } from "lucide-react";

const OPTIONS = [
  { icon: MessageSquare, label: "Live chat", meta: "Typically replies in 2 min" },
  { icon: Phone, label: "Call support", meta: "Available 9 AM – 9 PM" },
  { icon: Mail, label: "Email us", meta: "Reply within 24 hours" },
];

export default function SupportSheet({ order, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full max-w-[430px] bg-white rounded-t-2xl px-5 pt-4 pb-6 animate-slide-up">
        <div className="w-9 h-1 bg-[#E4E1DA] rounded-full mx-auto mb-4" />
        <div className="flex items-center justify-between">
          <h2 className="font-heading text-[16px] font-semibold text-[#1C1A17]">
            Contact support
          </h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="w-8 h-8 flex items-center justify-center rounded-full active:bg-[#F6F5F2]"
          >
            <X size={18} className="text-[#6B675F]" />
          </button>
        </div>
        <p className="text-[12.5px] text-[#6B675F] mt-1">
          Order {order.orderId} · we'll bring up the details automatically.
        </p>

        <div className="mt-4 flex flex-col gap-2">
          {OPTIONS.map(({ icon: Icon, label, meta }) => (
            <button
              key={label}
              onClick={onClose}
              className="w-full flex items-center gap-3 p-3 rounded-xl border border-[#E4E1DA] active:bg-[#FAF9F7] text-left"
            >
              <div className="w-9 h-9 rounded-full bg-[#E8F1F4] flex items-center justify-center shrink-0">
                <Icon size={16} className="text-[#2E6F86]" />
              </div>
              <div>
                <p className="text-[13.5px] font-medium text-[#1C1A17]">{label}</p>
                <p className="text-[11.5px] text-[#8A867C]">{meta}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
