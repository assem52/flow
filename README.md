# FlowTrack — Responsive Layout Debugging Starter

A small React/Vite dashboard prepared for a UI debugging task. It intentionally contains a few responsive-layout defects.

## Run locally

1. Open this folder in VS Code.
2. Open the integrated terminal in the project folder.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local address printed by Vite in Firefox.

## Suggested task

Fix the dashboard layout so it remains usable at desktop, tablet, and mobile widths. Verify it in Firefox at a desktop width and at a narrow mobile width.

## Intentional defects to locate

The starter includes comments in `src/styles.css` marking the main problems:
- A fixed minimum width on the overall app shell creates horizontal overflow.
- The metric cards use fixed column widths instead of adapting to the available space.
- The sidebar and main content do not switch to a compact mobile layout because no responsive breakpoint is provided.

The comments are preparation hints for the task author. If you want a less guided recording, remove the `INTENTIONAL BUG` comments before starting the recording, while keeping the defects in place.
