// Mock/static order data used to drive every state of the Order Tracking screen.
// In a real app this would come from an API keyed by order ID.

export const STEP_ORDER = ["processing", "shipped", "outForDelivery", "delivered"];

export const STEP_LABELS = {
  processing: "Processing",
  shipped: "Shipped",
  outForDelivery: "Out for delivery",
  delivered: "Delivered",
};

const baseItems = [
  {
    id: "item-1",
    name: "Noise-Cancelling Headphones",
    variant: "Charcoal",
    qty: 1,
    price: 129.0,
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=200&h=200&fit=crop",
  },
  {
    id: "item-2",
    name: "USB-C Charging Cable (2m)",
    variant: "White",
    qty: 2,
    price: 12.5,
    image:
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=200&h=200&fit=crop",
  },
];

const baseOrder = {
  orderId: "ORD-48213",
  orderDate: "Sep 18, 2026",
  items: baseItems,
  subtotal: 154.0,
  shipping: 0,
  total: 154.0,
  shippingAddress: "42 Lake View Road, Dhaka 1212",
  paymentMethod: "Visa •••• 4482",
  carrier: "Swift Logistics",
  trackingNumber: "SL9284710BD",
};

// 1. Happy path — order is out for delivery, on schedule.
export const onTrackOrder = {
  ...baseOrder,
  status: "outForDelivery",
  trackingAvailable: true,
  isDelayed: false,
  deliveredButMissing: false,
  estimatedDelivery: "Today, by 8:00 PM",
};

// 2. Delayed order — estimate has passed.
export const delayedOrder = {
  ...baseOrder,
  status: "shipped",
  trackingAvailable: true,
  isDelayed: true,
  deliveredButMissing: false,
  previousEstimate: "Sep 21, 2026",
  estimatedDelivery: "New estimate: Sep 24, 2026",
  delayReason:
    "Your package is taking longer than expected to clear the regional hub.",
};

// 3. Delivered but not received.
export const deliveredNotReceivedOrder = {
  ...baseOrder,
  status: "delivered",
  trackingAvailable: true,
  isDelayed: false,
  deliveredButMissing: true,
  deliveredAt: "Sep 20, 2026, 3:42 PM",
  deliveryNote: "Left at front door",
};

// 4. Tracking not available yet.
export const trackingUnavailableOrder = {
  ...baseOrder,
  status: "processing",
  trackingAvailable: false,
  isDelayed: false,
  deliveredButMissing: false,
  estimatedDelivery: "Sep 25–27, 2026",
};

export const SCENARIOS = {
  onTrack: { label: "On track", order: onTrackOrder },
  delayed: { label: "Delayed", order: delayedOrder },
  deliveredMissing: { label: "Delivered, not received", order: deliveredNotReceivedOrder },
  noTracking: { label: "Tracking not available", order: trackingUnavailableOrder },
  loading: { label: "Loading", order: null },
  error: { label: "Error", order: null },
};
