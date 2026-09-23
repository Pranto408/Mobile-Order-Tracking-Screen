import { X } from "lucide-react";

export default function OrderDetailsDrawer({ order, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full max-w-[430px] max-h-[85vh] overflow-y-auto bg-white rounded-t-2xl px-5 pt-4 pb-6 animate-slide-up">
        <div className="w-9 h-1 bg-[#E4E1DA] rounded-full mx-auto mb-4" />
        <div className="flex items-center justify-between">
          <h2 className="font-heading text-[16px] font-semibold text-[#1C1A17]">
            Order details
          </h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="w-8 h-8 flex items-center justify-center rounded-full active:bg-[#F6F5F2]"
          >
            <X size={18} className="text-[#6B675F]" />
          </button>
        </div>

        <div className="mt-4">
          <div className="flex flex-col gap-3">
            {order.items.map((item) => (
              <div key={item.id} className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-lg object-cover border border-[#E4E1DA] shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <p className="text-[13.5px] text-[#1C1A17]">{item.name}</p>
                  <p className="text-[11.5px] text-[#8A867C]">
                    {item.variant} · Qty {item.qty}
                  </p>
                </div>
                <p className="text-[13.5px] font-medium text-[#1C1A17]">
                  ${(item.price * item.qty).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-[#E4E1DA] flex flex-col gap-2 text-[13px]">
            <Row label="Subtotal" value={`$${order.subtotal.toFixed(2)}`} />
            <Row label="Shipping" value={order.shipping === 0 ? "Free" : `$${order.shipping.toFixed(2)}`} />
            <Row label="Total" value={`$${order.total.toFixed(2)}`} bold />
          </div>

          <div className="mt-4 pt-4 border-t border-[#E4E1DA] flex flex-col gap-2 text-[13px]">
            <Row label="Shipping to" value={order.shippingAddress} />
            <Row label="Payment" value={order.paymentMethod} />
            <Row label="Carrier" value={order.carrier} />
            <Row label="Tracking number" value={order.trackingNumber} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value, bold }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <span className="text-[#6B675F]">{label}</span>
      <span className={`text-right ${bold ? "font-semibold text-[#1C1A17]" : "text-[#1C1A17]"}`}>
        {value}
      </span>
    </div>
  );
}
