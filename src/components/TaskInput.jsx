import { useState, useRef, useEffect } from "react";
import { IconPlus } from "./icons";

/**
 * TaskInput
 *
 * Task add করার জন্য input field + Add button।
 *
 * Features:
 * - Enter key দিয়ে submit করা যায়
 * - খালি submit করলে input shake করে (error feedback)
 * - Mount হলে auto-focus হয়
 * - Max 200 character limit
 *
 * @param {{ onAdd: (text: string) => boolean }} props
 *   onAdd: task text নিয়ে true (সফল) বা false (validation fail) return করে
 */
export default function TaskInput({ onAdd }) {
  // Input field এর current value
  const [inputValue, setInputValue] = useState("");

  // Error state: true হলে shake animation চলে
  const [hasError, setHasError] = useState(false);

  // Input element এ direct access দরকার (focus control এর জন্য)
  const inputRef = useRef(null);

  // Page load হলে input এ cursor চলে আসুক
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // ── Submit handler ─────────────────────────────────────────────────────────
  function handleSubmit() {
    const success = onAdd(inputValue);

    if (success) {
      // Task যোগ হলে input clear করো এবং focus রাখো
      setInputValue("");
      inputRef.current?.focus();
    } else {
      // Validation fail হলে shake দেখাও
      setHasError(true);
      inputRef.current?.focus();
      // 400ms পর animation class সরিয়ে দাও (re-trigger এর জন্য)
      setTimeout(() => setHasError(false), 400);
    }
  }

  // Enter key press handle করো
  function handleKeyDown(e) {
    if (e.key === "Enter") handleSubmit();
  }

  return (
    <div className="task-input-section flex gap-2 sm:gap-3">
      {/* Text input */}
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="What needs to be done?"
        maxLength={200}
        aria-label="New task input"
        className={`
          task-input-field
          flex-1 bg-surface text-text-primary
          placeholder-text-muted
          border rounded-xl px-4 py-3
          text-sm sm:text-base
          outline-none transition-colors duration-150
          focus:border-accent-blue
          ${hasError
            // Error হলে লাল border + shake animation
            ? "border-accent-red input-shake"
            : "border-border-subtle"
          }
        `}
      />

      {/* Add button */}
      <button
        type="button"
        onClick={handleSubmit}
        aria-label="Add task"
        className="
          add-task-btn
          flex items-center gap-2
          bg-accent-blue hover:bg-accent-blue-hover
          active:scale-95
          text-white font-semibold
          px-4 sm:px-6 py-3
          rounded-xl
          text-sm sm:text-base whitespace-nowrap
          transition-all duration-150
          focus:outline-none focus:ring-2 focus:ring-accent-blue
          focus:ring-offset-2 focus:ring-offset-card-bg
        "
      >
        {/* Mobile এ শুধু + icon, desktop এ "Add" text */}
        <IconPlus className="w-4 h-4 sm:hidden" />
        <span className="hidden sm:inline">Add Task</span>
        <span className="sm:hidden sr-only">Add</span>
      </button>
    </div>
  );
}
