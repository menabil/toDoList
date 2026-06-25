import { IconClipboard } from "./icons";

/**
 * EmptyState
 *
 * Task list খালি হলে friendly message দেখায়।
 * Active filter অনুযায়ী message আলাদা:
 * - "all"       → এখনো কোনো task নেই
 * - "active"    → সব task complete! 🎉
 * - "completed" → এখনো কিছু complete করোনি
 *
 * @param {{ activeFilter: "all" | "active" | "completed" }} props
 */
export default function EmptyState({ activeFilter }) {
  // Filter অনুযায়ী আলাদা message
  const content = {
    all: {
      title: "No tasks yet",
      hint: "Add your first task above to get started.",
    },
    active: {
      title: "All caught up!",
      hint: "No pending tasks. Great work! 🎉",
    },
    completed: {
      title: "Nothing completed yet",
      hint: "Finish a task and it will appear here.",
    },
  };

  // Unknown filter হলে default "all" message
  const { title, hint } = content[activeFilter] ?? content.all;

  return (
    <div
      className="
        empty-state
        flex flex-col items-center justify-center
        py-12 sm:py-16 text-center
      "
      role="status"
      aria-live="polite"
    >
      {/* Clipboard icon */}
      <div className="text-text-muted opacity-40 mb-4">
        <IconClipboard className="w-12 h-12" />
      </div>

      {/* Title */}
      <p className="empty-state-title text-sm sm:text-base font-medium text-text-muted">
        {title}
      </p>

      {/* Hint */}
      <p className="empty-state-hint mt-1 text-xs sm:text-sm text-text-completed">
        {hint}
      </p>
    </div>
  );
}
