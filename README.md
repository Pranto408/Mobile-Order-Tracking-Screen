# Order Tracking Screen

A mobile-first (360–430px) Order Tracking screen for an e-commerce app, built with React + Tailwind CSS. Mock data drives four order states plus loading/error, switchable live via the preview control bar at the top (not part of the shipped UI).

## Setup

```bash
npm install
npm run dev
```

Open the printed local URL. Resize the browser to ~375–414px width (or open DevTools device mode) to preview at target sizes.

## File Structure

```text
src/
  data/mockOrders.js         mock data for all states (onTrack, delayed,
                              deliveredMissing, noTracking, plus loading/error)
  components/
    StatusHero.jsx            headline status + estimated delivery, color/copy
                               changes per state
    DeliveryTimeline.jsx       4-step horizontal progress stepper, with a
                               dedicated fallback layout when tracking isn't
                               available yet
    OrderSummaryCard.jsx       product summary, tap to open order details
    ActionBar.jsx              primary/secondary CTA, contextual per state
    SupportSheet.jsx           "Contact support" bottom sheet
    ReportIssueModal.jsx       "Report delivery issue" / "Report missing
                               package" form with a confirmation step
    OrderDetailsDrawer.jsx     full item list, totals, shipping + payment info
    StatusFallbacks.jsx        LoadingSkeleton and ErrorState
    StateSwitcher.jsx          dev-only scenario switcher for this demo
  OrderTrackingScreen.jsx      composes the sections above + modal state
  App.jsx                      wires the switcher to the screen
```

## How the Three Required States Are Handled

### Delayed Order

The hero changes to a warning tone and clearly communicates that the delivery is delayed. The previous estimated delivery time is shown alongside the updated estimate.

The primary action becomes:

**Contact support about this delay**

A secondary action is available for:

**Report a delivery issue**

### Delivered but Not Received

The UI acknowledges that the system marked the package as delivered while clearly communicating that the customer has reported not receiving it.

The final timeline step uses a warning indicator instead of a normal delivered checkmark.

The primary action is:

**Report missing package**

A support option is also available as a secondary action.

### Tracking Not Available Yet

Instead of displaying an empty or broken tracking section, the timeline is replaced with a calm explanatory card.

The order summary, estimated delivery window, and support access remain available so the customer still has useful information while waiting for tracking to become available.

### Loading and Error States

Loading uses skeleton placeholders while keeping the same screen structure.

The error state provides a clear retry action and reuses the same overall screen shell instead of appearing as a completely separate page.

---

# AI Prompt History

AI tools were used during the development of this assessment.

The following prompts were used to assist with UI/UX planning, implementation structure, and frontend development.

## Prompt 1 — UI/UX Planning

I’m working on a frontend assessment where I need to build a modern mobile Order Tracking screen for an e-commerce app.

The screen needs to handle three situations:

1. Delayed order
2. Delivered but not received
3. Tracking information not available yet

The main goal is to make the delivery status easy to understand at a glance, while keeping the UI clean and professional for mobile widths around 360–430px.

Before writing any code, help me think through the UI/UX structure. Please suggest what sections the screen should contain, how the three states should differ, what actions/interactions would be useful, and how I can keep the scope realistic for a 2 hour 30 minute frontend assessment.

Please focus on practical implementation decisions rather than overcomplicating the design.

---

## Prompt 2 — Task Context and Implementation Structure

I’m working on a frontend job assessment. Here is the complete task context:

TASK — ORDER TRACKING SCREEN

I need to design and implement a modern, professional mobile Order Tracking screen for an e-commerce application.

The current application only shows these statuses:

* Processing
* Shipped
* Out for Delivery
* Delivered

Users find the current status difficult to understand, so the goal is to redesign the experience so the delivery status is clear at a glance.

Requirements:

* Clear visual delivery progress/timeline
* Current order status
* Estimated delivery date/time
* Order/product summary
* Clear way to contact support
* Appropriate loading, empty, and error states where relevant
* Responsive design for approximately 360–430px mobile widths
* Clean spacing, typography, hierarchy, and visual consistency
* Meaningful interactions such as viewing order details, contacting support, or reporting a delivery issue

The UI must handle these three specific situations:

