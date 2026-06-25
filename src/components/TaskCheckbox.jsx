import { IconCheck } from "./icons";

/**
 * TaskCheckbox
 *
 * একটা circular checkbox যা task complete/incomplete toggle করে।
 * - Incomplete: dark border, hover এ blue tint
 * - Complete:   সবুজ background + সাদা checkmark
 *
 * @param {{ isCompleted: boolean, onToggle: () => void }} props
 */
export default function TaskCheckbox({ isCompleted, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      // Accessibility: screen reader এর জন্য meaningful label
      aria-label={isCompleted ? "Mark as incomplete" : "Mark as complete"}
      aria-pressed={isCompleted}
      className={`
        task-checkbox
        flex-shrink-0
        w-5 h-5 sm:w-6 sm:h-6
        rounded-full border-2
        flex items-center justify-center
        transition-all duration-200
        focus:outline-none
        focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-surface
        ${isCompleted
          // Complete অবস্থায় সবুজ
          ? "bg-accent-green border-accent-green"
          // Incomplete অবস্থায় subtle border, hover এ নীল
          : "bg-transparent border-border-subtle hover:border-accent-blue"
        }
      `}
    >
      {/* Checkmark – CSS animation দিয়ে pop in/out হয় */}
      <span className={`checkmark-icon ${isCompleted ? "is-visible" : ""}`}>
        <IconCheck />
      </span>
    </button>
  );
}
