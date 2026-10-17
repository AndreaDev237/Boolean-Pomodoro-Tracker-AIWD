---
name: Warm Pomodoro Rhythm
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1b1b1c'
  on-surface-variant: '#5a403f'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0ef'
  outline: '#8e706e'
  outline-variant: '#e2bebc'
  surface-tint: '#b5242f'
  primary: '#b1212d'
  on-primary: '#ffffff'
  primary-container: '#d43c42'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb3b0'
  secondary: '#006c47'
  on-secondary: '#ffffff'
  secondary-container: '#8bf5bd'
  on-secondary-container: '#00714a'
  tertiary: '#625b54'
  on-tertiary: '#ffffff'
  tertiary-container: '#7c736c'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad8'
  primary-fixed-dim: '#ffb3b0'
  on-primary-fixed: '#410006'
  on-primary-fixed-variant: '#92011a'
  secondary-fixed: '#8ef7c0'
  secondary-fixed-dim: '#71dba5'
  on-secondary-fixed: '#002112'
  on-secondary-fixed-variant: '#005234'
  tertiary-fixed: '#ece0d7'
  tertiary-fixed-dim: '#d0c5bc'
  on-tertiary-fixed: '#201b15'
  on-tertiary-fixed-variant: '#4d453f'
  background: '#fcf9f8'
  on-background: '#1b1b1c'
  surface-variant: '#e5e2e1'
typography:
  display-timer-desktop:
    fontFamily: Plus Jakarta Sans
    fontSize: 96px
    fontWeight: '700'
    lineHeight: 104px
    letterSpacing: -0.04em
  display-timer-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2.5rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system expresses a mindful, warm, and restorative approach to deep focus and time management. It avoids cold productivity tropes, harsh utilitarian metrics, and clinical countdowns. Instead, it frames work and rest cycles as organic rhythms: productive focus periods balanced with deliberate mental decompression.

The visual style blends soft minimalism with warm tactile nuances:
- **Atmospheric Warmth:** Cream canvases combined with crisp white elevated planes create a soothing visual field that reduces eye fatigue over prolonged desktop and mobile focus sessions.
- **Organic Clarity:** Tomato red serves as a vibrant, motivating pulse for active focus and primary triggers, grounded by an earthy leaf-green that honors restorative pause and completed momentum.
- **Friendly Precision:** Rounded, soft geometries remove visual tension from the interface, while structured tabular typography provides rhythmic legibility.

## Colors

The palette relies on high legibility, gentle warmth, and semantic color clarity across cycle states:

- **Primary (`#E5484D`):** Tomato Crimson. Drives primary interactions, progress indicators during active focus intervals, and urgent session actions.
- **Secondary (`#2F9E6E`):** Leaf Sage Green. Signals rest phases (short break and long break), completed session tokens, streaks, and success states.
- **Tertiary & Borders (`#F4E8DF`):** Linen Peach. Used for hairline structural divides, subtle container borders, card outlines, and inactive track indicators.
- **Neutral Primary (`#1F1F1F`):** Deep Charcoal. High-contrast typography for headlines, timer displays, active task items, and primary iconography.
- **Neutral Secondary (`#8A8A8A`):** Muted Stone. Sub-labels, inactive states, timer cycle indicators, and secondary metadata.
- **Canvas (`#FFF8F3`):** Warm Custard Cream. The foundational backdrop across all viewports.
- **Surface Elevation (`#FFFFFF`):** Pure Chalk White. Interactive cards, active sheets, modal panels, and floating controls.

## Typography

The type system exclusively uses **Plus Jakarta Sans** across all roles to ensure geometric balance, modern humanist warmth, and consistent vertical metric alignment.

- **Tabular Numerals (`font-variant-numeric: tabular-nums`):** Mandatory for all timer numbers, countdown rings, session durations, and metrics counters. This prevents horizontal jitter and bounding box shifts while seconds decrease.
- **Timer Scale:** Display scales drop from `96px` on desktop viewports to `64px` on mobile viewports to prevent line-wrapping or margin collision in narrow viewports.
- **Headlines:** Set with deliberate negative letter spacing to create optical density and poise against generous canvas whitespace.
- **Labels & Microcopy:** Slightly expanded tracking (`0.01em` to `0.04em`) ensures legibility on capsule badges, timer cycle indicators, and form field metadata.

## Layout & Spacing

The layout is grounded in a flexible, centered content model optimized for distraction-free operation:

- **Desktop (>= 1024px):** A central focus viewport bounded by an 8-column or 12-column fluid grid capped at `1120px` max width. The primary timer module commands a fixed visual center with task orchestration, ambient sounds, and session statistics flowing in adjacent or subordinate structural panels. Outer margins are `2.5rem` (`40px`), gutters are `1.5rem` (`24px`).
- **Tablet (768px – 1023px):** A cohesive single-column layout spanning `640px` max width, keeping key actions within thumbs' natural reach while maintaining spacious margins.
- **Mobile (< 768px):** Single-column stacked stack. The timer retains focal primacy above the fold. Canvas margins collapse to `1.25rem` (`20px`), gutters to `1rem` (`16px`).
- **Rhythm Principle:** Component internal paddings match the geometric scale: `space-xs` (4px) for micro-badges, `space-sm` (8px) for input icon gaps, `space-md` (16px) for item rows, `space-lg` (24px) for card body padding, and `space-xl` (40px) for separating timer controls from adjacent task groups.