1. Delayed Order
   The estimated delivery time has passed or the order is significantly delayed. The UI should clearly communicate the delay and provide an appropriate next step.

2. Delivered but Not Received
   The system says the order was delivered, but the customer reports that they did not receive it. The UI should provide an appropriate next step or support action.

3. Tracking Not Available Yet
   The order exists, but tracking information is not available yet. The UI should not look empty or broken and should still provide useful order information.

The same product experience should adapt to all three states.

Technical requirements are flexible:

* React.js, Next.js, or another frontend framework
* CSS, Tailwind, CSS Modules, or another styling approach
* Any reasonable UI/icon library
* Backend integration is not required
* Mock/static data is acceptable

The assessment time limit is 2 hours 30 minutes.

Submission requires:

* A live deployed URL accessible without running the project locally
* A GitHub repository URL
* README with brief setup/run instructions

For now, do NOT write any code.

First, help me plan the UI/UX for this assessment. I want a practical section-by-section layout for the main mobile screen, explain how the three states should visually and functionally differ, suggest the most useful interactions, and recommend a realistic scope that I can complete within 2 hours 30 minutes.

Please prioritize a polished, professional result over unnecessary complexity.

---

## Prompt 3 — Implementation Structure

That makes sense. Now let’s turn the plan into a practical implementation structure.

I’m planning to use Next.js with React and Tailwind CSS for this assessment.

Please suggest:

* A simple project/file structure
* The main React components I should create
* How to organize the mock order data
* How to represent the three order states cleanly
* Which parts should be reusable components
* A simple way to switch between the three states for testing

Keep the architecture lightweight because I only have 2 hours and 30 minutes. I want clean, understandable code rather than over-engineering.

Please do not write the full application yet. Just give me the implementation structure and explain the purpose of each important component.

---

## Prompt 4 — Complete Implementation

I’m ready to implement the complete frontend assessment now.

Please build the full Order Tracking Screen based on the assessment requirements and the implementation structure we discussed.

Tech stack:

* Next.js
* React
* Tailwind CSS
* TypeScript if appropriate
* Use a reasonable icon library if needed
* No backend; use mock/static data

The goal is a polished, modern, professional mobile e-commerce Order Tracking experience that works well at approximately 360–430px widths.

The screen should include:

* A clear order header with order number and relevant information
* Product/order summary with product image, name, quantity, and price
* A visually clear delivery progress timeline
* Current delivery status with a helpful explanation
* Estimated delivery date/time
* Appropriate visual hierarchy and spacing
* Contact Support action
* View Order Details interaction
* Report Delivery Issue interaction where relevant

Most importantly, support these three states using the same overall product experience:

1. DELAYED ORDER

* Clearly communicate that the order is delayed
* Show the previous/expected delivery information
* Explain the situation in a user-friendly way
* Provide an appropriate next action such as contacting support or reporting an issue

2. DELIVERED BUT NOT RECEIVED

* Show that the system marked the order as delivered
* Clearly acknowledge that the customer has not received it
* Provide an appropriate next step such as reporting a missing package
* Make the support action prominent

3. TRACKING NOT AVAILABLE YET

* Do not show a blank or broken-looking tracking section
* Explain that tracking information is not available yet
* Still show useful order/product information
* Provide a reassuring message about when tracking will become available

Also include appropriate loading, empty, or error handling where it makes sense.

Interactions should feel real even though there is no backend. For example:

* State switching for testing
* Order details opening in a modal, drawer, or expandable section
* Support button showing a support/contact interaction
* Report issue opening a simple issue form/modal
* Any other small interaction that adds meaningful value

Implementation requirements:

* Keep the code clean, readable, and properly structured
* Use reusable components where appropriate
* Avoid unnecessary abstraction or over-engineering
* Use realistic mock data
* Make the layout responsive, with the main focus on mobile widths around 360–430px
* Make sure there is no horizontal overflow
* Pay attention to typography, spacing, borders, cards, icons, status indicators, and visual hierarchy
* Use accessible buttons and meaningful labels
* Avoid excessive animations or features that could waste assessment time

I have only 2 hours and 30 minutes for the assessment, so prioritize the core requirements and visual polish.

Please provide the implementation step by step, starting with the files/components I need to create or modify. Then provide the code for each file.

Do not add unnecessary features that are outside the assessment requirements.
