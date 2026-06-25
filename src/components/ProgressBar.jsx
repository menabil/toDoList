/**
 * ProgressBar
 *
 * কতটা task complete হয়েছে সেটা visually দেখায়।
 * - 0%:   লাল tint
 * - 1-99%: নীল progress
 * - 100%: সবুজ (সব done!)
 *
 * Task না থাকলে render হয় না।
 *
 * @param {{ total: number, completed: number }} props
 */
export default function ProgressBar({ total, completed }) {
  // Task নেই → progress bar দেখানোর দরকার নেই
  if (total === 0) return null;

  // Percentage calculate করো (0–100)
  const percentage = Math.round((completed / total) * 100);

  // Percentage অনুযায়ী color ঠিক করো
  const barColor =
    percentage === 100
      ? "bg-accent-green"   // সব done → সবুজ
      : "bg-accent-blue";   // চলছে → নীল

  return (
    <div className="progress-bar-section mb-5 sm:mb-6">
      {/* Label row */}
      <div className="flex justify-between items-center mb-1.5">
        <span className="progress-label text-xs text-text-muted">
          Progress
        </span>
        <span
          className={`
            progress-percentage text-xs font-semibold
            ${percentage === 100 ? "text-accent-green" : "text-text-muted"}
          `}
        >
          {percentage}%
        </span>
      </div>

      {/* Track (background) */}
      <div
        className="progress-track w-full h-1.5 bg-surface rounded-full overflow-hidden"
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${completed} of ${total} tasks completed`}
      >
        {/* Fill bar */}
        <div
          className={`
            progress-fill h-full rounded-full transition-all duration-500 ease-out
            ${barColor}
          `}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