## Elevation & Depth

This system avoids cold, mechanical drop shadows. Instead, it leverages warm, diffused ambient shadows paired with crisp white surfaces and delicate structural borders:

- **Ground Level (Canvas):** The `#FFF8F3` warm cream foundation has no elevation.
- **Level 1 (Subtle Inset / Well):** Inactive controls, timer circular track backdrops, and input wells sit flat with an inner or outline border of `1px solid #F4E8DF`.
- **Level 2 (Resting Cards & Panels):** Pure white (`#FFFFFF`) containers feature a delicate border (`1px solid #F4E8DF`) plus a warm ambient shadow:
  `box-shadow: 0 4px 20px -2px rgba(186, 142, 122, 0.08), 0 2px 6px -1px rgba(186, 142, 122, 0.04);`
- **Level 3 (Hover & Floating Elements):** Active task items, floating playback bars, and quick-setting popovers lift slightly higher:
  `box-shadow: 0 12px 32px -4px rgba(186, 142, 122, 0.14), 0 4px 12px -2px rgba(186, 142, 122, 0.06);`
- **Level 4 (Modal Dialogs & Break Overlays):** Centered modal overlays and milestone rewards:
  `box-shadow: 0 24px 48px -8px rgba(140, 95, 75, 0.18), 0 8px 16px -4px rgba(140, 95, 75, 0.08);`

## Shapes

The interface embraces organic curvature to foster an approachable, non-intimidating work state:

- **Base Radius (`16px`):** Used for standard inputs, list items, small modal dialogs, and segmented switch containers.
- **Container Radius (`20px` to `24px`):** Applied to primary content cards, timer dashboard housings, task sheets, and statistical panels.
- **Pill Radius (`9999px`):** Dedicated to primary action buttons (Play/Pause/Skip), mode selectors (Pomodoro, Short Break, Long Break), tag badges, and visual streak counters.
- **Circular Proportions (`1:1` aspect ratio):** Circular timer rings, icon-only utility triggers, and profile/status badges.

## Components

### Buttons
- **Primary CTA (Active Focus):** Pill-shaped, background `#E5484D`, label `#FFFFFF`, typography `label-lg`. Padding: `14px 32px`. Hover: brightness adjusted to `#D63C41` with soft lift. Active state scales down slightly (`scale(0.98)`).
- **Secondary / Break Trigger:** Pill-shaped, background `#2F9E6E`, text `#FFFFFF`. Used when starting or extending restorative break intervals.
- **Tertiary / Ghost Button:** Pill-shaped, background `transparent`, text `#1F1F1F`, border `1px solid #F4E8DF`. Hover: background `#FFFFFF`.

### Chips & Cycle Toggles
- **Mode Switcher (Segmented Pill):** A cream capsule with `4px` internal padding containing three pill tabs: *Pomodoro*, *Short Break*, and *Long Break*. Active tab sits on `#FFFFFF` with Level 2 elevation and text `#1F1F1F`; inactive tabs use text `#8A8A8A`.
- **Status Chips:** Height `28px`, pill radius, font `label-sm`. Focus session chip uses `#E5484D` with `12%` alpha background and solid `#E5484D` text. Break chips use `#2F9E6E` with `12%` alpha background.

### Cards & Focus Containers
- **Main Timer Vessel:** White `#FFFFFF` card, radius `24px`, border `1px solid #F4E8DF`, padded with `space-xl`. Contains the central SVG circular progress meter and tabular countdown text.
- **Task Item Card:** Radius `16px`, background `#FFFFFF`, border `1px solid #F4E8DF`. Padding `space-md`. Includes checkbox, task title, estimated vs. actual pomodoro badge count (e.g., `2/4`), and options menu. Completed tasks dim to `#8A8A8A` text with subtle strikethrough.

### Checkboxes & Radios
- **Checkbox:** `20px x 20px`, radius `6px`, border `1.5px solid #F4E8DF`, background `#FFFFFF`. When checked: fill `#2F9E6E` (or `#E5484D` if context demands), border `#2F9E6E`, crisp white checkmark icon. Smooth scale transition upon toggle.

### Input Fields
- **Task & Timer Inputs:** Height `48px`, background `#FFFFFF`, border `1.5px solid #F4E8DF`, radius `16px`, typography `body-md`. Placeholder color `#8A8A8A`. Focus state shifts border color to `#E5484D` (or `#2F9E6E` in break settings) with zero harsh browser outline; provides a soft `0 0 0 3px rgba(229, 72, 77, 0.12)` halo.

### Specialized Focus Components
- **Radial Timer Ring:** Dual SVG circle track. Background track stroke width `8px`, color `#F4E8DF`. Active stroke width `8px`, round line-cap (`stroke-linecap: round`), stroke transition smooth (`stroke-dashoffset 1s linear`), dynamic color based on session mode (`#E5484D` for focus, `#2F9E6E` for rest).
- **Session Dots:** Small visual indicators representing the traditional 4-cycle loop before a long break. Radius `9999px`, size `10px x 10px`. Inactive: `#F4E8DF`; Active/Completed: `#E5484D`.