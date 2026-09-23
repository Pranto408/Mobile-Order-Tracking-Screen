import { useState } from "react";
import StateSwitcher from "./components/StateSwitcher";
import OrderTrackingScreen from "./OrderTrackingScreen";
import { SCENARIOS } from "./data/mockOrders";

export default function App() {
  const [scenario, setScenario] = useState("onTrack");
  const [retryTick, setRetryTick] = useState(0);

  const isLoading = scenario === "loading";
  const isError = scenario === "error";
  const order = SCENARIOS[scenario].order;

  return (
    <div className="bg-[#EDEBE6] min-h-screen">
      <StateSwitcher active={scenario} onChange={setScenario} />
      <OrderTrackingScreen
        key={`${scenario}-${retryTick}`}
        order={order}
        isLoading={isLoading}
        isError={isError}
        onRetry={() => setRetryTick((t) => t + 1)}
      />
    </div>
  );
}
