# BuildLabs UI Component Library 🧱

A professional, portfolio-ready React component library built for BuildLabs Internship Task 2. This project demonstrates core frontend engineering principles including Component APIs, Component Composition, and State Management using React and Vite.

## 🚀 Live Demo
**Vercel Deployment:** https://buildlabs-components.vercel.app/

## 🛠️ Tech Stack
*   **Framework:** React 19.2.8
*   **Build Tool:** Vite
*   **Styling:** Vanilla CSS (Template Literals & Dynamic Classes)
*   **Architecture:** Declarative Component-Based UI

## 📦 Components Library

### 1. `<Button />` (The Master Brick)
A foundational, reusable button component that accepts dynamic props for styling and behavior.
*   **Props:**
    *   `children` (node): The text or elements inside the button.
    *   `variant` (string): Defines the style (e.g., `"primary"`, `"outline"`). Default: `"primary"`.
    *   `type` (string): Standard HTML button type. Default: `"button"`.
    *   `disabled` (boolean): Disables interactivity. Default: `false`.
    *   `onClick` (function): Triggered when clicked.

### 2. `<Card />` (Component Composition)
A flexible layout component demonstrating composition by integrating the `<Button />` internally. Features conditional rendering for optional image assets.
*   **Props:**
    *   `title` (string): The card's heading.
    *   `description` (string): The body text.
    *   `image` (string): Optional image URL. If omitted, the layout adapts seamlessly.
    *   `buttonText` (string): Text passed down to the child Button.
    *   `onButtonClick` (function): Handler for the child Button.

### 3. `<Modal />` (State Management)
A dismissible overlay window that relies on React's `useState` hook at the parent level to control its visibility.
*   **Props:**
    *   `isOpen` (boolean): Determines if the modal is mounted in the DOM.
    *   `title` (string): The modal header.
    *   `children` (node): The body content.
    *   `onClose` (function): Triggers the state change to unmount the modal.

### 4. `<Alert />` (Dynamic Class Injection)
A customizable banner for system messages, utilizing JavaScript template literals to dynamically inject CSS classes based on the provided type.
*   **Props:**
    *   `type` (string): Defines the semantic meaning (e.g., `"info"`, `"success"`). Default: `"info"`.
    *   `message` (string): The alert text.

## 🧠
Building this library to me was a vital transition from static HTML/CSS to Declarative Programming. The most valuable takeaway was understanding the separation of **Props** (data passed down, like DNA) and **State** (internal memory, like mood). By utilizing template literals for dynamic class injection (e.g., ``className={`btn btn-${variant}`}``), I was able to write highly modular, DRY (Don't Repeat Yourself) code. Component composition—specifically nesting the `Button` within the `Card` and `Modal`—highlighted how powerful React is for scaling enterprise-level UI systems without copying logic.

## 👨‍💻 Author
**Ibrahim Danjuma**
*   GitHub: [@Ufidtech](https://github.com/Ufidtech)
*   *Built for the BuildLabs Frontend development Intership Task2*
README.md
README.md
Loading README.md.Displaying README.md.
