import { SCENARIOS } from "../data/mockOrders";

// Preview-only control so a reviewer (or dev) can see every state without
// wiring up a backend. Not part of the shipped end-user experience.
export default function StateSwitcher({ active, onChange }) {
  return (
    <div className="w-full max-w-[430px] mx-auto px-4 pt-3">
      <p className="text-[11px] text-[#8A867C] mb-1.5">Preview controls — not part of the app UI</p>
      <div className="flex gap-1.5 overflow-x-auto pb-1 -mx-4 px-4">
        {Object.entries(SCENARIOS).map(([key, { label }]) => (
          <button
            key={key}
            onClick={() => onChange(key)}
            className={`shrink-0 px-3 h-8 rounded-full text-[12px] font-medium border transition-colors ${
              active === key
                ? "bg-[#1F3A52] text-white border-[#1F3A52]"
                : "bg-white text-[#57534A] border-[#E4E1DA]"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
