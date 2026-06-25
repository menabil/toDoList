import { useState } from "react";
// Custom hook – সব task logic এখানে
import { useTasks } from "./hooks/useTasks";

// Components
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";
import FilterBar from "./components/FilterBar";
import EmptyState from "./components/EmptyState";
import ProgressBar from "./components/ProgressBar";

/**
 * App – Root component
 *
 * এটা "smart" component: state এবং logic ধরে রাখে।
 * UI components গুলো "dumb" (শুধু props নেয় এবং render করে)।
 *
 * Layout:
 * ┌──────────────────────────────┐
 * │ Header (title + subtitle)    │
 * │ TaskInput (text + add btn)   │
 * │ ProgressBar                  │
 * │ FilterBar (All/Active/Done)  │
 * │ TaskList (TaskItem × N)      │
 * │ Footer (count summary)       │
 * └──────────────────────────────┘
 */
export default function App() {
  // ── Task state & operations (custom hook থেকে) ───────────────────────────
  const { tasks, addTask, toggleTaskComplete, deleteTask, clearCompletedTasks } =
    useTasks();

  // ── Filter state ──────────────────────────────────────────────────────────
  // "all" | "active" | "completed"
  const [activeFilter, setActiveFilter] = useState("all");

  // ── Derived counts ────────────────────────────────────────────────────────
  const totalCount = tasks.length;
  const completedCount = tasks.filter((t) => t.completed).length;
  const activeCount = totalCount - completedCount;

  // ── Filtered task list (filter অনুযায়ী কোন tasks দেখাবে) ─────────────────
  const visibleTasks = tasks.filter((task) => {
    if (activeFilter === "active") return !task.completed;
    if (activeFilter === "completed") return task.completed;
    return true; // "all"
  });

  return (
    // Page centering wrapper
    <div className="flex items-center justify-center min-h-screen p-4 app-page-wrapper bg-app-bg sm:p-6">

      {/* Main card */}
      <div className="w-full max-w-lg app-content-wrapper">
        <div
          className="p-6 border shadow-2xl todo-card bg-card-bg border-border-subtle rounded-2xl shadow-black/60 sm:p-8"
        >
          {/* ── Header ── */}
          <header className="mb-6 text-center todo-header sm:mb-8">
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl text-text-primary">
              My Tasks
            </h1>

            {/* Task remaining subtitle – task থাকলে দেখায় */}
            {totalCount > 0 && (
              <p className="mt-1 text-xs todo-subtitle sm:text-sm text-text-muted">
                {activeCount === 0
                  ? "All tasks completed!"
                  : `${activeCount} task${activeCount !== 1 ? "s" : ""} remaining`}
              </p>
            )}
          </header>

          {/* ── Task Input ── */}
          <div className="mb-5 sm:mb-6">
            <TaskInput onAdd={addTask} />
          </div>

          {/* ── Progress Bar (task থাকলে দেখায়) ── */}
          <ProgressBar total={totalCount} completed={completedCount} />

          {/* ── Filter Bar (task থাকলে দেখায়) ── */}
          {totalCount > 0 && (
            <div className="mb-4 sm:mb-5">
              <FilterBar
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
                counts={{ all: totalCount, active: activeCount, completed: completedCount }}
                onClearCompleted={clearCompletedTasks}
              />
            </div>
          )}

          {/* ── Task List ── */}
          <ul className="task-list" aria-label="Task list">
            {visibleTasks.length > 0 ? (
              visibleTasks.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  onToggleComplete={toggleTaskComplete}
                  onDelete={deleteTask}
                />
              ))
            ) : (
              <EmptyState activeFilter={activeFilter} />
            )}
          </ul>

          {/* ── Footer summary ── */}
          {totalCount > 0 && (
            <footer className="pt-4 mt-5 border-t todo-footer border-border-subtle">
              <p className="text-xs text-center text-text-completed">
                {completedCount} of {totalCount} task{totalCount !== 1 ? "s" : ""} completed
              </p>
            </footer>
          )}
        </div>

        {/* Keyboard hint */}
        <p className="mt-4 text-xs text-center keyboard-hint text-text-completed">
          Press{" "}
          <kbd className="px-1.5 py-0.5 bg-surface border border-border-subtle rounded text-text-muted font-mono text-xs">
            Enter
          </kbd>{" "}
          to quickly add a task
        </p>
      </div>
    </div>
  );
}
