/**
 * FilterBar
 *
 * তিনটা filter tab: All / Active / Done
 * এবং "Clear done" button (completed task থাকলে দেখায়)।
 *
 * @param {{
 *   activeFilter: "all" | "active" | "completed",
 *   onFilterChange: (filter: string) => void,
 *   counts: { all: number, active: number, completed: number },
 *   onClearCompleted: () => void,
 * }} props
 */
export default function FilterBar({
  activeFilter,
  onFilterChange,
  counts,
  onClearCompleted,
}) {
  // Filter tab configuration – loop করে render করি
  const filterOptions = [
    { key: "all",       label: "All",    count: counts.all },
    { key: "active",    label: "Active", count: counts.active },
    { key: "completed", label: "Done",   count: counts.completed },
  ];

  return (
    <div className="filter-bar flex items-center gap-2 flex-wrap">
      {/* Filter tabs */}
      {filterOptions.map(({ key, label, count }) => (
        <FilterTab
          key={key}
          label={label}
          count={count}
          isActive={activeFilter === key}
          onClick={() => onFilterChange(key)}
        />
      ))}

      {/* Clear completed – শুধু completed task থাকলে দেখায় */}
      {counts.completed > 0 && (
        <button
          type="button"
          onClick={onClearCompleted}
          className="
            clear-completed-btn
            ml-auto
            text-xs sm:text-sm
            text-accent-red hover:text-red-300
            transition-colors duration-150
            px-2 py-1.5 rounded-lg
            focus:outline-none focus:ring-2 focus:ring-accent-red
            focus:ring-offset-1 focus:ring-offset-card-bg
          "
        >
          Clear done
        </button>
      )}
    </div>
  );
}

// ── FilterTab (internal component) ───────────────────────────────────────────
/**
 * একটা filter tab button।
 * Active অবস্থায় নীল background, inactive অবস্থায় dark surface।
 */
function FilterTab({ label, count, isActive, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={`
        filter-tab
        flex items-center gap-1.5
        px-3 py-1.5 sm:px-4 sm:py-2
        rounded-lg
        text-xs sm:text-sm font-medium
        transition-all duration-150
        focus:outline-none focus:ring-2 focus:ring-accent-blue
        focus:ring-offset-1 focus:ring-offset-card-bg
        ${isActive
          // Active: নীল background
          ? "bg-accent-blue text-white shadow-md shadow-accent-blue/20"
          // Inactive: dark surface
          : "bg-surface text-text-muted hover:text-text-primary hover:bg-surface-hover border border-border-subtle"
        }
      `}
    >
      {label}
      {/* Count badge */}
      <span
        className={`
          filter-tab-count
          text-xs px-1.5 py-0.5 rounded-full min-w-[20px] text-center
          ${isActive
            ? "bg-white/20 text-white"
            : "bg-border-subtle text-text-muted"
          }
        `}
      >
        {count}
      </span>
    </button>
  );
}
