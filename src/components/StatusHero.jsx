import { Truck, PackageCheck, PackageSearch, Clock, AlertTriangle } from "lucide-react";
import { STEP_LABELS } from "../data/mockOrders";

// Tone drives color + icon. Kept separate from copy so the two can vary independently.
function getTone(order) {
  if (order.deliveredButMissing) return "danger";
  if (order.isDelayed) return "warning";
  if (order.status === "delivered") return "success";
  return "info";
}

const TONE_STYLES = {
  info: {
    bg: "bg-[#E8F1F4]",
    ring: "ring-[#2E6F86]/20",
    icon: "text-[#2E6F86]",
    iconBg: "bg-white",
  },
  success: {
    bg: "bg-[#E9F3EC]",
    ring: "ring-[#3F7D58]/20",
    icon: "text-[#3F7D58]",
    iconBg: "bg-white",
  },
  warning: {
    bg: "bg-[#FBF0DD]",
    ring: "ring-[#B7791F]/25",
    icon: "text-[#B7791F]",
    iconBg: "bg-white",
  },
  danger: {
    bg: "bg-[#FBEAE9]",
    ring: "ring-[#B3261E]/20",
    icon: "text-[#B3261E]",
    iconBg: "bg-white",
  },
};

function getContent(order) {
  if (order.deliveredButMissing) {
    return {
      icon: AlertTriangle,
      headline: "Marked as delivered",
      body: `Delivered ${order.deliveredAt}${
        order.deliveryNote ? ` · ${order.deliveryNote}` : ""
      }. Let us know if it hasn't turned up.`,
    };
  }
  if (order.isDelayed) {
    return {
      icon: Clock,
      headline: "Delivery is delayed",
      body: order.delayReason || "Your order is taking longer than expected to arrive.",
    };
  }
  if (!order.trackingAvailable) {
    return {
      icon: PackageSearch,
      headline: "Preparing your order",
      body: "Tracking details will show up here as soon as your order ships.",
    };
  }
  if (order.status === "delivered") {
    return {
      icon: PackageCheck,
      headline: "Delivered",
      body: "Your order has arrived. We hope you enjoy it.",
    };
  }
  return {
    icon: Truck,
    headline: STEP_LABELS[order.status],
    body:
      order.status === "outForDelivery"
        ? "Your order is on its way and should arrive today."
        : "Your order is on the move.",
  };
}

export default function StatusHero({ order }) {
  const tone = getTone(order);
  const styles = TONE_STYLES[tone];
  const { icon: Icon, headline, body } = getContent(order);

  return (
    <div className={`rounded-2xl ${styles.bg} ring-1 ${styles.ring} px-5 py-5`}>
      <div className="flex items-start gap-3.5">
        <div className={`shrink-0 w-11 h-11 rounded-full ${styles.iconBg} flex items-center justify-center shadow-sm`}>
          <Icon className={`w-5.5 h-5.5 ${styles.icon}`} strokeWidth={2} size={22} />
        </div>
        <div className="min-w-0 flex-1 pt-0.5">
          <h1 className="font-heading text-[19px] leading-tight font-semibold text-[#1C1A17]">
            {headline}
          </h1>
          <p className="mt-1 text-[13.5px] leading-snug text-[#57534A]">{body}</p>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-black/[0.06] flex items-center justify-between">
        <span className="text-[12.5px] text-[#6B675F]">
          {order.isDelayed ? "Previous estimate" : "Estimated delivery"}
        </span>
        <span
          className={`text-[13px] font-medium ${
            order.isDelayed ? "text-[#8A7150] line-through" : "text-[#1C1A17]"
          }`}
        >
          {order.isDelayed ? order.previousEstimate : order.estimatedDelivery}
        </span>
      </div>
      {order.isDelayed && (
        <div className="mt-1.5 flex items-center justify-between">
          <span className="text-[12.5px] text-[#6B675F]">New estimate</span>
          <span className="text-[13px] font-semibold text-[#B7791F]">
            {order.estimatedDelivery.replace("New estimate: ", "")}
          </span>
        </div>
      )}
    </div>
  );
}
