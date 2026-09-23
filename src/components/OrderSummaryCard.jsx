import { ChevronRight } from "lucide-react";

export default function OrderSummaryCard({ order, onViewDetails }) {
  const visibleItems = order.items.slice(0, 2);
  const extraCount = order.items.length - visibleItems.length;

  return (
    <button
      onClick={onViewDetails}
      className="w-full text-left rounded-2xl bg-white border border-[#E4E1DA] p-4 active:bg-[#FAF9F7] transition-colors"
      aria-label="View order details"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[13px] font-semibold text-[#1C1A17]">Order {order.orderId}</p>
          <p className="text-[12px] text-[#8A867C] mt-0.5">Placed {order.orderDate}</p>
        </div>
        <ChevronRight className="w-4.5 h-4.5 text-[#B0ABA0]" size={18} />
      </div>

      <div className="mt-3 flex flex-col gap-3">
        {visibleItems.map((item) => (
          <div key={item.id} className="flex items-center gap-3">
            <img
              src={item.image}
              alt={item.name}
              className="w-11 h-11 rounded-lg object-cover border border-[#E4E1DA] shrink-0"
            />
            <div className="min-w-0 flex-1">
              <p className="text-[13px] text-[#1C1A17] truncate">{item.name}</p>
              <p className="text-[11.5px] text-[#8A867C]">
                {item.variant} · Qty {item.qty}
              </p>
            </div>
            <p className="text-[13px] font-medium text-[#1C1A17] shrink-0">
              ${(item.price * item.qty).toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      {extraCount > 0 && (
        <p className="mt-2 text-[12px] text-[#6B675F]">+{extraCount} more item</p>
      )}

      <div className="mt-3 pt-3 border-t border-[#E4E1DA] flex items-center justify-between">
        <span className="text-[12.5px] text-[#6B675F]">Total</span>
        <span className="text-[13.5px] font-semibold text-[#1C1A17]">
          ${order.total.toFixed(2)}
        </span>
      </div>
    </button>
  );
}
