import { Check, Clock3, AlertTriangle, PackageSearch } from "lucide-react";
import { STEP_ORDER, STEP_LABELS } from "../data/mockOrders";

export default function DeliveryTimeline({ order }) {
  if (!order.trackingAvailable) {
    return (
      <div className="rounded-2xl bg-white border border-[#E4E1DA] p-5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#F6F5F2] flex items-center justify-center shrink-0">
            <PackageSearch className="w-4.5 h-4.5 text-[#6B675F]" size={18} />
          </div>
          <div>
            <p className="text-[13.5px] font-medium text-[#1C1A17]">
              Tracking isn't available yet
            </p>
            <p className="text-[12.5px] text-[#6B675F] mt-0.5">
              We'll notify you the moment your order ships and tracking begins.
            </p>
          </div>
        </div>
        {/* Keep the sequence visible so the screen still feels alive, not broken. */}
        <div className="mt-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#2E6F86] animate-pulse" />
          <span className="text-[12px] text-[#2E6F86] font-medium">
            Order confirmed · preparing for shipment
          </span>
        </div>
      </div>
    );
  }

  const currentIndex = STEP_ORDER.indexOf(order.status);
  const flagFinalStep = order.deliveredButMissing;

  return (
    <div className="rounded-2xl bg-white border border-[#E4E1DA] p-5">
      <div className="flex items-start">
        {STEP_ORDER.map((step, i) => {
          const isCurrent = i === currentIndex;
          const isLast = i === STEP_ORDER.length - 1;
          const isFlagged = flagFinalStep && isLast && isCurrent;

          let circleClasses = "bg-white border-2 border-[#E4E1DA] text-[#B0ABA0]";
          let Icon = Clock3;

          if (isFlagged) {
            circleClasses = "bg-[#B3261E] border-2 border-[#B3261E] text-white";
            Icon = AlertTriangle;
          } else if (i <= currentIndex) {
            circleClasses = "bg-[#2E6F86] border-2 border-[#2E6F86] text-white";
            Icon = Check;
          }

          return (
            <div key={step} className="flex-1 flex flex-col items-center relative">
              {i !== 0 && (
                <div
                  className={`absolute top-4 right-1/2 w-full h-[2px] -z-0 ${
                    i <= currentIndex ? "bg-[#2E6F86]" : "bg-[#E4E1DA]"
                  }`}
                />
              )}
              <div
                className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center ${circleClasses}`}
              >
                <Icon size={15} strokeWidth={2.5} />
              </div>
              <span
                className={`mt-2 text-[10.5px] leading-tight text-center px-0.5 ${
                  isCurrent || isFlagged ? "font-semibold text-[#1C1A17]" : "text-[#8A867C]"
                }`}
              >
                {STEP_LABELS[step]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
