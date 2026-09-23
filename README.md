# Order Tracking Screen

A mobile-first (360–430px) Order Tracking screen for an e-commerce app, built with React + Tailwind CSS. Mock data drives four order states plus loading/error, switchable live via the preview control bar at the top (not part of the shipped UI).

## Setup

```bash
npm install
npm run dev
```

Open the printed local URL. Resize the browser to ~375–414px width (or open dev tools device mode) to preview at target sizes.

## File structure

```
src/
  data/mockOrders.js         mock data for all states (onTrack, delayed,
                              deliveredMissing, noTracking, plus loading/error)
  components/
    StatusHero.jsx            headline status + estimated delivery, color/copy
                               changes per state
    DeliveryTimeline.jsx      4-step horizontal progress stepper, with a
                               dedicated fallback layout when tracking isn't
                               available yet
    OrderSummaryCard.jsx      product summary, tap to open order details
    ActionBar.jsx             primary/secondary CTA, contextual per state
    SupportSheet.jsx          "Contact support" bottom sheet
    ReportIssueModal.jsx      "Report delivery issue" / "Report missing
                               package" form with a confirmation step
    OrderDetailsDrawer.jsx    full item list, totals, shipping + payment info
    StatusFallbacks.jsx       LoadingSkeleton and ErrorState
    StateSwitcher.jsx         dev-only scenario switcher for this demo
  OrderTrackingScreen.jsx     composes the sections above + modal state
  App.jsx                    wires the switcher to the screen
```

## How the three required states are handled

- **Delayed order** — hero turns to a warning tone, shows the passed estimate
  struck through next to a new estimate, and the primary action becomes
  "Contact support about this delay" (with "Report a delivery issue" as a
  secondary action).
- **Delivered but not received** — hero turns to an alert tone and
  acknowledges the delivered timestamp while surfacing the mismatch; the
  final timeline step shows a warning icon instead of a checkmark; primary
  action is "Report missing package", with chat support as a secondary
  option.
- **Tracking not available yet** — the timeline section is replaced with a
  calm explanatory card (not an empty/broken-looking one) while the order
  summary, estimated delivery window, and support access all stay fully
  populated.

Loading (skeleton) and error (retry) states reuse the same screen shell so
they don't read as a separate design.
