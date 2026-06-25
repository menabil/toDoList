import TaskCheckbox from "./TaskCheckbox";
import { IconTrash } from "./icons";

/**
 * TaskItem
 *
 * Task list এর প্রতিটা row।
 * Layout: [Checkbox] [Task Text] [Delete Button]
 *
 * - Delete button: mobile এ সবসময় দেখায়, desktop এ শুধু hover এ
 * - Completed task: text strikethrough + muted color
 *
 * @param {{
 *   task: { id: string, text: string, completed: boolean },
 *   onToggleComplete: (id: string) => void,
 *   onDelete: (id: string) => void,
 * }} props
 */
export default function TaskItem({ task, onToggleComplete, onDelete }) {
  return (
    <li
      className="
        task-item task-enter-animation
        flex items-center gap-3 sm:gap-4
        bg-surface border border-border-subtle
        rounded-xl px-4 py-3 sm:px-5 sm:py-4
        mb-3 last:mb-0
        group
        transition-colors duration-150
        hover:bg-surface-hover
      "
    >
      {/* বাম দিকে: circular checkbox */}
      <TaskCheckbox
        isCompleted={task.completed}
        onToggle={() => onToggleComplete(task.id)}
      />

      {/* মাঝে: task text */}
      <span
        className={`
          task-text
          flex-1
          text-sm sm:text-base leading-snug
          break-words transition-colors duration-200
          ${task.completed
            // Complete হলে muted + strikethrough
            ? "text-text-completed line-through"
            // Normal অবস্থায় উজ্জ্বল
            : "text-text-primary"
          }
        `}
      >
        {task.text}
      </span>

      {/* ডান দিকে: delete button */}
      <button
        type="button"
        onClick={() => onDelete(task.id)}
        aria-label={`Delete task: ${task.text}`}
        className="
          task-delete-btn
          text-accent-red
          opacity-50 sm:opacity-0 sm:group-hover:opacity-60
          hover:!opacity-100
          transition-opacity duration-150
          p-1.5 rounded-lg
          focus:outline-none focus:ring-2 focus:ring-accent-red
          focus:ring-offset-1 focus:ring-offset-surface
          flex-shrink-0
        "
      >
        <IconTrash />
      </button>
    </li>
  );
}
