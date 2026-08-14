# Interactive Scroll-Based Navigation

A modern, responsive website featuring a fixed interactive navigation menu that dynamically changes its color, background theme, active state, and visual elements based on the user's scroll position.

The project is built using HTML, CSS, and Vanilla JavaScript, with a focus on smooth interactions, responsive design, and a polished user experience.

## Features

* Fixed Navigation Bar — Remains visible while scrolling through the page.
* Dynamic Color Transition — Navigation colors smoothly transition as the user scrolls.
* Adaptive Background — The website background changes to a lighter shade of the current navigation accent color.
* Interactive Hover Effects — Navigation links respond visually when hovered.
* Active Navigation State — The currently visible section is automatically highlighted.
* Scroll Progress Indicator — A progress bar tracks the user's scroll position.
* Animated UI Elements — Includes smooth transitions, decorative patterns, glowing accents, and hover animations.
* Responsive Design — Adapts to desktop, tablet, and mobile screen sizes.
* Modern UI Components — Includes cards, feature sections, project showcase, buttons, and decorative background elements.
* No Frameworks Required — Built entirely with HTML, CSS, and JavaScript.

## Task Requirements

This project implements the following requirements:

1. Create an interactive navigation menu.
2. Keep the navigation menu fixed while scrolling.
3. Change the navigation style based on scrolling.
4. Add hover effects to navigation items.
5. Use JavaScript to detect scroll position.
6. Dynamically update colors and styles.
7. Keep the navigation visible throughout the website.
8. Provide a responsive and visually appealing interface.

## Technologies Used

* HTML5 — Page structure and semantic sections
* CSS3 — Styling, layouts, animations, responsive design, gradients, glassmorphism, and decorative patterns
* JavaScript ES6 — Scroll detection, dynamic color interpolation, active navigation, and scroll progress

## Project Structure

```text
interactive-navigation/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### index.html

Contains the website structure, including:

* Fixed navigation menu
* Home section
* About section
* Services section
* Projects section
* Contact section
* Interactive UI elements

### style.css

Handles:

* Navigation styling
* Responsive layouts
* Hover effects
* Active states
* Cards and buttons
* Background patterns
* Animations
* Transitions
* Light-themed visual design

### script.js

Controls the interactive behavior:

* Scroll position detection
* Dynamic color interpolation
* Background color updates
* Active navigation detection
* Scroll progress calculation
* Navbar shadow changes

## Dynamic Color System

One of the main features of the project is the scroll-based color system.

Instead of simply changing the page background when entering a new section, JavaScript calculates the user's overall scroll position and smoothly interpolates between multiple accent colors.

### Color Flow

```text
Blue
  ↓
Pink
  ↓
Green
  ↓
Orange
  ↓
Purple
```

At the same time, the website background changes to a lighter version of the current accent color.

For example:

```text
Accent Color        Background
────────────────────────────────
Dark Blue      →    Pale Blue
Pink           →    Pale Pink
Green          →    Pale Green
Orange         →    Pale Peach
Purple         →    Pale Lavender
```

This creates a continuous visual transition instead of abrupt changes between sections.

## How It Works

The JavaScript calculates the user's scroll percentage:

```javascript
const scrollPercentage =
    scrollTop / maxScroll;
```

This value is mapped across the predefined color stops.

The project uses color interpolation to calculate intermediate colors rather than simply switching between predefined colors.

```text
Blue → Blue/Pink → Pink
```

The resulting color is then stored in CSS variables:

```css
--accent
--background
--accent-light
--pattern
```

These variables control multiple parts of the interface simultaneously.

## Interaction Design

### Navigation Hover

When the user hovers over a navigation item:

* Text color changes
* Background becomes tinted
* Item slightly moves upward
* Smooth transition is applied

### Active Navigation

As the user scrolls:

* JavaScript identifies the current section.
* The corresponding navigation link becomes active.
* The active link receives the current accent color.

### Scroll Progress

A thin progress bar at the top of the page displays how far the user has scrolled.

## Responsive Design

The website includes responsive breakpoints for smaller screens.

On mobile devices:

* Navigation spacing is reduced.
* Large visual elements are hidden when necessary.
* Cards switch to a single-column layout.
* Content automatically adjusts to the viewport.

## How to Run

No installation or dependencies are required.

### Clone the Repository

```bash
git clone YOUR_REPOSITORY_URL
```

### Open the Project

```bash
cd interactive-navigation
```

### Run the Website

Open `index.html` in any modern web browser.

For development, the project can also be opened using VS Code with the Live Server extension.

## Browser Compatibility

The project works with modern browsers including:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari

## Learning Outcomes

Through this project, the following concepts were implemented:

* DOM manipulation
* JavaScript event listeners
* Scroll-based interactions
* CSS variables
* Color interpolation
* Fixed positioning
* Responsive layouts
* CSS transitions and animations
* Active navigation states
* Modern UI design principles

## Future Improvements

Possible improvements include:

* Mobile hamburger navigation
* Dark/light theme toggle
* More complex scroll animations
* Intersection Observer API for section detection
* Accessibility improvements
* Reduced-motion support
* Additional interactive components

## Author

**Bhumi **



