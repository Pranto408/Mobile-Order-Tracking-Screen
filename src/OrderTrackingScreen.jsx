import { useState } from "react";
import { ChevronLeft, MoreHorizontal } from "lucide-react";
import StatusHero from "./components/StatusHero";
import DeliveryTimeline from "./components/DeliveryTimeline";
import OrderSummaryCard from "./components/OrderSummaryCard";
import ActionBar from "./components/ActionBar";
import SupportSheet from "./components/SupportSheet";
import ReportIssueModal from "./components/ReportIssueModal";
import OrderDetailsDrawer from "./components/OrderDetailsDrawer";
import { LoadingSkeleton, ErrorState } from "./components/StatusFallbacks";

export default function OrderTrackingScreen({ order, isLoading, isError, onRetry }) {
  const [modal, setModal] = useState(null); // "support" | "report" | "details" | null

  return (
    <div className="min-h-screen bg-[#F6F5F2] flex justify-center">
      <div className="w-full max-w-[430px] min-h-screen bg-[#F6F5F2] flex flex-col">
        <header className="flex items-center justify-between px-4 h-14 shrink-0">
          <button aria-label="Go back" className="w-9 h-9 flex items-center justify-center rounded-full active:bg-black/5">
            <ChevronLeft size={20} className="text-[#1C1A17]" />
          </button>
          <h1 className="font-heading text-[15px] font-semibold text-[#1C1A17]">
            Track order
          </h1>
          <button aria-label="More options" className="w-9 h-9 flex items-center justify-center rounded-full active:bg-black/5">
            <MoreHorizontal size={20} className="text-[#1C1A17]" />
          </button>
        </header>

        <main className="flex-1 px-4 pb-8">
          {isLoading && <LoadingSkeleton />}
          {isError && !isLoading && <ErrorState onRetry={onRetry} />}

          {!isLoading && !isError && order && (
            <div className="flex flex-col gap-4">
              <StatusHero order={order} />
              <DeliveryTimeline order={order} />
              <OrderSummaryCard order={order} onViewDetails={() => setModal("details")} />
              <ActionBar
                order={order}
                onContactSupport={() => setModal("support")}
                onReportIssue={() => setModal("report")}
              />
            </div>
          )}
        </main>

        {modal === "support" && order && (
          <SupportSheet order={order} onClose={() => setModal(null)} />
        )}
        {modal === "report" && order && (
          <ReportIssueModal order={order} onClose={() => setModal(null)} />
        )}
        {modal === "details" && order && (
          <OrderDetailsDrawer order={order} onClose={() => setModal(null)} />
        )}
      </div>
    </div>
  );
}
